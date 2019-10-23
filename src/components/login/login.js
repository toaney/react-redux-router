import React from 'react';
import { setLogin, setLogout } from './loginActions.js';
import { connect } from 'react-redux';

const Login = ({dispatch, isLoggedIn}) => {
    //login function
    return(
        <div>
            <p>is logged in: {isLoggedIn? 'true': 'false'}</p>
            <button onClick={() => {
                dispatch(setLogin(123455));
            }}>
                Login
            </button>
            <button onClick={() => {
                dispatch(setLogout());
            }}>
                Logout
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.loginReducer.isLoggedIn
})
export default connect(mapStateToProps)(Login);
