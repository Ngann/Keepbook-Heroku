import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const CUSTOMERS_QUERY = gql`
{
  customers {
    id
    name
    contact
    createdAt
  }
}
`
const DELETECUSTOMER_MUTATION = gql`
mutation DeleteCustomerMutation($id: ID!) {
  deleteCustomer(id: $id) {
    id
  }
}
`

const UPDATECUSTOMER_MUTATION = gql`
mutation UpdateCustomerMutation($id: ID!, $name: String!, $contact: String!) {
  updateCustomer(id: $id, name: $name, contact: $contact) {
    name
    contact
  }
}
`

const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC'
};

class CustomerList extends Component {constructor(props, context) {
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

    <Query query={CUSTOMERS_QUERY}>
    {({ loading, error, data }) => {
      if (loading)return <div>Fetching</div>
      if (error) return <div>Error</div>

      const customersToRender = data.customers

      return (
        <div className="container" style={containerStyle}>
          <Table striped bordered hover size="sm">
          <thead>
          <tr>
          <th>Customer Name</th>
          <th>Contact</th>
          <th>Action</th>
          </tr>
          </thead>
          {customersToRender.map(customer => (
            <Fragment key={customer.id} >
              <tbody>
                  <tr>
                    <td>{customer.name}</td>
                    <td>{customer.contact}</td>
                    <td>
                    <Button variant="primary" onClick={this.handleShow}>
                    Edit
                    </Button>| <Mutation
                    mutation={DELETECUSTOMER_MUTATION}
                    variables={{ id: customer.id }}
                    >
                    {deleteCustomerMutation => <Button variant="danger" onClick={deleteCustomerMutation}>Delete</Button>}
                    </Mutation></td>
                  </tr>
              </tbody>
              <Modal show={this.state.show} onHide={this.handleClose} >
                <Modal.Header closeButton>
                  <Modal.Title>Customer: {customer.name}</Modal.Title>
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
                  mutation={UPDATECUSTOMER_MUTATION}
                  variables={{ id: customer.id, name, contact }}>
                  {updateCustomerMutation => <Button onClick={updateCustomerMutation}>Save Changes</Button>}
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

export default CustomerList
