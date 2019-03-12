import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Vendor: {vendor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="flex flex-column mt3">
            <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="A name"
            />
            <input
            className="mb2"
            value={contact}
            onChange={e => this.setState({ contact: e.target.value })}
            type="text"
            placeholder="contact"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
          Close
          </Button>
          <Mutation
          mutation={UPDATEVENDOR_MUTATION}
          variables={{ id: vendor.id, name, contact }}>
          {updateVendorMutation => <Button onClick={updateVendorMutation}>Save Changes</Button>}
          </Mutation>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Example;
