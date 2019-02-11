import React from 'react';

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
        return(
            <div>
                <button className="details_btn" onClick={this.toggle}>
                    {this.state.show === false ? `See `  : `Hide ` }item details 
                    {this.state.show === false ? `  +` : `  -`}
                </button>
            </div>
        )
    }
}

export default ItemDetails;