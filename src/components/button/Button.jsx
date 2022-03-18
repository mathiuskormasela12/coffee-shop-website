// ========== Button
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

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
  } = props;

  return (
    <button
      className={`${styles.btn} ${fluid ? styles['btn-fluid'] : ''} ${fullRounded ? styles['btn-full-rounded'] : ''} ${rounded ? styles['btn-rounded'] : ''} ${size ? styles[`btn-${String(size).toLowerCase()}`] : ''} ${variant ? styles[`btn-${String(variant).toLowerCase()}`] : ''}`}
      type={String(type).toLowerCase()}
    >
      { children }
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
};

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
  type: 'button',
  rounded: false,
  fullRounded: false,
  fluid: false,
};
