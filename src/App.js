import React, { Component } from 'react';
import SubTotal from './components/sub_total';
import PickUpSavings from './components/pickup_savings';

class App extends Component {
  constructor(){
    super();
    this.state = {
       title: "OFM Essentials Racecar-Style Leather Gaming Chair",
       color: "red",
       price: "$99.11"
     }
  }

  render() {
    return (
      <div className="App">
        <SubTotal price={this.state.price} />
        <PickUpSavings  />
      </div>
    );
  }
}

export default App;
