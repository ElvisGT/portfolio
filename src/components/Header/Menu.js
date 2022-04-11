import React from 'react';

const Menu = ({handleClick}) => {
    return(
        <React.Fragment>
            <img className="header-icon-close" src="" alt="icono de cerrar" onClick={handleClick}/>
                <div className="header-menu">
                    <a href="#home" className="header-vinculo">Home</a>
                    <a href="#portfolio" className="header-vinculo">Portfolio</a>
                    <a href="#blog" className="header-vinculo">Blog</a>
                    <a href="#contact" className="header-vinculo">Contact</a>
                    <div className="header-contact-img">
                        <img src="" alt="Facebook" />
                        <img src="" alt="Github" />
                        <img src="" alt="Linkedin" />
                    </div>
                </div>
        </React.Fragment>
    );
}

export {Menu}