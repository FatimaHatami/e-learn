import React from "react";
import Logo from '../../assets/img/logo.svg';
import MenuIcon from '../../assets/img/menu.svg';
import HeaderBg from '../../assets/img/bg.svg'

import './Header.scss';

const Header=()=>{
    return(
        <div className="header">
            <div className="header__top">
                <div className="header__logo-container">
                    <img src={Logo} alt="E-learn"/>
                    <h1>E-Learn</h1>
                </div>
                <div className="header__navbar">
                    <img src={MenuIcon} alt="MenuIcon" />
                </div>
            </div>
            <div className="header__image">
                <img src={HeaderBg} alt="Header"/>
            </div>
        </div>
    )
}


export default Header;