import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Button, Col, Row } from 'react-bootstrap'

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
  padding: '3%',
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
      <div className="container" style={containerStyle}>
        <Form.Row>
          <Col>
            <Form.Label>Vendor Name</Form.Label>
            <Form.Control
              className="mb2"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder=""
            />
          </Col>
          <Col>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              className="mb2"
              value={contact}
              onChange={e => this.setState({ contact: e.target.value })}
              type="number"
              placeholder=""
            />
          </Col>
        </Form.Row>

        <Form.Group controlId="formBasicContact">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="mb2"
            value={address}
            onChange={e => this.setState({ address: e.target.value })}
            type="text"
            placeholder="1234 Main St"
          />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            className="mb2"
            value={addressTwo}
            onChange={e => this.setState({ addressTwo: e.target.value })}
            type="text"
            placeholder="Apartment, studio, or floor"
          />
        </Form.Group>
        <Form.Row>
          <Col>
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
          </Col>
          <Col>
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
          </Col>

          <Col>
            <Form.Group controlId="formBasicContact">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                className="mb2"
                value={country}
                onChange={e => this.setState({ country: e.target.value })}
                type="text"
                placeholder=""
              />
            </Form.Group>
          </Col>

        </Form.Row>
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="active" />
        </Form.Group>
        <Row>
          <Mutation
            mutation={ADDVENDOR_MUTATION}
            variables={{ name, contact, address, addressTwo, city, state, country }}
            onCompleted={() => this.props.history.push('/vendor')}
          // onCompleted={() => this.props.push.history('/')}
          >
            {addVendorMutation => <Col><Button variant="secondary" onClick={addVendorMutation}>Submit</Button></Col>}
          </Mutation>
          <Col>
            <Button variant="danger" onClick={this.props.history.goBack}>
              Cancel
            </Button >
          </Col>
        </Row>
      </div>
    )
  }
}

export default CreateVendor
