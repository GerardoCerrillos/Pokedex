import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import './Styles/HomePage.css'


const HomePege = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="homepage__body">
      <p><img src="/header.svg" alt="" /></p>
      <h1>Pokedex</h1>
      <h2>Hi trainer</h2>
      <p>To star with the ap, give me yout name trainer</p>
      <form className="homepage__form" onSubmit={handleSubmit}>
        <input className="homepage__input" id="inputTrainer" ref={inputTrainer} type="text" />
        <button>Gotta Catch 'Em All!</button>
      </form>
    </div>
  )
}

export default HomePege