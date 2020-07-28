(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),s=n.n(i),c=(n(13),n(1)),o=n(2),u=n(4),l=n(3),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={date:new Date},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.clockID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clockID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("span",{className:"navbar-text"},this.state.date.toLocaleDateString()+" "+this.state.date.toLocaleTimeString())}}]),n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).homeSubmit=function(){a.setState({value:""}),a.props.navSubmit("")},a.navTimerSubmit=function(){a.setState({value:"timer"}),a.props.navSubmit("timer")},a.state={value:""},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-white"},r.a.createElement("a",{className:"navbar-brand",href:"https://github.com/TsundereKermit",target:"_blank"},"TsundereKermit"),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:this.homeSubmit},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#",onClick:this.navTimerSubmit},"Timer"))),r.a.createElement(m,null))}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={value:""},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"homepage, i guess.")}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initialState={hour:0,minute:0,second:0},a.state=a.initialState,a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.hour,n=e.minute,a=e.second;return r.a.createElement("h1",{className:"mb-3"},t+" Hours "+n+" Minutes "+a+" Seconds")}}]),n}(a.Component),d=n(7),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initialState={hour:0,minute:0,second:0},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.submitTimerForm=function(){a.props.timerSubmit(a.state.hour,a.state.minute,a.state.second),a.setState(a.initialState)},a.resetTimer=function(){a.setState(a.initialState),a.props.timerSubmit(0,0,0)},a.state=a.initialState,a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.hour,n=e.minute,a=e.second;return r.a.createElement("form",{id:"timerForm"},r.a.createElement("label",{htmlFor:"hour"},"Hours"),r.a.createElement("input",{type:"number",className:"form-control mb-2",name:"hour",id:"hour",value:t,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"minute"},"Minutes"),r.a.createElement("input",{type:"number",className:"form-control mb-2",name:"minute",id:"minute",value:n,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"second"},"Seconds"),r.a.createElement("input",{type:"number",className:"form-control",name:"second",id:"second",value:a,onChange:this.handleChange}),r.a.createElement("div",{className:"divider-v"}),r.a.createElement("div",null,r.a.createElement("input",{type:"button",className:"btn btn-primary",value:"Start timer",form:"timerForm",onClick:this.submitTimerForm}),r.a.createElement("div",{className:"divider-h"}),r.a.createElement("input",{type:"button",className:"btn btn-secondary",value:"Reset",onClick:this.resetTimer})))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={value:""},a}return Object(o.a)(n,[{key:"render",value:function(){return""===this.props.reason?null:r.a.createElement("div",{className:"alert alert-primary alert-dismissable fade show"},this.props.reason,r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={element:a.props.element},a}return Object(o.a)(n,[{key:"render",value:function(){return""===this.props.element?r.a.createElement(v,null):"timer"===this.props.element?r.a.createElement("div",null,r.a.createElement(b,{hour:this.props.hour,minute:this.props.minute,second:this.props.second}),r.a.createElement(f,{reason:this.props.reason}),r.a.createElement(p,{timerSubmit:this.props.timerSubmit})):null}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).timerSubmit=function(e,t,n){e<0||t<0||n<0?a.setState({hour:0,minute:0,second:0,err_reason:"Due to special relativity, negative time is not accepted as of this moment."}):t>59||n>60?a.setState({hour:0,minute:0,second:0,err_reason:"Becaused we're civilized, we use the international standard notation for time here."}):a.setState({hour:e,minute:t,second:n,err_reason:""})},a.navSubmit=function(e){a.setState({element:e})},a.state={hour:0,minute:0,second:0,err_reason:"",element:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tickdown()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tickdown",value:function(){var e=this.state.second,t=this.state.minute,n=this.state.hour;e>0?this.setState({second:e-1}):t>0?this.setState({minute:t-1,second:59}):n>0&&this.setState({hour:n-1,minute:59,second:59})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{navSubmit:this.navSubmit}),r.a.createElement("div",{className:"w-100 padding-15"},r.a.createElement(S,{element:this.state.element,timerSubmit:this.timerSubmit,hour:this.state.hour,minute:this.state.minute,second:this.state.second,reason:this.state.err_reason})))}}]),n}(a.Component);s.a.render(r.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a1f4f5b9.chunk.js.map