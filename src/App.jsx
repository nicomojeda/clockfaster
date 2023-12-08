import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { MainTitle } from './components/MainTitle/MainTitle'
import { MoviesListConteiner } from './components/MoviesListConteiner/MoviesListConteiner'
import {BrowserRouter, Routes, Route} from  "react-router-dom"
import { Cart, MovieList } from './components'
import { MoviesDetailConteiner } from './components/MoviesDetailConteiner/MoviesDetailConteiner'
import { CategoriesConteiner } from './components/CategoriesConteiner/CategoriesConteiner'
import { GlobalContextProvider } from './context/GlobalContext'

function App() {


  return (
    <>
      <MainTitle/>

      <NavBar/>
      <GlobalContextProvider>

      <BrowserRouter>




        <Routes>

          <Route path="/" element={<MoviesListConteiner/>}/>



          <Route path="/Cart" element={<Cart/>}/>

         
       
           
         





          <Route path="/Movies/:id" element={<MoviesDetailConteiner/>}/>
          <Route path="/Categories/:gender" element={<CategoriesConteiner/>}/>
         
          
          </Routes>





      </BrowserRouter>

      </GlobalContextProvider>






    </>
  )
}

export default App
