import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
                <h2>Contacto Rápido</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="email"/>
                    </p>
                    <p>
                        <label for="">Teléfono</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="comentario">Comentario</label>
                        <textarea id="comentario"></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien se pueden comunicar con nosotros...</p>
                    <ul>
                        <img src="img/telephone.png" alt="telefono" width="50px"/><li>341-9876543</li><br/>
                        <img src="img/email.png" alt="email" width="50px"/><li>contacto@celulandia.com.ar</li><br/>
                        <img src="img/facebook.png" alt="facebook" width="50px"/><li>Celulandia</li><br/>
                        <img src="img/twitter.png" alt="twitter" width="50px"/><li>@Celulandia</li><br/>
                        <img src="img/instagram.png" alt="instagram" width="50px"/><li>@Celulandiaok</li>
                    </ul>
            </div>
        </main>
    );
}

export default ContactoPage;