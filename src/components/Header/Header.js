import React,{ useState } from 'react';
import '../../static/css/style.css';
import {Menu} from './Menu';

const Header = () => {
    const [menu,setMenu] = useState(false);
    const [icon_menu,setIcon_menu] = useState(true);
    const [icon_close,setIcon_close] = useState(false);


    const handleClick = () => {
        setMenu(!menu);
        setIcon_menu(!icon_menu);
        setIcon_close(!icon_close);

    }

    return(
        <div className="header" id="home">
            <h1 className="header-name">ElvisGT</h1>

            {/*Mostrar icono de menu*/}
            {icon_menu &&
                <img className="header-icon-menu" src="https://i.ibb.co/Q8TW0J6/icons8-men-32.png" alt="icono de menu" onClick={handleClick} />
            }

            {/*Mostrar el menu*/}
            {menu && 
                <Menu handleClick={handleClick} />        
            }
                
        </div>
    );
}

export {Header};
