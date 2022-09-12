import SanctuaryForm from 'components/sanctuary-form/sanctuary-form';
import styles from './main-menu.module.scss';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalHeader
  } from 'reactstrap';
import { SanctuaryInfo, SetState } from 'types';
import { useState } from 'react';

interface MainMenuProps {
  sanctuary: SanctuaryInfo;
  setSanctuary: SetState<SanctuaryInfo>;
}

export default function MainMenu({sanctuary, setSanctuary}: MainMenuProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((curr) => !curr);
  }

  function toggleModal() {
    setIsModalOpen((curr) => !curr);
  }

  return (
    <>
      <div className={`${styles['rank']}`}>
        Rank: {sanctuary.rank}
      </div>
      <Dropdown
          menuRole="menu"
          inNavbar
          isOpen={isMenuOpen}
          toggle={toggleMenu}>
        <DropdownToggle
            className={styles['main-menu-button']}
            color="light">
          <i className="bi bi-list"></i>
        </DropdownToggle>
        <DropdownMenu className={styles['dropdown-menu']}>
          <DropdownItem onClick={toggleModal}>
            Set Sanctuary Info
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Modal isOpen={isModalOpen}
          toggle={toggleModal}
          centered>
        <ModalHeader toggle={toggleModal}>
          Sanctuary Info
        </ModalHeader>
        <ModalBody>
          <SanctuaryForm sanctuary={sanctuary} setSanctuary={setSanctuary}></SanctuaryForm>
        </ModalBody>
      </Modal>
    </>
  );
}
