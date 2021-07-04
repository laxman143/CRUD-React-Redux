import React from 'react';
import UserList from './presentation/user-list-profile';
import UserAddEditProfile from './presentation/add-edit-user-profile';
import PrivateRoute from '../Shared/components/private-routes';
import { Route } from 'react-router-dom';

const UserProfileRouting : React.FC<any> = (props:any) => {
    return(<>
            <PrivateRoute exact path="/user" component={UserList}/>
            <Route exact path="/user/add" component={UserAddEditProfile}/>
            <PrivateRoute exact path="/user/edit/:id" component={UserAddEditProfile}/>

    </>)
}
export default UserProfileRouting