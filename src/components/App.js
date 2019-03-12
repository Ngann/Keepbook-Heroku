import React, { Component } from 'react'
import LinkList from './LinkList'
import VendorList from './VendorList'
import BillList from './BillList'
import CustomerList from './CustomerList'
import InvoiceList from './InvoiceList'
import CreateLink from './CreateLink'
import CreateVendor from './CreateVendor'
import CreateCustomer from './CreateCustomer'
import CreateBill from './CreateBill'
import CreateInvoice from './CreateInvoice'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Search from './Search'
import DashboardControl from './DashboardControl'
import SearchBills from './SearchBills'
import SearchInvoices from './SearchInvoices'
import Main from './Main'
import Info from './Info'
import Contact from './Contact'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main/>
        <Info/>
        <Contact/>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/main" />} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/createvendor" component={CreateVendor} />
            <Route exact path="/createcustomer" component={CreateCustomer} />
            <Route exact path="/createbill" component={CreateBill} />
            <Route exact path="/createinvoice" component={CreateInvoice} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/searchbills" component={SearchBills} />
            <Route exact path="/searchinvoices" component={SearchInvoices} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/vendor" component={VendorList} />
            <Route exact path="/customer" component={CustomerList} />
            <Route exact path="/bill" component={BillList} />
            <Route exact path="/invoice" component={InvoiceList} />
            <Route exact path="/new/:page" component={LinkList} />
            <Route exact path="/chart" component={DashboardControl} />
          </Switch>
      </div>
    )
  }
}

export default App
