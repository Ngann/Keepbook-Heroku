import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form , Button} from 'react-bootstrap'

const ADDVENDOR_MUTATION = gql`
  mutation AddVendortMutation($name: String!, $contact: String!) {
    addVendor(name: $name, contact: $contact) {
      id
      createdAt
      name
      contact
    }
  }
`

class CreateVendor extends Component {
  state = {
    name: '',
    contact: '',
  }

  render() {
    const { name, contact } = this.state
    return (
      <div>
        <Form.Group controlId="formBasicVendor">
        <Form.Label>Vendor Name</Form.Label>
        <Form.Control
          className="mb2"
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
          type="text"
          placeholder="A name"
        />
          </Form.Group>
          <Form.Group controlId="formBasicContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            className="mb2"
            value={contact}
            onChange={e => this.setState({ contact: e.target.value })}
            type="text"
            placeholder="contact"
          />
        </Form.Group>
        <Mutation
        mutation={ADDVENDOR_MUTATION}
        variables={{ name, contact }}
        // onCompleted={() => this.props.push.history('/')}
        >
          {addVendorMutation => <button onClick={addVendorMutation}>Submit</button>}
        </Mutation>
        <button onClick={this.props.history.goBack}>
          Cancel
        </button>
      </div>
    )
  }
}

export default CreateVendor
