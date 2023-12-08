import { useState } from "react"
import { getProductById } from "../../asyncmock";
import { useEffect } from "react";
import { MovieDetail } from "../MovieDetail/MovieDetail";
import { useParams } from "react-router-dom";
import styles from "./moviesdetailconteiner.module.css"

export const MoviesDetailConteiner = () => {

    const [movie, setMovie]  = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams()

    console.log(id)


    
    useEffect(()=> {


        getProductById(id)
            .then( resp => setMovie (resp), setIsLoading(!isLoading))
            .catch(error => console.log(error))
            console.log(movie)


    }, [] )

return(

    <div className={styles.cuadro}>


    {

        isLoading?

        <h2>andamo cargando</h2>

        :

        <MovieDetail {...movie}/>

    }



    </div>


)




}