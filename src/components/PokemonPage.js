import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    filtpoks: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(poks => (
      this.setState({pokemons: poks, filtpoks: poks})
    ))
  }

  searchRes = (word) => {
    if(word === ''){
      this.setState({
        filtpoks: this.state.pokemons
      })
    }else{
      this.setState({
        filtpoks: this.state.pokemons.filter(poke => (
          poke.name.startsWith(word)
        ))
      })
    }
  }

  formRes = (pokemon) => {
    fetch("http://localhost:3000/pokemon",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: pokemon.name,
        stats: [{
          name: "hp",
          value: pokemon.hp
        }],
        sprites: {
          back: pokemon.backUrl,
          front: pokemon.frontUrl
        }
      })
    })
    .then(res => res.json())
    .then(pokemon => (
    this.setState({pokemons: [...this.state.pokemons,pokemon], filtpoks: [...this.state.pokemons,pokemon]})
    ))
    // let newPoke = {name: pokemon.name,
    //   stats: [{
    //     name: "hp",
    //     value: pokemon.hp
    //   }],
    //   sprites: {
    //     back: pokemon.backUrl,
    //     front: pokemon.frontUrl
    //   }
    // }
    // this.setState({pokemons: [...this.state.pokemons,newPoke], filtpoks: [...this.state.pokemons,newPoke]})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm formRes={this.formRes}/>
        <br />
        <Search searchRes={this.searchRes}/>
        <br />
        <PokemonCollection pokemons={this.state.filtpoks}/>
      </Container>
    )
  }
}

export default PokemonPage
