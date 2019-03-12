import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2'


const data = {
	labels: [
		'Adobe',
		'Starbucks',
		'Other'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#4056A1',
		'#EFE2BA',
		'#F13C20'
		],
		hoverBackgroundColor: [
    '#D79922',
		'#C5CBE3',
		'#FFCE56'
		]
	}]
};

const containerStyle = {
  marginTop: '3%',
  backgroundColor: '#eeeeee',
	padding: '3%'
  // border: '1px solid #f4ff81'
};

class DoughnutCharts extends Component {
  displayName: 'DoughnutExample'
  render() {
    return (
      <div style={containerStyle}>
        <h2>Bills by Vendor</h2>
        <Doughnut data={data} />
      </div>
    )
  }
}

export default DoughnutCharts
