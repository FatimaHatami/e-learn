import React from "react";
import Contact from "./contact/Contact";
import Courses from "./courses/Courses";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import LanguageSelection from "./language/LanguageSelection";
import Notifications from "./notifications/Notifications";
import Services from "./services/Services";

const Home=()=>{
    return(
        <div className="home">
            <Header />
            <LanguageSelection/>
            <Services/>
            <Notifications/>
            <Contact/>
            <Courses/>
            <Footer/>
        </div>
    )
}

export default Home;