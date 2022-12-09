import React from "react";
import Button from "../buttons/Button";
// import SelectBox from "./selectbox/SelectBox";

import './LanguageSelection.scss';


const LanguageSelection=()=>{
    return(
        <div className="language">
            <h2>Learn a New language</h2>
            <p>you can select and learn a new language</p>
            <div className="language__select-box"></div>
            {/* <SelectBox/> */}
            <Button/>
        </div>
    )
}

export default LanguageSelection;