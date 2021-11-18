import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
        <div>
            <img className="imghome" src="img/imghome.png" alt="Reparación de celulares"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptas vero. 
                    Aliquid earum similique, quos, temporibus possimus sunt deleniti ducimus quisquam beatae, 
                    eius aut vitae obcaecati impedit voluptate nulla consectetur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam quibusdam!
                    Consectetur quaerat culpa repellendus magni laborum, facere eius velit tenetur voluptate.
                    Odit dolore vel tempora error reprehenderit impedit rerum.
                </p>
            </div>
            <div className="testimonios right">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">De los mejores del rubro</span>
                    <span>Julio López - Dueño de Samsung</span>
                </div>
            </div>
        </div>
    </main>
    );
}

export default HomePage;