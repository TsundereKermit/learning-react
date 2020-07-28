import React, {Component} from 'react';

class TimerForm extends Component {

    initialState = {
        hour: 0,
        minute: 0,
        second: 0,
    }
 
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitTimerForm = () => {
        this.props.timerSubmit(this.state.hour, this.state.minute, this.state.second);
        this.setState(this.initialState);
    }

    resetTimer = () => {
        this.setState(this.initialState);
        this.props.timerSubmit(0,0,0);
    }

    render() {
        const {hour, minute, second} = this.state;

        return (
            <form id="timerForm">
                <label htmlFor="hour">Hours</label>
                <input 
                    type="number"
                    className="form-control mb-2"
                    name="hour"
                    id="hour"
                    value={hour} 
                    onChange={this.handleChange} />
                <label htmlFor="minute">Minutes</label>
                <input 
                    type="number"
                    className="form-control mb-2"
                    name="minute"
                    id="minute"
                    value={minute} 
                    onChange={this.handleChange} />
                <label htmlFor="second">Seconds</label>
                <input 
                    type="number"
                    className="form-control"
                    name="second"
                    id="second"
                    value={second} 
                    onChange={this.handleChange} />
                <div className="divider-v"></div>
                <div>
                    <input 
                        type="button"
                        className="btn btn-primary"
                        value="Start timer"
                        form="timerForm"
                        onClick={this.submitTimerForm} />
                    <div className="divider-h"></div>
                    <input 
                        type="button" 
                        className="btn btn-secondary"
                        value="Reset"
                        onClick={this.resetTimer} />
                </div>
            </form>
        )
    }
}

export default TimerForm;