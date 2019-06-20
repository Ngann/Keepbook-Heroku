import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2'


const data = {
	labels: [
		'Nokia',
		'State Farm',
		'Oregon Tax Board',
		'Staples',
		'Other'
	],
	datasets: [{
		data: [500, 500, 1000, 700, 1200],
		backgroundColor: [
		'#4056A1',
		'#EFE2BA',
		'#F13C20',
		'#F3D250',
		'#90CCF4'
		],
		hoverBackgroundColor: [
    '#D79922',
		'#C5CBE3',
		'#FFCE56',
		'#5DA2D5',
		'#F78888'
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
