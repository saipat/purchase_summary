import React from 'react';

class EstimatedTotal extends React.Component {
    render() {
        return(
            <div>
                <div aria-hidden="true"><hr aria-hidden="true" className="divider "></hr>
                </div>
                    <div className='row est_total'>
                        <h2 className='total'>Est. total</h2>
                        <h2 className='total_value'>{`$${this.props.total}`}</h2>
                    </div>
            </div>
        )
    }
}

export default EstimatedTotal