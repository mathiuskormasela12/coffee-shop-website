// ========== Container
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles/styles.module.scss';

export function Container(props) {
  const { children, fluid } = props;

  return (
    <div className={`${styles.container} ${fluid ? styles['container-fluid'] : ''}`}>
      { children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
};
