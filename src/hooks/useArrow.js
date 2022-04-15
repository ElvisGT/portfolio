import { useState,useEffect } from 'react';

const useArrow = () => {
    const [upArrow,setUpArrow] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            const scroll = document.documentElement.scrollTop || document.body.scrollTop;

            if(scroll > 100){
                setUpArrow(true);
            }
            else{
                setUpArrow(false);
            }
        }
    },[])


    return upArrow;
}


export {useArrow};