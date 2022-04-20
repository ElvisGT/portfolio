import React from 'react';
import { useArrow } from '../../hooks/useArrow';
import '../../static/css/style.css';


const Footer = () => {
    const arrow = useArrow();
       
    return(
        <div className="footer">
                        <h2 className="page-title">CONTACT ME</h2>
                <div className="footer-contacts" id="contact">
                            <a className="footer-vinculo" href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" alt="icono de Linkedin"/>LinkedIn</a>
                            <a className="footer-vinculo" href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" alt="icono de Facebook"/>Facebook</a>
                            <a className="footer-vinculo" href="https://github.com/ElvisGT" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" alt="icono de Github"/>Github</a>
                            <a className="footer-vinculo" href="mailto:elvisgiltorres@gmail.com" target={"_blank"} ><img className="contact-img" src="https://i.ibb.co/tqWG9BL/icons8-google-plus-64.png" alt="icono de Mail"/>Mail</a>
                </div>  

                        {/* Se muestra solo cuando la condicion del viewport se cumple y el estado es verdadero*/}
                        {arrow && 
                            <div className="footer-upArrow" >
                                <a href="#home"><img className="footer-upArrow-img" src="https://i.ibb.co/vV3Tb3B/icons8-arriba-en-cuadrado-64.png" alt="flecha hacia arriba"/></a>
                            </div>
                        }
                    
                            <h3 className="footer-derechos" >All rights reserved 2022.</h3>
                            
                            <p className="footer-icon">Icons by <a className="footer-icon-vinculo" target="_blank" href="https://icons8.com">Icons8</a></p>
                    

            
        </div>
    );
}


export {Footer};