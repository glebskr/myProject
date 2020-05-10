import React from 'react';
import { connect } from 'react-redux';
import SignIn from '../Auth/Auth';
import LinksBody from '../LinksBody/LinksBody';
import IState from '../../interfaces/state';

const Router = (props: { state: IState }) => {
  return <div>{props.state.isAuthenticated ? <LinksBody /> : <SignIn />}</div>;
};

const mapStateToProps = (state: IState) => ({
  state: state,
});

export default connect(mapStateToProps)(Router);
