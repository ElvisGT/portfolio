import React from 'react';
import '../../static/css/style.css';

const Footer = () => {
    return(
        <div className="footer">
                <div className="footer-contacts">
                    <h2 className="footer-title">Contact Me</h2>
                    <a className="footer-vinculo" href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" alt="icono de Linkedin"/>LinkedIn</a>
                    <a className="footer-vinculo" href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" alt="icono de Facebook"/>Facebook</a>
                    <a className="footer-vinculo" href="https://github.com/ElvisGT" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" alt="icono de Github"/>Github</a>
                    <a className="footer-vinculo" href="mailto:elvisgiltorres@gmail.com" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/tqWG9BL/icons8-google-plus-64.png" alt="icono de Mail"/>Mail</a>
                </div>
                <div className="footer-upArrow">
                    <a href="#home"><img className="footer-upArrow-img" src="https://i.ibb.co/vV3Tb3B/icons8-arriba-en-cuadrado-64.png" alt="flecha hacia arriba"/></a>
                </div>
        </div>
    );
}


export {Footer};