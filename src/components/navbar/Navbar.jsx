// ========== Navbar
// import all modules
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NAVBAR_ITEMS, USER_TYPE } from '../../constant';

// import all components
import { Container, Button } from '..';

// import styles
import styles from './styles/styles.module.scss';

// import assets
import logo from '../../assets/icons/coffee-shop-logo.svg';

export function Navbar(props) {
  const { active, userType } = props;
  let navLists = [];

  if (userType === USER_TYPE.USER) {
    navLists = NAVBAR_ITEMS.USER;
  } else if (userType === USER_TYPE.ADMIN) {
    navLists = NAVBAR_ITEMS.ADMIN;
  } else {
    navLists = NAVBAR_ITEMS.NOT_LOGGED_IN;
  }

  return (
    <nav className={`${styles.navbar}`}>
      <Container>
        <div className={styles['nav-flex']}>
          <figure className={styles['nav-brand']}>
            <img src={logo} className={styles['nav-brand-img']} alt="Coffee Shop" />
            <figcaption className={styles['nav-brand-text']}>
              Coffee Shop
            </figcaption>
          </figure>
          <ul className={`${styles['nav-list']}`}>
            {navLists.map((item) => (
              <li key={String(item.id)} className={`${styles['nav-items']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                <Link to={item.path} className={styles['nav-link']}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles['nav-side']}>
            <Link to="/login" className={styles['btn-login']}>
              Login
            </Link>
            <Button
              type="button"
              size="md"
              variant="primary"
              fullRounded
              shadow
              to="/register"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

Navbar.propTypes = {
  active: PropTypes.string,
  userType: PropTypes.string,
};

Navbar.defaultProps = {
  active: 'home',
  userType: null,
};
