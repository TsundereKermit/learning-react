import React, {Component} from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    
    render() {
        return (
            <h1>homepage, i guess.</h1>
        )
    }
}

export default Home;