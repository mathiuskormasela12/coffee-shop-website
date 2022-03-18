// ========== Home
// import all modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import all redux actions
import { setTokens, removeTokens } from '../../redux/action/auth';

// import styles
import styles from './styles/styles.module.scss';

// import all components
import { Container } from '../../components';

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
    const {
      auth: { accessToken },
      data: { value },
      handleSetTokens,
      handleRemoveTokens,
      setData,
    } = this.props;

    return (
      <div className={styles.home}>
        <Container>
          <h1
            onClick={() => handleSetTokens({
              accessToken: String(Date.now() * 2),
              refreshToken: String(Date.now() * 10),
            })}
            aria-hidden
            onDoubleClick={() => handleRemoveTokens()}
          >
            Home

          </h1>
          {accessToken && <p onClick={() => setData()} aria-hidden>Ada Token</p>}
          {value && <p>Data</p>}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (states) => ({
  ...states,
});

const mapDispatchToProps = {
  handleSetTokens: setTokens,
  handleRemoveTokens: removeTokens,
  setData: () => ({
    type: 'SET_DATA',
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  auth: PropTypes.shape({
    accessToken: PropTypes.string,
    refreshToken: PropTypes.string,
  }),
  data: PropTypes.shape({
    value: PropTypes.bool,
  }),
  handleSetTokens: PropTypes.func,
  handleRemoveTokens: PropTypes.func,
  setData: PropTypes.func,
};

Home.defaultProps = {
  auth: {
    accessToken: null,
    refreshToken: null,
  },
  data: {
    value: null,
  },
  handleSetTokens: () => {},
  handleRemoveTokens: () => {},
  setData: () => {},
};
