import React from 'react';
import {usePortfolio} from '../../hooks/usePortfolio';

const Projects = ({img,alt,description,github,hosting}) => {
    const portfolioItem = usePortfolio();

    return(
        <React.Fragment>
        {portfolioItem && 
                <article className="portfolio-project-item">
                    <img className="project-item-img" src={img} alt={alt}/>
                    <p className="project-item-description">{description}</p>
                    <div className="project-item-vinculo-container"> 
                        <a className="project-item-vinculo" target={"_blank"} href={github} title="Ver código en Github">Github</a>
                        <a className="project-item-vinculo" target={"_blank"} href={hosting} title="Probar sitio en producción">Probar</a>
                    </div>
        
                </article>

        }
        </React.Fragment>
    );

}

export {Projects};
