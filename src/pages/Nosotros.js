import React from "react";

import '../styles/components/pages/Nosotros.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <h1 className="tittle">¿Quiénes Somos?</h1>

            <div className="container-personas">
                <div className="persona">
                    <img src="img/persona4.jpg" alt=""/>
                    <h6>Bessie Cooper</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien faucibus at sem non ut nec est non.<br/><br/>
                    Vestibulum in ipsum donec tellus non dolor magna nisi non. Ultricies faucibus quis.</p>
                </div>
                <div className="persona">
                    <img src="img/persona5.jpg" alt=""/>
                    <h6>Brad Nguyen</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra ligula mi sed. Commodo dictumst sapien aliquet risus gravida.<br/><br/>
                    Phasellus egestas est diam tempus  blandit.</p>
                </div>
                <div className="persona">
                    <img src="img/persona6.jpg" alt=""/>
                    <h6>Wade Warren</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar molestie vel eget mauris velit feugiat.<br/><br/>
                    Lacus est id rutrum non dolor ut lobortis. Et nisl  tempus ut aliquet.</p>
                </div>
                <div className="persona">
                    <img src="img/persona7.jpg" alt=""/>
                    <h6>Cameron Williamson</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat ultricies fermentum nullam enim, leo luctus cursus.<br/><br/>
                    Mauris fermentum lectus risus,  dictum feugiat lorem.</p>
                </div>
            </div>

            <div className="container-nos">
                <h2 className="subtittle">¿Por qué<br/>
                elegirnos?</h2>
                <div>
                    <img className="img-nos" src="img/nosotros.png" alt=""/>
                    <ul className="beneficios">
                        <li>Nos comprometemos en cada servicio.</li>
                        <li>Brindamos un trato personalizado.</li>
                        <li>Ofrecemos una buena relación precio/calidad.</li>
                        <li>Maquinaria de última tecnología para trabajos específicos.</li>
                        <li>Compromisos con el tiempo de cada pedido.</li>
                        <li>Nos capacitamos permanentemente.</li>
                    </ul>
                </div>
            </div>

            <a href="contacto" className="btn-wsp">
                <p>WhatsApp</p>
            </a>

        </main>
    );
}

export default NosotrosPage;