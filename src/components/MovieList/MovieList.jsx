import { useContext } from "react"
import { Button } from "../Button/Button"
import styles from "./movielist.module.css"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"





export const MovieList = ({id, name, gender, picture, price}) => {

    const { handleCart } = useContext(GlobalContext);

    const handleMovie = () => {

        const movie = {
            name,
            gender,
            price,
            id




        }

        handleCart(movie)

        console.log(movie)



    }



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
                    <Button text="Alquilar" variant={"btn-warning"} functionClick={handleMovie}/>
            </div>
        </div>
    </>


    )

}