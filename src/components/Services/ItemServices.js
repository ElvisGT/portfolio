import React from 'react';
import {useAnimation} from '../../hooks/useAnimation';

const ItemServices = ({serviceName,serviceIMG,serviceALT,cardID}) => {
        const {card} = useAnimation();   
    
    return (
            <React.Fragment>
            {card && 
                    <div className="services-card-item" id={cardID}>
                        <img className="services-card-img" src={serviceIMG} alt={serviceALT}/>
                        <p className="services-card-serviceName">{serviceName}</p>
                    </div>
            }
            </React.Fragment>
    );

}


export {ItemServices};