import React, { Component } from 'react'

class Invoice extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.invoice.customer} ({this.props.invoice.amount})
        </div>
      </div>
    )
  }
}

export default Invoice
