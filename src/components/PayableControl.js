import React from 'react';
import Vendor from './Vendor'
import VendorList from './VendorList'


function Payable(){
  return (
    <div className="container">
      <h3>Payable</h3>
      <Vendor/>
      <VendorList/>
    </div>
  )
};

export default Payable;
