import { Button } from "../Button/Button"
import styles from "./navbar.module.css"
import cartpicture from './cartimg.png'





export const NavBar = () => {

    const arrGender = ["Terror", "Romantico","Ciencia Ficcion","Accion","Comedia"];


const handleTerror = () =>{

    console.log("Terror")

return (

    gender = "Terror"

)

}



    return(
        <>
        <nav className={styles.navBar}>
            <div>
                <a href='/'>
                    <button type="button" className="btn btn-dark">Inicio</button>
                </a>

                <a href={`/Categories/${arrGender[0]}`}>
                        <Button text="Terror" variant={"btn-warning"}/>
                </a>

                <a href={`/Categories/${arrGender[1]}`}>
                    <Button text="Romantico" variant={"btn-warning"}/>
                </a>
                <a href={`/Categories/${arrGender[2]}`}>
                    <Button text="Ciencia Ficción" variant={"btn-warning"}/>
                </a>
                <a href={`/Categories/${arrGender[3]}`}>
                    <Button text="Acción" variant={"btn-warning"}/>
                </a>
                <a href={`/Categories/${arrGender[4]}`}>
                    <Button text="Comedia" variant={"btn-warning"}/>
                </a>


                <a href={'/Cart/'}>
                    <img className={styles.imageCart} src= {cartpicture} />
                </a>

            </div>


        </nav>
        </>
    )
}