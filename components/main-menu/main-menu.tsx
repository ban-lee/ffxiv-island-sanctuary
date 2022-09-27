import { Badge, Burger, Group, Menu, Title } from '@mantine/core';
import { Cycle } from './cycle';
import { openModal } from '@mantine/modals';
import { SanctuaryForm } from 'components/sanctuary/sanctuary-form';
import { SanctuaryInfo, SetState } from 'types';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';

interface MainMenuProps {
  sanctuary: SanctuaryInfo;
  setSanctuary: SetState<SanctuaryInfo>;
}

export function MainMenu({sanctuary, setSanctuary}: MainMenuProps): JSX.Element {
  const isMobile = useMediaQuery('(max-width: 400px)');
  const isSmall = useMediaQuery('(min-width: 400px) and (max-width: 620px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const label = isMenuOpen ? 'Close menu' : 'Open menu';

  function openSanctuaryInfoModal() {
    openModal({
      centered: true,
      closeButtonLabel: 'Close Sanctuary Info',
      title: (<Title order={3}>Sanctuary Info</Title>),
      children: (<SanctuaryForm sanctuary={sanctuary} setSanctuary={setSanctuary}></SanctuaryForm>),
    });
  }

  return (
    <Group noWrap>
      <Cycle />
      <Badge color="dark" size={isMobile ? 'sm' : (isSmall ? 'md' : 'lg')}>
        Rank: {sanctuary.rank}
      </Badge>
      <Menu
          shadow="md"
          position="bottom-end"
          width={250}
          opened={isMenuOpen}
          onChange={setIsMenuOpen}>
        <Menu.Target>
          <Burger
            sx={(theme) => ({
              height: isMobile ? 30 : 44,
              width: isMobile ? 30 : 44,
              '&:hover': {
                backgroundColor: theme.colors.dark,
              },
            })}
            styles={{
              burger: {
                margin: '0 auto',
              }
            }}
            color="white"
            size={isMobile ? "xs" : "sm"}
            opened={isMenuOpen}
            aria-label={label}
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
              icon={<i className="bi bi-gear"></i>}
              onClick={openSanctuaryInfoModal}>
            Set Sanctuary Info
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
