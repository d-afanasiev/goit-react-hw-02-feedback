(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={list:"Statistics_list__3oKT7"}},function(e,t,n){e.exports={wrapperButtons:"FeedbackOptions_wrapperButtons__NKrmN"}},function(e,t,n){e.exports={titleFeedback:"Section_titleFeedback__pgDoJ"}},function(e,t,n){e.exports={text:"Notification_text__3WvWm"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),s=(n(17),n(8)),o=n(2),u=n(3),b=n(5),l=n(4),j=(n(18),n(9)),d=n.n(j),h=n(0),p=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)("ul",{className:d.a.list,children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",c]}),Object(h.jsxs)("li",{children:["Total: ",a]}),Object(h.jsxs)("li",{children:["Total: ",r," %"]})]})}}]),n}(c.Component),O=n(10),f=n.n(O),v=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback,c=Object.keys(t);return Object(h.jsx)("div",{className:f.a.wrapperButtons,children:c.map((function(e,t){return Object(h.jsx)("button",{type:"submit",onClick:function(){return n(e)},children:e},t)}))})}}]),n}(c.Component),k=n(11),x=n.n(k),m=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{className:x.a.titleFeedback,children:t}),n]})}}]),n}(c.Component),g=n(12),y=n.n(g),F=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(h.jsx)("p",{className:y.a.text,children:e})}}]),n}(c.Component),_=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(e){var t=e.good,n=Object.values(e).reduce((function(e,t){return e+t}),0);return Math.round(t/n*100)},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"feedback",children:[Object(h.jsx)(m,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:this.state,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(m,{title:"Statistics",children:0===this.countTotalFeedback(this.state)?Object(h.jsx)(F,{message:"No feedback given"}):Object(h.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(this.state),positivePercentage:this.countPositiveFeedbackPercentage(this.state)})})]})})}}]),n}(c.Component);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.53c3d819.chunk.js.map