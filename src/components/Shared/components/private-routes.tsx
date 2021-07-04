import  React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute : React.FC<any> = ({component:Component,...rest}) => {
    return(
     <Route
        {...rest}
        render= { props => 
             localStorage.getItem('login') == 'true' ?  (<Component {...props}/>)
            :
            (<Redirect to={{ 
                pathname:'/login',
                state :  { from: props.location}
            }}/>)}
            
     />

    
    )
}
export default PrivateRoute