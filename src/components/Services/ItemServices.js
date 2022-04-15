import React from 'react';
import {useCard} from '../../hooks/useCard';

const ItemServices = ({serviceName,serviceIMG,serviceALT,cardID}) => {
        const item = useCard();   
    
    return (
            <React.Fragment>
            {item && 
                    <div className="services-card-item" id={cardID}>
                        <img className="services-card-img" src={serviceIMG} alt={serviceALT}/>
                        <p className="services-card-serviceName">{serviceName}</p>
                    </div>
            }
            </React.Fragment>
    );

}


export {ItemServices};