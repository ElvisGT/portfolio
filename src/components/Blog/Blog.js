import React from 'react';
import {BlogItem} from './BlogItem';
import {useBlog} from '../../hooks/useBlog';

const API = ""; //URL de la API


const Blog = () => {
    const news = useBlog(API);

    return(
        <div className="blog" id="blog">
                <h1 className="page-title">LATEST NEWS</h1>
                <h2 className="page-description">Latest news about technology,entertainment and science</h2>
                
                {news.length === 0 ? <h1 className="loading">Loading...</h1> :

                    <div className="blog-container" >
                        {news.slice(0,4).map(item => (
                            <React.Fragment key={item.id}>
                                <BlogItem />
                                <BlogItem />
                                <BlogItem />
                            </React.Fragment>
                        ))
                        }
                    </div>

                }   
        </div>

    )
}

export {Blog};