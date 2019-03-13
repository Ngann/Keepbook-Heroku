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
const containerStyle = {
  marginTop: '10%',
  padding:'3%',
  backgroundColor: '#FDFFFC',
  border: '1px solid lightgrey'
};

class CreateVendor extends Component {
  state = {
    name: '',
    contact: '',
  }

  render() {
    const { name, contact } = this.state
    return (
      <div className= "container" style={containerStyle}>
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
          {addVendorMutation => <Button variant="info" onClick={addVendorMutation}>Submit</Button>}
        </Mutation>
        <Button variant="danger" onClick={this.props.history.goBack}>
          Cancel
        </Button >
      </div>
    )
  }
}

export default CreateVendor
