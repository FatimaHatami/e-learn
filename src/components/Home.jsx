import React from "react";
import Header from "./header/Header";
import LanguageSelection from "./language/LanguageSelection";
import Services from "./services/Services";

const Home=()=>{
    return(
        <div className="home">
            <Header />
            <LanguageSelection/>
            <Services/>
        </div>
    )
}

export default Home;