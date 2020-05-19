import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    image: this.props.pokemon.sprites.front
  }

  handleClick = () => {
    const front = this.props.pokemon.sprites.front
    const back = this.props.pokemon.sprites.back
    this.state.image === front ? this.setState({
      image: back
    }) : this.setState({
      image: front
    })
  }

  render() {
    const { pokemon } = this.props
    return (
      <Card>
        <div>
          <div className="image">
            <img 
            id='Pokemon Image' 
            alt='Pokemon Image' 
            src={this.state.image} 
            onClick = {this.handleClick}
            />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP {pokemon.stats.filter(stat => stat.name === 'hp')[0].value
              }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
