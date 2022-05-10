import React from 'react';
import {BlogItem} from './BlogItem';
import {useBlog} from '../../hooks/useBlog';
import { PageTitle } from '../PageTitle/PageTitle';




const Blog = () => {
    var url_img; // declaracion de variable para setear la url de la imagen del post
    const API = "https://newsdata.io/api/1/news?apikey=pub_6547d847408d34ede1e81dcb8d10856ec8b9&country=es,us,ca,cn&category=technology,entertainment,science&language=es&page=1"; 

    
    const news = useBlog(API);


    return(
        <div className="blog" id="blog">
                <PageTitle title="ÚLTIMAS NOTICIAS" description="Últimas noticias acerca de tegnología, entretenimiento y ciencia."/>
                {news.length === 0 
                
                    ? 
                        <React.Fragment>
                            <h1 className="loading">Cargando...</h1> 
                            <div className="loading-box">
                                <div className="loading-box-item"></div>
                            </div>
                        </React.Fragment>

                    :

                        <div className="blog-container" >
                        {news.slice(0,3).map(item => (
                            
                            item.image_url !== null  ? url_img = item.image_url 
                                : url_img = "https://i.ibb.co/QXBX6Nw/pexels-vie-studio-4439425-1.jpg",
                            //si la imgen de la api es null le seteo la url mia

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