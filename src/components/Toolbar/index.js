import React from 'react';

import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';

import ToggleDrawer from './ToggleDrawer';

const toolbar = ({ toggleDrawerClicked }) => (
  <header className={styles.Toolbar}>
  
    <ToggleDrawer clicked={toggleDrawerClicked} />
    {/* <nav className={styles.TabletOnlyPlus}>
      <NavBar />
    </nav> */}
  </header>
);

export default toolbar;

toolbar.propTypes = {
  toggleDrawerClicked: PropTypes.func.isRequired,
};
