import React from 'react'
import { useHistory } from 'react-router-dom';

const Product : React.FC<any> = () => {
    let history = useHistory();
    const dashboardClick = () => {
        history.push('./dashboard')
    }
    return(
        <React.Fragment>
            Product
         <button onClick={dashboardClick}>Go to Dashboard</button>
        </React.Fragment>
    )
}
export default Product