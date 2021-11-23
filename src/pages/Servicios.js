import React from "react";

import '../styles/components/pages/Servicios.css'

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="img/celularesiphone.jpg" alt=""/>
                <div className="info">
                    <h4>Celulares Iphone</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, numquam fugiat!
                        Molestias, minima? Distinctio sint molestiae iusto ipsum omnis consectetur est,
                        harum sapiente deserunt, nostrum ullam odit? Molestias, enim quibusdam?
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/celularesandroid.jpg" alt=""/>
                <div className="info">
                    <h4>Celulares Android</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, numquam fugiat!
                        Molestias, minima? Distinctio sint molestiae iusto ipsum omnis consectetur est,
                        harum sapiente deserunt, nostrum ullam odit? Molestias, enim quibusdam?
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/celularesmicrosoft.jpg" alt=""/>
                <div className="info">
                    <h4>Celulares Microsoft</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, numquam fugiat!
                        Molestias, minima? Distinctio sint molestiae iusto ipsum omnis consectetur est,
                        harum sapiente deserunt, nostrum ullam odit? Molestias, enim quibusdam?
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;