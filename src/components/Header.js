import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav.Link href="/vendorm">VendorM</Nav.Link>
      <Nav.Link href="/vendoro">VendorO</Nav.Link>
      {authToken && (
        <Nav className="mr-auto">
        <Nav.Link href="/createvendor">CreateVendor</Nav.Link>
          <Nav.Link href="/vendor">VendorList</Nav.Link>
          <Nav.Link href="/">News</Nav.Link>
          <Nav.Link href="/Search">...</Nav.Link>
          <Nav.Link href="/create">Form</Nav.Link>
        </Nav>
      )}
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
      <div className="flex flex-fixed">
      {authToken ? (
        <div
        className="ml1 pointer black"
        onClick={() => {
          localStorage.removeItem(AUTH_TOKEN)
          this.props.history.push(`/`)
        }}
        >
        logout
        </div>
      ) : (
        <Link to="/login" className="ml1 no-underline black">
        login
        </Link>
      )}
      </div>
    </Navbar>
    </div>
    );
  }
}

export default Header
