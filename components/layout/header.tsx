import React from 'react';
import styles from './header.module.scss';
import { Navbar, NavbarBrand } from 'reactstrap';

interface HeaderProps {
  children?: React.ReactNode;
  title: string;
  homeRoute?: string;
}

export default function Header({children, title, homeRoute}: HeaderProps) {
  return (
    <header className={styles['header']}>
      <Navbar color="dark" dark>
        <NavbarBrand href={homeRoute || undefined} className="me-auto">
          {title} &nbsp;
        </NavbarBrand>

        {children}

      </Navbar>
      <div className="spacer2"></div>
    </header>
  );
}
