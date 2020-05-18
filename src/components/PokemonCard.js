import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  flipCard = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <Card>
          <div onClick={this.flipCard}>
            <div className="image">
              <img src={this.props.pokemon.sprites.front} alt="oh no!" />
            </div>
            <div className="content">
              <div className="header">{this.props.pokemon.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {this.props.pokemon.stats.filter(stat => stat.name === "hp")[0].value}
              </span>
            </div>
          </div>
        </Card>
      )
    } else {
      return (
        <Card>
          <div onClick={this.flipCard}>
            <div className="image">
              <img src={this.props.pokemon.sprites.back} alt="oh no!" />
            </div>
            <div className="content">
              <div className="header">{this.props.pokemon.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {this.props.pokemon.stats.filter(stat => stat.name === "hp")[0].value}
              </span>
            </div>
          </div>
        </Card>
      )
    }

  }
}

export default PokemonCard
