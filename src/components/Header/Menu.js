import React from 'react';

const Menu = ({handleClick}) => {
    return(
        <React.Fragment>
            <img className="header-icon-close" src="https://i.ibb.co/S6dDFwf/icons8-cancelar-32-2.png" alt="icono de cerrar" onClick={handleClick}/>
                <div className="header-menu">
                    <a href="#home" className="header-vinculo">Home</a>
                    <a href="#portfolio" className="header-vinculo">Portfolio</a>
                    <a href="#blog" className="header-vinculo">Blog</a>
                    <a href="#contact" className="header-vinculo">Contact</a>
                    <div className="header-contact">
                        <img className="header-contact-img" src="https://i.ibb.co/yQFgxyz/icons8-facebook-50-1.png" alt="Facebook" />
                        <img className="header-contact-img" src="https://i.ibb.co/1TMgbsP/icons8-github-64.png" alt="Github" />
                        <img className="header-contact-img" src="https://i.ibb.co/TkbmxbT/icons8-linkedin-50.png" alt="Linkedin" />
                    </div>
                </div>
        </React.Fragment>
    );
}

export {Menu}