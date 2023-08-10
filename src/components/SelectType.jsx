import { useEffect } from "react"
import useFetch from "../hooks/useFetch"


const SelectType = ({setSelectValue}) => {

  const url = 'http://pokeapi.co/api/v2/type'
  const [ types, getAllTypes ] = useFetch(url)

  useEffect(()=> { 
    getAllTypes()
  },[])

  const handleChange = e => {
    setSelectValue(e.target.value)
  }


  return (
    <select className="selectType" onChange={handleChange}>
      <option value="allPokemons">all pokemons</option>
    {
      types?.results.map(type => (
        <option key={type.url} value={type.url}>{type.name}</option>
      ))
    }
    </select>
  )
}

export default SelectType 