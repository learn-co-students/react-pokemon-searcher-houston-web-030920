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

  inputs = (i) => {
    this.setState({
      [i.name]: i.value
    })
  }

  handleSubmit = () => {
    this.props.formRes(this.state, e)
    this.setState({name: '', hp: '', frontUrl: '', backUrl: ''})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.handleSubmit()}>
          <Form.Group widths="equal">
            <Form.Input fluid value={this.state.name} label="Name" placeholder="Name" name="name" onChange={(e) => this.inputs(e.target)}/>
            <Form.Input fluid value={this.state.hp} label="hp" placeholder="hp" name="hp" onChange={(e) => this.inputs(e.target)}/>
            <Form.Input fluid value={this.state.frontUrl} label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e) => this.inputs(e.target)}/>
            <Form.Input fluid value={this.state.backUrl} label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => this.inputs(e.target)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
