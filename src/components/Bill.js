import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

class Bill extends Component {
  render() {
    return (
      <div>
         <Table striped hover size="sm" >
          <thead >
          </thead>
          <tbody>
            <tr style={{display: 'flex'}}>
              <td>{this.props.bill.date}</td>
              <td>{this.props.bill.vendor}</td>
              <td>{this.props.bill.account}</td>
              <td>{this.props.bill.amount}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Bill
