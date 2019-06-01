import React from 'react';
import styles from './NavBar.module.css';
import NavItem from '../NavItem';


const navBar = () => (
  <ul className={styles.NavBar}>
    <NavItem link="/" exact>Home</NavItem>
    <NavItem link="/ChooseDistrict">Distrito</NavItem>
  
  </ul>
);

export default navBar;
