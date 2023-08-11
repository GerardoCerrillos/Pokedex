import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './Styles/PokeIdPage.css'

const PokeIdPage = () => {
  
  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/` 
  const [ pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  },[id])
  
  return (
    <article className='pokeidpage__container'>
      <img className='pokeidpage__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2 className='pokeidpage__name'>{pokemon?.name}</h2>
    </article>
  )
}

export default PokeIdPage 