import React from 'react'
import './SectionFooter.scss'

const SectionFooter = ()=>{
return(
    <div className="footer">
<button><i className="fa fa-telegram fa-2x"></i></button>
<button><i className="fa fa-facebook fa-2x"></i></button>
<button><i className="fa fa-twitter fa-2x"></i></button>
<button><i className="fa fa-google fa-2x"></i></button>
<div className="pulse"></div>
    </div>
)
}
export default SectionFooter