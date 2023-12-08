import { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import { MovieList } from "../MovieList/MovieList";
import styles from "./movieslistconteiner.module.css"

export const MoviesListConteiner = () => {



    const[products, setProducts]  = useState([]);
    const[isLoading, setIsLoading] = useState(true);




    useEffect(()=> {

        getProducts()
            .then( resp => setProducts (resp), setIsLoading(!isLoading))
            .catch(error => console.log(error))


    }, [] )



    return(
        <>
        <div className={styles.cuadro}>


                {

                    isLoading?

                    <h2 className="shadow-2xl">Cargando...</h2>
            
                     :

                    
                    products.map( product => <MovieList key={product.id} {...product}/>)

                }

            
            

            </div>

            </>

    )




}