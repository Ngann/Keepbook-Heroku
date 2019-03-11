import React, { Component, Fragment } from 'react'
// import Vendor from './Vendor'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
// import Example from './EditVendorModal'
import Modal from 'react-bootstrap/Modal'

const VENDORS_QUERY = gql`
{
  vendors {
    id
    name
    contact
    createdAt
  }
}
`
const DELETEVENDOR_MUTATION = gql`
mutation DeleteVendorMutation($id: ID!) {
  deleteVendor(id: $id) {
    id
  }
}
`

const UPDATEVENDOR_MUTATION = gql`
mutation UpdateVendorMutation($id: ID!, $name: String!, $contact: String!) {
  updateVendor(id: $id, name: $name, contact: $contact) {
    name
    contact
  }
}
`

class VendorListM extends Component {
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

  state = {
    name: '',
    contact: '',
  }

  render() {

    const { name, contact } = this.state
    return (

      <Query query={VENDORS_QUERY}>
      {({ loading, error, data }) => {
        if (loading)return <div>Fetching</div>
        if (error) return <div>Error</div>

        const vendorsToRender = data.vendors
        // console.table(vendorsToRender)
        return (
          <div>
          <Table striped bordered hover size="sm">
          <thead>
          <tr>
          <th>Vendor Name</th>
          <th>Contact</th>
          <th>Action</th>
          </tr>
          </thead>
          {vendorsToRender.map(vendor => (
            <Fragment key={vendor.id}>
            <tbody>
            <tr>
            <td>{vendor.name}</td>
            <td>{vendor.contact}</td>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <td><Button variant="primary" onClick={this.handleShow}>
            Edit
            </Button> | <Mutation
            mutation={DELETEVENDOR_MUTATION}
            variables={{ id: vendor.id }}
            >
            {deleteVendorMutation => <Button variant="danger" onClick={deleteVendorMutation}>Delete</Button>}
            </Mutation></td>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
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
            <Mutation
            mutation={UPDATEVENDOR_MUTATION}
            variables={{ id: vendor.id, name, contact }}>
            {updateVendorMutation => <button onClick={updateVendorMutation}>Update</button>}
            </Mutation>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
            Save Changes
            </Button>
            </Modal.Footer>
            </Modal>
            </tr>
            </tbody>


            </Fragment>
          ))}
          </Table>
          </div>
        )
      }}
      </Query>
    )
  }
}

export default VendorListM