import { Cart } from "../Cart/Cart"
import { HookUseState } from "../HookUseState/HookUseState"
import styles from "./navbar.module.css"
import { Link } from "react-router-dom"


export const NavBar = () => {
    return(
        <>
        <nav className={styles.navBar}>
            <div>

                <a href="/">Inicio</a>
            </div>
            <div>
                <a href="/Cart">
                <Cart className="cartNav"/>
                </a>
            </div>
            <div>
                <HookUseState/>
            </div>

        </nav>
        </>
    )
}