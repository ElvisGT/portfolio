import React,{ useState } from 'react';
import {BlogItem} from './BlogItem';
import {useBlog} from '../../hooks/useBlog';




const Blog = () => {
    const [spanish,setSpanish] = useState(false);
    
    var API;

    if(spanish){
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
        
    }

    return(
        <div className="blog" id="blog">
                <h1 className="page-title">LATEST NEWS</h1>
                <h2 className="page-description">Latest news about technology,entertainment and science</h2>
                <input type="button" value="Language" onClick={handleClick}/>

                {news.length === 0 ? <h1 className="loading">Loading...</h1> :

                        <div className="blog-container" >
                        {news.slice(0,3).map(item => (
                            <React.Fragment key={item.title}>
                                <BlogItem dateTime={item.pubDate} img={item.image_url} alt={item.title} title={item.title} description={item.description} category={item.category}/>
{/*                                 
                                <BlogItem dateTime={item.pubDate} img={item.image_url} alt={item.title} title={item.title} description={item.description} category={item.category}/>
                                
                                <BlogItem dateTime={item.pubDate} img={item.image_url} alt={item.title} title={item.title} description={item.description} category={item.category}/> */}
                                
                            </React.Fragment>
                        ))
                        }
                    </div>

                }   
        </div>

    )
}

export {Blog};