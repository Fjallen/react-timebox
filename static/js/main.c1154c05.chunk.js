(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Recording.07d1db13.mp3"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),o=n.n(s),u=(n(16),n(2)),c=n(3),h=n(5),l=n(4),r=n(1),d=n(6),m=(n(17),n(18),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"time-wrapper"},i.a.createElement("h1",{id:"time"},this.props.hours,":",this.props.minutes,":",this.props.seconds))}}]),t}(a.Component)),b=n(9),p=n.n(b),g=n(10),v=n.n(g),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(l.a)(t).call(this,e))).state={seconds:0,hours:0,minutes:10,clicked:!1,doing:"",completeTimer:!1},n.handleMinuteChange=n.handleMinuteChange.bind(Object(r.a)(n)),n.handleHoursChange=n.handleHoursChange.bind(Object(r.a)(n)),n.startCountDown=n.startCountDown.bind(Object(r.a)(n)),n.countSeconds=n.countSeconds.bind(Object(r.a)(n)),n.countMinutes=n.countMinutes.bind(Object(r.a)(n)),n.countHours=n.countHours.bind(Object(r.a)(n)),n.playSound=n.playSound.bind(Object(r.a)(n)),n.handleDoingChange=n.handleDoingChange.bind(Object(r.a)(n)),n.handleYes=n.handleYes.bind(Object(r.a)(n)),n.handleNo=n.handleNo.bind(Object(r.a)(n)),n.beep=new p.a(v.a),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleYes",value:function(){this.setState({minute:10})}},{key:"handleNo",value:function(){this.setState({minute:10})}},{key:"handleDoingChange",value:function(e){this.setState({doing:e.target.value})}},{key:"handleHoursChange",value:function(e){this.setState({hours:e.target.value})}},{key:"playSound",value:function(){this.beep.play()}},{key:"handleMinuteChange",value:function(e){this.setState({minutes:e.target.value})}},{key:"countSeconds",value:function(){0==this.state.seconds&&0==this.state.minutes&&0==this.state.hours?(this.playSound(),this.setState({completeTimer:!0})):this.state.seconds>0?this.setState({seconds:this.state.seconds-1}):(this.setState({seconds:59}),this.countMinutes())}},{key:"countMinutes",value:function(){this.state.minutes>0?this.setState({minutes:this.state.minutes-1}):(this.setState({minutes:59}),this.countHours())}},{key:"countHours",value:function(){this.state.minutes>0&&this.setState({hours:this.state.hours-1})}},{key:"startCountDown",value:function(){setInterval(this.countSeconds,1e3),this.setState({clicked:!0})}},{key:"render",value:function(){return this.state.completeTimer?i.a.createElement("div",null,i.a.createElement("h1",null,"Did you finish what your task?"),i.a.createElement("button",{onClick:this.handleYes},"Yes"),i.a.createElement("button",{onClick:this.handleNo},"No")):i.a.createElement("div",null,!this.state.clicked&&i.a.createElement("div",{id:"input-form"},i.a.createElement("h1",null,"How long will you work?"),"Hour: ",i.a.createElement("input",{type:"number",value:this.props.hours,onChange:this.handleHoursChange,min:"0",max:"4",required:!0}),"Minute: ",i.a.createElement("input",{type:"number",value:this.props.minutes,onChange:this.handleMinuteChange,min:"0",max:"60",required:!0}),i.a.createElement("h1",null,"What are you working on?"),i.a.createElement("input",{type:"text",value:this.state.doing,onChange:this.handleDoingChange,required:!0})),this.state.clicked&&i.a.createElement("div",{id:"good-luck"},i.a.createElement("h1",null,"Good luck with ",this.state.doing)),i.a.createElement(m,{hours:this.state.hours,minutes:this.state.minutes,seconds:this.state.seconds}),!this.state.clicked&&i.a.createElement("div",{id:"button"},i.a.createElement("button",{disabled:!this.state.minutes,onClick:this.startCountDown},"Start")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.c1154c05.chunk.js.map