import React from "react";

import '../styles/components/pages/Novedades.css'

const NovedadesPage = (props) => {
    return (
        <main className="holder">
            <h1 className="tittle">Novedades de Celulandia</h1>

            <div className="novedades">
                <img src="img/novedades1.png" alt=""/>
                <div>
                    <h2>¡Ahora arreglamos tu Oculus!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo ultricies non eget mattis. Penatibus fringilla nunc amet ipsum, dignissim aliquet tellus. Purus risus massa ultrices eget curabitur cursus ac vulputate enim. Mattis morbi quis duis lectus tristique dui et pulvinar risus. Vitae at faucibus turpis vulputate in. Maecenas netus pretium aliquam massa in turpis enim neque. Aenean accumsan viverra enim lacus purus at dictum cursus.</p>
                    <p>Semper viverra sed augue aliquet consequat. Amet, condimentum aliquet imperdiet tristique in. Tortor arcu, tortor, ultrices enim, ipsum viverra lacus. Suspendisse ultrices sed at nullam tortor. Bibendum nulla integer mattis risus. Suscipit.</p>
                </div>
            </div>

            <div className="novedades">
                <img src="img/novedades2.png" alt=""/>
                <div>
                    <h2>Traenos a tu Robot que te lo reparamos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo ultricies non eget mattis. Penatibus fringilla nunc amet ipsum, dignissim aliquet tellus. Purus risus massa ultrices eget curabitur cursus ac vulputate enim. Mattis morbi quis duis lectus tristique dui et pulvinar risus. Vitae at faucibus turpis vulputate in. Maecenas netus pretium aliquam massa in turpis enim neque. Aenean accumsan viverra enim lacus purus at dictum cursus.</p>
                    <p>Semper viverra sed augue aliquet consequat. Amet, condimentum aliquet imperdiet tristique in. Tortor arcu, tortor, ultrices enim, ipsum viverra lacus. Suspendisse ultrices sed at nullam tortor. Bibendum nulla integer mattis risus. Suscipit.</p>
                </div>
            </div>

            <div className="novedades">
                <img src="img/novedades3.png" alt=""/>
                <div>
                    <h2>Compramos tu placa a precio razonable</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo ultricies non eget mattis. Penatibus fringilla nunc amet ipsum, dignissim aliquet tellus. Purus risus massa ultrices eget curabitur cursus ac vulputate enim. Mattis morbi quis duis lectus tristique dui et pulvinar risus. Vitae at faucibus turpis vulputate in. Maecenas netus pretium aliquam massa in turpis enim neque. Aenean accumsan viverra enim lacus purus at dictum cursus.</p>
                    <p>Semper viverra sed augue aliquet consequat. Amet, condimentum aliquet imperdiet tristique in. Tortor arcu, tortor, ultrices enim, ipsum viverra lacus. Suspendisse ultrices sed at nullam tortor. Bibendum nulla integer mattis risus. Suscipit.</p>
                </div>
            </div>

            <a href="contacto.html" className="btn-wsp">
                <p>WhatsApp</p>
            </a>

    </main>
    );
}

export default NovedadesPage;