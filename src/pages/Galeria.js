import React from "react";

import '../styles/components/pages/Galeria.css'

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <h2>Galería de celulares reparados</h2>
            <div className="galeria">
                <div className="foto">
                    <img src="img/celular1.jpg" alt=""/>
                </div>
                <div className="foto">
                    <img src="img/celular2.jpg" alt=""/>
                </div>
                <div className="foto">
                    <img src="img/celular3.jpg" alt=""/>
                </div>
                <div className="foto">
                    <img src="img/celular4.jpg" alt=""/>
                </div>
                <div className="foto">
                    <img src="img/celular5.jpg" alt=""/>
                </div>
                <div className="foto">
                    <img src="img/celular6.jpg" alt=""/>
                </div>
                <div className="foto">
                    <img src="img/celular7.jpg" alt=""/>
                </div>
            </div>
    </main>
    );
}

export default GaleriaPage;