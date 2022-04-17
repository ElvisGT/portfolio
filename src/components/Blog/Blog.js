import React from 'react';
import {BlogItem} from './BlogItem';

const Blog = () => {
    return(
        <div className="blog">
                <h1 className="page-title">LATEST NEWS</h1>
                <h2 className="page-description">Latest news about technology,entertainment and science</h2>
                
                <div className="blog-container" >
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
        </div>

    )
}

export {Blog};