import { useState,useEffect } from 'react';

const usePortfolio = () => {
    const [portfolioItem,setPortfolioItem] = useState(false);


useEffect(() => {

    //Funcion para escuchar el evento del scroll
    window.addEventListener("scroll", function(){
        const portfolio = document.getElementById("portfolio");

        if(portfolio.getBoundingClientRect().top < 300){
            setPortfolioItem(true);
        }
        else{
            setPortfolioItem(false);
        }


    })

},[])

    return portfolioItem

}

export {usePortfolio};