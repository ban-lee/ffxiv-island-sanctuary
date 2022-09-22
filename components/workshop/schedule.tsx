import {
  Center,
  CloseButton,
  Container,
  createStyles,
  Grid,
  Group,
  Text,
  ThemeIcon,
  Tooltip
  } from '@mantine/core';
import { Chip } from 'components/chip/chip';
import { IsProductWithKey, SetState } from 'types';
import { useEffect, useState } from 'react';

const useStyles = createStyles((theme) => ({
  scheduled: {
    backgroundColor: theme.colors.gray[3],
    display: 'flex',
    flexFlow: 'column nowrap',
    height: 672,
    boxShadow: `0 0 0 1px ${theme.colors.gray[5]} inset`,
    padding: 1,

    '> div:first-of-type': {
      borderTop: 0,
    },

    '> div:last-of-type': {
      borderBottom: `1px solid ${theme.colors.gray[5]}`,
    }
  },

  timeslot: {
    backgroundColor: theme.colors.yellow[0],
    borderTop: `1px solid ${theme.colors.gray[5]}`,
    padding: 8,
  },

  timeslotHeader: {
    marginBottom: 8,
  },

  timeslotBonus: {
    marginRight: 4,
  },

  help: {
    height: '100%',
    width: '100%',

    flexDirection: 'column',
  },

  noBorder: {
    borderBottom: `0 !important`,
  },
}));

interface ScheduleProps {
  selectedProducts: IsProductWithKey[];
  setSelectedProducts: SetState<IsProductWithKey[]>;
}

function calculateBonus(currentProduct: IsProductWithKey, previousProduct?: IsProductWithKey) {
  if (!previousProduct) return false;

  return previousProduct.purposeCat === currentProduct.purposeCat ||
      previousProduct.materialCat === currentProduct.materialCat;
}

export function Schedule({selectedProducts, setSelectedProducts}: ScheduleProps) {
  const { classes, cx } = useStyles();
  const [isScheduleFull, setIsScheduleFull] = useState(false);

  function onRemoveProduct(index: number) {
    setSelectedProducts((curr) => {
      curr.splice(index, 1);
      return [...curr];
    });
  }

  useEffect(() => {
    const hoursUsed = selectedProducts.reduce((prev, curr) => {
      return prev + curr.time;
    }, 0);

    setIsScheduleFull(hoursUsed === 24);
  }, [selectedProducts]);

  return (
    <div className={classes.scheduled}>

      {selectedProducts.length === 0 &&
        <Center className={cx(classes.noBorder, classes.help)}>
          <Container css={{maxWidth: 250}}>
            <Center>
              <ThemeIcon
                  color="gray"
                  size="lg"
                  radius="lg"
                  variant="filled">
                <i className="bi bi-patch-exclamation"></i>
              </ThemeIcon>
            </Center>
            <Text align="center" mb="sm">Workshop is empty</Text>
            <Text align="justify" size="sm" mb="xs">
              <b>Add <i className="bi bi-arrow-down"></i></b>: To add products starting from the start to end of the
              cycle.
            </Text>
            <Text align="justify" size="sm">
              <b>Add <i className="bi bi-arrow-up"></i></b>: To add products starting from the end to the start of the
              cycle.
            </Text>
          </Container>
        </Center>}

      {selectedProducts.map((product, index) => {
        const isLastAndFull = index === selectedProducts.length - 1 && isScheduleFull;
        const hasBonus = calculateBonus(product, selectedProducts[index - 1]);
        const height = product.time * 28;

        return (
          <div key={product.key}
              className={cx(classes.timeslot, isLastAndFull ? classes.noBorder : '')}
              css={{height}}>
            <Group className={classes.timeslotHeader}>
              <div className={classes.timeslotBonus}>
                {hasBonus &&
                  <Tooltip label="Efficiency Bonus!" withinPortal>
                    <ThemeIcon color="green.5" radius="lg">
                      <i className="bi bi-stars"></i>
                    </ThemeIcon>
                  </Tooltip>}
                {!hasBonus &&
                  <Tooltip label="No bonus" withinPortal>
                    <ThemeIcon color="gray.5" radius="lg">
                      <i className="bi bi-dash-lg"></i>
                    </ThemeIcon>
                  </Tooltip>}
              </div>
              <Group noWrap css={{flex: '1 1', padding: '0 4px'}}>
                <Tooltip label={product.item}>
                  <Text sx={{flex: '1 1'}} lineClamp={1}><b>{product.item}</b></Text>
                </Tooltip>
              </Group>
              <Tooltip label="Remove">
                <CloseButton
                    size="md"
                    aria-label={`Remove ${product.item} from schedule`}
                    iconSize={24}
                    onClick={() => onRemoveProduct(index)} />
              </Tooltip>
            </Group>
            <Grid gutter={4} sx={(theme) => ({fontSize: theme.fontSizes.xs, textAlign: 'center'})}>
              <Grid.Col sx={{'> div': {width: '100%'}}} span={6}>
                <Chip option={{value: product.purposeCat, label: product.purposeCat, color: 'blue'}} />
              </Grid.Col>
              <Grid.Col sx={{'> div': {width: '100%'}}} span={6}>
                {product.materialCat && <Chip
                    option={{value: product.materialCat, label: product.materialCat, color: 'grape'}} />}
              </Grid.Col>
              <Grid.Col span={6}><b>Time:</b> {product.time}</Grid.Col>
              <Grid.Col span={6}><b>Value:</b> {product.value}</Grid.Col>
            </Grid>
          </div>);
      })}
    </div>
  );
}
