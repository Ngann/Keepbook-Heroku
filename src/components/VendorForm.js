import React, { Component } from 'react'
import { Form , Button} from 'react-bootstrap'

class VendorForm extends Component {
  render() {
    return (
      <div className="container">
        <Form >
        <h4>New Vendor Form</h4>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Vendor Name</Form.Label>
          <Form.Control type="email" placeholder="Vendor Name" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="password" placeholder="Contact" />
          </Form.Group>
          <Button variant="info" type="submit">
          Add Vendor
          </Button>
          </Form>
      </div>
    )
  }
}

export default VendorForm
