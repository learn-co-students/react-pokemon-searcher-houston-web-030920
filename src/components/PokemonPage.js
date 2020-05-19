import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokeIndex: [],
    filteredPoke: []
  }

  componentDidMount(){
    this.refreshPokemon()
  }

  pokeFilter = (e) => {
    //query to lowercase
    let currentList = this.state.pokeIndex
    let filterList = []
    let search = e.target.value
    if (search !== ''){
      filterList = currentList.filter(pokemon => {
        const poke = pokemon.name.toLowerCase()
        const query = search.toLowerCase()
        return poke.includes(query)
      })
    }else{
        filterList = currentList
    }
    this.setState({
      filteredPoke: filterList
    })
  }

  refreshPokemon = () =>{
    fetch('http://localhost:3000/pokemon')
      .then(res=>res.json())
      .then((pokemon) => {
        this.setState({
          pokeIndex: pokemon,
          filteredPoke: pokemon
        })
      })
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm refreshPokemon = {this.refreshPokemon} />
        <br />
        <Search 
        pokeFilter ={this.pokeFilter}
        />
        <br />
        <PokemonCollection 
        pokeIndex = {this.state.filteredPoke}
        />
      </Container>
    
    )
  }
}

export default PokemonPage
