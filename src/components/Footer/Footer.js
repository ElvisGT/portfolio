import React from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import '../../static/css/style.css';
import { PageTitle } from '../PageTitle/PageTitle';


const Footer = () => {
    const {upArrow} = useAnimation();
       
    return(
        <div className="footer">    
                <PageTitle title="CONTACTO"/>
                <div className="footer-contacts" id="contact">
                            <a className="footer-vinculo" href="https://www.linkedin.com/in/elvis-gil-torres-ab64a9225/" target={"_blank"} rel="noreferrer"><img className="contact-img" src="https://i.ibb.co/QXPPLpp/icons8-linkedin-64.png" alt="icono de Linkedin"/>LinkedIn</a>
                            <a className="footer-vinculo" href="https://www.facebook.com/elvis.giltorres/" target={"_blank"} rel="noreferrer"><img className="contact-img" src="https://i.ibb.co/N37fLYQ/icons8-facebook-50.png" alt="icono de Facebook"/>Facebook</a>
                            <a className="footer-vinculo" href="https://github.com/ElvisGT" target={"_blank"} rel="noreferrer"><img className="contact-img" src="https://i.ibb.co/Fbfdvz5/icons8-github-64.png" alt="icono de Github"/>Github</a>
                            <a className="footer-vinculo" href="mailto:elvisgiltorres@gmail.com" target={"_blank"} rel="noreferrer"><img className="contact-img" src="https://i.ibb.co/tqWG9BL/icons8-google-plus-64.png" alt="icono de Mail"/>Mail</a>
                </div>  

                        {/* Se muestra solo cuando la condicion del viewport se cumple y el estado es verdadero*/}
                        {upArrow && 
                            <div className="footer-upArrow" >
                                <a href="#home" title="Ir al inicio"><img className="footer-upArrow-img" src="https://i.ibb.co/vV3Tb3B/icons8-arriba-en-cuadrado-64.png" alt="flecha hacia arriba"/></a>
                            </div>
                        }
                    
                            
                            <p className="footer-icon">Iconos de <a className="footer-icon-vinculo" target={"_blank"} rel="noreferrer" href="https://icons8.com" title="Link a Icons8">Icons8</a></p>
                            <p className="footer-icon">Imágenes de <a className="footer-icon-vinculo" target={"_blank"} rel="noreferrer" href="https://pexels.com" title="Link a Pexels">Pexels</a></p>
                    
                            <h3 className="footer-derechos" >Todos los derechos reservados 2022.</h3>

            
        </div>
    );
}


export {Footer};