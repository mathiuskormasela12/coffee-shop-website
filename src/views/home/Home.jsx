// ========== Home
// import all modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import styles
import styles from './styles/styles.module.scss';

// import all components
import {
  Container,
  Navbar,
} from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Home | Coffee Shop',
    };
  }

  componentDidMount() {
    const { title } = this.state;
    document.title = title;
  }

  render() {
    return (
      <div className={styles.home}>
        <Navbar userType="USER">
          <Container>
            <h1>Home</h1>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default connect(null, null)(Home);
