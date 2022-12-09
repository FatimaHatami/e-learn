import React from "react";
import NotifImage from '../../assets/img/digital-service.svg';
import FileIcon from '../../assets/img/booknewone2.svg';

import './Notifications.scss'

const Notifications=()=>{
    return(
        <div className="notifications">
            <div className="notifications__background">
            </div>
            <img src={NotifImage} alt="Background " />
            {/* Box1 */}
            <div className="notifications__message-box card1">
                <h5>Congratulation</h5>
                <p>your first english chapter finished!</p>
            </div>
            {/* Box2 */}
            <div className="notifications__message-box card2">
                <h5>Hi, mahsa</h5>
                <p>Lorem ipsum dolor sit amt, con sectetur sit.</p>
            </div>
            {/* Box3 */}
            <div className="notifications__message-box card3">
                <img src={FileIcon} alt="icon"/>
                <p>15+ new courses uploaded</p>
            </div>
        </div>
    )
}

export default Notifications;