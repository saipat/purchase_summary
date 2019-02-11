import React from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../actions/promo_code_actions';


class PromoCode extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            show: !this.state.show
        })
    }

    handleChange = e => {
        // the setState below will be sent to redux
        // this.setState({ value: e.target.value });
        this.props.handleChange(e);
    };

    render(){

        const discount =  <form className="discount_form">
                        <label>
                            <span className="discount_label">Promo code</span>
                            <br />
                            <input type="text" value={this.props.promoCode} className="discount_input" onChange={this.handleChange} />
                        </label>
                        <button className="submit_btn"
                            onClick={this.props.givenDiscount}
                            disabled={this.props.isDisabled}>Apply
                            </button>
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


const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(PromoCode);
