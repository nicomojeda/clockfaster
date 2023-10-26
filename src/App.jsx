import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { MainTitle } from './components/MainTitle/MainTitle'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner'

function App() {


  return (
    <>
    <MainTitle/>

      <NavBar/>

      <ItemListConteiner/>
    </>
  )
}

export default App
