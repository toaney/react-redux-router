import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({isLoggedIn, userName}) => {

    React.useEffect(() => {
        console.log(userName);
    }, [userName])

    //helper functions

    return(
        <div className="nav-container">
            <div>
                <span className="nav-logo"><Link to="/">WEBSITE</Link></span>
                <span className="nav-link"><Link to="/counter">Counter</Link></span>
            </div>
            <div className="nav-login">
                <span>Is Logged In: {isLoggedIn? 'True': 'False'}</span>
                <span>{userName}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.loginReducer.isLoggedIn,
    userName: state.loginReducer.userName
})

export default connect(mapStateToProps)(Nav);