import React, {Component} from 'react';
import Clock from './Clock';

class Navbar extends Component {
    homeSubmit = () => {
        this.props.navSubmit('');
    }

    navTimerSubmit = () => {
        this.props.navSubmit('timer');
    }

    stopwatchSubmit = () => {
        this.props.navSubmit('stopwatch');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="https://github.com/TsundereKermit" rel="noopener noreferrer" target="_blank">TsundereKermit</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {/* eslint-disable-next-line */}
                        <a className="nav-link" href="#" onClick={this.homeSubmit}>Home</a>
                    </li>
                    <li className="nav-item">
                        {/* eslint-disable-next-line */}
                        <a className="nav-link" href="#" onClick={this.navTimerSubmit}>Timer</a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a className="nav-link" href="#" onClick={this.stopwatchSubmit}>Stopwatch</a>
                    </li>
                </ul>
                <Clock />
            </nav>
        )
    }
}

export default Navbar;