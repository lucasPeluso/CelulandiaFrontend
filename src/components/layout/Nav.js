import React from "react";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="nosotros">Sobre nosotros</a></li>
                    <li><a href="servicios">Nuestros servicios</a></li>
                    <li><a href="galeria">Celulares reparados</a></li>
                    <li><a href="novedades">Novedades</a></li>
                    <li><a href="contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;