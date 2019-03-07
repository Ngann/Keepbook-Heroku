import React, { Component } from 'react'

class Vendor extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.vendor.name} ({this.props.vendor.contact})
        </div>
      </div>
    )
  }
}

export default Vendor
