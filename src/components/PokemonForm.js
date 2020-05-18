import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  createPokemon = (e) => {
    console.log(e)
  }

  setName = (e) => { this.setState({ name: e.target.value })}

  setHp = (e) => { this.setState({ hp: e.target.value })}

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{
          value: this.state.hp,
          name: "hp",
        }],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
        // sprites: {
        //   front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        //   back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
        // }
      })
    })
    this.props.getPokemon()
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.setName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.setHp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
