import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemon: [],
    filterPokemons:[],
    query: ''
  }


  componentDidMount(){
    this.getPokemon()

  }

  addPokemon=(pokemon)=>{
    console.log(pokemon)
    this.setState({
      pokemon:[...this.state.pokemon, pokemon],
      filterPokemons:[...this.state.filterPokemons, pokemon]

    })
  }

  //pokemon list
getPokemon =()=>{
  fetch('http://localhost:3000/pokemon')
  .then( res => res.json())
  .then( (pokemon) => {
    // console.log(pokemon) //array of pokemon objects
      this.setState({ pokemon: pokemon, filterPokemons: pokemon })
     
  })
  }

//search bar
  searchPokemon = (e) => {
    const query = e.target.value;
    this.setState({
      query: query,
      filterPokemons: this.state.pokemon.filter(pokemon => pokemon.name.includes(query))
    })
  
  }
 


  

  render() {
   


    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
        // getPokemon={this.getPokemon}
        addPokemon={this.addPokemon}
        />
        <br />
        <Search searchPokemon={this.searchPokemon} />
      
  
        <br />
        <PokemonCollection pokemon={this.state.filterPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
