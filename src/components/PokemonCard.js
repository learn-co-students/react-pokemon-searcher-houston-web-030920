import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    img: this.props.pokemon.sprites.front
  }

  handleClick = () => {
    let front = this.props.pokemon.sprites.front
    let back = this.props.pokemon.sprites.back
    if(this.state.img === front) {
      this.setState({
        img: back
      })
    } else {
      this.setState({
        img: front
      })
    }
  }

  findHp = () => {
    let hp = this.props.pokemon.stats.find(value => value.name === 'hp')
    return hp.value
  }

  render() {
    return (
      <Card>
        <div onClick={() => this.handleClick()}>
          <div className="image">
            <img alt="oh no!" src={this.state.img}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
