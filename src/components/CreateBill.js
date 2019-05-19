import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Button } from 'react-bootstrap'

const CREATEBILL_MUTATION = gql`
  mutation CreateBilltMutation($vendor: String!, $date: String!, $account: String!, $amount: Int!) {
    createBill(vendor: $vendor, date: $date, account: $account, amount: $amount) {
      id
      vendor
      date
      account
      amount
    }
  }
`

const VENDORS_QUERY = gql`
{
  vendors {
    id
    name
  }
}
`

const containerStyle = {
  marginTop: '10%',
  padding: '3%',
  backgroundColor: '#FDFFFC',
  border: '1px solid lightgrey'
};

class CreateBill extends Component {
  state = {
    vendor: '',
    date: '',
    account: '',
    amount: '',
  }

  render() {
    const { vendor, date, account, amount } = this.state
    return (
      <div className="container" style={containerStyle}>

        <Query query={VENDORS_QUERY}>
          {({loading, error, data}) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const vendorList = data.vendors 
            return (
              <Form.Group controlId="formGridState">
              <Form.Label>Vendor</Form.Label>
              <Form.Control as="select" >
              {vendorList.map(vendor => (
                <option key={vendor.id}>{vendor.name}</option>
              ))}
              </Form.Control>
            </Form.Group>
            )
          }}
        </Query>
        {/* <Query query={VENDORS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const vendorsToRender = data.vendors
              vendorsToRender.map(vendor => (
                <option key={vendor.id} >{vendor.name}</option>
              
         </Query> */}
          {/* <Form.Group controlId="formBasicBill">
          <Form.Label>Vendor Name</Form.Label>
          <Form.Control
            className="mb2"
            value={vendor}
            onChange={e => this.setState({ vendor: e.target.value })}
            type="text"
            placeholder="name"
          />
        </Form.Group> */}
          <Form.Group controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              className="mb2"
              value={date}
              onChange={e => this.setState({ date: e.target.value })}
              type="text"
              placeholder="date"
            />
          </Form.Group>
          <Form.Group controlId="formBasicAccount">
            <Form.Label>Account</Form.Label>
            <Form.Control
              className="mb2"
              value={account}
              onChange={e => this.setState({ account: e.target.value })}
              type="text"
              placeholder="account"
            />
          </Form.Group>
          <Form.Group controlId="formBasicAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              className="mb2"
              value={amount}
              onChange={e => this.setState({ amount: parseInt(e.target.value) })}
              type="text"
              placeholder="amount"
            />
          </Form.Group>
          <Mutation
            mutation={CREATEBILL_MUTATION}
            variables={{ vendor, date, account, amount }}
          >
            {createBillMutation => <Button variant="secondary" onClick={createBillMutation}>Add</Button>}
          </Mutation>
          <Button variant="danger" onClick={this.props.history.goBack}>
            Cancel
        </Button >
      </div>
        )
      }
    }
    
    export default CreateBill
