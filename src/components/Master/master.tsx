import React from 'react';
import MasterView from './presentation/master-view';


const Master : React.FC<any> = (props) => {
    return(
        <React.Fragment>
            <MasterView> {props.children}</MasterView>
        </React.Fragment>
    )
}
export default Master