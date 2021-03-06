import { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from '../services/firebase';

export default class WithAuthenticatedUser extends Component {
  state = {
    loading: true,
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState(
        user ? { user, loading: false } : { user: null, loading: false }
      );
    });
  }

  render() {
    return this.props.render(this.state.user, this.state.loading);
  }
}

WithAuthenticatedUser.propTypes = {
  render: PropTypes.func.isRequired
};
