import { useEffect,useState } from 'react';

const useBlog = (API) => {

    const [news,setNews] = useState([]);


    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setNews(data));
    },[]);


    return news;
}


export {useBlog};