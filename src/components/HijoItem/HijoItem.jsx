import styles from "./hijoitem.module.css"

export const HijoItem = ({message}) => {

    return(

        
        <div className={styles.cuadro}>
        {message}
        </div>


    )

}