// ========== Button
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import all components
import { Spinner } from '..';

// import styles
import styles from './styles/styles.module.scss';

export function Button(props) {
  const {
    children,
    size,
    variant,
    type,
    rounded,
    fullRounded,
    fluid,
    loading,
  } = props;

  const spinnerVariant = variant.split('-').pop();

  if (!loading) {
    return (
      <button
        className={`${styles.btn} ${fluid ? styles['btn-fluid'] : ''} ${fullRounded ? styles['btn-full-rounded'] : ''} ${rounded ? styles['btn-rounded'] : ''} ${size ? styles[`btn-${String(size).toLowerCase()}`] : ''} ${variant ? styles[`btn-${String(variant).toLowerCase()}`] : ''}`}
        type={String(type).toLowerCase()}
      >
        { children }
      </button>
    );
  }

  return (
    <button
      disabled
      className={`${styles.btn} ${fluid ? styles['btn-fluid'] : ''} ${fullRounded ? styles['btn-full-rounded'] : ''} ${rounded ? styles['btn-rounded'] : ''} ${size ? styles[`btn-${String(size).toLowerCase()}`] : ''} ${variant ? styles[`btn-${String(variant).toLowerCase()}`] : ''}`}
      type={String(type).toLowerCase()}
    >
      <Spinner variant={`btn-spinner-${spinnerVariant}`} size={`btn-spinner-${size}`} />
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  rounded: PropTypes.bool,
  fullRounded: PropTypes.bool,
  fluid: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
  type: 'button',
  rounded: false,
  fullRounded: false,
  fluid: false,
  loading: false,
};
