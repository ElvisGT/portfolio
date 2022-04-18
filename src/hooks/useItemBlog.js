import { useState,useEffect } from 'react';

const useItemBlog = () => {
    const [blogItem,setBlogItem] = useState(false);


useEffect(() => {

    //Funcion para escuchar el evento del scroll
    window.addEventListener("scroll", function(){
        const blog = document.getElementById("blog");

        if(blog.getBoundingClientRect().top < 300){
            setBlogItem(true);
        }
        else{
            setBlogItem(false);
        }


    })

},[])

    return blogItem

}

export {useItemBlog};