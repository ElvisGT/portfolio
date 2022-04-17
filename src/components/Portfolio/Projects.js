import React from 'react';

const Projects = ({img,alt,description,github}) => {
    return(
        <article className="portfolio-project-item">
            <img className="project-item-img" src={img} alt={alt}/>
            <p className="project-item-description">{description}</p>
            <a className="project-item-vinculo" target={"_blank"} href={github}>Github</a>
        </article>
    );
}

export {Projects};
