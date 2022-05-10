import React from 'react';

const Menu = ({handleClick}) => {
    return(
        <React.Fragment>
            <img className="header-icon-close" src="https://i.ibb.co/S6dDFwf/icons8-cancelar-32-2.png" alt="icono de cerrar" onClick={handleClick}/>
                <div className="header-menu">
                    <a href="#home" className="header-vinculo">Inicio</a>
                    <a href="#services" className="header-vinculo">Servicios</a>
                    <a href="#portfolio" className="header-vinculo">Portafolio</a>
                    <a href="#blog" className="header-vinculo">Blog</a>
                    <a href="#contact" className="header-vinculo">Contacto</a>
                    <div className="header-contact">
                        <a className="contact-vinculo" href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer"><img className="contact-img" src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" alt="Facebook"/></a>
                        <a className="contact-vinculo" href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer" ><img className="contact-img" src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" alt="Github" /></a>
                        <a className="contact-vinculo" href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} rel="noreferrer"><img className="contact-img" src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" alt="LinkedIn" /></a>
                    </div>
                </div>
        </React.Fragment>
    );
}

export {Menu}