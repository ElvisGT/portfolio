import { useState,useEffect } from 'react';

const useAnimation = () => {
    const [upArrow,setUpArrow] = useState(false);
    const [card,setCard] = useState(false);
    const [portfolioItem,setPortfolioItem] = useState(false);




useEffect(() => {

    //Funcion para escuchar el evento del scroll
    window.addEventListener("scroll", function(){
        const upArrow = document.getElementById("contact");
        const services = document.getElementById("services");
        const portfolio = document.getElementById("portfolio");

        const screenSize = window.innerHeight;

        //Up arrow
        if(upArrow.getBoundingClientRect().top < screenSize){
            setUpArrow(true);
        }
        else{
            setUpArrow(false);
        }

        //Services
        if(services.getBoundingClientRect().top < 300){
            setCard(true);
        }
        else{
            setCard(false);

        }

        //Portafolio
        if(portfolio.getBoundingClientRect().top < 300){
            setPortfolioItem(true);
        }
        else{
            setPortfolioItem(false);

        }


    })

},[])

    return {
        upArrow,
        card,
        portfolioItem
    }

}

export {useAnimation};