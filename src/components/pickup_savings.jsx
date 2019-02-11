import React from 'react';
import {Tooltip} from 'react-lightweight-tooltip';

class PickUpSavings extends React.Component {
    render(){
        return(
            <div>
                <div className='row'>
                    <Tooltip content="Picking up your order in the store help cut costs, and we pass the savings on to you.">
                        <p className="pickup_savings">Pickup savings</p>
                    </Tooltip>
                    <p className="pickup_savings_value">{`-$${this.props.savings}`}</p>
                </div>
                <div className='row'>
                    <p className="tax">Est. taxes & fees (Based on 94085)</p>
                    <p className="tax_value">{`$${this.props.tax}`}</p>
                </div>
            </div>
        )
    }
}

export default PickUpSavings