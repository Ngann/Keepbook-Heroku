import React, { Component } from 'react'


class Bill extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.bill.vendor} {this.props.bill.date} {this.props.bill.account} {this.props.bill.amount} 
        </div>
      </div>
    )
  }
}

export default Bill
