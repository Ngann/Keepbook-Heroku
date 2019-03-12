import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Bills',
		'Invoices',
	],
	datasets: [{
		data: [300, 50],
		backgroundColor: [
		'#F3D250',
		'#90CCF4',
		],
		hoverBackgroundColor: [
		'#5DA2D5',
		'#F78888',
		]
	}]
};

const containerStyle = {
  marginTop: '3%',
  backgroundColor: '#eeeeee',
	padding: '3%'
  // border: '1px solid #f4ff81'
};

class PieCharts extends Component {
  displayName: 'Bills and Invoices'

  render() {
    return (
      <div style={containerStyle}>
        <h2>Bills and Invoices</h2>
        <Pie data={data} />
      </div>
    );
  }
}

export default PieCharts
