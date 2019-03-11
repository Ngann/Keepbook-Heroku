import React, { Component } from 'react'
import LinkList from './LinkList'
import VendorList from './VendorList'
import CustomerList from './CustomerList'
import CreateLink from './CreateLink'
import CreateVendor from './CreateVendor'
import CreateCustomer from './CreateCustomer'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Search from './Search'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/createvendor" component={CreateVendor} />
            <Route exact path="/createcustomer" component={CreateCustomer} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/vendor" component={VendorList} />
            <Route exact path="/customer" component={CustomerList} />
            <Route exact path="/new/:page" component={LinkList} />
          </Switch>
      </div>
    )
  }
}

export default App
