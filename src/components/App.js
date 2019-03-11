import React, { Component } from 'react'
import LinkList from './LinkList'
import VendorList from './VendorList'
import CreateLink from './CreateLink'
import CreateVendor from './CreateVendor'
import HeaderNav from './HeaderNav'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Search from './Search'
import VendorForm from './VendorForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/createvendor" component={CreateVendor} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/vendor" component={VendorList} />
            <Route exact path="/new/:page" component={LinkList} />
            <Route exact path="/form" component={VendorForm} />
          </Switch>
      </div>
    )
  }
}

export default App
