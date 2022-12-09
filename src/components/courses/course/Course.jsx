import React from "react";
import TimeIcon from '../../../assets/img/history.svg';

import './Course.scss'

const Course=(props)=>{
    return(
        <div className="course">
            <img src={props.cover} alt="" />
            <div className="course__details">
                <h3 className="course__name">{props.name}</h3>
                <p className="course__description">
                {props.desc}
                </p>
                <hr />
            </div>
            <div className="course__info">
                <div className="course__length">
                    <img src={TimeIcon} alt="course length" />
                    <span>{props.duration}</span>
                </div>
                <hr />
                <div className="course__date">
                    <span> start: {props.start}</span>
                </div>
                <div className="course__flag">
                    <img src={props.flag} alt="English flag" />
                </div>
            </div>
        </div>
    )
}


export default Course;