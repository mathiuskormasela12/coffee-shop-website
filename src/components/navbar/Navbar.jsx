// ========== Navbar
// import all modules
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NAVBAR_ITEMS, USER_TYPE } from '../../constant';

// import all components
import {
  Container, Button, TextField, BurgerMenu,
} from '..';

// import styles
import styles from './styles/styles.module.scss';

// import assets
import logo from '../../assets/icons/coffee-shop-logo.svg';
import chat from '../../assets/icons/chat.svg';
import user from '../../assets/img/user.png';

export function Navbar(props) {
  const [searchValue, setSearchValue] = useState('');
  const [showNavbar, setShowNavbar] = useState(false);
  const { active, userType, children } = props;
  let navLists = [];

  if (userType === USER_TYPE.USER) {
    navLists = NAVBAR_ITEMS.USER;
  } else if (userType === USER_TYPE.ADMIN) {
    navLists = NAVBAR_ITEMS.ADMIN;
  } else {
    navLists = NAVBAR_ITEMS.NOT_LOGGED_IN;
  }

  const handleSearch = (e) => setSearchValue(e.target.value);
  const handleShowNavbar = () => setShowNavbar((currentShowNavbar) => !currentShowNavbar);

  return (
    <div className={styles.hero}>
      <nav className={`${styles.navbar} ${showNavbar ? styles.fixed : ''}`}>
        <Container relative>
          <div className={styles['nav-flex']}>
            <figure className={styles['nav-brand']}>
              <img src={logo} className={styles['nav-brand-img']} alt="Coffee Shop" />
              <figcaption className={styles['nav-brand-text']}>
                Coffee Shop
              </figcaption>
            </figure>
            <ul className={`${styles['nav-list']} ${showNavbar ? styles.show : ''}`}>
              {navLists.map((item, index) => (
                (index === navLists.length - 1) ? (
                  <Fragment key={String(item.id)}>
                    {item.path === '/register' ? (
                      <li className={`${styles['nav-items']} ${styles['nav-items-register']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                        <Link to={item.path} className={styles['nav-link']}>
                          {item.name}
                        </Link>
                      </li>
                    ) : item.name === 'Chat' ? (
                      <li key={String(item.id)} className={`${styles['nav-items']} ${styles['nav-items-message']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                        <Link to={item.path} className={styles['nav-link']}>
                          {item.name}
                        </Link>
                      </li>
                    ) : (
                      <li className={`${styles['nav-items']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                        <Link to={item.path} className={styles['nav-link']}>
                          {item.name}
                        </Link>
                      </li>
                    )}
                    <li className={`${styles['nav-footer']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                      <p className={styles['nav-link']}>
                        &copy; 2022 Coffee Shop
                      </p>
                    </li>
                  </Fragment>
                ) : item.path === '/login' ? (
                  <li key={String(item.id)} className={`${styles['nav-items']} ${styles['nav-items-login']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                    <Link to={item.path} className={styles['nav-link']}>
                      {item.name}
                    </Link>
                  </li>
                ) : item.name === 'Search Bar' ? (
                  <li key={String(item.id)} className={`${styles['nav-items']} ${styles['nav-items-search-bar']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                    <div className={styles['nav-items-search-bar-container']}>
                      <TextField
                        type="search"
                        rounded
                        size="md"
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleSearch}
                      />
                    </div>
                  </li>
                ) : item.name === 'Profile' ? (
                  <li key={String(item.id)} className={`${styles['nav-items']} ${styles['nav-items-profile']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                    <Link to={item.path} className={styles['nav-link']}>
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <li key={String(item.id)} className={`${styles['nav-items']} ${String(active).toLowerCase() === item.name.toLowerCase() ? styles.active : ''}`}>
                    <Link to={item.path} className={styles['nav-link']}>
                      {item.name}
                    </Link>
                  </li>
                )
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
            <div
              className={styles.burger}
              onClick={handleShowNavbar}
              aria-hidden
            >
              <BurgerMenu />
            </div>
          </div>
        </Container>
      </nav>
      {showNavbar && <span className={styles['hero-container']} />}
      {children}
    </div>
  );
}

Navbar.propTypes = {
  active: PropTypes.string,
  userType: PropTypes.string,
  children: PropTypes.node,
};

Navbar.defaultProps = {
  active: 'home',
  userType: null,
  children: null,
};
