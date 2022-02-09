import React from "react";

import '../styles/components/pages/Galeria.css'

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <h1 className="tittle">Galería de celulares reparados</h1>

            <div className="container-galery">
                <div className="item-galery">
                    <img src="img/galeria1.png" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria2.jpg" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria3.png" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria4.png" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria5.png" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria6.png" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria7.png" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria8.png" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria9.jpg" alt=""/>
                </div>
                <div className="item-galery">
                    <img src="img/galeria10.jpg" alt=""/>
                </div>
            </div>

            <a href="contacto" className="btn-wsp">
                <p>WhatsApp</p>
            </a>
    </main>
    );
}

export default GaleriaPage;