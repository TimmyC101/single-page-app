(this["webpackJsonpsingle-page-app"]=this["webpackJsonpsingle-page-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(3),l=a.n(s);a(14),a(15);var r=function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},"Our Amazing World"),i.a.createElement("div",{className:"self"},"Tim Calhoun"))},o=a(4),c=a(5),m=a(7),d=a(6),u=a(1),h=a(8),g=(a(16),[{id:0,name:"Table Of Contents",img:"./images/world.webp",text:"This book contains scientifically valid facts about Our amazing World, authenticated by nationally renowned ecologists and zoologists.  It is recommended to narrate internally with the voice of David Attenborough."},{id:1,name:"Bear",img:"./images/bear.jpg",text:"Bears are found predominantly in campsite areas throughout our world's forests.  You will often see them eating jars of honey, escorting children through jungles, or saving your national parks from wildfires."},{id:2,name:"Shark",img:"./images/shark.jpg",text:"Sharks get a pretty bad rap (looking at you, Steven).  Here is a list of things that kill more people than sharks: vending machines, selfies, champagne corks, coconuts, and armed toddlers."},{id:3,name:"Chinchilla",img:"./images/chinchilla.jpg",text:"Chinchillas have the 2nd highest fur density of any animal, behind only the prestigious otter.  Be sure to amaze your friends and colleagues with this factoid at your next work function.  Hey... you're welcome."}]);var p=function(e){return i.a.createElement("button",{onClick:e.handleClick,value:e.name},0===e.id?e.name:"Chapter "+e.id+": The "+e.name)};var f=function(e){return i.a.createElement("span",{className:"ring",style:{left:+e.pos+"%"}},i.a.createElement("span",{className:"hole-1"}),i.a.createElement("span",{className:"hole-2"}))},v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={animals:g,newAnimal:"",newImage:"",newText:"",oldAnimal:"Table Of Contents",oldImage:"./images/world.webp",oldText:"This book contains scientifically valid facts about Our amazing World, authenticated by nationally renowned ecologists and zoologists.  It is recommended to narrate internally with the voice of David Attenborough."},e.handleClick=e.handleClick.bind(Object(u.a)(e)),e.pageTurner=e.pageTurner.bind(Object(u.a)(e)),e.resetState=e.resetState.bind(Object(u.a)(e)),e.resetClasses=e.resetClasses.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.pageTurner(e),setTimeout(this.resetState,3e3),setTimeout(this.resetClasses,3100)}},{key:"pageTurner",value:function(e){var t=this,a=e.target.value;this.state.animals.forEach((function(e){e.name===a&&(t.setState({newAnimal:a}),t.setState({newImage:e.img}),t.setState({newText:e.text}))})),document.getElementById("old-page").classList.add("pageturner"),document.getElementById("new-page").classList.add("pageturner2")}},{key:"resetState",value:function(){this.setState({oldAnimal:this.state.newAnimal}),this.setState({oldImage:this.state.newImage}),this.setState({oldText:this.state.newText})}},{key:"resetClasses",value:function(){document.getElementById("old-page").classList.remove("pageturner"),document.getElementById("new-page").classList.remove("pageturner2")}},{key:"render",value:function(){for(var e=this,t=this.state.animals.map((function(t){return i.a.createElement(p,{key:t.id,id:t.id,name:t.name,handleClick:e.handleClick})})),a=[],n=26.5;n<100;n+=5)a.push(i.a.createElement(f,{key:n,pos:n}));return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"border"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"tabs"},t),i.a.createElement("div",null,a),i.a.createElement("div",{className:"old-image"},i.a.createElement("img",{src:this.state.oldImage,alt:this.state.oldAnimal})),i.a.createElement("div",{id:"old-page",className:"old-text"},this.state.oldText),i.a.createElement("div",{id:"new-page",className:"new-image"},i.a.createElement("div",{className:"rotate"},i.a.createElement("img",{src:this.state.newImage,alt:this.state.newAnimal}))),i.a.createElement("div",{className:"new-text"},this.state.newText))))}}]),t}(i.a.Component);a(17);var w=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(r,null),i.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0c972f29.chunk.js.map