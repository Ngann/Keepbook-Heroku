import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Revenue',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#F13C20',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(0,128,0,10)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 90, 95, 100]
    }
  ]
};

const containerStyle = {
  marginTop: '3%',
  backgroundColor: '#eeeeee',
	padding: '3%'
  // border: '1px solid #f4ff81'
};

class LineCharts extends Component {
  displayName: 'Revenue'

  render() {
    return (
      <div style={containerStyle}>
        <h2>Revenue</h2>
        <Line data={data} />
      </div>
    );
  }
}

export default LineCharts
