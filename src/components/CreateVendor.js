import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form , Button} from 'react-bootstrap'

const ADDVENDOR_MUTATION = gql`
  mutation AddVendortMutation($name: String!, $contact: String!, $address: String!, $addressTwo: String!, $city: String!, $state: String!, $country: String!) {
    addVendor(name: $name, contact: $contact, address: $address, addressTwo: $addressTwo, city: $city, state: $state, country: $country) {
      id
      createdAt
      name
      contact
      address
      addressTwo
      city
      state
      country
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
    address: '',
    addressTwo: '',
    city: '',
    state: '',
    country: '',
  }

  render() {
    const { name, contact, address, addressTwo, city, state, country } = this.state
    return (
      <div className= "container" style={containerStyle}>
        <Form.Group controlId="formBasicVendor">
          <Form.Label>Vendor Name</Form.Label>
          <Form.Control
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            className="mb2"
            value={contact}
            onChange={e => this.setState({ contact: e.target.value })}
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="mb2"
            value={address}
            onChange={e => this.setState({ address: e.target.value })}
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>AddressTwo</Form.Label>
          <Form.Control
            className="mb2"
            value={addressTwo}
            onChange={e => this.setState({ addressTwo: e.target.value })}
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>City</Form.Label>
          <Form.Control
            className="mb2"
            value={city}
            onChange={e => this.setState({ city: e.target.value })}
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>State</Form.Label>
          <Form.Control
            className="mb2"
            value={state}
            onChange={e => this.setState({ state: e.target.value })}
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>Country</Form.Label>
          <Form.Control
            className="mb2"
            value={country}
            onChange={e => this.setState({ country: e.target.value })}
            type="text"
            placeholder=""
          />
        </Form.Group>
        <Mutation
        mutation={ADDVENDOR_MUTATION}
        variables={{ name, contact, address, addressTwo, city, state, country }}
        // onCompleted={() => this.props.push.history('/')}
        >
          {addVendorMutation => <Button variant="secondary" onClick={addVendorMutation}>Submit</Button>}
        </Mutation>
        <Button variant="danger" onClick={this.props.history.goBack}>
          Cancel
        </Button >
      </div>
    )
  }
}

export default CreateVendor
