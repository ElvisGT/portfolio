import React from 'react';

const Projects = ({img,alt,description,github,hosting}) => {
    return(
        <article className="portfolio-project-item">
            <img className="project-item-img" src={img} alt={alt}/>
            <p className="project-item-description">{description}</p>
            <div className="project-item-vinculo-container"> 
                <a className="project-item-vinculo" target={"_blank"} href={github}>Github</a>
                <a className="project-item-vinculo" target={"_blank"} href={hosting}>Probar</a>
            </div>

        </article>
    );
}

export {Projects};
