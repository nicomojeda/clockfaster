

export const MovieDetail = ({id, name, gender, duration, picture}) => {

    return(

        <>

        <div>
            <img src={picture} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nombre: {name}</h5>
                    <p className="card-text">Genero: {gender}</p>
                    <p className="card-text">Duración: {duration}</p>
            </div>
        </div>
    </>




    )






}