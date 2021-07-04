import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductRequest } from '../../Redux-Store/Product/product-action';
import { IProduct } from '../Model/product.model';

const CustomerList : React.FC<any> = (props:any) => {
const {getProduct,product} = props;

useEffect(()=>{getProduct()},[])

    return(<>
     Customer List
        
     <Link to="/customer/add">Add Customer</Link>
     <div>
         <table>
             <thead>
                 <tr>
                     <th>Product Name</th>
                     <th>Edit</th>
                 </tr>
             </thead>
             <tbody>
             {product && product.map((prod:IProduct)=>
                  <tr>
                      <td>
                          
                      {prod.productName}
                     </td>
                     <th><NavLink to={`customer/edit/${prod.id}`}>Edit</NavLink></th>
              </tr>
             
            )}
                
             </tbody>
         </table>
              
       
     </div>
    </>)
}


const mapStateToProps = (state: any) => {
    
    return {
        product: state.product.productList,
       
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProduct: () => dispatch(getProductRequest()),
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)