import React, { Component } from 'react'
import DoughnutCharts from './DoughnutCharts'
import PieCharts from './PieCharts'
import LineChart from './LineChart'

class DashboardControl extends Component {

  render() {
    return (
      <div className="container">
        <DoughnutCharts/>
        <PieCharts/>
        <LineChart/>
      </div>
    )
  }
}

export default DashboardControl
