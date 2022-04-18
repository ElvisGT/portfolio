import React from 'react';


const BlogItem = ({dateTime,img,alt,title,description,link}) => {
    return(
            <div className="item-card">
                <h2 className="date-time">{dateTime}</h2>
                <img className="item-card-img" src={img} alt={alt}/>
                <h3 className="item-card-title">{title}</h3>
                <p className="item-card-description">{description}</p>
                <a href={link} target={"_blank"} className="item-card-vinculo">Read More <img className="item-card-arrow-img" src="https://i.ibb.co/cQ1m9Bt/icons8-chebr-n-hacia-la-derecha-30-1.png" alt="right arrow"/></a>
            </div>
    );
}

export {BlogItem};