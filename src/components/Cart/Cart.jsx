import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export const Cart = () => {

    const { cart } = useContext(GlobalContext)

    return (

        <>
           <h1>Estas en el chango</h1>
           {cart.map(c=> <p key={c.id}>Movie: {c.name} </p>)}
        </>
    
    )
}
