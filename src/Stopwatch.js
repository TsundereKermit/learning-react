import React, {Component} from 'react';

class Stopwatch extends Component {
    initialState = {
        hour: 0,
        minute: 0,
        second: 0,
        timerStarted: false,
    }

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    startStopwatch = () => {
        this.stopwatchID = setInterval(() => this.SWtick(), 1000);
        this.setState({timerStarted: true});
    }

    SWtick = () => {
        const {hour, minute, second} = this.state;

        if (minute === 59 && second === 59) {
            this.setState({
                hour: hour + 1,
                minute: 0,
                second: 0,
            });
        } else if (second === 59) {
            this.setState({
                minute: minute + 1,
                second: 0,
            });
        } else {
            this.setState({
                second: second + 1,
            })
        }
    }

    pauseStopwatch = () => {
        clearInterval(this.stopwatchID);
        this.setState({timerStarted: false});
    }

    resetStopwatch = () => {
        this.setState(this.initialState);
        clearInterval(this.stopwatchID);
    }

    render() {
        const {hour, minute, second} = this.state;
        
        return (
            <div>
                <h1 className="mb-3">
                    {hour + " Hours " +
                    minute + " Minutes " +
                    second + " Seconds"}
                </h1>
                <StartStop timerStarted={this.state.timerStarted} startStopwatch={this.startStopwatch} pauseStopwatch={this.pauseStopwatch} />
                <div className="divider-h"></div>
                <button className="btn btn-secondary" onClick={this.resetStopwatch}>Reset</button>
            </div>
        );
    }
}

const StartStop = props => {
    const {timerStarted, startStopwatch, pauseStopwatch} = props;

    if (timerStarted) {
        return <button className="btn btn-primary" onClick={pauseStopwatch}>Pause</button>;
    } else {
        return <button className="btn btn-primary" onClick={startStopwatch}>Start</button>;
    }
}

export default Stopwatch;