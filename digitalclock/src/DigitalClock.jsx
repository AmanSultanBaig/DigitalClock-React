import React, { Component } from 'react';
import { setInterval } from 'timers';

class DigitalClock extends Component {
    constructor() {
        super();
        this.state = { time: new Date().toLocaleTimeString() }; // initialise the state

        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2>Digital Clock</h2>
                <h1>{this.state.time}</h1>
            </div>
        )
    }
}

export default DigitalClock