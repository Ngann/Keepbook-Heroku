import React, { Component, Fragment } from 'react'
import Vendor from './Vendor'
import { Query, Mutation } from 'react-apollo'
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
const DELETEVENDOR_MUTATION = gql`
  mutation DeleteVendorMutation($id: ID!) {
    deleteVendor(id: $id) {
      id
    }
  }
`

const UPDATEVENDOR_MUTATION = gql`
  mutation UpdateVendorMutation($id: ID!, $name: String!, $contact: String!) {
    updateVendor(id: $id) {
      name
      contact
    }
  }
`

class VendorList extends Component {

render() {
    return (
      <Query query={VENDORS_QUERY}>
        {({ loading, error, data }) => {
          if (loading)return <div>Fetching</div>
          if (error) return <div>Error</div>

          const vendorsToRender = data.vendors
          // console.table(vendorsToRender)
          return (
            <div>
            {vendorsToRender.map(vendor => (
              <Fragment key={vendor.id}>
              <p>Name: {vendor.name} Contact: {vendor.contact}
                <button>Edit</button>
                <Mutation
                mutation={DELETEVENDOR_MUTATION}
                variables={{ id: vendor.id }}
                // onCompleted={() => this.props.push.history('/')}
                >
                  {deleteVendorMutation => <button onClick={deleteVendorMutation}>delete</button>}
                </Mutation>
              </p>
              </Fragment>
            ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default VendorList
