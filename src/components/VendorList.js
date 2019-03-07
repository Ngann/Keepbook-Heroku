import React, { Component, Fragment } from 'react'
// import Vendor from './Vendor'
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
    updateVendor(id: $id, name: $name, contact: $contact) {
      name
      contact
    }
  }
`

class VendorList extends Component {

  state = {
    name: '',
    contact: '',
  }

render() {

  const { name, contact } = this.state
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
              <div>Name: {vendor.name} Contact: {vendor.contact}
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
                <Mutation
                mutation={UPDATEVENDOR_MUTATION}
                variables={{ id: vendor.id, name, contact }}>
                  {updateVendorMutation => <button onClick={updateVendorMutation}>Edit</button>}
                </Mutation>
                <Mutation
                mutation={DELETEVENDOR_MUTATION}
                variables={{ id: vendor.id }}
                // onCompleted={() => this.props.push.history('/')}
                >
                  {deleteVendorMutation => <button onClick={deleteVendorMutation}>delete</button>}
                </Mutation>
              </div>
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
