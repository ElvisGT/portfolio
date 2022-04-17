import { useState, useEffect } from 'react';


const useCard = () => {
    const [card,setCard] = useState(false);


    useEffect(() => {
        //Funcion para escuchar el evento del scroll
    window.addEventListener("scroll", function(){
        const services = document.getElementById("services");
        const screenSize = window.innerHeight;


        if(services.getBoundingClientRect().top < 300){
            setCard(true);
        }
        else {
            setCard(false);
        }

    })
    },[])

    return card;
}

export {useCard};