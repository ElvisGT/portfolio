import { useState,useEffect } from 'react';

const useArrow = () => {
    const [upArrow,setUpArrow] = useState(false);


useEffect(() => {

    //Funcion para escuchar el evento del scroll
    window.addEventListener("scroll", function(){
        const upArrow = document.getElementById("contact");
        const screenSize = window.innerHeight;

        if(upArrow.getBoundingClientRect().top < screenSize){
            setUpArrow(true);
        }
        else{
            setUpArrow(false);
        }


    })

},[])

    return upArrow

}

export {useArrow};