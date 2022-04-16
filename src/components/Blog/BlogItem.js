import React from 'react';


const BlogItem = ({date,img,alt,title,description}) => {
    return(
            <div className="item-card">
                <h2 className="date-time">{date}</h2>
                <img className="item-card-img" src={img} alt={alt}/>
                <h3 className="item-card-title">{title}</h3>
                <p className="item-card-description">{description}</p>
                <a>Read More <img src="" alt="right arrow"/></a>
            </div>
    );
}

export {BlogItem};