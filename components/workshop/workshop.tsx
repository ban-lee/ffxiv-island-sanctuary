import { Button, Group, Modal, Paper, Title } from '@mantine/core';
import { getId } from 'utils/id-utils';
import { IsProduct, IsProductWithKey, SanctuaryInfo, TrendData, WorkshopData } from 'types';
import { Schedule } from './schedule';
import { ScheduleHours } from './schedule-hours';
import { SelectProductTable } from 'components/select-product-table/select-product-table';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

enum InsertMode {
  ABOVE,
  BELOW,
}

interface WorkshopMetadata {
  id: number;
  title: string;
}

interface WorkshopProps {
  metadata: WorkshopMetadata;
  selectedCycle: string;
  sanctuaryInfo: SanctuaryInfo;
  trendData: TrendData;
}

export function Workshop({
  metadata,
  selectedCycle,
  sanctuaryInfo,
  trendData,
}: WorkshopProps): JSX.Element {
  const [workshopData, setWorkshopData] =
      useLocalStorage<WorkshopData>(
        `is-workshop-${metadata.id}-${selectedCycle}`,
        {selectedProducts: []}
      );
  const [availableHours, setAvailableHours] = useState(24);
  const [usedHours, setUsedHours] = useState(0);
  const [insertMode, setInsertMode] = useState(InsertMode.BELOW);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastSelectedProduct, setLastSelectedProduct] = useState<IsProductWithKey|undefined>();

  const updateLastSelected = useCallback(() => {
    if (workshopData.selectedProducts.length === 0) {
      setLastSelectedProduct(undefined);
    } else {
      const lastProduct =
        insertMode === InsertMode.BELOW
          ? workshopData.selectedProducts[workshopData.selectedProducts.length - 1]
          : workshopData.selectedProducts[0];
      setLastSelectedProduct(lastProduct);
    }
  }, [insertMode, workshopData]);

  const showItemSelect = (mode: InsertMode) => {
    setInsertMode(() => mode);
    setIsModalOpen((curr) => !curr);
  };

  const onSelectProduct = (product: IsProduct) => {
    setWorkshopData((curr) => {
      const productWithKey: IsProductWithKey = {
        key: getId('is'),
        ...product,
      };
      const selectedProducts =
        insertMode === InsertMode.BELOW
          ? [...curr.selectedProducts, productWithKey]
          : [productWithKey, ...curr.selectedProducts];

      return {
        ...curr,
        selectedProducts,
      };
    });
  };

  const setSelectedProducts = (value: SetStateAction<IsProductWithKey[]>) => {
    const newValue = typeof value === 'function' ? value(workshopData.selectedProducts) : value;
    setWorkshopData({
      ...workshopData,
      selectedProducts: newValue,
    });
  }

  const onClearProducts = () => {
    setWorkshopData((curr) => {
      return {
        ...curr,
        selectedProducts: [],
      };
    });
  }

  useEffect(() => {
    updateLastSelected();
  }, [updateLastSelected]);

  useEffect(() => {
    const usedHours = workshopData.selectedProducts.reduce((prev, curr) => {
      return prev + curr.time;
    }, 0);

    setAvailableHours(24 - usedHours);
    setUsedHours(usedHours);
  }, [availableHours, usedHours, workshopData]);

  return (
    <Paper
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[1],
          minWidth: 300,
          maxWidth: `475px !important`,
        })}
        p={8}
        shadow="sm"
        withBorder>
      <div>
        <Title order={3}
            sx={{
              textAlign: 'center',
              padding: '4px 8px 0 8px',
            }}>
          {metadata.title}
        </Title>
        <div className="spacer2"></div>
        <ScheduleHours
            availableHours={availableHours}
            usedHours={usedHours} />
      </div>
      <Group
          position="center"
          sx={{padding: '16px 0'}}
          spacing="xs">
        <div>
          <Button
              disabled={availableHours < 4}
              onClick={() => showItemSelect(InsertMode.BELOW)}
              aria-label="Add handicrafts from start"
              rightIcon={<i className="bi bi-arrow-down"></i>}>
            Add
          </Button>
        </div>

        <div>
          <Button
              disabled={availableHours < 4}
              aria-label="Add handicrafts from end"
              onClick={() => showItemSelect(InsertMode.ABOVE)}
              rightIcon={<i className="bi bi-arrow-up"></i>}>
            Add
          </Button>
        </div>
        <div>
          <Button
              color="red"
              disabled={workshopData.selectedProducts.length === 0}
              aria-label="Remove all handicrafts from schedule"
              onClick={() => onClearProducts()}
              rightIcon={<i className="bi bi-x-lg"></i>}>
            Remove All
          </Button>
        </div>
      </Group>
      <Schedule
        selectedProducts={workshopData.selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <Modal
          centered
          size="xl"
          opened={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={<Title order={3}>Select Handicrafts</Title>}>
        <>
          <SelectProductTable
              rank={sanctuaryInfo.rank}
              onSelectProduct={onSelectProduct}
              lastSelected={lastSelectedProduct}
              trendData={trendData.data}
              availableHours={availableHours}
              usedHours={usedHours}
          />
        </>
      </Modal>
    </Paper>
  );
}
