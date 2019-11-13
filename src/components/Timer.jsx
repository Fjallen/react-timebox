import React, {Component} from 'react'

import './Timer.css'
class Timer extends Component{
    render(){
        return(
            <div id="time-wrapper">
                <h1 id="time">{this.props.hours}:{this.props.minutes}:{this.props.seconds}</h1>
            </div>
        )
    }
}
export default Timer;