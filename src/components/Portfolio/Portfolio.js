import React from 'react';
import {PageTitle} from '../PageTitle/PageTitle';
import {Projects} from './Projects';
import {data} from './data.jsx';


const Portfolio = () => {
    

    return(
        <div className="portfolio" id="portfolio">
            <PageTitle title="PORTAFOLIO" description="Mis proyectos"/>

            <section className="portfolio-container">
            {data.map(item => (
                    <React.Fragment key={item.id}>
                        <Projects img={item.img} 
                                  alt={item.img}
                                  description={item.description}
                                  github={item.github}
                                  hosting={item.hosting}
                        />
                    </React.Fragment>
                ))
            }
            </section>

        </div>
    );
}


export {Portfolio}