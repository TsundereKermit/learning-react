import React, {Component} from 'react';

class Error extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            value: '',
        }
    }

    render() {
        if (this.props.reason === "") {
            return null;
        } else {
            return (
                <div className="alert alert-primary alert-dismissable fade show">
                    {this.props.reason}
                    <button type="button" className="close" data-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        }
    }
}

export default Error;