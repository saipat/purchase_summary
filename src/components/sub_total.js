import React from 'react';

class SubTotal extends React.Component {
    render(){
        return(
            <div>
                <div className='row1'>
                    <h3>subtotal</h3>
                    <h3>{`${this.props.price}`}</h3>
                </div>
            </div>
        )
    }
}

export default SubTotal