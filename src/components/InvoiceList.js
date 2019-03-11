import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const INVOICES_QUERY = gql`
{
  invoices {
    id
    customer
    date
    amount
    account
  }
}
`
const DELETEINVOICE_MUTATION = gql`
mutation DeleteInvoiceMutation($id: ID!) {
  deleteInvoice(id: $id) {
    id
  }
}
`

const UPDATEINVOICE_MUTATION = gql`
mutation UpdateInvoiceMutation($id: ID!, $customer: String!, $date:String!, $account:String!, $amount: String!) {
  updateInvoice(id: $id, customer: $customer, date:$date, account:$account, amount: $amount) {
    customer
    date
    account
    amount
  }
}
`

class InvoiceList extends Component {constructor(props, context) {
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
  customer: '',
  date: '',
  amount: '',
  account: '',
}

render() {

  const { customer, date, amount, account } = this.state
  return (

    <Query query={INVOICES_QUERY}>
    {({ loading, error, data }) => {
      if (loading)return <div>Fetching</div>
      if (error) return <div>Error</div>

      const invoicesToRender = data.invoices

      return (
        <div className="container">
        <Table striped bordered hover size="sm">
        <thead>
        <tr>
        <th>Date</th>
        <th>Customer Name</th>
        <th>Account</th>
        <th>Amount</th>
        <th>Action</th>
        </tr>
        </thead>
        {invoicesToRender.map(invoice => (
          <Fragment key={invoice.id} >
            <tbody>
              <tr>
              <td>{invoice.date}</td>
              <td>{invoice.customer}</td>
              <td>{invoice.account}</td>
              <td>{invoice.amount}</td>
              <td>
              <Button variant="primary" onClick={this.handleShow}>
              Edit
              </Button>| <Mutation
              mutation={DELETEINVOICE_MUTATION}
              variables={{ id: invoice.id }}
              >
              {deleteInvoiceMutation => <Button variant="danger" onClick={deleteInvoiceMutation}>Delete</Button>}
              </Mutation></td>
              </tr>
            </tbody>
            <Modal show={this.state.show} onHide={this.handleClose} >
              <Modal.Header closeButton>
              <Modal.Title>Invoice: {invoice.customer}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="flex flex-column mt3">
                <input
                className="mb2"
                value={customer}
                onChange={e => this.setState({ customer: e.target.value })}
                type="text"
                placeholder="A customer"
                />
                <input
                className="mb2"
                value={account}
                onChange={e => this.setState({ amount: e.target.value })}
                type="text"
                placeholder="amount"
                />
                </form>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
              Close
              </Button>
              <Mutation
              mutation={UPDATEINVOICE_MUTATION}
              variables={{ id: invoice.id, customer, date, amount, account }}>
              {updateInvoiceMutation => <Button onClick={updateInvoiceMutation}>Save Changes</Button>}
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

export default InvoiceList
