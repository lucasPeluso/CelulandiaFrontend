import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

import '../styles/components/pages/Novedades.css';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);


    return (
        <main className="holder">
            <h1 className="tittle">Novedades de Celulandia</h1>

            {loading ? (
                <p>Cargando las novedades...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title = {item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
            
            <a href="contacto" className="btn-wsp">
                <p>WhatsApp</p>
            </a>

        </main>
    );
}

export default NovedadesPage;