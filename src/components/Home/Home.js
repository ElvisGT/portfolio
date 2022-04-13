import React from 'react';

const Home = () => {
    return(
        <div className="home">
            <div className="home-img-container">
                <img className="home-img" src="" alt="foto de Elvis" />
            </div>
            <div className="home-container">
                <h1 className="home-intro">INTRODUCTION</h1>
                <h2 className="home-front">Frontend Developer React JS</h2>
                <p className="home-description">Mi nombre es Elvis y soy Frontend Developer React JS. Estudio diariamente de forma autodidacta para superarme y aprender nuevas tecnologías. No creo en las cosas imposibles, pienso que con perseverancia, sacrificio y esmero todo se puede lograr.
                </p>
            </div>
        </div>
    );
}

export {Home};