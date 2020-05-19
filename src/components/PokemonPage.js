import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {
  
  state = {
    pokemon: [],
    filteredPokemon: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  handleSearch = (query) => {
    let pokemonList = this.state.pokemon.filter(pokemon => pokemon.name.includes(query))
    this.setState({
      filteredPokemon: pokemonList
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        stats: [{
          value: e.target.hp.value,
          name: 'hp'
        }],
        sprites: {
          front: e.target.frontUrl.value,
          back: e.target.backUrl.value
        }
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemon: [...this.state.pokemon, data]
      })
    })
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submit={this.handleSubmit}/>
        <br />
        <Search search={this.handleSearch}/>
        <br />
        <PokemonCollection pokemonList={this.state.filteredPokemon == null ? this.state.pokemon : this.state.filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
