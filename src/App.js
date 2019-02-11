import React, { Component } from 'react';
import SubTotal from './components/sub_total';
import PickUpSavings from './components/pickup_savings';
import EstimatedTotal from './components/estimated_total';
import ItemDetails from './components/item_details';
import PromoCode from './components/promo_code';
import { connect } from 'react-redux';
import { handleChange } from './actions/promo_code_actions';
import './app.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "OFM Essentials Racecar-Style Leather Gaming Chair",
      color: "blue",
      quantity: 1,
      subtotal: 102.96,
      price: 99.11,
      pickupSavings: 3.85,  
      estimatedTax: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }

  }

  componentDidMount() {
   this.setState({
      estimatedTax: 8.92
   },
   function(){
    this.setState({
      estimatedTotal: this.state.subtotal - this.state.pickupSavings + this.state.estimatedTax
    })
   })
  }

  discountHandler(){
    const input = 'DISCOUNT'
    if (this.props.promoCode === input.toLocaleLowerCase()){
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
      function(){
        this.setState({
          disablePromoButton: true
        })
      })
    }
  }

  render() {
    return (
      <div className="main">
        <SubTotal subtotal={this.state.subtotal} />
        <PickUpSavings savings={this.state.pickupSavings} tax={this.state.estimatedTax} />
        <EstimatedTotal total={this.state.estimatedTotal.toFixed(2)} />
        <ItemDetails data={this.state} />
        <PromoCode givenDiscount={() => this.discountHandler()} 
                  isDisabled={this.state.disablePromoButton}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(App);
