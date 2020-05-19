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

  setName= e => this.setState({name:e.target.value})
  setHp= e => this.setState({hp:e.target.value})
  setFrontUrl= e=> this.setState({frontUrl:e.target.value})
  setBackUrl= e => this.setState({backUrl:e.target.value})


handleSubmit=(e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/pokemon',{
    method: "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
          name:this.state.name,
          stats: [{},
            {},
            {},
            {},
            {},
            {
            value: this.state.hp,
            name: 'hp'
          }],
          sprites:{frontUrl: this.state.frontUrl,
          backUrl: this.state.backUrl
        
        }
      

      }) 
  })
  .then(resp=> resp.json())
  .then(pokemon=> {
  console.log(pokemon)
  // this.props.getPokemon()
  this.props.addPokemon(pokemon)
})
  
}

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form 
        onSubmit={this.handleSubmit}
        >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" 
            onChange={this.setName} 
            />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" 
            onChange={this.setHp}
            />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" 
            onChange={this.setFrontUrl}
            />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" 
            onChange={this.setBackUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
