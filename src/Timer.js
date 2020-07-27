import React, {Component} from 'react';

class Timer extends Component {

    initialState = {
        hour: 0,
        minute: 0,
        second: 0,
    }

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    render() {
        const {hour, minute, second} = this.props;

        return (
            <h1>
                {hour + " Hours " + 
                minute + " Minutes " +
                second + " Seconds"}
            </h1>
        );
    }

}

export default Timer;