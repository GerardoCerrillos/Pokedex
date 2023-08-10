import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokeCard"
import SelectType from "../components/SelectType"
import './Styles/PokedexPage.css'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSetselectValue] = useState('allPokemons')

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=400'
  const [pokemons,getAllpokemons, getPokemonsByType] = useFetch(url)

  useEffect(() => {
    if(selectValue === 'allPokemons'){
      getAllpokemons()
    }else{
      getPokemonsByType(selectValue)
    }
  },[selectValue])

  const inputSearch = useRef()

  const handlesubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cdFilter = poke => poke.name.includes(inputValue)

  return (
    <div className="pokedexpage__container">
      <p className="pokedexpage__titulo"><span>Welcome {trainer}</span>,here you could find your favorite pokemon.</p>
      <div className="container__3obj"> 
        <form className="pokedexpage__form" onSubmit={handlesubmit}>
          <input className="pokedexpage__input" ref={inputSearch} type="text" />
          <button className="pokedexpage__btn">search</button>
        </form>
        <SelectType setSetselectValue={setSetselectValue}/>
      </div>
      <div className="pokecard__container">
        {
          pokemons?.results.filter(cdFilter).map(poke => (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage