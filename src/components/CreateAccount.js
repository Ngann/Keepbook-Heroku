import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Button, ButtonGroup } from 'react-bootstrap'

const CREATEACCCOUNT_MUTATION = gql`
  mutation CreateAccountMutation($name: String!, $number: String!) {
    createAccount(name: $name, number: $number) {
      id
      name
      number
    }
  }
`

const containerStyle = {
    marginTop: '10%',
    padding: '3%',
    backgroundColor: '#FDFFFC',
    border: '1px solid lightgrey'
};

class CreateAccount extends Component {
    state = {
        name: '',
        number: '',
    }

    render() {
        const { name, number } = this.state
        return (
            <div className="container" style={containerStyle}>
                <Form.Group controlId="formBasicAccount">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control
                        className="mb2"
                        value={name}
                        onChange={e => this.setState({ name: e.target.value })}
                        type="text"
                        placeholder="name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicnumber">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                        className="mb2"
                        value={number}
                        onChange={e => this.setState({ number: e.target.value })}
                        type="text"
                        placeholder="number"
                    />
                </Form.Group>
                <ButtonGroup>
                    <Mutation
                        mutation={CREATEACCCOUNT_MUTATION}
                        variables={{ name, number }}
                    >
                        {CreateAccountMutation => <Button variant="secondary" onClick={CreateAccountMutation}>Submit</Button>}
                    </Mutation>
                    <Button variant="danger" onClick={this.props.history.goBack}>
                        Cancel
                    </Button >
                 </ButtonGroup>
            </div>
        )
    }
}

export default CreateAccount