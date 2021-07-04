import React from 'react';
import { useHistory, useLocation} from 'react-router-dom'
import { loginRequest } from '../Redux-Store/Login/login-action';
import { connect } from 'react-redux';


const Login: React.FC<any> = (props:any) => {
    let history = useHistory();
    const {state } : any = useLocation();
    // this pathname comming from private routes else condition
    const previousFailedRoute = state?.from.pathname;
    const {login,isLogin} = props;
    const loginClick = () => {
       
        localStorage.setItem("login",'true')
        login()
        if(previousFailedRoute) {
            history.push(previousFailedRoute)
        } else {
            history.push('./dashboard')
        }
    }

    const registrationClick = () => {
        history.push('./user/add')
    }

    return (
        
        <>  
         {props.isLogin}
            <button onClick={loginClick}>Login</button>
            {!isLogin && <button onClick={registrationClick}>Registration</button>}
        </>)
}


const mapStateToProps= (state:any) => {
    return {
        isLogin: state.login.isLogin
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        login: () => dispatch(loginRequest())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)