import chuckypicture from '../chucky.jpg';
import pdteamopicture from '../pdteamo.webp';
import hungrygamespicture from '../hungrygames.jpg';
import unpapagenialpicture from '../unpapagenial.jpg';
import misionimposiblepicture from '../misionimposible.jpg';
import friday13picture from '../friday13.jpg';
import terminatorpicture from '../terminator.webp'

const products = [

    {id: "1", name: "Chucky", gender: "Terror", duration: "120 min", picture:`${chuckypicture}`, price:"$100"},
    {id: "2", name: "Posdata: Te amo", gender: "Romantico", duration: "120 min", picture:`${pdteamopicture}`},
    {id: "3", name: "Los juegos del hambre", gender: "Ciencia Ficcion", duration: "240 min", picture:`${hungrygamespicture}`, price:"$100"},
    {id: "4", name: "Un papa genial", gender: "Comedia", duration: "120 min", picture:`${unpapagenialpicture}`, price:"$100"},
    {id: "5", name: "Mision Imposible", gender: "Accion", duration: "120 min", picture:`${misionimposiblepicture}`, price:"$100"},
    {id: "6", name: "Martes 13", gender: "Terror", duration: "120 min", picture:`${friday13picture}`, precio:"$100"},
    {id: "7", name: "Terminator", gender: "Ciencia Ficcion", duration: "120 min", picture:`${terminatorpicture}`, price:"$100"},

];

export const getProducts = () => {

    return new Promise ( (resolve, reject ) => {

        if( products.length > 0 ) { 
            setTimeout( () => {
            resolve(products)}
            ,3000
            )
        }
    else{
        reject("No hay productos disponibles")
    }


    })

}                                                   

export const getProductById = (id) => {

    let movie = products.find( (movies) => movies.id == id);


    console.log(movie)


    return new Promise ( (resolve, reject)=>{



    if(movie == undefined) {
      
        reject("Info doesn't exist")
    }

    else{
     

        setTimeout( () =>{
            resolve(movie)
        },3000)
        }


    }

)

}

export const getProductByGender = (gender) => {

    let movie = products.find( (movies) => movies.gender == gender);


    console.log(movie)


    return new Promise ( (resolve, reject)=>{



    if(movie == undefined) {
      
        reject("Info doesn't exist")
    }

    else{
     

        setTimeout( () =>{
            resolve(movie)
        },3000)
        }


    }

)

}