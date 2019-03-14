import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const BILLS_QUERY = gql`
{
  bills {
    id
    vendor
    date
    amount
    account
  }
}
`
const DELETEBILL_MUTATION = gql`
mutation DeleteBillMutation($id: ID!) {
  deleteBill(id: $id) {
    id
  }
}
`

const UPDATEBILL_MUTATION = gql`
mutation UpdateBillMutation($id: ID!, $vendor: String!, $date:String!, $account:String!, $amount: String!) {
  updateBill(id: $id, vendor: $vendor, date:$date, account:$account, amount: $amount) {
    vendor
    date
    account
    amount
  }
}
`
const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC'
};

class BillList extends Component {constructor(props, context) {
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
  vendor: '',
  date: '',
  amount: '',
  account: '',
}

render() {

  const { vendor, date, amount, account } = this.state
  return (

    <Query query={BILLS_QUERY}>
    {({ loading, error, data }) => {
      if (loading)return <div>Fetching</div>
      if (error) return <div>Error</div>

      const billsToRender = data.bills

      return (
        <div className="container" style={containerStyle}>
          <Table striped bordered hover size="sm" >
          <thead >
            <tr>
              <th>Date</th>
              <th>Vendor Name</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          {billsToRender.map(bill => (
            <Fragment key={bill.id} >
              <tbody>
                <tr>
                  <td>{bill.date}</td>
                  <td>{bill.vendor}</td>
                  <td>{bill.account}</td>
                  <td>{bill.amount}</td>
                  <td>
                  <Button variant="link" onClick={this.handleShow}>
                  Edit
                  </Button>| <Mutation
                  mutation={DELETEBILL_MUTATION}
                  variables={{ id: bill.id }}
                  >
                  {deleteBillMutation => <Button variant="link" onClick={deleteBillMutation}>Delete</Button>}
                  </Mutation></td>
                </tr>
              </tbody>
              <Modal show={this.state.show} onHide={this.handleClose} >
                <Modal.Header closeButton>
                  <Modal.Title>Bill: {bill.vendor}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form className="flex flex-column mt3">
                  <input
                  className="mb2"
                  value={vendor}
                  onChange={e => this.setState({ vendor: e.target.value })}
                  type="text"
                  placeholder="A vendor"
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
                  mutation={UPDATEBILL_MUTATION}
                  variables={{ id: bill.id, vendor, date, account, amount }}>
                  {updateBillMutation => <Button onClick={updateBillMutation}>Save Changes</Button>}
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

export default BillList
