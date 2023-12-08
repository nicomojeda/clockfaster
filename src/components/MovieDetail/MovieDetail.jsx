import styles from './moviedetail.module.css'

export const MovieDetail = ({id, name, gender, duration, picture, price}) => {

    return(

        <>

        <div className={styles.cuadro}>
            <img src={picture} alt="..." className={styles.imageCard}/>
                <div className="card-body">
                    <h5 className="card-title">Nombre: {name}</h5>
                    <p className="card-text">Genero: {gender}</p>
                    <p className="card-text">Duración: {duration}</p>
                    <p className="card-text">Precio: {price}</p>
            </div>
        </div>
    </>




    )






}