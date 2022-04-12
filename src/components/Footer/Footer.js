import React from 'react';
import '../../static/css/style.css';

const Footer = () => {
    return(
        <div className="footer">
                <div className="footer-contacts">
                    <h2 className="footer-title">Contact Me</h2>
                    <a className="footer-vinculo" href="" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/TkbmxbT/icons8-linkedin-50.png" alt="icono de Linkedin"/>LinkedIn</a>
                    <a className="footer-vinculo" href="" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/yQFgxyz/icons8-facebook-50-1.png" alt="icono de Facebook"/>Facebook</a>
                    <a className="footer-vinculo" href="" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/1TMgbsP/icons8-github-64.png" alt="icono de Github"/>Github</a>
                    <a className="footer-vinculo" href="mailto:elvisgiltorres@gmail.com" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/f0dmVNR/icons8-gmail-50.png" alt="icono de Mail"/>Mail</a>
                </div>
                <div className="footer-upArrow">
                    <img className="footer-upArrow-img" src="" alt="flecha hacia arriba"/>
                </div>
        </div>
    );
}


export {Footer};