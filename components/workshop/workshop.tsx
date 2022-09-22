import styles from './workshop.module.scss';
import { getId } from 'utils/id-utils';
import { IsItemTrend, IsProduct, IsProductWithKey, SanctuaryInfo } from 'types';
import { Schedule } from './schedule';
import { ScheduleHours } from './schedule-hours';
import { SelectProductTable } from 'components/select-product-table/select-product-table';
import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  Button,
  Group,
  Modal,
  Title,
  } from '@mantine/core';

enum InsertMode {
  ABOVE,
  BELOW
}

interface WorkshopProps {
  storageKeyPrefix: string;
  sanctuaryInfo: SanctuaryInfo;
  title: string;
  trendData: Map<string, IsItemTrend>;
}

export function Workshop({storageKeyPrefix, sanctuaryInfo, title, trendData}: WorkshopProps): JSX.Element {
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
    <>
      <div>
        <Title order={3}>{title}</Title>
        <ScheduleHours availableHours={availableHours} usedHours={usedHours} />
      </div>
      <Group
          position="center"
          sx={{padding: '8px 0'}}
          spacing="xs">
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
            Remove All
          </Button>
        </div>
      </Group>
      <Schedule
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
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
    </>);
}
