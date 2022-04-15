import React from 'react';
import {ItemServices} from './ItemServices';

const Services = () => {
    
    
    return(
        <div className="services" id="services">
                <h1 className="services-intro">SERVICES</h1>
                <h2 className="services-skills">My Skills</h2>

                <ItemServices serviceName="HTML5" serviceIMG="" serviceALT="Foto del logo de HTML5"/>
        </div>

    );
}


export {Services};