import React, {Component} from 'react';
import Clock from './Clock';
import Timer from './Timer';
import TimerForm from './TimerForm';
import Error from './Error';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 0,
            second: 0, 
            err_reason: '',
        };
    }

    timerSubmit = (hour, minute, second) => {
        if (hour < 0 || minute < 0 || second < 0) {
            this.setState({
                hour: 0,
                minute: 0,
                second: 0,
                err_reason: "Due to special relativity, negative time is not accepted as of this moment.",
            });
        } else if (minute > 59 || second > 60) {
            this.setState({
                hour: 0,
                minute: 0,
                second: 0,
                err_reason: "Becaused we're civilized, we use the international standard notation for time here.",
            });
        } else {
            this.setState({
                hour: hour, 
                minute: minute, 
                second: second, 
                err_reason: "",
            });
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () =>
            this.tickdown(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tickdown() {
        var second = this.state.second;
        var minute = this.state.minute;
        var hour = this.state.hour;
        
        if (second > 0) {
            this.setState({second: second - 1});
        } else if (minute > 0) {
            this.setState({
                minute: minute - 1,
                second: 59,
            });
        } else if (hour > 0) {
            this.setState({
                hour: hour - 1,
                minute: 59,
                second: 59,
            });
        }
    }
    
    render() {
        return (
            <div className="container">
                <Clock />
                <Timer hour={this.state.hour} minute={this.state.minute} second={this.state.second} />
                <Error reason={this.state.err_reason} />
                <TimerForm timerSubmit={this.timerSubmit}/>
            </div>
        )
    }
}

export default App;