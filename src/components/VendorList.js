import React, { Component } from 'react'
import Vendor from './Vendor'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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

class VendorList extends Component {

render() {
    return (
      <Query query={VENDORS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const vendorsToRender = data.vendors
          console.table(vendorsToRender)

          return (
            <div>
              {vendorsToRender.map(vendor => <Vendor key={vendor.id} vendor={vendor} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default VendorList
