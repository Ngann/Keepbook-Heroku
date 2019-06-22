import React from 'react'
import {Modal, Form, Button} from 'react-bootstrap'

class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <Form.Group controlId="formBasicCustomer">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
                className="mb2"
                // value={name}
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                placeholder="A name"
            />
            </Form.Group>
            <Form.Group controlId="formBasicContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
                className="mb2"
                // value={contact}
                onChange={e => this.setState({ contact: e.target.value })}
                type="text"
                placeholder="contact"
            />
            </Form.Group>
        {/* <Mutation
        mutation={CREATECUSTOMER_MUTATION}
        variables={{ name, contact }}
        >
          {createCustomerMutation => <Button variant="secondary" onClick={createCustomerMutation}>Submit</Button>}
        </Mutation> */}
        <Button variant="danger" onClick={this.props.onHide}>
          Cancel
        </Button >
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        
      );
    }
  }

export default MyVerticallyCenteredModal
