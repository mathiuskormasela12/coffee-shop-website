// ========== Spinner
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles/styles.module.scss';

export function Spinner(props) {
  const {
    size,
    variant,
  } = props;

  return (
    <span className={`${styles.spinner} ${styles[`spinner-${variant}`]} ${styles[`spinner-${size}`]}`} />
  );
}

Spinner.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'md',
  variant: 'primary',
};
