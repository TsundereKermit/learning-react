import React, {Component} from 'react';
import Navbar from './Navbar';
import AppControl from './AppControl';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 0,
            second: 0, 
            err_reason: '',
            element: '',
            sfx: '',
            timerStarted: false,
            url: '',
        };
    }

    timerSubmit = (hour, minute, second, sfx, url) => {
        if (hour < 0 || minute < 0 || second < 0) {
            this.setState({
                hour: 0,
                minute: 0,
                second: 0,
                sfx: '',
                timerStarted: false,
                err_reason: "Due to special relativity, negative time is not accepted as of this moment.",
                url: '',
            });
        } else if (minute > 59 || second > 60) {
            this.setState({
                hour: 0,
                minute: 0,
                second: 0,
                sfx: '',
                timerStarted: false,
                err_reason: "Becaused we're civilized, we use the international standard notation for time here.",
                url: '',
            });
        } else if (hour === 0 && minute === 0 && second === 0) {
            this.setState({
                hour: 0,
                minute: 0,
                second: 0,
                sfx: '',
                timerStarted: false,
                err_reason: "",
                url: '',
            });
        } else {
            this.setState({
                hour: hour, 
                minute: minute, 
                second: second,
                sfx: sfx, 
                timerStarted: true,
                err_reason: "",
                url: url,
            });
        }
    }

    navSubmit = element => {
        this.setState({element: element});
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

        if (hour === 0 && minute === 0 && second === 0 && this.state.timerStarted) {
            var sfxString = '';
            if (this.state.sfx === "bruh sound effect 2") {
                sfxString = "https://www.myinstants.com/media/sounds/movie_1.mp3";
            } else if (this.state.sfx === "how dare you") {
                sfxString = "https://www.myinstants.com/media/sounds/howdareyou_1GuCHbh.mp3"
            } else if (this.state.sfx === "hello there") {
                sfxString = "https://www.myinstants.com/media/sounds/obi-wan-hello-there.mp3";
            } else if (this.state.sfx === "custom") {
                sfxString = this.state.url;
            }

            let audio = new Audio(sfxString);
            let audioPromise = audio.play();

            if (audioPromise !== undefined) {
                audioPromise
                .then(() => {
                    this.setState({
                        sfx: '',
                        timerStarted: false,
                        url: '',
                    })
                })
                .catch(err => 
                    this.setState({
                        sfx: '',
                        timerStarted: false,
                        url: '',
                        err_reason: "Like, enter a valid sound URL or something. You're such a slob, b-baka!"
                    })
                );
            }
        }
    }
    
    render() {
        return (
            <div>
                <Navbar navSubmit={this.navSubmit} />
                <div className="w-100 padding-15">
                    <AppControl
                        element={this.state.element}
                        timerSubmit={this.timerSubmit}
                        hour={this.state.hour}
                        minute={this.state.minute}
                        second={this.state.second}
                        reason={this.state.err_reason}
                    />
                </div>
            </div>  
        )
    }
}

export default App;