import React from 'react'
import { Card } from 'semantic-ui-react'



class PokemonCard extends React.Component {
  findHp = () => {
    let hp = this.props.pokemon.stats.find(value => value.name === 'hp')
    return hp.value
  }



  render() {
    return (
      <Card>
        
          <div classname="card">
            <div className="card__face card__face--front">
              <div className="image">
                <img src={this.props.pokemon.sprites.front} />
              </div>
          
              <div className="content">
                <div className="header">
                {this.props.pokemon.name}
                </div>
              </div>
          
              <div className="extra content">
                <span>
                  <i className="icon heartbeat red" />
                 {this.findHp()} hp
                </span>
              </div>
            </div>

            <div className="card__face card__face--back">
            <img src={this.props.pokemon.sprites.back} />
            </div>
          </div>

      </Card>
    )
  }
}

export default PokemonCard
