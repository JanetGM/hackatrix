import React from 'react';
import styles from './NavBar.module.css';
import NavItem from '../NavItem';

const navBar = () => (
  <ul className={styles.NavBar}>
    <NavItem link="/" exact>TALLER</NavItem>
    <NavItem link="/proveedor">PROVEEDOR</NavItem>
    <NavItem link="/tech">TECH</NavItem>
  </ul>
);
export default navBar;