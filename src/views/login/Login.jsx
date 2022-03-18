// ========== Login
// import all modules
import React, { Component } from 'react';

// import styles
import styles from './styles/styles.module.scss';

// import all components
import { Container } from '../../components';

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
        <Container>
          <h1>Login</h1>
        </Container>
      </div>
    );
  }
}

export default Login;
