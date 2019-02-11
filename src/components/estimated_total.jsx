import React from 'react';

class EstimatedTotal extends React.Component {
    render() {
        const total = this.props.data.subtotal - this.props.data.pickup_savings + this.props.data.estimated_tax;
        return(
            <div>
                <div aria-hidden="true"><hr aria-hidden="true" className="divider "></hr>
                </div>
                    <div className='row est_total'>
                        <h2 className='total'>Est. total</h2>
                        <h2 className='total_value'>{`$${total}`}</h2>
                    </div>
            </div>
        )
    }
}

export default EstimatedTotal