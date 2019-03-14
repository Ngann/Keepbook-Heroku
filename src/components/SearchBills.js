import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Bill from './Bill'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const BILL_SEARCH_QUERY = gql`
  query BillSearchQuery($filter: String!) {
    searchBills(filter: $filter) {
      bills {
        id
        vendor
        date
        account
        amount
      }
    }
  }
`
const containerStyle = {
  marginTop: '10%',
  // backgroundColor: '#DDFFFC',
  padding: '0 20% 0 20%'
};

const titleStyle = {
  marginTop: '3%',
  padding: '0 20% 0 20%'
  // backgroundColor: '#FDFFCC',
  // padding: '20% 20% 20% 20%',
};

const searchStyle = {
  marginTop: '3%',
  // backgroundColor: '#FDFFDD',
  padding: '0 20% 5% 20%'
};

class SearchBills extends Component {
  state = {
    bills: [],
    filter: '',
  }

  render() {
    return (
      <div className="container" style={containerStyle}>
        <h2 style={titleStyle}>Search Payable</h2>
        <Form inline style={searchStyle}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2"   onChange={e => this.setState({ filter: e.target.value })}/>
          <Button variant="outline-primary" onClick={() => this._executeSearch()}>Search</Button>
        </Form>
        {this.state.bills.map((bill, index) => (
          <Bill key={bill.id} bill={bill} index={index} />
        ))}
      </div>
    )
  }


  _executeSearch = async () => {
    const { filter } = this.state
    const result = await this.props.client.query({
      query: BILL_SEARCH_QUERY,
      variables: { filter },
    })
    const bills = result.data.searchBills.bills
    this.setState({ bills })
  }
}

export default withApollo(SearchBills)
