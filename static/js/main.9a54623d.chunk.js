(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/Recording.07d1db13.mp3"},26:function(e,t,n){e.exports=n(60)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(5),o=n.n(s),u=(n(31),n(8)),c=n(4),r=n(9),l=n(10),h=n(1),d=n(11),m=(n(32),n(33),function(e){function t(){return Object(u.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"time-wrapper"},i.a.createElement("h1",{id:"time"},this.props.hours,":",this.props.minutes,":",this.props.seconds))}}]),t}(a.Component)),b=n(22),g=n.n(b),p=n(73),v=n(23),f=n.n(v),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={seconds:0,hours:0,minutes:10,clicked:!1,doing:"",completeTimer:!1,quote:""},n.handleMinuteChange=n.handleMinuteChange.bind(Object(h.a)(n)),n.handleHoursChange=n.handleHoursChange.bind(Object(h.a)(n)),n.startCountDown=n.startCountDown.bind(Object(h.a)(n)),n.countSeconds=n.countSeconds.bind(Object(h.a)(n)),n.countMinutes=n.countMinutes.bind(Object(h.a)(n)),n.countHours=n.countHours.bind(Object(h.a)(n)),n.playSound=n.playSound.bind(Object(h.a)(n)),n.handleDoingChange=n.handleDoingChange.bind(Object(h.a)(n)),n.handleYes=n.handleYes.bind(Object(h.a)(n)),n.handleNo=n.handleNo.bind(Object(h.a)(n)),n.beep=new Audio(g.a),n.setResult=n.setResult.bind(Object(h.a)(n)),n.getQuote=n.getQuote.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getQuote",value:function(){var e=this;f.a.get("https://random-word-api.herokuapp.com/word?key=Y9JNN9XW&number=5").then((function(t){var n=t.data.join(" ");e.setState({quote:n})})).catch((function(e){console.log(e)}))}},{key:"setResult",value:function(e){if(localStorage.getItem("boxes")){var t=JSON.parse(localStorage.getItem("boxes"));t.push(e),localStorage.setItem("boxes",JSON.stringify(t))}else localStorage.setItem("boxes",JSON.stringify(e))}},{key:"componentDidMount",value:function(){this.beep.load(),this.getQuote()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerRef)}},{key:"handleYes",value:function(){clearInterval(this.timerRef),this.setState({minute:10}),this.setResult("yes")}},{key:"handleNo",value:function(){clearInterval(this.timerRef),this.setState({minute:10}),this.setResult("no")}},{key:"handleDoingChange",value:function(e){this.setState({doing:e.target.value})}},{key:"handleHoursChange",value:function(e){this.setState({hours:e.target.value})}},{key:"playSound",value:function(){var e=this.beep.play();void 0!==e&&e.then((function(e){console.log("Timer Done")})).catch((function(e){console.log(e)}))}},{key:"handleMinuteChange",value:function(e){this.setState({minutes:e.target.value})}},{key:"countSeconds",value:function(){0==this.state.seconds&&0==this.state.minutes&&0==this.state.hours?(this.playSound(),this.setState({completeTimer:!0})):this.state.seconds>0?this.setState({seconds:this.state.seconds-1}):(this.setState({seconds:59}),this.countMinutes())}},{key:"countMinutes",value:function(){this.state.minutes>0?this.setState({minutes:this.state.minutes-1}):(this.setState({minutes:59}),this.countHours())}},{key:"countHours",value:function(){this.state.hours>0&&this.setState({hours:this.state.hours-1})}},{key:"startCountDown",value:function(){this.timerRef=setInterval(this.countSeconds,1e3),this.setState({clicked:!0})}},{key:"render",value:function(){return this.state.completeTimer?i.a.createElement("div",{id:"timer-done",class:"background"},i.a.createElement("h1",null,"Did you finish what your task?"),i.a.createElement(p.a,{variant:"contained",color:"primary",onClick:this.handleYes},"Yes"),i.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:this.handleNo},"No")):i.a.createElement("div",{className:"background"},!this.state.clicked&&i.a.createElement("div",{id:"input-form"},i.a.createElement("h1",null,"How long will you work?"),"Hour: ",i.a.createElement("input",{type:"number",value:this.props.hours,onChange:this.handleHoursChange,min:"0",max:"4",required:!0}),"Minute: ",i.a.createElement("input",{type:"number",value:this.props.minutes,onChange:this.handleMinuteChange,min:"0",max:"60",required:!0}),i.a.createElement("h1",null,"What are you working on?"),i.a.createElement("input",{type:"text",value:this.state.doing,onChange:this.handleDoingChange,required:!0})),this.state.clicked&&i.a.createElement("div",{id:"good-luck"},i.a.createElement("h1",null,"Good luck with ",this.state.doing),i.a.createElement("h1",null,"Confucious once said: ",this.state.quote)),i.a.createElement(m,{hours:this.state.hours,minutes:this.state.minutes,seconds:this.state.seconds}),!this.state.clicked&&i.a.createElement("div",{id:"button"},i.a.createElement("button",{disabled:!this.state.minutes,onClick:this.startCountDown},"Start")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.9a54623d.chunk.js.map