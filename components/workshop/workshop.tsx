import Chip from 'components/chip/chip';
import ScheduleHours from './schedule-hours';
import SelectProductTable from './select-product-table';
import styles from './workshop.module.scss';
import {
  Button,
  CloseButton,
  createStyles,
  Modal,
  Title,
  Tooltip
  } from '@mantine/core';
import { getId } from 'utils/id-utils';
import { IsItemTrend, IsProduct, IsProductWithKey, SanctuaryInfo } from 'types';
import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

const useStyles = createStyles((theme) => ({
  timelot: {
    backgroundColor: theme.colors.yellow[0],
    border: `1px solid ${theme.colors.yellow[4]}`,
  },
  bonus: {
    backgroundColor: theme.colors.teal[5],
  },
  noBonus: {
    backgroundColor: theme.colors.gray[5],
  }
}));

enum InsertMode {
  ABOVE,
  BELOW
}

interface WorkshopProps {
  storageKeyPrefix: string;
  sanctuaryInfo: SanctuaryInfo;
  trendData: Map<string, IsItemTrend>;
}

function calculateBonus(currentProduct: IsProductWithKey, previousProduct?: IsProductWithKey) {
  if (!previousProduct) return false;

  return previousProduct.purposeCat === currentProduct.purposeCat ||
      previousProduct.materialCat === currentProduct.materialCat;
}

export default function Workshop({storageKeyPrefix, sanctuaryInfo, trendData}: WorkshopProps): JSX.Element {
  const { classes } = useStyles();

  const [selectedProducts, setSelectedProducts] =
      useLocalStorage<IsProductWithKey[]>(`${storageKeyPrefix}is-selected-products`, []);
  const [availableHours, setAvailableHours] = useState(24);
  const [usedHours, setUsedHours] = useState(0);
  const [insertMode, setInsertMode] = useState(InsertMode.BELOW);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastSelectedProduct, setLastSelectedProduct] = useState<IsProductWithKey|undefined>();

  const updateLastSelected = useCallback(() => {
    if (selectedProducts.length === 0) {
      setLastSelectedProduct(undefined);
    } else {
      const lastProduct = insertMode === InsertMode.BELOW ?
          selectedProducts[selectedProducts.length - 1] :
          selectedProducts[0];
      setLastSelectedProduct(lastProduct);
    }
  }, [insertMode, selectedProducts]);

  const showItemSelect = (mode: InsertMode) => {
    setInsertMode(() => mode);
    setIsModalOpen((curr) => !curr);
  };

  const onSelectProduct = (product: IsProduct) => {
    setSelectedProducts((curr) => {
      const productWithKey: IsProductWithKey = {
        key: getId('is'),
        ...product,
      };
      return insertMode === InsertMode.BELOW ? [...curr, productWithKey] : [productWithKey, ...curr];
    });
  };

  function onRemoveProduct(index: number) {
    setSelectedProducts((curr) => {
      curr.splice(index, 1);
      return [...curr];
    });
  }

  function onClearProducts() {
    setSelectedProducts([]);
  }

  useEffect(() => {
    updateLastSelected();
  }, [updateLastSelected]);

  useEffect(() => {
    const usedHours = selectedProducts.reduce((prev, curr) => {
      return prev + curr.time;
    }, 0);

    setAvailableHours(24 - usedHours);
    setUsedHours(usedHours);
  }, [availableHours, usedHours, selectedProducts]);

  return (
    <div>
      <ScheduleHours availableHours={availableHours} usedHours={usedHours} />
      <div className={styles['add-btns']}>
        <div>
          <Button
              disabled={availableHours < 4}
              onClick={() => showItemSelect(InsertMode.BELOW)}
              aria-label="Add products from start"
              rightIcon={<i className="bi bi-arrow-down"></i>}>
            Add
          </Button>
        </div>

        <div>
          <Button
              disabled={availableHours < 4}
              aria-label="Add products from end"
              onClick={() => showItemSelect(InsertMode.ABOVE)}
              rightIcon={<i className="bi bi-arrow-up"></i>}>
            Add
          </Button>
        </div>
        <div>
          <Button color="red"
              disabled={selectedProducts.length === 0}
              aria-label="Remove all products from schedule"
              onClick={() => onClearProducts()}
              rightIcon={<i className="bi bi-x-lg"></i>}>
            Clear
          </Button>
        </div>
      </div>
      <div className={styles.scheduled}>
        {selectedProducts.map((product, index) => {
          const hasBonus = calculateBonus(product, selectedProducts[index - 1]);
          const height = 100/(24/product.time);

          return (
            <div key={product.key}
                className={`${classes.timelot} ${styles['timeslot']}`}
                style={{'height': `${height}%` }}>
              <div className={styles['timeslot-header']}>
                <div
                    css={(theme) => ({color: theme.white})}
                    className={styles['timeslot-icon']}>
                  {hasBonus &&
                    <Tooltip label="Efficiency Bonus!" withinPortal>
                      <div className={classes.bonus}>
                        <i className="bi bi-stars"></i>
                      </div>
                    </Tooltip>}
                  {!hasBonus &&
                    <Tooltip label="No bonus" withinPortal>
                      <div className={classes.noBonus}>
                        <i className="bi bi-dash-lg"></i>
                      </div>
                    </Tooltip>}
                </div>
                <div className={styles['timeslot-title']}>
                  <span>{product.item}</span> ({product.time})
                </div>
                <div className={styles['timeslot-remove']}>
                  <CloseButton
                      size="lg"
                      variant="transparent"
                      aria-label={`Remove ${product.item} from schedule`}
                      onClick={() => onRemoveProduct(index)} />
                </div>
              </div>
              <div className={styles['timeslot-categories']}>
                <Chip
                    option={{value: product.purposeCat, label: product.purposeCat, color: 'blue'}} />

                {product.materialCat && <Chip
                    option={{value: product.materialCat, label: product.materialCat, color: 'grape'}} />}
              </div>
            </div>);
        })}
      </div>
      <Modal
          centered
          size="xl"
          opened={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={<Title order={3}>Select Products</Title>}>
        <>
          <div className={`${styles['table-sticky']}`}>
            <ScheduleHours availableHours={availableHours} usedHours={usedHours} />
          </div>
          <SelectProductTable
              rank={sanctuaryInfo.rank}
              onSelectProduct={onSelectProduct}
              lastSelected={lastSelectedProduct}
              trendData={trendData}
              availableHours={availableHours}
              usedHours={usedHours} />
        </>
      </Modal>
    </div>);
}
