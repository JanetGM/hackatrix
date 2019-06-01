import React from 'react';
import styles from './NavBar.module.css';
import NavItem from '../NavItem';


const navBar = () => (
  <ul className={styles.NavBar}>
    <NavItem link="/" exact>Home</NavItem>
    <NavItem link="/ChooseDistrict">Distrito</NavItem>
    <NavItem link="/Incidents">Incidentes</NavItem>
    <NavItem link="/Map">Mapa</NavItem>
  </ul>
);

export default navBar;
