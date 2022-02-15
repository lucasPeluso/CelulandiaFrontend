const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (

        <div>
            <div className="novedades">
            <img src={imagen ? imagen : "img/imgnodisponible.jpg"}  />
                <div>
                    <h2>{title}</h2>
                    <h6>{subtitle}</h6>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
}

export default NovedadItem;