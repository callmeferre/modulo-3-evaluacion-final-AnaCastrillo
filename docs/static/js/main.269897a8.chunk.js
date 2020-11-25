(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(20),i=a.n(s),l=a(7),j=(a(27),a(11)),u=a(12),d=a(10),o=a(14),h=a(13),b=a(2),m=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,img:e.image,species:e.species,status:e.status,origin:e.origin.name,episodes:e.episode.length}}))}))},O=a.p+"static/media/RMlogo.de13d484.png",p=(a(28),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("div",{className:"logo-container",children:Object(n.jsx)("img",{className:"logo",src:O,alt:"Rick and Morty"})})})})}}]),a}(r.a.Component));a(29);var x=function(e){return Object(n.jsx)("form",{children:Object(n.jsx)("input",{className:"search-input",type:"text",value:e.value,placeholder:"\xbfA qui\xe9n buscas?",onChange:function(t){t.preventDefault(),e.handleInput({value:t.target.value,key:"name"})}})})};a(30);var g=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(l.b,{to:"/character/".concat(e.character.id),children:Object(n.jsxs)("li",{className:"card",children:[Object(n.jsx)("div",{className:"img-container",children:Object(n.jsx)("img",{src:e.character.img,alt:e.character.name})}),Object(n.jsxs)("div",{className:"text-container",children:[Object(n.jsx)("h3",{children:e.character.name}),Object(n.jsx)("span",{children:e.character.species})]})]})})})},f=(a(36),a.p+"static/media/noChara.f301b0e4.jpg");var v=function(e){var t=e.results.filter((function(t){return t.name.toUpperCase().includes(e.inputValue.toUpperCase())}));return 0===t.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{className:"error-message-list",children:["No veo ning\xfan personaje que coincida con la palabra",Object(n.jsxs)("strong",{children:[" ",e.inputValue]})]}),Object(n.jsx)("div",{className:"noChara",children:Object(n.jsx)("img",{src:f,alt:"no se ha encontrado nada"})})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("ul",{className:"cardList",children:t.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).map((function(e){return Object(n.jsx)(g,{character:e},e.id)}))})})};a(37);var N=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)(x,{handleInput:e.handleInput,value:e.state.value}),Object(n.jsx)(v,{results:e.state.data,inputValue:e.state.value})]})})};a(38);var y=function(e){var t="Dead"===e.character.status?"Dead \u2620\ufe0f":"Alive \ud83c\udf31",a="Human"===e.character.species?"\ud83d\udc66":"\ud83d\udc7d";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"detail",children:[Object(n.jsx)("img",{className:"detail-img",src:e.character.img,alt:e.character.name}),Object(n.jsxs)("ul",{className:"detail-text",children:[Object(n.jsx)("li",{children:Object(n.jsx)("h3",{className:"name",children:e.character.name})}),Object(n.jsxs)("li",{children:["Status: ",t]}),Object(n.jsxs)("li",{children:["Species: ",a]}),Object(n.jsxs)("li",{children:["Origin: ",e.character.origin]}),Object(n.jsxs)("li",{children:["Episodes: ",e.character.episodes]})]})]}),Object(n.jsx)(l.b,{to:"/",className:"return",children:"Volver"})]})};var C=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"background",children:[Object(n.jsx)("div",{className:"detail-notfound",children:Object(n.jsx)("h1",{children:"No hemos encontrado el personaje que buscabas"})}),Object(n.jsx)(l.b,{to:"/",className:"return",children:"Volver"})]})})},k=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={data:[],value:""},n.handleInput=n.handleInput.bind(Object(d.a)(n)),n.handleCharacterDetail=n.handleCharacterDetail.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("data",JSON.stringify(this.state))}},{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("data"));this.setState(t),m().then((function(t){e.setState({data:t})}))}},{key:"handleInput",value:function(e){this.setState({value:e.value})}},{key:"handleCharacterDetail",value:function(e){var t=parseInt(e.match.params.id),a=this.state.data.find((function(e){return e.id===t}));return void 0!==a?Object(n.jsx)(y,{character:a}):Object(n.jsx)(C,{})}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/",exact:!0,children:Object(n.jsx)(N,{state:this.state,handleInput:this.handleInput})}),Object(n.jsx)(b.a,{path:"/character/:id",render:this.handleCharacterDetail})]})]})}}]),a}(r.a.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(k,{})})}),document.getElementById("root")),I()}},[[39,1,2]]]);
//# sourceMappingURL=main.269897a8.chunk.js.map