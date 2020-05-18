import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonCollection: [],
    filteredPokemon: []
  }

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemonCollection => this.setState({ 
        pokemonCollection: pokemonCollection,
        filteredPokemon: pokemonCollection 
      }))
  }

  searchPokemon = (input) => {
    this.setState({
      filteredPokemon: this.state.pokemonCollection.filter(pokemon => pokemon.name.includes(input))
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm  getPokemon={this.getPokemon}/>
        <br />
        <Search pokemonCollection={this.state.filteredPokemon} searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemonCollection={this.state.filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
