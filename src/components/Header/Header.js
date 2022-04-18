import React,{ useState,useEffect } from 'react';
import '../../static/css/style.css';
import {Menu} from './Menu';
import {MenuDesktop} from './MenuDesktop';

const Header = () => {
    const [menu,setMenu] = useState(false);
    const [menuDesktop,setMenuDesktop] = useState(false);
    const [icon_menu,setIcon_menu] = useState(true);
    const [icon_close,setIcon_close] = useState(false);


    const handleClick = () => {
        setMenu(!menu);
        setIcon_menu(!icon_menu);
        setIcon_close(!icon_close);

    }


        useEffect(() => {
            const screenSize = window.screen.width; //esto es para saber el tamanio de la pantalla

            //Si el tamanio de la pantalla es mayor a 768 se activa el menu
            if(screenSize >= 768){
                setMenuDesktop(true);
            }
            else{
                setMenuDesktop(false);
            }

            window.onscroll = () => {
                const scroll = document.documentElement.scrollTop || document.body.scrollTop;
                if(scroll > 1){
                    setMenu(false);
                }else if(scroll < 15) {
                     setIcon_menu(true);
     
                }
            }
        },[])
           
           
   
    return(
        <div className="header" id="home">
            <h1 className="header-name" id="header-name-animation">ElvisGT</h1>

            {/*Mostrar icono de menu*/}
            {icon_menu &&
                <img className="header-icon-menu" src="https://i.ibb.co/Q8TW0J6/icons8-men-32.png" alt="icono de menu" onClick={handleClick} />
            }

            {/*Mostrar el menu*/}
            {menu && 
                <Menu handleClick={handleClick} />        
            }
            
            {/*Mostrar el menu Desktop*/}
            {menuDesktop &&
                <MenuDesktop />
            }
                
        </div>
    );
}

export {Header};

