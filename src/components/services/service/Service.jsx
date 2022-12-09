import React from "react";

import './Service.scss';
const Service=(props)=>{
    return(
        <div className="service">
            <div className="service__icon-container">
            <img src={props.icon} alt="icon"/>
            </div>
            <h3 className="service__name">{props.name}</h3>
            <p className="service__description">{props.desc}</p>
        </div>
    )
}
export default Service;