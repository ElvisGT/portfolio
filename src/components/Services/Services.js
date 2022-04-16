import React from 'react';
import {ItemServices} from './ItemServices';

const Services = () => {
    
    
    return(
        <div className="services" id="services">
                <h1 className="page-title">SERVICES</h1>
                <h2 className="page-description">My Skills</h2>

                <div className="services-card">
                    <ItemServices serviceName="HTML5" serviceIMG="https://i.postimg.cc/qqP7qFY8/icons8-html-5-50.png" serviceALT="Foto del logo de HTML5" cardID="card-1"/>
                    
                    <ItemServices serviceName="CSS3" serviceIMG="https://i.postimg.cc/GhtPyTft/icons8-css3-50.png" serviceALT="Foto del logo de CSS3" cardID="card-1"/>

                    <ItemServices serviceName="React JS" serviceIMG="https://i.postimg.cc/cLYnRRBx/icons8-reaccionar-50.png" serviceALT="Foto del logo de React" cardID="card-2"/>
                    
                    <ItemServices serviceName="Git" serviceIMG="https://i.postimg.cc/cJ0rfVJh/icons8-git-50.png" serviceALT="Foto del logo de Git" cardID="card-2"/>

                </div>
        </div>

    );
}


export {Services};