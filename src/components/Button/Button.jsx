export const Button = ({text="Botón", variant="btn btn-primary", functionClick}) => {

    return(

            <button className={`btn ${variant}`} onClick={functionClick}>{text}</button>
    )


}