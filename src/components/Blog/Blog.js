import React,{ useState } from 'react';
import {BlogItem} from './BlogItem';
import {useBlog} from '../../hooks/useBlog';
import { PageTitle } from '../PageTitle/PageTitle';




const Blog = () => {
    var url_img; // declaracion de variable para setear la url de la imagen del post
    var API;

    const savedSpanish = JSON.parse(localStorage.getItem("spanish")); //Obteniendo el local storage
    const savedLanguage = JSON.parse(localStorage.getItem("language"));
    
    const [spanish,setSpanish] = useState(savedSpanish);
    const [language,setLanguage] = useState(savedLanguage);
    

    localStorage.setItem("spanish",JSON.stringify(spanish)); //Guardando el estado en el local storage
    localStorage.setItem("language",JSON.stringify(language)); 


    if(savedSpanish){
         API = "https://newsdata.io/api/1/news?apikey=pub_6547d847408d34ede1e81dcb8d10856ec8b9&country=es,us,ca,cn&category=technology,entertainment,science&language=es"; 
         //URL de la API en espaniol

    }
    else{
         API = "https://newsdata.io/api/1/news?apikey=pub_6547d847408d34ede1e81dcb8d10856ec8b9&country=es,us,ca,cn&category=technology,entertainment,science&language=en"; 
         //URL de la API en ingles
        }
        
        
    const news = useBlog(API);


    
    
    
    const handleClick = () => {
        setSpanish(!spanish);
        //Esto es para setear un idioma segun la eleccion del user
            if(language === "Español"){
                setLanguage("English");
            }else{      
                setLanguage("Español");
                
            }
            
        window.location.reload(); //esto es para recargar la pagina
        localStorage.clear(); // esto es para limpiar el local storage
    }
    
    
    return(
        <div className="blog" id="blog">
                <PageTitle title="LAST NEWS" description="Latest news about technology,entertainment and science"/>
                <button className="blog-button-language" type="button" onClick={handleClick}>
                    Noticas en {language ? language : "..."}
                </button>

                {news.length === 0 ? 
                    <React.Fragment>
                        <h1 className="loading">Loading...</h1> 
                        <div className="loading-box">
                            <div className="loading-box-item"></div>
                        </div>
                    </React.Fragment>

                    :

                        <div className="blog-container" >
                        {news.slice(0,3).map(item => (
                                
                        item.image_url !== null  ? url_img = item.image_url : url_img = "https://i.ibb.co/0skmxQ8/icons8-no-image-gallery-100.png", //si la imgen de la api es null le seteo la url mia

                                
                            <React.Fragment key={item.title}>
                                <BlogItem dateTime={item.pubDate} img={url_img} alt={item.title} title={item.title} description={item.description} link={item.link}/>
                                
                            </React.Fragment>
                        ))
                        }
                    </div>

                }   
        </div>

    )
}

export {Blog};