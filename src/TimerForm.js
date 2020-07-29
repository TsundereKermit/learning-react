import React, {Component} from 'react';

class TimerForm extends Component {

    initialState = {
        hour: 0,
        minute: 0,
        second: 0,
        sfx: "bruh sound effect 2",
        custom: false,
        url: '',
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
        this.props.timerSubmit(this.state.hour, this.state.minute, this.state.second, this.state.sfx, this.state.url);
        this.setState(this.initialState);
    }

    resetTimer = () => {
        this.setState(this.initialState);
        this.props.reset();
    }

    sfxChange = event => {
        if (event.target.value !== "custom") {
            this.setState({sfx: event.target.value});
        } else {
            this.setState({
                custom: true,
                sfx: event.target.value
            });
        }
    }

    customSfx = () => {
        this.setState({custom: true});
    }

    render() {
        const {hour, minute, second, url} = this.state;

        return (
            <form id="timerForm">
                <label htmlFor="hour">Hours</label>
                <input type="number" className="form-control mb-2" name="hour" id="hour" value={hour} onChange={this.handleChange} />
                <label htmlFor="minute">Minutes</label>
                <input type="number" className="form-control mb-2" name="minute" id="minute" value={minute} onChange={this.handleChange} />
                <label htmlFor="second">Seconds</label>
                <input type="number" className="form-control mb-2" name="second" id="second" value={second} onChange={this.handleChange} />
                <label htmlFor="sfx">Sound effect</label>
                <select className="form-control mb-2" value={this.state.sfx} onChange={this.sfxChange}>
                    <option value="bruh sound effect 2">bruh sound effect 2</option>
                    <option value="how dare you">how dare you</option>
                    <option value="hello there">hello there</option>
                    <option value="custom">custom</option>
                </select>
                {this.state.custom && 
                <input className="form-control" type="url" placeholder="Enter your sound effect's URL here" id="url" name="url" value={url} onChange={this.handleChange} />}
                <div className="divider-v"></div>
                <div>
                    <input type="button" className="btn btn-primary" value="Start timer" form="timerForm" onClick={this.submitTimerForm} />
                    <div className="divider-h"></div>
                    <input type="button" className="btn btn-secondary" value="Reset" onClick={this.resetTimer} />
                </div>
            </form>
        )
    }
}

export default TimerForm;