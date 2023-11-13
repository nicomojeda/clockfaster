import { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import { HijoItem } from "../HijoItem/HijoItem";

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
        <div className="container text-center flex-auto inline-block">


                {

                    isLoading?

                    <h2 className="shadow-2xl">Cargando...</h2>
            
                     :

                    
                    products.map( product => <HijoItem key={product.id} {...product}/>)

                }

            
            

            </div>

            </>

    )




}