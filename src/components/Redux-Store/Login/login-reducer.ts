import { REQUEST_LOGIN, SUCCESS_LOGIN, REQUEST_LOGOUT } from "./login-type"

const initialState = {
    isLogin:false
  }
  

const LoginReducer = (state = initialState,action:any) => {
    switch(action.type) {
        case REQUEST_LOGIN : {
            return  {
                ...state
            }
        }

        case SUCCESS_LOGIN: {
            return {
                ...state,
                isLogin : action.payload
            }
        }

        case REQUEST_LOGOUT: {
            return{
                ...state,
                isLogin: false
            }
        }

        default: return state
    }
}

export default LoginReducer