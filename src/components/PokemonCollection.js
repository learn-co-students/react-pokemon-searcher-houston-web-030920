import React from 'react'
import Search from './Search'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {
    if(this.props.currentPokemons == []){
      return <h1>Fetching the pokemon...</h1>
    }
    return (
      <Card.Group itemsPerRow={6}>
      {this.props.currentPokemons.map( pokemon => 
        <PokemonCard 
          key={pokemon.id}
          pokemon={pokemon}
        />
        )}
      </Card.Group>
    )
  }
}

export default PokemonCollection
