import React from 'react';
import {ItemServices} from './ItemServices';

const Services = () => {
    
    
    return(
        <div className="services">
                <h1 className="services-intro">INTRODUCTION</h1>
                <h2 className="services-skills">My Skills</h2>

                <ItemServices serviceName="HTML5" serviceIMG="" serviceALT="Foto del logo de HTML5"/>
        </div>

    );
}


export {Services};