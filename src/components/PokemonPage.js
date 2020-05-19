import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    currentPokemons: []
  }

  //fetch all pokemons
  componentDidMount = () => {
    fetch(`http://localhost:3000/pokemon`)
      .then( resp => resp.json())
      .then( (pokemons) => {
        this.setState({
          pokemons: pokemons,
          currentPokemons: pokemons
        })
      })
  }

  //filter the pokemon by their hp
  //on the click of a button
  filterByHp = (event) => {
    this.setState({                               
      currentPokemons: this.state.pokemons.sort((a,b) => a.stats[5].value - b.stats[5].value)
    })
  }

  //filter the pokemon by name by setting
  //current pokemon to equal the filter event
  handleFilter = (event) => {
    console.log(event.target.value)
    this.setState({
      currentPokemons: this.state.pokemons.filter(pokemon => pokemon.name.startsWith(event.target.value))
    })
  }

  //add a pokemon
  handleSubmitPokemon = (newPokemon) => {
    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: newPokemon.name,
          stats: [
            {}, {}, {}, {}, {}, {
              value: parseInt(newPokemon.hp),
              name: "hp"
            }
          ],
          sprites: {
            front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
          }
      })
    })
    .then(resp => resp.json())
    .then( (newPokemon) => {
      this.setState({
        pokemons: [...this.state.pokemons, newPokemon],
        currentPokemons: [...this.state.currentPokemons, newPokemon]
      })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <button onClick={this.filterByHp}>Filter by Hp</button>
        <br />
        <PokemonForm 
        handleSubmitPokemon={this.handleSubmitPokemon}
        />
        <br />
        <Search  
          handleFilter={this.handleFilter}
        />
        <br />
        <PokemonCollection 
          pokemons={this.state.pokemons}
          currentPokemons={this.state.currentPokemons}
        />
      </Container>
    )
  }
}

export default PokemonPage
