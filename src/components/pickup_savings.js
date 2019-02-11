import React from 'react';
import ReactTooltip from 'react-tooltip'

class PickUpSavings extends React.Component {
    render(){
        <ReactTooltip id ='pickup_savings'>
            <span>Picking up your order in the store</span> 
        </ReactTooltip>
        return(
            <div>
                <div className='row2'>
                    <h3 data-tip data-for="pickup_savings">Pickup Savings</h3>
                    <h3>{`${this.props.price}`}</h3>
                </div>
            </div>
        )
    }
}

export default PickUpSavings