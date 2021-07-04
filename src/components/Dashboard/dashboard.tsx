import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard : React.FC<any> = () => {
    let history = useHistory();
    const productLink = () => {
        history.push('./customer')
    }
    

    return(<>
        Dashboard
        <button onClick={productLink}>Go to Product</button>
       
    </>)
}
export default Dashboard