import React from 'react';
import PrivateRoute from '../Shared/components/private-routes';
import CustomerList from './presentation/customer-list';
import CustomerForm from './presentation/customer-form';

const CustomerRouting : React.FC<any> = (props:any) => {
    return(<>
            <PrivateRoute exact path="/customer" component={CustomerList}/>
            <PrivateRoute exact path="/customer/add" component={CustomerForm}/>
            <PrivateRoute exact path="/customer/edit/:id" component={CustomerForm}/>

    </>)
}
export default CustomerRouting