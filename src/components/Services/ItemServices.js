import React from 'react';

const ItemServices = ({serviceName,serviceIMG,serviceALT,cardID}) => {
    
    
    return (
            <div className="services-card-item" id={cardID}>
                <img className="services-card-img" src={serviceIMG} alt={serviceALT}/>
                <p className="services-card-serviceName">{serviceName}</p>
            </div>
    );
}


export {ItemServices};