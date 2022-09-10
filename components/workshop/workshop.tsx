import Chip from 'components/chip/chip';
import SelectProductTable from './select-product-table';
import styles from './workshop.module.scss';
import { getId } from 'utils/id-utils';
import { IsItemTrend, IsProduct, IsProductWithKey } from 'types';
import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  UncontrolledTooltip,
  } from 'reactstrap';

enum InsertMode {
  ABOVE,
  BELOW
}

interface WorkshopProps {
  storageKeyPrefix: string;
  trendData: Map<string, IsItemTrend>;
}

export default function Workshop({storageKeyPrefix, trendData}: WorkshopProps): JSX.Element {
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
      <div className={`${styles['hours']} row`}>
        <div className="col-6 text-center">Used</div> <div className="col-6 text-center">Available</div>
      </div>
      <div className={`${styles['hours']} ${styles['digits']} row`}>
        <div className="col-6 text-center">{usedHours}</div> <div className="col-6 text-center">{availableHours}</div>
      </div>
      <div className={styles['add-btns']}>
        <div>
          <Button color="primary"
              disabled={availableHours < 4}
              onClick={() => showItemSelect(InsertMode.BELOW)}>
            Add <i className="bi bi-arrow-down-circle-fill"></i>
          </Button>
        </div>

        <div>
          <Button color="primary"
              disabled={availableHours < 4}
              onClick={() => showItemSelect(InsertMode.ABOVE)}>
            Add <i className="bi bi-arrow-up-circle-fill"></i>
          </Button>
        </div>
        <div>
          <Button color="danger"
              disabled={selectedProducts.length === 0}
              onClick={() => onClearProducts()}>
            Clear <i className="bi bi-x-circle-fill"></i>
          </Button>
        </div>
      </div>
      <div className={styles.scheduled}>
        {selectedProducts.map((product, index) => {
          let hasBonus = false;

          if (index - 1 >= 0) {
            const previousProduct = selectedProducts[index - 1];
            if (previousProduct.purposeCat === product.purposeCat ||
                  previousProduct.materialCat === product.materialCat) {
              hasBonus = true;
            }
          }

          const height = 100/(24/product.time);

          return (
            <div key={product.key}
                className={styles['timeslot']}
                style={{'height': `${height}%` }}>
              <div className={styles['timeslot-header']}>
                <div className={styles['bonus']}>
                  {hasBonus &&
                    <div id={product.key}>
                      <i className="bi bi-stars"></i>
                      <UncontrolledTooltip target={product.key}>
                        Efficiency Bonus!
                      </UncontrolledTooltip>
                    </div>}
                </div>
                <div className={styles['timeslot-title']}>
                  <span>{product.item}</span> ({product.time}h)
                </div>
                <div>
                  <Button className={`btn-icon--med ${styles['remove-btn']}`}
                      onClick={() => onRemoveProduct(index)}>
                    <i className="bi bi-x-circle-fill"></i>
                  </Button>
                </div>
              </div>
              <div className={styles['timeslot-categories']}>
                <Chip
                    option={{value: product.purposeCat, text: product.purposeCat, color: 'light-blue'}} />

                {product.materialCat && <Chip
                    option={{value: product.materialCat, text: product.materialCat, color: 'purple'}} />}
              </div>
            </div>);
        })}
      </div>
      <Modal isOpen={isModalOpen}
          toggle={() => setIsModalOpen((curr) => !curr)}
          size="lg"
          centered>
        <ModalHeader toggle={() => setIsModalOpen((curr) => !curr)}>
          Select Product
        </ModalHeader>
        <div className={`${styles['table-sticky']}`}>
          <div className={`${styles['hours']} row`}>
            <div className="col-6 text-center">Used</div>
            <div className="col-6 text-center">Available</div>
          </div>
          <div className={`${styles['hours']} ${styles['digits']} row`}>
            <div className="col-6 text-center">{usedHours}</div>
            <div className="col-6 text-center">{availableHours}</div>
          </div>
        </div>
        <ModalBody>
          <SelectProductTable
              onSelectProduct={onSelectProduct}
              lastSelected={lastSelectedProduct}
              trendData={trendData}
              availableHours={availableHours}
              usedHours={usedHours} />
        </ModalBody>
      </Modal>
    </div>);
}
