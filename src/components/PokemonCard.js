import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  state={
    image: this.props.pokemon.sprites.front
  }

  handleToggle=()=>{
    let backImg= this.props.pokemon.sprites.back
    let frontImg=this.props.pokemon.sprites.front

    if(this.state.image=== frontImg){
      this.setState({
        image: backImg
      }
    )
    }else{
      this.setState({
        image: backImg
      })
    }
  }

  render() {
    // console.log(this.props.pokemon.stats[5].value)
    return (
      <Card>
        <div>
          <div className="image" onClick={()=> this.handleToggle()}>
           
            <img src={this.state.image} alt="oh no!"  />  
          </div>
          <div className="content">
    <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
