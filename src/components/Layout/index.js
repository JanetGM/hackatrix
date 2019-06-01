import React, { useState } from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Toolbar';
import SideDrawer from '../Toolbar/SideDrawer';

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideToggleDrawerHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };


  return (
    <>
      <Toolbar toggleDrawerClicked={sideToggleDrawerHandler} />
      <SideDrawer
        open={showSideDrawer}
        close={sideDrawerClosedHandler}
      />
      <main className={styles.Content}>
        {children}
      </main>
    </>
  );
};

export default Layout;

