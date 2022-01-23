import React from "react";

import '../styles/components/pages/Servicios.css'

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h1 className="tittle">Servicios que brindamos</h1>
        
            <ul className="lista-servicios">
                <li><i className="far fa-check-square"></i> Reemplazo de pantalla táctil rajada o estallada</li>
                <li><i className="far fa-check-square"></i> Cambio de baterías</li>
                <li><i className="far fa-check-square"></i> Cambio de conectores de carga</li>
                <li><i className="far fa-check-square"></i> Cambio de módulos</li>
                <li><i className="far fa-check-square"></i> Solución en problemas de placa</li>
            </ul>

            <div className="servicios">
                <img src="img/servicios.png" alt=""/>
                <p>Contamos con profesionales capacitados en las últimas tendencias y con tecnología en maquinaria y herramientas de última generación.</p>
            </div>

            
            <h2 className="subtitulo">Marcas con las que trabajamos</h2>

            <div className="container-marca">
                <div className="marca">
                    <h6>IPhone</h6>
                    <img src="img/apple.png" alt=""/>
                </div>
                <div className="marca">
                    <h6>Samsung</h6>
                    <img src="img/samsung.png" alt=""/>
                </div>
                <div className="marca">
                    <h6>Xiaomi</h6>
                    <img src="img/xiaomi.png" alt=""/>
                </div>
                <div className="marca">
                    <h6>Motorola</h6>
                    <img src="img/Moto.png" alt=""/>
                </div>
            </div>

            <a href="contacto.html" className="btn-wsp">
                <p>WhatsApp</p>
            </a>

        </main>
    );
}

export default ServiciosPage;