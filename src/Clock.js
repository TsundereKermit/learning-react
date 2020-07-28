import React, {Component} from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.clockID = setInterval(
            () => 
            this.tick(), 
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.clockID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <span className="navbar-text">
                {this.state.date.toLocaleDateString()
                + ' '
                + this.state.date.toLocaleTimeString()}
            </span>
        );
    }
}

export default Clock;