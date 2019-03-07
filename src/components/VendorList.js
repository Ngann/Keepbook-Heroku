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
//   render() {
//     const vendorsToRender = [
//       {
//         id: '1',
//         name: 'Vendor one',
//         contact: '555-555-5555',
//       },
//       {
//         id: '2',
//         name: 'Vendor two',
//         contact: '666-666-6666',
//       },
//     ]
//
//     return (
//       // <div>{vendorsToRender.map(vendor => <Vendor key={vendor.id} vendor={vendor} />)}</div>
//       <Query query = {VENDORS_QUERY}>
//         {() => vendorsToRender.map(vendor => <Vendor key={vendor.id} vendor={vendor}/>)}
//       </Query>
//     )
//   }
// }

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
