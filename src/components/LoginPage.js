import React from "react";
import { connect } from 'react-redux'
import { startLogin, startLoggin } from '../actions/auth'
import { NavLink } from "react-router-dom";

export const LoginPage = ({ startLogin }) => (
         <div>
           <h1>Welcome</h1>
           <button onClick={startLogin}>Login</button>
         </div>
       );

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect (undefined, mapDispatchToProps)(LoginPage)