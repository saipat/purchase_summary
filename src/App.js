import React, { Component } from 'react';
import SubTotal from './components/sub_total'
import PickUpSavings from './components/pickup_savings';
import EstimatedTotal from './components/estimated_total';
import './app.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "OFM Essentials Racecar-Style Leather Gaming Chair",
      color: "red",
      subtotal: 102.96,
      price: 99.11,
      pickup_savings: 3.85,  
      estimated_tax: 8.92
    }
  }

  render() {
    return (
      <div className="main">
        <SubTotal subtotal={this.state.subtotal} />
        <PickUpSavings savings={this.state.pickup_savings} tax={this.state.estimated_tax} />
        <EstimatedTotal data={this.state} />
      </div>
    );
  }
}

export default App;
