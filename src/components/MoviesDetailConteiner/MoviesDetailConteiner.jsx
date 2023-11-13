import { useState } from "react"
import { getProductById } from "../../asyncmock";
import { useEffect } from "react";
import { MovieDetail } from "../MovieDetail/MovieDetail";
import { useParams } from "react-router-dom";

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

    <div className="container inline justify-content-center mt-5">


    {

        isLoading?

        <h2>andamo cargando</h2>

        :

        <MovieDetail {...movie}/>

    }



    </div>


)




}