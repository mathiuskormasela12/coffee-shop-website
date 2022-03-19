// ========== Navbar
// import all modules
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NAVBAR_ITEMS, USER_TYPE } from '../../constant';

// import all components
import { Container, Button, TextField } from '..';

// import styles
import styles from './styles/styles.module.scss';

// import assets
import logo from '../../assets/icons/coffee-shop-logo.svg';
import chat from '../../assets/icons/chat.svg';
import user from '../../assets/img/user.png';

export function Navbar(props) {
  const [searchValue, setSearchValue] = useState('');
  const { active, userType } = props;
  let navLists = [];

  if (userType === USER_TYPE.USER) {
    navLists = NAVBAR_ITEMS.USER;
  } else if (userType === USER_TYPE.ADMIN) {
    navLists = NAVBAR_ITEMS.ADMIN;
  } else {
    navLists = NAVBAR_ITEMS.NOT_LOGGED_IN;
  }

  const handleSearch = (e) => setSearchValue(e.target.value);

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
            {(userType === USER_TYPE.ADMIN || userType === USER_TYPE.USER) ? (
              <Fragment>
                <div className={styles.control}>
                  <TextField
                    type="search"
                    rounded
                    size="md"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearch}
                  />
                </div>
                <div className={styles.control}>
                  <div className={styles['chats-container']}>
                    <span className={styles['unread-chats']}>10+</span>
                    <img src={chat} className={styles['chat-icon']} alt="Chat" />
                  </div>
                </div>
                <div className={styles.control}>
                  <img src={user} className={styles['user-icon']} alt="User" />
                </div>
              </Fragment>
            ) : (
              <Fragment>
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
              </Fragment>
            )}
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
