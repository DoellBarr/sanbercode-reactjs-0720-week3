(this["webpackJsonpsanbercode-reactjs-0720-week3"]=this["webpackJsonpsanbercode-reactjs-0720-week3"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),u=(a(25),a(26),a(17)),i=a(18),o=a(20),m=a(19),s=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={time:0,clock:new Date},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;void 0!==this.props.start&&this.setState({time:this.props.start}),this.timerID=setInterval((function(){return e.tick()}),1e3),setInterval((function(){return e.currentTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"currentTime",value:function(){this.setState({clock:new Date})}},{key:"tick",value:function(){this.setState({time:this.state.time-1})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.state.time>=0&&c.a.createElement("h1",{style:{textAlign:"center"}},"sekarang jam : ",this.state.clock.toLocaleTimeString()," hitung mundur : ",this.state.time))}}]),a}(n.Component),b=a(1),h=n.createContext,p=function(e){var t=Object(n.useState)(null),a=Object(b.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)(""),i=Object(b.a)(u,2),o=i[0],m=i[1],s=Object(n.useState)(""),p=Object(b.a)(s,2),d=p[0],j=p[1],f=Object(n.useState)(0),g=Object(b.a)(f,2),E=g[0],O=g[1],v=Object(n.useState)("create"),k=Object(b.a)(v,2),w=k[0],x=k[1],C=Object(n.useState)(0),y=Object(b.a)(C,2),S=y[0],B=y[1];return c.a.createElement(h.Provider,{value:[r,l,o,m,d,j,E,O,w,x,S,B]},e.children)},d=a(5),j=a(3),f=a.n(j),g=function(){var e=Object(n.useContext)(h),t=Object(b.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(h),u=Object(b.a)(l,2),i=(u[0],u[1]),o=Object(n.useContext)(h),m=Object(b.a)(o,2),s=(m[0],m[1]),p=Object(n.useContext)(h),j=Object(b.a)(p,2),g=(j[0],j[1]),E=Object(n.useContext)(h),O=Object(b.a)(E,2),v=(O[0],O[1]),k=Object(n.useContext)(h),w=Object(b.a)(k,2),x=(w[0],w[1]);Object(n.useEffect)((function(){null===a&&(f.a.get("http://backendexample.sanbercloud.com/api/fruits").then((function(e){r(e.data.map((function(e){return{id:e.id,name:e.name,price:e.price,weight:e.weight}})))})),console.log(a))}));var C=function(e){e.preventDefault();var t=parseInt(e.target.value),n=a.filter((function(e){return e.id!=t}));f.a.delete("http://backendexample.sanbercloud.com/api/fruits/",{id:t}).then((function(e){r(e.data.map((function(e){return{id:e.id,name:e.name,price:e.price,weight:e.weight}})))})),r(Object(d.a)(n))},y=function(e){var t=parseInt(e.target.value),n=a.find((function(e){return e.id===t}));console.log(n),i(n.name),s(n.price),g(n.weight),x(t),v("edit")};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Table Harga Buah"),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null," No "),c.a.createElement("th",null," Name "),c.a.createElement("th",null," Price "),c.a.createElement("th",null," Weight "),c.a.createElement("th",null," Action ")),null!==a&&a.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null," ",t+1," "),c.a.createElement("td",null," ",e.name," "),c.a.createElement("td",null," ",e.price," "),c.a.createElement("td",null," ",e.weight/1e3," kg "),c.a.createElement("td",null,c.a.createElement("button",{onClick:y,value:e.id},"Edit"),c.a.createElement("button",{onClick:C,value:e.id},"Hapus")))}))))},E=function(){var e=Object(n.useContext)(h),t=Object(b.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(h),u=Object(b.a)(l,2),i=u[0],o=u[1],m=Object(n.useContext)(h),s=Object(b.a)(m,2),p=s[0],j=s[1],g=Object(n.useContext)(h),E=Object(b.a)(g,2),O=E[0],v=E[1],k=Object(n.useContext)(h),w=Object(b.a)(k,2),x=w[0],C=w[1],y=Object(n.useContext)(h),S=Object(b.a)(y,2),B=S[0],D=S[1],I=function(e){switch(e.target.name){case"name":o(e.target.value);break;case"price":j(e.target.value);break;case"weight":v(e.target.value)}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Form Data Buah"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=i,n=p.toString(),c=O;""!==t.replace(/\s/g,"")&&""!==n.replace(/\s/g,"")&&("create"===x?f.a.post("http://backendexample.sanbercloud.com/api/fruits",{name:t,price:n,weight:c}).then((function(e){r([].concat(Object(d.a)(a),[{id:e.data.id,name:t,price:n,weight:c}]))})):"edit"===x&&f.a.put("http://backendexample.sanbercloud.com/api/fruits/".concat(B),{name:t,price:n,weight:c}).then((function(e){console.log(e);var l=a.find((function(e){return e.id===B}));l.name=t,l.price=n,l.weight=c,r(Object(d.a)(a))})),C("create"),D(0),o(""),j(""),v(""))}},c.a.createElement("label",null,"Masukkan Nama Buah :  "),c.a.createElement("input",{type:"text",name:"name",value:i,onChange:I}),c.a.createElement("br",null),c.a.createElement("label",null,"Masukkan Harga Buah : "),c.a.createElement("input",{type:"text",name:"price",value:p,onChange:I}),c.a.createElement("br",null),c.a.createElement("label",null,"Masukkan Berat Buah :  "),c.a.createElement("input",{type:"text",name:"weight",value:O,onChange:I}),c.a.createElement("br",null),c.a.createElement("button",null,"submit")))},O=function(){return c.a.createElement(p,null,c.a.createElement(g,null),c.a.createElement(E,null))};var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s,{start:"100"}),c.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.e8666287.chunk.js.map