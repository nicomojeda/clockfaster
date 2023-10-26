import { Cart } from "../Cart/Cart"
import { HookUseState } from "../HookUseState/HookUseState"
import styles from "./navbar.module.css"


export const NavBar = () => {
    return(
        <>
        <nav className={styles.navBar}>
            <div>
                <a href="">Inicio</a>
                <a href="">Terror</a>
                <a href="">Comedia</a>
                <a href="">Romantico</a>
                <a href="">Acción</a>
            </div>
            <div>
                <Cart className="cartNav"/>
            </div>
            <div>
                <HookUseState/>
            </div>

        </nav>
        </>
    )
}