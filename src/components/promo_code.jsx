import React from 'react';

class PromoCode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            discount: ''
        }
    
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({
            show: !this.state.show
        })
    }
    render(){

        const discount = <form className="discount_form">
                            <label>
                                <span className="discount_label">Promo code</span>
                                <br />
                                <input type="text" value={this.props.promo_code} className="discount_input"/>
                            </label>
                            <button className="submit_btn" onClick={this.props.givenDiscount}>Apply</button>
                        </form>

        return (
            <div>
                <button className="details_btn" onClick={this.toggle}>
                    <span id="btn_text">{this.state.show === false ? `Apply ` : `Hide `}promo code </span>
                    <span id="btn_symbol">{this.state.show === false ? `+` : `-`}</span>
                </button>
                {this.state.show === true ? discount : ''} 
            </div>
        )
    }
}

export default PromoCode;
