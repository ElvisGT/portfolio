import React from 'react';

const ItemServices = ({serviceName,serviceIMG,serviceALT}) => {
    
    
    return (
            <div className="services-card">
                <img className="services-card-img" src={serviceIMG} alt={serviceALT}/>
                <p className="services-card-serviceName">{serviceName}</p>
            </div>
    );
}


export {ItemServices};