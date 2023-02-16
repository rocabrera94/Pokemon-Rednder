import React from 'react'

const Pokemon = ({pokemons}) => {
  return (
    <div>
        <p>pokemon</p>
        <p>name:{pokemons.name}</p>
        <p>id:{pokemons.id}</p> 
        <p>type:{pokemons.types[0].type.name}</p>
    </div>
  )
}

export default Pokemon