import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RoutesView from './RoutesView';

class RoutesContainer extends Component {
  render() {
    return <RoutesView {...this.props}/>
  }
}

const mapStateToProps = ({session}) => {
  return {
    checked: session.checked,
    authenticated: session.authenticated,
  };
};

RoutesContainer.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(RoutesContainer);
