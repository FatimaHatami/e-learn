import React from "react";

import './Button.scss';
const Button=(props)=>{
    return(
        <a href="/" className="primary-button">
            <span>{props.value}</span>
        </a>
    )
}

export default Button;