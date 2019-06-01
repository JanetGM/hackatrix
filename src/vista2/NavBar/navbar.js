import React from 'react';
import styles from './NavBar.module.css';
import NavItem from '../NavItem/navItem';

const navBar = () => (
  <ul className={styles.NavBar}>
    <NavItem link="/Home" exact></NavItem>
    <NavItem link="/View1">View1</NavItem>
    <NavItem link="/View2">View2</NavItem>
  </ul>
);
export default navBar;