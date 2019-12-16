import React from 'react';
import './Buttons.scss';

const Buttons =()=>{
    return(
        <div className="app-buttons">
            <input type="button" value="html" className="btn  btn-danger" />
            <input type="button" value="css" className="btn  btn-primary" />
            <input type="button" value="js" className="btn  button-outline btn-warning " />
        </div>
    )
}
export default Buttons;