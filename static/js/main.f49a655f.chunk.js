(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{50:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(30),i=c.n(n),o=(c(73),c(19)),r=(c(74),c(50),c(104)),j=c(102),d=c(57),l=c.n(d),h=c(58),b=c.n(h),m=c(43),u=c.n(m),O=c(33),p=O.a.initializeApp({apiKey:"AIzaSyDdEEgCg2HCeI9yqHVJq7tc3ZrleUirsdg",authDomain:"whatsapp-clone-786.firebaseapp.com",projectId:"whatsapp-clone-786",storageBucket:"whatsapp-clone-786.appspot.com",messagingSenderId:"973313754192",appId:"1:973313754192:web:32b37b234c494c0281bd55",measurementId:"G-B9PL4JTCRZ"}).firestore(),x=O.a.auth(),f=new O.a.auth.GoogleAuthProvider,v=p,g=c(34),_=c(4);var N=function(e){var t,c=e.AddNewChat,s=e.name,n=e.id,i=Object(a.useState)(""),j=Object(o.a)(i,2),d=j[0],l=j[1],h=Object(a.useState)([]),b=Object(o.a)(h,2),m=b[0],u=b[1];return Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),Object(a.useEffect)((function(){n&&v.collection("rooms").doc(n).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return u(e.docs.map((function(e){return e.data()})))}))}),[n]),c?Object(_.jsx)("div",{className:"sidebar__chat_container",onClick:function(){var e=prompt("Please enter the Room Name");e&&v.collection("rooms").add({name:e})},children:Object(_.jsx)("h1",{children:"Add New Chat"})}):Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(g.b,{to:"/rooms/".concat(n),children:Object(_.jsxs)("div",{className:"sidebar__chat_container",children:[Object(_.jsx)(r.a,{className:"avatar_img",src:"https://avatars.dicebear.com/api/avataaars/".concat(d,".svg")}),Object(_.jsxs)("div",{className:"sidebar__chat_info",children:[Object(_.jsx)("h2",{children:s}),Object(_.jsx)("p",{children:null===(t=m[0])||void 0===t?void 0:t.message})]})]})})})},S=c(59),w=c.n(S);var y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),i=Object(o.a)(n,2),d=i[0],h=i[1];return Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){h(e)}))}),[]),Object(a.useEffect)((function(){v.collection("rooms").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),d?Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"sidebar",children:[Object(_.jsxs)("div",{className:"sidebar__header",children:[Object(_.jsx)(r.a,{src:d.photoURL}),Object(_.jsxs)("div",{className:"sidebar_header__right",children:[Object(_.jsx)(j.a,{children:Object(_.jsx)(l.a,{})}),Object(_.jsx)(j.a,{children:Object(_.jsx)(b.a,{})}),Object(_.jsx)(j.a,{children:Object(_.jsx)(u.a,{})})]})]}),Object(_.jsx)("div",{className:"sidebar__search",children:Object(_.jsxs)("div",{className:"sidebar__search_container",children:[Object(_.jsx)(w.a,{}),Object(_.jsx)("input",{type:"text",placeholder:"Search and start new chat",className:"search__input"})]})}),Object(_.jsxs)("div",{className:"sidebar__chats",children:[Object(_.jsx)(N,{AddNewChat:!0}),c.map((function(e){return Object(_.jsx)(N,{id:e.id,name:e.data.name},e.id)}))]})]})}):Object(_.jsx)("h1",{children:"hello"})},A=(c(86),c(60)),C=c.n(A),E=c(61),I=c.n(E),k=c(62),D=c.n(k),M=c(63),B=c.n(M),F=c(11);var L=function(){var e,t,c=Object(a.useState)(""),s=Object(o.a)(c,2),n=s[0],i=s[1],d=Object(a.useState)(""),l=Object(o.a)(d,2),h=l[0],b=l[1],m=Object(a.useState)(""),p=Object(o.a)(m,2),f=p[0],g=p[1],N=Object(F.f)().roomId,S=Object(a.useState)([]),w=Object(o.a)(S,2),y=w[0],A=w[1],E=Object(a.useState)(null),k=Object(o.a)(E,2),M=k[0],L=k[1];return Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){L(e)}))}),[]),Object(a.useEffect)((function(){N&&(v.collection("rooms").doc(N).onSnapshot((function(e){return g(e.data().name)})),v.collection("rooms").doc(N).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return A(e.docs.map((function(e){return e.data()})))})))}),[N]),Object(a.useEffect)((function(){i(Math.floor(5e3*Math.random()))}),[]),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"chat",children:[Object(_.jsxs)("div",{className:"chat__header",children:[Object(_.jsx)(r.a,{className:"avatar_img",src:"https://avatars.dicebear.com/api/avataaars/".concat(n,".svg")}),Object(_.jsxs)("div",{className:"chat__headerInfo",children:[Object(_.jsx)("h2",{children:f}),Object(_.jsxs)("p",{children:["Last seen at ",new Date(null===(e=y[y.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toLocaleTimeString(),"  "]})]}),Object(_.jsxs)("div",{className:"chat__headerRight",children:[Object(_.jsx)(j.a,{children:Object(_.jsx)(C.a,{})}),Object(_.jsx)(j.a,{children:Object(_.jsx)(I.a,{})}),Object(_.jsx)(j.a,{children:Object(_.jsx)(u.a,{})})]})]}),Object(_.jsx)("div",{className:"chat__body",children:y.map((function(e){var t;return Object(_.jsxs)("p",{className:"chat__message ".concat(e.name===M.displayName&&"chat__receiver"),children:[e.message,Object(_.jsx)("span",{className:"chat__name",children:e.name}),Object(_.jsxs)("span",{className:"time__span",children:[new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toLocaleTimeString(),console.log(e.timestamp)]})]},e.id)}))}),Object(_.jsxs)("div",{className:"chat__footer",children:[Object(_.jsx)(D.a,{}),Object(_.jsxs)("form",{action:"",children:[Object(_.jsx)("input",{value:h,type:"text",onChange:function(e){return b(e.target.value)},placeholder:"Type a Message....."}),Object(_.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log("you type =>>> "+h),v.collection("rooms").doc(N).collection("messages").add({message:h,name:M.displayName,timestamp:O.a.firestore.FieldValue.serverTimestamp()}),b("")},children:"Send"})]}),Object(_.jsx)(B.a,{})]})]})})},T=c(103);var J=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"login",children:Object(_.jsxs)("div",{className:"login__container",children:[Object(_.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png",alt:""}),Object(_.jsx)("div",{className:"login__text",children:Object(_.jsx)("h1",{children:"Sign in to WhatsApp"})}),Object(_.jsx)(T.a,{onClick:function(){x.signInWithPopup(f).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.message)}))},children:"Sign in with Google"})]})})})};var P=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){s(e)}))}),[]),Object(_.jsx)("div",{className:"App",children:c?Object(_.jsx)("div",{className:"app__body",children:Object(_.jsxs)(g.a,{children:[Object(_.jsx)(y,{}),Object(_.jsxs)(F.c,{children:[Object(_.jsx)(F.a,{path:"/rooms/:roomId",children:Object(_.jsx)(L,{})}),Object(_.jsx)(F.a,{path:"/",children:Object(_.jsx)(L,{})})]})]})}):Object(_.jsx)(J,{})})};i.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(P,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.f49a655f.chunk.js.map