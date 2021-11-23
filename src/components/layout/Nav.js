import React from "react";

import { NavLink } from "react-router-dom";

import '../../styles/components/layout/Nav.css'


const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Inicio</NavLink></li>
                    <li><NavLink to="nosotros" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Sobre nosotros</NavLink></li>
                    <li><NavLink to="servicios" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Nuestros servicios</NavLink></li>
                    <li><NavLink to="galeria" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Celulares reparados</NavLink></li>
                    <li><NavLink to="novedades" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Novedades</NavLink></li>
                    <li><NavLink to="contacto" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;