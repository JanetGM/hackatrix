import React from 'react';

import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const backdrop = ({ clicked, show }) => (
  show ? <div className={styles.Backdrop} onClick={clicked} /> : null
);

export default backdrop;

backdrop.propTypes = {
  clicked: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
