// ========== Login
// import all modules
import React, { Component } from 'react';

// import styles
import styles from './styles/styles.module.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Login | Coffee Shop',
    };
  }

  componentDidMount() {
    const { title } = this.state;
    document.title = title;
  }

  render() {
    return (
      <div className={styles.login}>
        <h1>Login</h1>
      </div>
    );
  }
}

export default Login;
