import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePege from './pages/HomePege'
import PokeIdPage from './pages/PokeIdPage'
import PokedexPage from './pages/PokedexPage'
import Page404 from './pages/Page404'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePege/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage/>}/>
          <Route path='/pokedex/:id' element={<PokeIdPage/>}/>
        </Route>
        
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
  )
}

export default App
