import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const ADDVENDOR_MUTATION = gql`
  mutation AddVendortMutation($name: String!, $contact: String!) {
    addVendor(name: $name, contact: $contact) {
      id
      createdAt
      name
      contact
    }
  }
`

class CreateVendor extends Component {
  state = {
    name: '',
    contact: '',
  }

  render() {
    const { name, contact } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
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
        </div>
        <Mutation
        mutation={ADDVENDOR_MUTATION}
        variables={{ name, contact }}
        // onCompleted={() => this.props.histroy.push('/vendor')}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateVendor
