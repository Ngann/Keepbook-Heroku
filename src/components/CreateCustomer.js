import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form , Button} from 'react-bootstrap'

const CREATECUSTOMER_MUTATION = gql`
  mutation CreateCustomertMutation($name: String!, $contact: String!) {
    createCustomer(name: $name, contact: $contact) {
      id
      createdAt
      name
      contact
    }
  }
`

const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC'
};

class CreateCustomer extends Component {
  state = {
    name: '',
    contact: '',
  }

  render() {
    const { name, contact } = this.state
    return (
      <div className= "container" style={containerStyle}>
        <Form.Group controlId="formBasicCustomer">
          <Form.Label>Customer Name</Form.Label>
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
        mutation={CREATECUSTOMER_MUTATION}
        variables={{ name, contact }}
        >
          {createCustomerMutation => <Button variant="info" onClick={createCustomerMutation}>Submit</Button>}
        </Mutation>
        <Button variant="danger" onClick={this.props.history.goBack}>
          Cancel
        </Button >
      </div>
    )
  }
}

export default CreateCustomer
