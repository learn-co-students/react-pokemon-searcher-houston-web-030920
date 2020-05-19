import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state =  {
    pokemons: [],
    filterPokemons: []
  }


  filterPokemon = (letter) => {
    console.log(letter)
    this.setState({
      filterPokemons: this.state.filterPokemons.filter((pokemon) => {
        return pokemon.name.startsWith(letter)
    })
    })
  }

  newPokemon = (e) => {
    fetch('http://localhost:3000/pokemon',{
      method: "POST",
      headers: {"Content-Type" : "application/json"}, 
      body: JSON.stringify
      ({
          name: e.target.name.value,
          stats: [
            {
            value: e.target.hp.value,
            name: "hp"
          }],
          sprites: {
            front: e.target.frontUrl.value,
            back: e.target.backUrl.value
          }
      })
    })
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, pokemon]
      })
    })
  }


    componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => {
      this.setState(
        {pokemons: pokemons,
        filterPokemons: pokemons
        }
      )
    })
  }




  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
        newPokemon={this.newPokemon}
        />
        <br />
        <Search 
        filterPokemon={this.filterPokemon}
        />
        <br />
        <PokemonCollection
        pokemons={this.state.filterPokemons}
        />
      </Container>
    )
  }
}

export default PokemonPage
