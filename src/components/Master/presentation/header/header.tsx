import React from 'react'
import { useHistory } from 'react-router-dom'
import { logoutRequest } from '../../../Redux-Store/Login/login-action';
import { connect } from 'react-redux';

const Header: React.FC<any> = (props:any) => {
    let history = useHistory();
    const { isLogin, logout } = props;
    const logOutClick = () => {

        localStorage.removeItem("login")
        logout();
        history.push('./login')
    }
    return(<>
            <h5>Header </h5>
          
           {isLogin ?  <button onClick={logOutClick}>Logout</button> : '' }
    </>)
}
const mapStateToProps = (state: any) => {
    return {
        isLogin: state.login.isLogin
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        logout: () => dispatch(logoutRequest())
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Header)