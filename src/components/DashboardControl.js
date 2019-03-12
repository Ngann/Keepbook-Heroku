import React, { Component } from 'react'
import DoughnutCharts from './DoughnutCharts'
import PieCharts from './PieCharts'

class DashboardControl extends Component {

  render() {
    return (
      <div className="container">
        <DoughnutCharts/>
        <PieCharts/>
      </div>
    )
  }
}

export default DashboardControl
