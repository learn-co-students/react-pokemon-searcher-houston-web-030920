import React from 'react'

const Search = (props) => {
  console.log(props.pokemonCollection)

  const handleInput = (e) => {
    console.log("searching...")
    return props.searchPokemon(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => handleInput(e)} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
