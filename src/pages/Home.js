import React from "react";

import '../styles/components/pages/Home.css'

const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="container-img">
            
            <h1 className="h1-img">Servicio técnico<br/>
                de celulares</h1>
            <a href="contacto.html" class="btn-img">¡Escribinos!</a>
            <img className="imghome" src="img/imghome.png" alt=""/>   

        </div>

        <h2>Contamos con la MEJOR ATENCIÓN y con los MEJORES ESPECIALISTAS en reparación de celulares y tablet.</h2>

        <div className="barra">
            <h3>Servicios</h3>
        </div>

        <div className="container-card">
            <div className="card">
                <img src="img/celulares1.jpg" alt=""/>
                
                <p className="card-p">Limpieza y mantenimiento</p>
                <p className="card-p">Corrección de errores en el sistema</p>
                <p className="card-p">Reemplazo de modulo</p>
            </div>

            <div className="card">
                <img src="img/celulares2.jpg" alt=""/>
                
                <p className="card-p">Formateo y reseteo de fábrica</p>
                <p className="card-p">Solución de problemas de placa</p>
                <p className="card-p">Arreglo del display</p>
            </div>

            <div className="card">
                <img src="img/celulares3.png" alt=""/>

                <p className="card-p">Cambio de conectores de carga</p>
                <p className="card-p">Reemplazo de pantalla táctil</p>
                <p className="card-p">Cambio de batería</p>
            </div>
        </div>

        <div className="barra">
            <h3>Testimonios</h3>
        </div>

        {/* <div class="testimonios">
            <div class="carousel">
                <div class="carousel-container">
                    <button aria-label="Anterior" class="btn-left">
                        <i class="fas fa-chevron-left"></i>
                    </button>

                    <div class="carousel-lista">
                        <div class="elemento">
                            <p>
                                Excelente atención!! Te hacen el presupuesto sin cargo, 
                                te responden muy rápido y en el día ya tenía mi problema resuelto! Sin duda 
                                los recomendaría y volvería a elegirlos!! 10 puntos!
                                <br/><br/><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </p>                            
                            <img src="img/persona1.png" alt=""/>
                            <p class="name">Jacob Jones</p>
                        </div>
                        <div class="elemento">
                            <p>
                                Muy recomendable! la atención fue super rápida, 
                                el trato muy bueno y mucho más barato de lo que pensé! Por eso los eligo siempre!! 
                                Con 5 estrellas me quedo corto!
                                <br/><br/><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </p>
                            <img src="img/persona2.png" alt=""/>
                            <p class="name">Mark Marquez</p>
                        </div>
                        <div class="elemento">
                            <p>
                                Me encanta la rapidez con la que me solucionan los problemas técnicos, 
                                además de que son super amables y no te hablan con palabras extrañas para sacarte mas plata! 
                                Los recomiendo, de lo mejor de Rosario!
                                <br/><br/><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </p>
                            <img src="img/persona3.png" alt=""/>
                            <p class="name">Luke Lucky</p>
                        </div>
                    </div>

                    <button aria-label="Siguiente" class="btn-right">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <img src="img/Vector.png" alt=""/>
        </div> */}

        <h4>¡Presupuesto sin cargo!</h4>
        <img className="vector" src="img/Vector_2_1.png" alt=""/>

        <a href="contacto.html" className="btn-wsp">
            <p>WhatsApp</p>
        </a>

    </main>
    );
}

export default HomePage;