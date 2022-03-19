// ========== BurgerMenu
// import all modules
import React from 'react';

// import styles
import styles from './styles/styles.module.scss';

export function BurgerMenu() {
  return (
    <div className={styles.burger}>
      <span className={styles.burgers} />
      <span className={styles.burgers} />
      <span className={styles.burgers} />
    </div>
  );
}
