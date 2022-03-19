// ========== Container
// import all modules
import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles/styles.module.scss';

export function Container(props) {
  const { children, fluid, relative } = props;

  return (
    <div className={`${styles.container} ${fluid ? styles['container-fluid'] : ''} ${relative ? `${styles['container-relative']}` : ''}`}>
      { children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  relative: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
  relative: false,
};
