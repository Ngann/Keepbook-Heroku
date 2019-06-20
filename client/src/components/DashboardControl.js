import React, { Component } from 'react'
import DoughnutCharts from './DoughnutCharts'
import PieCharts from './PieCharts'
import LineChart from './LineChart'

const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC'
};

class DashboardControl extends Component {


  render() {
    return (
      <div className="container" style={containerStyle}>
        <DoughnutCharts/>
        <PieCharts/>
        <LineChart/>
      </div>
    )
  }
}

export default DashboardControl
