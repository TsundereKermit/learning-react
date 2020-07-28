import React, {Component} from 'react';
import Clock from './Clock';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    homeSubmit = () => {
        this.setState({value: ''});
        this.props.navSubmit('');
    }

    navTimerSubmit = () => {
        this.setState({value: 'timer'});
        this.props.navSubmit('timer');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="https://github.com/TsundereKermit" target="_blank">TsundereKermit</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.homeSubmit}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.navTimerSubmit}>Timer</a>
                    </li>
                </ul>
                <Clock />
            </nav>
        )
    }
}

export default Navbar;