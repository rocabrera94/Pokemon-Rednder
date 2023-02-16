import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {
  
  const [pokemones, setPokemones] = useState([])
  const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')
  
  const fetchPokemon = async () => {  
    const res = await fetch(actual)
    const data = await res.json()

    setActual(data.next)

    function createPokemon(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setPokemones( currentList => [...currentList, data])
        })
      }
        createPokemon(data.results)
      }

  useEffect(() => {
    fetchPokemon()
  }, [])
       
     
  
 
 /*
   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  */
 

  return (
    <div className="App">
      <button onClick={()=>console.log(pokemones)}>cl</button>
        {pokemones?.map(pokemon => (<div key={pokemon.id}><Pokemon pokemons={pokemon}/></div>))}
    </div>
  )
}

export default App
