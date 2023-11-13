import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { MainTitle } from './components/MainTitle/MainTitle'
import { MoviesListConteiner } from './components/MoviesListConteiner/MoviesListConteiner'
import {BrowserRouter, Routes, Route} from  "react-router-dom"
import { Cart} from './components'
import { MoviesDetailConteiner } from './components/MoviesDetailConteiner/MoviesDetailConteiner'

function App() {


  return (
    <>
      <MainTitle/>

      <NavBar/>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MoviesListConteiner/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Movies/:id" element={<MoviesDetailConteiner/>}/>

        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
