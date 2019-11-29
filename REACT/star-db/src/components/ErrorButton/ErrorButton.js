import React from 'react';
import './ErrorButton.css';
export default class ErrorButton extends React.Component{
    state={
        renderError:false
    }
    render() {
        if (this.state.renderError){
            this.foo.bar =0;
        }
        return(
            <input type="button" className="btn btn-danger error-button" onClick={()=>this.setState({renderError:true})} value="error button" />

        )
    }

}