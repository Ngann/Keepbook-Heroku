import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2';
import { Query} from 'react-apollo'
import gql from 'graphql-tag'

const VENDORS_QUERY = gql`
{
  vendors {
    id
    name
    contact
    address
    addressTwo
    city
    state
    country
    createdAt
  }
}
`
const Vendors = () => (
  <Query query={VENDORS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <select name="dog" >
          {data.vendors.map(vendor => (
            <option key={vendor.id} value={vendor.name}>
            </option>


          ))}
        </select>
	);
}}
</Query>
);

const count = [50 ,50]
const name = ['Expense', 'Revenue']

const data = {
	labels: name ,
	datasets: [{
		data: count,
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

	console.log(Vendors)

const containerStyle = {
  marginTop: '3%',
  backgroundColor: '#eeeeee',
	padding: '3%'
  // border: '1px solid #f4ff81'
};

class PieCharts extends Component {
  displayName: 'Revenue and Expense'

  render() {
    return (
      <div style={containerStyle}>
        <h2>Revenue and Expense</h2>
        <Pie data={data} />
      </div>
    );
  }
}

export default PieCharts
