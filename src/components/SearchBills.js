import React, { Component, Fragment } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Bill from './BillList'

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

class SearchBills extends Component {
  state = {
    bills: [],
    filter: '',
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type="text"
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
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
