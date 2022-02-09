import React from "react";

import '../styles/components/pages/Contacto.css'

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <h1 className="tittle">¡Comunicate con nosotros!</h1>

            <div className="container-contacto">
                <div className="contacto-left">
                    <h6>Contactanos directamente por acá:</h6>

                    <form action="" method="" className="formulario">
                        <p>
                            <label for="">Nombre</label>
                            <input type="text"/>
                        </p>
                        <p>
                            <label for="">Email</label>
                            <input type="email"/>
                        </p>
                        <p>
                            <label for="">Celular</label>
                            <input type="text"/>
                        </p>
                        <p>
                            <label for="comentario">Mensaje</label>
                            <textarea id="comentario"></textarea>
                        </p>
                        <p className="acciones"><input type="submit" value="Enviar"/></p>
                    </form>
                </div>
                <div>
                    <h6>Otras formas de charlar con nosotros:</h6>
                    
                    <a href="contacto" className="btn-inst">
                        <i className="fab fa-instagram"></i>
                    </a>
                    
                    <a href="contacto" className="btn-msg">
                        <i className="fab fa-facebook-messenger"></i>
                    </a>
                    
                    <a href="contacto" className="btn-wsp2">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>

            <h2 className="subtittle">Gracias por confiar en Celulandia</h2>
        </main>
    );
}

export default ContactoPage;