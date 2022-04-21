import React from 'react';
import { PageTitle } from '../PageTitle/PageTitle';

const Home = () => {
    return(
        <div className="home">
            <div className="home-img-container">
                <img className="home-img" src="https://i.ibb.co/nDJ2gQF/IMG-20220413-190104.jpg" alt="foto de Elvis" />
            </div>
            <div className="home-container">
                <PageTitle title="INTRODUCCIÓN" description="Frontend Developer React JS"/>
                
                <p className="home-description">Mi nombre es Elvis y soy Frontend Developer React JS. Estudio diariamente de forma autodidacta para superarme y aprender nuevas tecnologías. No creo en las cosas imposibles, pienso que con perseverancia, sacrificio y esmero todo se puede lograr.
                </p>
            </div>
        </div>
    );
}

export {Home};