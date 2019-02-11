import React from 'react';
import logo from '../images/chair.png';

class ItemDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const item_details = <div className="details_collapse">
                                    <img src={logo} alt="chair" width="180" />
                                    <div className="details">
                                        <p className="item_title">{this.props.data.title}</p>
                                        <div className="price_detail">
                                            <p><strong>{`$${this.props.data.price}`}</strong></p>
                                            <p>Qty: {this.props.data.quantity}</p>
                                        </div>
                                        <strike className="strike_through">{`$${this.props.data.subtotal}`}</strike>
                                    </div>
                                </div>
        return(
            <div>
                <button className="details_btn" onClick={this.toggle}>
                    <span id="btn_text">{this.state.show === false ? `See `  : `Hide ` }item details </span>
                    <span id="btn_symbol">{this.state.show === false ? `+` : `-`}</span>
                </button>
                {this.state.show === true ? item_details : ''} 
                <div aria-hidden="true">
                    <hr aria-hidden="true" className="divider ">
                    </hr>
                </div>
            </div>
        )
    }
}

export default ItemDetails;