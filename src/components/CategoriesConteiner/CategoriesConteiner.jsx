import { getProductByGender } from "../../asyncmock";
import { MovieDetail } from "../MovieDetail/MovieDetail";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const CategoriesConteiner = () => {


    const [movies, setMovies]  = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {gender} = useParams();



    
    useEffect ( ()=> {


        getProductByGender(gender)
            .then( resp => setMovies(resp)
            , setIsLoading(!isLoading))
            .catch(error => console.log(error))


    }, [])

return(

    <div>


    {

        isLoading?

        <h2>andamo cargando</h2>

        :

        movies.map( product => <MovieDetail key={product.id} {...product}/>)

    }



    </div>


)




}