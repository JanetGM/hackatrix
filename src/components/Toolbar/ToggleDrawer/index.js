import React from 'react';
import styles from './ToggleDrawer.module.css';

const toggleDrawer = ({ clicked }) => (
  <div className={styles.toggleDrawer} onClick={clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default toggleDrawer;

