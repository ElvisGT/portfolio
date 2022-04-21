import React from 'react';
import { PageTitle } from '../PageTitle/PageTitle';
import {ItemServices} from './ItemServices';

const Services = () => {
    
    
    return(
        <div className="services" id="services">
                <PageTitle title="SERVICIOS" description="Desarrollo sitios web adaptados a todos los dispositivos utilizando buenas prácticas y haciendo uso de tecnologías como: "/>
                

                <div className="services-card">
                    <ItemServices serviceName="HTML5" serviceIMG="https://i.postimg.cc/qqP7qFY8/icons8-html-5-50.png" serviceALT="Foto del logo de HTML5" cardID="card-1"/>
                    
                    <ItemServices serviceName="CSS3" serviceIMG="https://i.postimg.cc/GhtPyTft/icons8-css3-50.png" serviceALT="Foto del logo de CSS3" cardID="card-1"/>

                    <ItemServices serviceName="React JS" serviceIMG="https://i.postimg.cc/cLYnRRBx/icons8-reaccionar-50.png" serviceALT="Foto del logo de React" cardID="card-1"/>
                    
                    <ItemServices serviceName="Git" serviceIMG="https://i.postimg.cc/cJ0rfVJh/icons8-git-50.png" serviceALT="Foto del logo de Git" cardID="card-1"/>

                    <ItemServices serviceName="Javascript" serviceIMG="https://i.ibb.co/d2ycmhM/icons8-javascript-50.png" serviceALT="Foto del logo de Javascript" cardID="card-1"/>

                    <ItemServices serviceName="Github" serviceIMG="https://i.ibb.co/9VskQXz/icons8-github-50.png" serviceALT="Foto del logo de Github" cardID="card-1"/>


                </div>
        </div>

    );
}


export {Services};