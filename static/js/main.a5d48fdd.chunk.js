(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},37:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(23),c=n.n(r),o=n(4),u=(n(37),n(6)),l=n(7),i=n(10),d=n(8),m=n(11),p=(n(38),function(e){var t;if(0===e.guessedWords.length)t=s.a.createElement("span",{"data-test":"guess-instructions"},"Try to guess the secret word!");else{var n=e.guessedWords.map(function(e,t){return s.a.createElement("tr",{"data-test":"guessed-word",key:t},s.a.createElement("td",null,e.guessedWord),s.a.createElement("td",null,e.letterMatchCount))});t=s.a.createElement("div",{"data-test":"guessed-words"},s.a.createElement("h3",null,"Guessed Words"),s.a.createElement("table",{className:"table table-sm"},s.a.createElement("thead",{className:"thead-light"},s.a.createElement("tr",null,s.a.createElement("th",null,"Guess"),s.a.createElement("th",null,"Matching Letters"))),s.a.createElement("tbody",null,n)))}return s.a.createElement("div",{"data-test":"component-guessed-words"},t)}),h=function(e){return e.success?s.a.createElement("div",{"data-test":"component-congrats",className:"alert alert-success"},s.a.createElement("span",{"data-test":"congrats-message"},"Congratulations! You guessed the word")):s.a.createElement("div",{"data-test":"component-congrats"})},g=n(5),b=n(26),f=n.n(b),v=n(9);var E="CORRECT_GUESS",W="GUESS_WORD",y="SET_SECRET_WORD",w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(d.a)(t).call(this,e))).inputBox=s.a.createRef(),n.submitGuessedWord=n.submitGuessedWord.bind(Object(g.a)(Object(g.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"submitGuessedWord",value:function(e){e.preventDefault();var t=this.inputBox.current.value;t&&t.length>0&&this.props.guessWord(t),this.inputBox.current.value=""}},{key:"render",value:function(){var e=this.props.success?null:s.a.createElement("form",{className:"form-inline"},s.a.createElement("input",{"data-test":"input-box",ref:this.inputBox,className:"mb-2 mx-sm-3",id:"word-guess",type:"text",placeholder:"Enter guess"}),s.a.createElement("button",{"data-test":"submit-button",className:"btn btn-primary mb-2",onClick:this.submitGuessedWord,type:"submit"},"Submit"));return s.a.createElement("div",{"data-test":"component-input"},e)}}]),t}(a.Component),O=Object(o.b)(function(e){return{success:e.success}},{guessWord:function(e){return function(t,n){var a=n().secretWord,s=function(e,t){var n=new Set(t.split("")),a=new Set(e.split(""));return Object(v.a)(n).filter(function(e){return a.has(e)}).length}(e,a);t({type:W,payload:{guessedWord:e,letterMatchCount:s}}),e===a&&t({type:E})}}})(w),j=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getSecretWord()}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Jotto"),s.a.createElement(h,{success:this.props.success}),s.a.createElement(O,null),s.a.createElement(p,{guessedWords:this.props.guessedWords}))}}]),t}(a.Component),S=Object(o.b)(function(e){return{success:e.success,guessedWords:e.guessedWords,secretWord:e.secretWord}},{getSecretWord:function(){return function(e){return f.a.get("http://localhost:3030").then(function(t){e({type:y,payload:t.data})})}}})(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(3),C=n(27),x=Object(k.c)({success:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case E:return!0;default:return e}},guessedWords:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return[].concat(Object(v.a)(e),[t.payload]);default:return e}},secretWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload;default:return e}}}),G=[C.a],N=k.a.apply(void 0,G)(k.d)(x);c.a.render(s.a.createElement(o.a,{store:N},s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.a5d48fdd.chunk.js.map