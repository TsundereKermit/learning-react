import React, {Component} from 'react';

class Error extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <div>
                {this.props.reason}
            </div>
        )
    }
}

export default Error;