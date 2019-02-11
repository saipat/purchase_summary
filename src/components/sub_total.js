import React from 'react';

class SubTotal extends React.Component {
    render(){
        return(
            <div>
                <div className='row'>
                    <p className="row1_name">Subtotal</p>
                    <p>{`${this.props.price}`}</p>
                </div>
            </div>
        )
    }
}

export default SubTotal