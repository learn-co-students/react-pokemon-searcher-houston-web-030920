import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }
  //change a boolean value to display the 
  //front or back of the pokemon card
  handleClick = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" 
            src={this.state.front == true ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} 
            onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
