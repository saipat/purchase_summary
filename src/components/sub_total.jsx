import React from 'react';

class SubTotal extends React.Component {
    render(){
        return(
            <div>
                <div className='row'>
                    <p className="sub_total">Subtotal</p>
                    <p>{`$${this.props.subtotal}`}</p>
                </div>
            </div>
        )
    }
}

export default SubTotal