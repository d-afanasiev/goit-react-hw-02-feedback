(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={feedback:"Feedback_feedback__3n1tl"}},function(e,t,n){e.exports={list:"Statistics_list__3oKT7"}},function(e,t,n){e.exports={wrapperButtons:"FeedbackOptions_wrapperButtons__NKrmN"}},function(e,t,n){e.exports={titleFeedback:"Section_titleFeedback__pgDoJ"}},function(e,t,n){e.exports={text:"Notification_text__3WvWm"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),o=n.n(r),i=(n(18),n(8)),s=n(2),u=n(3),b=n(5),l=n(4),d=(n(19),n(9)),j=n.n(d),p=n(10),O=n.n(p),h=n(0),f=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)("ul",{className:O.a.list,children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",c]}),Object(h.jsxs)("li",{children:["Total: ",a]}),Object(h.jsxs)("li",{children:["Total: ",r," %"]})]})}}]),n}(c.Component),v=n(11),k=n.n(v),x=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback,c=Object.keys(t);return Object(h.jsx)("div",{className:k.a.wrapperButtons,children:c.map((function(e,t){return Object(h.jsx)("button",{type:"submit",onClick:function(){return n(e)},children:e},t)}))})}}]),n}(c.Component),m=n(12),g=n.n(m),F=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{className:g.a.titleFeedback,children:t}),n]})}}]),n}(c.Component),y=n(13),_=n.n(y),N=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(h.jsx)("p",{className:_.a.text,children:e})}}]),n}(c.Component),P=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.state,n=e.countTotalFeedback,c=e.countPositiveFeedbackPercentage,a=e.onLeaveFeedback,r=t.good,o=t.neutral,i=t.bad;return Object(h.jsxs)("header",{className:j.a.feedback,children:[Object(h.jsx)(F,{title:"Please leave feedback",children:Object(h.jsx)(x,{options:t,onLeaveFeedback:a})}),Object(h.jsx)(F,{title:"Statistics",children:0===n(t)?Object(h.jsx)(N,{message:"No feedback given"}):Object(h.jsx)(f,{good:r,neutral:o,bad:i,total:n(t),positivePercentage:c(t)})})]})}}]),n}(c.Component),w=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(e){var t=e.good,n=Object.values(e).reduce((function(e,t){return e+t}),0);return Math.round(t/n*100)},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(P,{state:this.state,countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage,onLeaveFeedback:this.onLeaveFeedback})})}}]),n}(c.Component);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f3157f13.chunk.js.map