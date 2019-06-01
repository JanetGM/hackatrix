import React from 'react';

import PropTypes from 'prop-types';
import styles from './ToggleDrawer.module.css';

const toggleDrawer = ({ clicked }) => (
  <div className={styles.toggleDrawer} onClick={clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default toggleDrawer;

toggleDrawer.propTypes = {
  clicked: PropTypes.func.isRequired,
};
