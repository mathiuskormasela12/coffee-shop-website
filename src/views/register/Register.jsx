// ========== Register
// import all modules
import React, { Component } from 'react';

// import styles
import styles from './styles/styles.module.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Register | Coffee Shop',
    };
  }

  componentDidMount() {
    const { title } = this.state;
    document.title = title;
  }

  render() {
    return (
      <div className={styles.register}>
        <h1>Register</h1>
      </div>
    );
  }
}

export default Register;
