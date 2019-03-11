import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
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
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">KeepBook</div>
            <Link to="/vendor" className="ml1 no-underline black">
              Vendor List
            </Link>
          <div className="ml1">|</div>
          <Link to="/" className="ml1 no-underline black">
            Customer List
          </Link>
          <div className="ml1">|</div>
          <Link to="/top" className="ml1 no-underline black">
            Dashboard
          </Link>
          <div className="ml1">|</div>
          <Link to="/search" className="ml1 no-underline black">
            Search
          </Link>
          {authToken && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link to="/create" className="ml1 no-underline black">
                Form
              </Link>
              <div className="ml1">|</div>
              <Link to="/createvendor" className="ml1 no-underline black">
                Create Vendor
              </Link>
            </div>
          )}
        </div>
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
      </div>
    )
  }
}

export default withRouter(Header)
