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
    // <article>
    //   <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
    //   <h2>{pokemon?.name}</h2>
    // </article>
    <div className="pokeid">
      {/* <Header /> */}
      <div className="pokeid__container">
        <img
          className="pokeid__img"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt="pokemon-img"
        />
        <div className={`pokeid__bg ${pokemon?.types[0].type.name}`}></div>
      </div>
      <div className="pokeid__data">
        <h1 className="pokeid__name">{pokemon?.name}</h1>
        <h2 className="pokeid__id">
          {pokemon?.id} <br />#
        </h2>
      </div>
      <ul className="pokeid__stats">
        <li className="pokeid__weight">
          <span className="span">Weight</span>
          <br />
          <span className="pokeid__span">{pokemon?.weight}</span>
        </li>
        <li className="pokeid__height">
          <span className="span">Height</span>
          <br />
          <span className="pokeid__span">{pokemon?.height}</span>
        </li>
      </ul>
      <div className="pokeid__tyab">
        <div className="pokeid__types">
          <h3 className="pokeid__text">Type</h3>
          {pokemon?.types.map((type) => (
            <div key={type.slot} className={`pokeid__type ${type.type.name}`}>
              {type.type.name}
            </div>
          ))}
        </div>
        <div className="pokeid__abilities">
          <h3 className="pokeid__text">Abilities</h3>
          {pokemon?.abilities.map((abilitie) => (
            <div key={abilitie.slot} className={`pokeid__abilitie`}>
              {abilitie.ability.name}
            </div>
          ))}
        </div>
      </div>
      <div className="pokeid__box">
        <h2 className="pokeid__h2">Stats</h2>
        <div className="progress__stats">
          <span>HP: </span>
          <span>{pokemon?.stats[0].base_stat}/150</span>
        </div>
        <div className="progress">
          <div
            className="progress__fill"
            style={{ width: `${pokemon?.stats[0].base_stat / 1.5}%` }}
          ></div>
        </div>
        <div className="progress__stats">
          <span>Attack </span>
          <span>{pokemon?.stats[1].base_stat}/150</span>
        </div>
        <div className="progress">
          <div
            className="progress__fill"
            style={{ width: `${pokemon?.stats[1].base_stat / 1.5}%` }}
          ></div>
        </div>
        <div className="progress__stats">
          <span>Defense </span>
          <span>{pokemon?.stats[2].base_stat}/150</span>
        </div>
        <div className="progress">
          <div
            className="progress__fill"
            style={{ width: `${pokemon?.stats[2].base_stat / 1.5}%` }}
          ></div>
        </div>
        <div className="progress__stats">
          <span>Speed </span>
          <span>{pokemon?.stats[5].base_stat}/150</span>
        </div>
        <div className="progress">
          <div
            className="progress__fill"
            style={{ width: `${pokemon?.stats[5].base_stat / 1.5}%` }}
          ></div>
        </div>
      </div>
      <div className="pokeid__moves">
        {pokemon?.moves.map((move) => (
          <div key={move.move.url} className={"pokeid__move"}>
            {move.move.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokeIdPage 