(this.webpackJsonpbeat_a_mole_game=this.webpackJsonpbeat_a_mole_game||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/smashSound.f7c82cf8.mp3"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),r=a.n(i),o=(a(14),a(5)),s=a(1),l=a(2),u=a(3),m=a(4),d=(a(15),a(8)),v=a.n(d),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onImageDivClick=function(){var t=e.props.circle.id;e.props.onCircleClick(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.circle.visibility?"circleImage":"circleImage circleImageHidden";return c.a.createElement("div",{className:"circleItem"},c.a.createElement("div",{className:e,onClick:this.onImageDivClick}))}}]),a}(c.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={circleItems:[],circleItemsCount:9,counter:0,counterStep:1,randomId:0,isMute:!1},e.audio=new Audio(v.a),e.getCircles=function(){for(var t=[],a=0;a<e.state.circleItemsCount;a++)t.push({id:a,visibility:!1});e.setState({circleItems:t})},e.getRandomId=function(){var t=Math.floor(Math.random()*e.state.circleItemsCount);t===e.state.randomId?(t=Math.floor(Math.random()*e.state.circleItemsCount),e.setState({randomId:t})):e.setState({randomId:t})},e.getVisibleCircle=function(){var t=e.state.circleItems.map((function(t){return t.id===e.state.randomId?Object(o.a)({},t,{},{visibility:!0}):Object(o.a)({},t,{},{visibility:!1})}));e.setState({circleItems:t})},e.playSound=function(){e.audio.currentTime=0,e.audio.play()},e.onCircleClick=function(t){var a=e.state.counter+e.state.counterStep;e.state.circleItems.map((function(n){return n.id===t&&n.visibility?e.setState({counter:a}):n})),e.state.isMute||e.playSound()},e.onMuteClick=function(){e.state.isMute?e.setState({isMute:!1}):e.setState({isMute:!0})},e.onResetClick=function(){e.setState({counter:0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getCircles(),setInterval((function(){e.getRandomId(),e.getVisibleCircle()}),1e3)}},{key:"render",value:function(){var e=this,t=this.state.circleItems.map((function(t){return c.a.createElement(p,{circle:t,onCircleClick:e.onCircleClick})})),a=this.state.isMute?"muteButton":"unMuteButton";return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"gameTitle"},"Beat a Mole!"),c.a.createElement("div",{className:"uiWrapper"},c.a.createElement("div",{className:"circleItemsWrapper"},t),c.a.createElement("div",{className:"bottomCircles"},c.a.createElement("button",{className:a,onClick:this.onMuteClick}),c.a.createElement("div",{className:"counter"},this.state.counter),c.a.createElement("button",{className:"resetButton",onClick:this.onResetClick},"reset"))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.dc646be3.chunk.js.map