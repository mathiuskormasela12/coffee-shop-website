// ========== Home
// import all modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import styles
import styles from './styles/styles.module.scss';

// import all components
import {
  Container,
  Navbar,
  Button,
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
    const { navbar: { show } } = this.props;
    return (
      <div className={styles.home}>
        <Navbar>
          <Container fluid>
            <div className={styles['hero-bg']}>
              <Container>
                <header className={`${styles['hero-header']} ${show && styles['full-bg']}`}>
                  <h1 className={styles.title}>
                    Start Your Day with Coffee and Good Meals
                  </h1>
                  <h4 className={styles.subtitle}>
                    We provide high quality beans,
                    good taste, and healthy meals made by
                    love just for you. Start your day with
                    us for a bigger smile!
                  </h4>
                  <Button type="button" variant="primary" size="xl" rounded>
                    Get Started
                  </Button>
                </header>
              </Container>
            </div>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (currentState) => ({
  ...currentState,
});

Home.propTypes = {
  navbar: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, null)(Home);
