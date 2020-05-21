import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    img: true
  }

  flipped = () => {
    this.setState({img: this.state.img ? false : true})
  }

  render() {
    return (
      <Card >
        <div onClick={() => this.flipped(this.props.pokemon)}>
          <div className="image">
            <img src={this.state.img ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(o => o.name === 'hp').value}
              </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
