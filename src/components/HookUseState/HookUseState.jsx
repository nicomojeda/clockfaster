import {useState} from "react"
import styles from "./hookusestate.module.css"

export const HookUseState = () => {
    const [count, setCount] = useState (0);

    return(
        <div className={styles.hus}>
            {count}
        </div>
    )


}