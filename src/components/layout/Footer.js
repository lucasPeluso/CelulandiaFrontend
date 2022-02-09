import React from "react";

import '../../styles/components/layout/Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <div className="container-footer">
                <div className="grid-footer">
                    <div>
                        <p style={{ fontWeight: "bold" }}>
                            Servicios
                        </p>
                        <p>
                            <i className="fas fa-chevron-right"></i> Reemplazo de pantalla táctil<br/>
                            <i className="fas fa-chevron-right"></i> Reemplazo de módulo<br/>
                            <i className="fas fa-chevron-right"></i> Cambio de batería<br/>
                            <i className="fas fa-chevron-right"></i> Cambio de conectores de carga de lista<br/>
                            <i className="fas fa-chevron-right"></i> Solución en problemas de placa
                        </p>
                    </div>
                    <div>
                        <p style={{ fontWeight: "bold" }}>
                            Horarios de atención
                        </p>
                        <p>
                            Lunes a Viernes: 10 a 18 hs.<br/>
                            Sábados: 9 a 13 hs.
                        </p>
                    </div>
                    <div>
                        <p  style={{ fontWeight: "bold" }}>
                            ¿Dudas? Contactanos
                        </p>
                        <p>
                            +5493416114242<br/>
                            contacto@celulandia.com.ar<br/>
                            España 761, Rosario
                        </p>
                    </div>
                    <div>
                        <p  style={{ fontWeight: "bold" }}>
                            SITIO SEGURO
                        </p>
                        <p>
                            POLÍTICA DE PRIVACIDAD
                        </p>
                    </div>
                </div>
                <div className="copy-footer">
                    Diseñado por Lucas Peluso &copy; - 2022
                </div>
            </div>
        </footer>
    );
}

export default Footer;