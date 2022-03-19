// ========== TextField
// import all modules
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

// import styles
import styles from './styles/styles.module.scss';

export function TextField(props) {
  const {
    placeholder,
    size,
    value,
    type,
    rounded,
    onChange,
  } = props;

  const ref = useRef();

  const focus = () => ref.current.focus();

  if (type === 'search') {
    return (
      <div className={`${styles['search-field-container']} ${styles[`search-field-container-${size}`]} ${rounded ? styles['search-field-container-rounded'] : ''}`}>
        <div className={styles['search-icon']}>
          <FaSearch className={styles.icon} onClick={focus} />
        </div>
        <input
          className={styles['search-field']}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          ref={ref}
        />
      </div>
    );
  }

  return (
    <input
      className={`${styles['text-field']} ${styles[`text-field-${size}`]} ${rounded ? styles['text-field-rounded'] : ''}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  rounded: PropTypes.bool,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  placeholder: '',
  size: 'md',
  value: '',
  type: 'text',
  rounded: false,
  onChange: () => {},
};
