import React, {Component} from 'react';
import Home from './Home';
import Timer from './Timer';
import TimerForm from './TimerForm';
import Error from './Error';

class AppControl extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            element: this.props.element,
        }
    }

    render() {
        if (this.props.element === '') {
            return (
                <Home />
            );
        } else if (this.props.element === 'timer') {
            return (
                <div>
                    <Timer hour={this.props.hour} minute={this.props.minute} second={this.props.second} />
                    <Error reason={this.props.reason} />
                    <TimerForm timerSubmit={this.props.timerSubmit}/>
                </div>
            );
        } else {
            return (null);
        }
    }
}

export default AppControl;