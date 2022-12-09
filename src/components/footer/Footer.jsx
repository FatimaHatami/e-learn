import React from "react";
import Logo from "../../assets/img/logo.svg";
import Facebook from "../../assets/img/facebook.svg";
import Twitter from "../../assets/img/twitter.svg";
import Instagram from "../../assets/img/instagram.svg";

import './Footer.scss';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer__links">
                <div className="footer__column">
                    <h3>Company</h3>
                    <a href="/">About us</a>
                    <a href="/">Partners</a>
                    <a href="/">Customers</a>
                    <a href="/">Contact us</a>
                </div>
                <div className="footer__column">
                    <h3>Company</h3>
                    <a href="/">About us</a>
                    <a href="/">Partners</a>
                    <a href="/">Customers</a>
                    <a href="/">Contact us</a>
                </div>
            </div>
            <div className="footer__logo">
                <img  src={Logo} alt="Logo"/>
            </div>
            <div className="footer__copy-rights">
            © 2022 Elanguage. All rights reserved. 
            </div>
            <div className="footer__socials">
                <img src={Facebook} alt="facebook" />
                <img src={Twitter} alt="twitter" />
                <img src={Instagram} alt="instagram" />
            </div>
        </div>
    )
}


export default Footer;