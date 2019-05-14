import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const VENDORS_QUERY = gql`
{
  vendors {
    id
    name
    contact
    address
    addressTwo
    city
    state
    country
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

const NEW_VENDORS_SUBSCRIPTION = gql `
  subscription {
    newVendor {
        id
        name
        state
        postedBy {
          id
          name
        }
    }
  }
`

const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC'
};

class VendorList extends Component {constructor(props, context) {
  super(props, context);

  this.handleShow = this.handleShow.bind(this);
  this.handleClose = this.handleClose.bind(this);

  this.state = {
    show: false,
  };
}

_subscribeToNewVendors = subscribeToMore => {
  subscribeToMore({
    document: NEW_VENDORS_SUBSCRIPTION,
    updateQuery: (prev, { subscriptionData}) => {
      if (!subscriptionData.data) return prev
      const newVendor = subscriptionData.data.newVendor
      const exists = prev.vendors.find(({id}) => id === newVendor.id);
      if (exists) return prev;

      return Object.assign({}, prev, {
        vendors : [newVendor, ...prev.vendors], 
        __typename: prev.vendors.__typename
      })
    }
  })
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
    {({ loading, error, data, subscribeToMore }) => {
      if (loading)return <div>Fetching</div>
      if (error) return <div>Error</div>

      this._subscribeToNewVendors(subscribeToMore)
      const vendorsToRender = data.vendors

      return (
        <div className="container" style={containerStyle}>
          <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          {vendorsToRender.map(vendor => (
            <Fragment key={vendor.id} >
              <tbody>
                <tr>
                  <td>{vendor.name}</td>
                  <td>{vendor.contact}</td>
                  <td>{vendor.address}</td>
                  <td>{vendor.city}</td>
                  <td>{vendor.state}</td>
                  <td>
                  <Button variant="secondary" onClick={this.handleShow}>
                  Edit
                  </Button> | <Mutation
                  mutation={DELETEVENDOR_MUTATION}
                  variables={{ id: vendor.id }}
                  >
                  {deleteVendorMutation => <Button variant="danger" onClick={deleteVendorMutation}>Delete</Button>}
                  </Mutation></td>
                </tr>
              </tbody>
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

export default VendorList
