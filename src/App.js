import React, {Component} from 'react';
import './App.css';
import Timer from "./components/Timer"
import MyVoice from "./sounds/Recording.mp3";
import Button from '@material-ui/core/Button';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      hours:0,
      minutes:10,
      clicked : false,
      doing:"",
      completeTimer: false,
      quote:""
    }
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleHoursChange=this.handleHoursChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.countSeconds = this.countSeconds.bind(this);
    this.countMinutes = this.countMinutes.bind(this);
    this.countHours = this.countHours.bind(this);
    this.playSound=this.playSound.bind(this);
    this.handleDoingChange = this.handleDoingChange.bind(this);
    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.beep = new Audio(MyVoice);
    this.setResult = this.setResult.bind(this);
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote(){
    axios.get('https://random-word-api.herokuapp.com/word?key=Y9JNN9XW&number=5')
    .then((res)=>{
      let quote = res.data.join(" ")
      this.setState({
        quote:quote
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  setResult(result){
    if (localStorage.getItem("boxes")){
      var currentStorage = JSON.parse(localStorage.getItem("boxes"))
      currentStorage.push(result)
      localStorage.setItem("boxes", JSON.stringify(currentStorage))
    }
    else{
      localStorage.setItem("boxes", JSON.stringify(result))
    }
  }
  componentDidMount(){
    this.beep.load();
    this.getQuote();
  }
  componentWillUnmount(){
    clearInterval(this.timerRef)
  }
  handleYes(){
    clearInterval(this.timerRef)
    this.setState({
      minute:10
    })
    this.setResult("yes")
  }
  handleNo(){
    clearInterval(this.timerRef)
    this.setState({
      minute:10
    })
    this.setResult("no")
  }
  handleDoingChange(event){
    this.setState({
      doing:event.target.value
    })
  }
  handleHoursChange(event){
    this.setState({
      hours:event.target.value
    })
  }
  playSound(){
    const soundPromise = this.beep.play();
    if (soundPromise !== undefined){
      soundPromise.then(e=>{
        console.log("Timer Done")
      }).catch(err=>{
        console.log(err)
      })
    }
  }

  handleMinuteChange(event) {
    this.setState({
      minutes: event.target.value
    })
  };

  countSeconds() {
    if (this.state.seconds ==0 && this.state.minutes ==0 && this.state.hours==0){
      this.playSound();
      this.setState({
        completeTimer:true
      })
    }else{
    if (this.state.seconds > 0){
      this.setState({
        seconds: this.state.seconds -1
      }) 
    }
    else{
      this.setState({
        seconds:59
      })
      this.countMinutes()
    }
  }
}
  
  countMinutes(){
    if (this.state.minutes > 0){
      this.setState({
        minutes: this.state.minutes -1
      })
    }
    else{
      this.setState({
        minutes:59
      })
      this.countHours()
    }
  }
  countHours(){
    if (this.state.hours > 0){
      this.setState({
        hours: this.state.hours -1
      })
    }
  }

  startCountDown() {
    this.timerRef = setInterval(this.countSeconds, 1000);
    this.setState({
      clicked : true
    })
  }

  render() {
    if (!this.state.completeTimer){
      return (
        <div className="background">
            {!this.state.clicked &&
              <div id="input-form">
                <h1>How long will you work?</h1>
                  Hour: <input type="number" value={this.props.hours} onChange={this.handleHoursChange} min="0" max="4" required/>
                  Minute: <input type="number" value={this.props.minutes} onChange={this.handleMinuteChange} min="0" max="60" required/> 
                <h1>What are you working on?</h1>
                  <input type="text" value={this.state.doing} onChange={this.handleDoingChange} required />
              </div>
            }
            {this.state.clicked &&
            <div id="good-luck">
              <h1>Good luck with {this.state.doing}</h1>
              <h1>Confucious once said: {this.state.quote}</h1>
            </div>
            }
            <Timer hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
            {!this.state.clicked&&
              <div id="button">
                <button disabled={!this.state.minutes} onClick={this.startCountDown}>Start</button>
              </div>
            }
        </div>
      );
    }
    else{
      return (
        <div id="timer-done" class="background">
          <h1>Did you finish what your task?</h1>
          <Button variant="contained" color="primary" onClick={this.handleYes}>Yes</Button>
          <Button variant="contained" color="secondary" onClick={this.handleNo}>No</Button>
        </div>
      )
    }
  }
}

export default App;
