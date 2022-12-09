import React from "react";
import Service from "./service/Service";

// Icons
import studyIcon from "../../assets/img/school.svg";
import mobileIcon from "../../assets/img/install_mobile.svg";
import historyIcon from "../../assets/img/history_edu.svg";
import paymentIcon from "../../assets/img/monetization_on.svg";

import './Services.scss'

const Services=()=>{

    const servicesData=[
        {
            serviceName:"Easy study approach",
            serviceDescription:"we are a language centre that offer a personalise  approach to language learning with small class sizes.",
            serviceIcon:studyIcon
        },
        {
            serviceName:"Free mobile application",
            serviceDescription:"we are a language centre that offer a personalise  approach to language learning with small class sizes.",
            serviceIcon:mobileIcon
        },{
            serviceName:"Easy payment",
            serviceDescription:"we are a language centre that offer a personalise  approach to language learning with small class sizes.",
            serviceIcon:historyIcon
        },
        {
            serviceName:"Easy payment",
            serviceDescription:"we are a language centre that offer a personalise  approach to language learning with small class sizes.",
            serviceIcon:paymentIcon
        }
    ];

    return(
        <div className="services">
            <h2 className="services__heading">Services</h2>
            {servicesData.map(service =>(
                <Service
                name={service.serviceName}
                desc={service.serviceDescription}
                icon={service.serviceIcon}
                />
            ))}
            
        </div>

    )
}

export default Services;