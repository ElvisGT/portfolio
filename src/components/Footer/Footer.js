import React from 'react';
import '../../static/css/style.css';

const Footer = () => {
    return(
        <div className="footer">
                <div className="footer-contacts">
                    <h2>Contact Me</h2>
                    <a href="" target={"_blank"} ><img className="contact-icon" src="" alt="icono de Linkedin"/>LinkedIn</a>
                    <a href="" target={"_blank"} ><img className="contact-icon" src="" alt="icono de Facebook"/>Facebook</a>
                    <a href="" target={"_blank"} ><img className="contact-icon" src="" alt="icono de Github"/>Github</a>
                    <a href="" target={"_blank"} ><img className="contact-icon" src="" alt="icono de Whatsapp"/>Whatsapp</a>
                    <a href="" target={"_blank"} ><img className="contact-icon" src="" alt="icono de Mail"/>Mail</a>
                </div>
                <div className="footer-upArrow">
                    <img className="footer-upArrow-img" src="" alt="flecha hacia arriba"/>
                </div>
        </div>
    );
}


export {Footer};