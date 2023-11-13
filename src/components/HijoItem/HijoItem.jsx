import { Button } from "../Button/Button"
import styles from "./hijoitem.module.css"
import { Link } from "react-router-dom"





export const HijoItem = ({id, name, gender, picture, price}) => {



    return(
    <>

        <div className={styles.cuadro}>
            <img src={picture} className={styles.imageCard} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{gender}</p>
                    <p className="card-text">{price}</p>
                    <Link to={`/Movies/${id}`}>
                    <Button text="Detalle" variant={"btn-warning"}/>
                    </Link>
            </div>
        </div>
    </>


    )

}