import React from "react";
import { useState } from "react";
import axios from 'axios';
import '../styles/components/pages/Contacto.css'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main className="holder">
            <h1 className="tittle">¡Comunicate con nosotros!</h1>

            <div className="container-contacto">
                <div className="contacto-left">
                    <h6>Contactanos directamente por acá:</h6>

                    <form action="/contacto" method="post" className="formulario"
                        onSubmit={handleSubmit} >
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre}
                            onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="email" name="email" value={formData.email}
                            onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="telefono">Celular</label>
                            <input type="text" name="telefono" value={formData.telefono}
                            onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea id="comentario" name="mensaje" value={formData.mensaje}
                            onChange={handleChange}></textarea>
                        </p>
                        <p className="acciones">
                        <input type="submit" value="Enviar"/></p>

                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

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