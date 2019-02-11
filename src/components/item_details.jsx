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
                            <img src={logo} alt="chair" />
                            <div>
                                <p>{this.props.data.title}</p>
                                <div className="price_detail">
                                    <strong>{`$${this.props.data.price}`}</strong>
                                    <p>{this.props.data.quantity}</p>
                                </div>
                                <strike>{`$${this.props.data.subtotal}`}</strike>
                            </div>
                        </div>
        return(
            <div>
                <button className="details_btn" onClick={this.toggle}>
                    {this.state.show === false ? `See `  : `Hide ` }item details 
                    <span className="btn_symbol">{this.state.show === false ? `+` : `-`}</span>
                </button>
                {this.state.show === true ? item_details : ''} 
            </div>
        )
    }
}

export default ItemDetails;