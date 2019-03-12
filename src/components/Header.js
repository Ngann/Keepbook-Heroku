import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      {authToken && (
        <Nav className="mr-auto">
        <NavDropdown title="Payable" id="basic-nav-dropdown">
        <NavDropdown.Item href="/createvendor">Vendor</NavDropdown.Item>
        <NavDropdown.Item href="/vendor">Vendor List</NavDropdown.Item>
        <NavDropdown.Item href="/createbill">Bill</NavDropdown.Item>
        <NavDropdown.Item href="/bill">Bill List</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Reports</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/searchbills">Search</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Receivable" id="basic-nav-dropdown">
        <NavDropdown.Item href="/createcustomer">Customer</NavDropdown.Item>
        <NavDropdown.Item href="/customer">Customer List</NavDropdown.Item>
        <NavDropdown.Item href="/createinvoice">Invoice</NavDropdown.Item>
        <NavDropdown.Item href="/invoice">Invoice List</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Reports</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/searchinvoices">Search</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Dashboard" id="basic-nav-dropdown">
        <NavDropdown.Item href="/chart">Charts</NavDropdown.Item>
        <NavDropdown.Item href="/news">News</NavDropdown.Item>
        <NavDropdown.Item href="/Search">...</NavDropdown.Item>
        <NavDropdown.Item href="/create">Form</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/search">Search</NavDropdown.Item>
      </NavDropdown>
    </Nav>
      )}
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
