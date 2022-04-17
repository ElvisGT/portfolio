import React,{ useState } from 'react';
import {BlogItem} from './BlogItem';
import {useBlog} from '../../hooks/useBlog';




const Blog = () => {
    var url_img; // declaracion de variable para setear la url de la imagen del post

    const saved = JSON.parse(localStorage.getItem("language")); //Obteniendo el local storage
    
    const [spanish,setSpanish] = useState(saved);
    
    var API;

    localStorage.setItem("language",JSON.stringify(spanish)); //Guardando el estado en el local storage


    if(saved){
         API = "https://newsdata.io/api/1/news?apikey=pub_6547d847408d34ede1e81dcb8d10856ec8b9&country=es,us&category=technology,entertainment,science&language=es"; 
         //URL de la API en espaniol

    }
    else{
         API = "https://newsdata.io/api/1/news?apikey=pub_6547d847408d34ede1e81dcb8d10856ec8b9&country=es,us&category=technology,entertainment,science&language=en"; 
         //URL de la API en ingles
        }
        
        
    const news = useBlog(API);


    
    
    
    const handleClick = () => {
        setSpanish(!spanish);
        window.location.reload();
        localStorage.clear();
    }
    
    
    return(
        <div className="blog" id="blog">
                <h1 className="page-title">LATEST NEWS</h1>
                <h2 className="page-description">Latest news about technology,entertainment and science</h2>
                <input type="button" value="Language" onClick={handleClick}/>

                {news.length === 0 ? <h1 className="loading">Loading...</h1> :

                        <div className="blog-container" >
                        {news.slice(0,3).map(item => (
                                
                        item.image_url !== null  ? url_img = item.image_url : url_img = "https://i.ibb.co/0skmxQ8/icons8-no-image-gallery-100.png", //si la imgen de la api es null le seteo la url mia

                                
                            <React.Fragment key={item.title}>
                                <BlogItem dateTime={item.pubDate} img={url_img} alt={item.title} title={item.title} description={item.description} />
                                
                            </React.Fragment>
                        ))
                        }
                    </div>

                }   
        </div>

    )
}

export {Blog};