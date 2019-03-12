import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact"

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  render() {
    const { login, email, password, name } = this.state
    return (

      <div className="container">

        <MDBContainer>
         <MDBRow>
           <MDBCol md="6">
             <MDBCard>
               <MDBCardBody>
                 <MDBCardHeader className="form-header warm-flame-gradient rounded">
                   <h3 className="my-3">
                     <MDBIcon icon="lock" />{login ? 'Login' : 'Sign Up'}
                   </h3>
                 </MDBCardHeader>
                 {!login && (
                   <div>
                     <label
                       htmlFor="defaultFormEmailEx"
                       className="grey-text font-weight-light">
                       Your name
                     </label>
                     <input
                     className="form-control"
                     value={name}
                     onChange={e => this.setState({ name: e.target.value })}
                     type="text"/>
                   </div>
                 )}
                 <label
                   htmlFor="defaultFormEmailEx"
                   className="grey-text font-weight-light"
                 >
                   Your email
                 </label>
                 <input
                   className="form-control"
                   value={email}
                   onChange={e => this.setState({ email: e.target.value })}
                   type="text"
                 />

                 <label
                   htmlFor="defaultFormPasswordEx"
                   className="grey-text font-weight-light"
                 >
                   Your password
                 </label>
                 <input
                   value={password}
                   onChange={e => this.setState({ password: e.target.value })}
                   type="password"
                   className="form-control"
                 />
                <div className="text-center mt-4">
                   <Mutation
                     mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                     variables={{ email, password, name }}
                     onCompleted={data => this._confirm(data)}
                   >
                     {mutation => (
                       <MDBBtn className="mb-3" onClick={mutation}>
                         {login ? 'Login' : 'Create'}
                       </MDBBtn>
                     )}
                   </Mutation>
                  </div>
                 <MDBModalFooter>
                   <div className="font-weight-light" onClick={() => this.setState({ login: !login })}>
                    {login ? 'Not a member? Sign Up' : 'Already have an account?'}
                   </div>
                 </MDBModalFooter>
               </MDBCardBody>
             </MDBCard>
           </MDBCol>
         </MDBRow>
       </MDBContainer>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
