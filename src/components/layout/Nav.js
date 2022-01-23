import React from "react";

import { NavLink } from "react-router-dom";

import '../../styles/components/layout/Nav.css'


const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => ({ boxShadow: isActive ? 'inset 3px 3px 0 0 rgb(255, 255, 255)' : '' })}>Inicio</NavLink></li>
                    <li><NavLink to="nosotros" style={({ isActive }) => ({ boxShadow: isActive ? 'inset 3px 3px 0 0 rgb(255, 255, 255)' : '' })}>Nosotros</NavLink></li>
                    <li><NavLink to="servicios" style={({ isActive }) => ({ boxShadow: isActive ? 'inset 3px 3px 0 0 rgb(255, 255, 255)' : '' })}>Servicios</NavLink></li>
                    <li><NavLink to="galeria" style={({ isActive }) => ({ boxShadow: isActive ? 'inset 3px 3px 0 0 rgb(255, 255, 255)' : '' })}>Reparaciones</NavLink></li>
                    <li><NavLink to="novedades" style={({ isActive }) => ({ boxShadow: isActive ? 'inset 3px 3px 0 0 rgb(255, 255, 255)' : '' })}>Novedades</NavLink></li>
                    <li><NavLink to="contacto" style={({ isActive }) => ({ boxShadow: isActive ? 'inset 3px 3px 0 0 rgb(255, 255, 255)' : '' })}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

