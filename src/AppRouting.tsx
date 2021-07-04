import React , {lazy,Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'

import  Login  from './components/Login/index'
import PrivateRoute from './components/Shared/components/private-routes';

// Lazy loading component
const dashboard = lazy(() => import('./components/Dashboard/index'));
const product = lazy(() => import('./components/Product/index'));
const customer = lazy(() => import('./components/Customer/index'));
const UserProfile = lazy(() => import('./components/UserProfile/index'))

const AppRouting : React.FC<any> = () => {
    return(<>
        <Suspense fallback={<div>Loading....</div>}>
            <Switch>
                <PrivateRoute exact path="/" component={dashboard}/>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute exact path="/dashboard" component={dashboard}/>
                <PrivateRoute path="/product" component={product}/>
                <PrivateRoute path="/customer" component={customer}/>
                <Route path="/user" component={UserProfile}/>
                 user
            </Switch>
        </Suspense>
    </>)
}

export default AppRouting