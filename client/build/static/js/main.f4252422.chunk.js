(this.webpackJsonpvideo_chat=this.webpackJsonpvideo_chat||[]).push([[0],{252:function(e,t,n){},253:function(e,t,n){},284:function(e,t){},286:function(e,t){},295:function(e,t,n){},450:function(e,t,n){},452:function(e,t,n){},456:function(e,t,n){},460:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(13),i=n.n(s),r=(n(252),n(253),n(12)),o=n(14),l=n(37),d=n(141),j=n.n(d),u=n(225),b=n(226),m=n(142),O=n.n(m),x=n(2),h=Object(c.createContext)(),g=Object(b.io)("https://video-chat-1234.herokuapp.com/"),p=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(r.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)(!1),d=Object(r.a)(o,2),b=d[0],m=d[1],p=Object(c.useState)(),f=Object(r.a)(p,2),v=f[0],_=f[1],k=Object(c.useState)(""),C=Object(r.a)(k,2),S=C[0],y=C[1],w=Object(c.useState)({}),N=Object(r.a)(w,2),I=N[0],T=N[1],L=Object(c.useState)(""),U=Object(r.a)(L,2),B=U[0],D=U[1],E=Object(c.useState)([]),P=Object(r.a)(E,2),V=P[0],A=P[1],F=Object(c.useState)(""),R=Object(r.a)(F,2),z=R[0],W=R[1],M=Object(c.useRef)(),G=Object(c.useRef)(),J=Object(c.useRef)(),H=Object(c.useState)(!1),Y=Object(r.a)(H,2);Y[0],Y[1];Object(c.useEffect)((function(){y(localStorage.getItem("username")),W(localStorage.getItem("image"));var e=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:t=e.sent,_(t),M.current.srcObject=t,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();null!==S&&S.length>0&&e(),g.on("me",(function(e){return D(e)})),g.on("callUser",(function(e){var t=e.from,n=e.name,c=e.signal;T({isReceivingCall:!0,from:t,name:n,signal:c})}))}),[S]),Object(c.useEffect)((function(){g.on("message",(function(e){A((function(t){return[].concat(Object(l.a)(t),[e])}))}))}),[]);return Object(x.jsx)(h.Provider,{value:{call:I,callAccepted:s,myVideo:M,userVideo:G,stream:v,name:S,setName:y,callEnded:b,me:B,callUser:function(e){var t=new O.a({initiator:!0,trickle:!1,stream:v});t.on("signal",(function(t){g.emit("callUser",{userToCall:e,signalData:t,from:B,name:S})})),t.on("stream",(function(e){G.current.srcObject=e})),g.on("callAccepted",(function(e){i(!0),t.signal(e)})),J.current=t},leaveCall:function(){m(!0),J.current.destroy(),window.location.reload()},answerCall:function(){i(!0);var e=new O.a({initiator:!1,trickle:!1,stream:v});e.on("signal",(function(e){g.emit("answerCall",{signal:e,to:I.from})})),e.on("stream",(function(e){G.current.srcObject=e})),e.signal(I.signal),J.current=e},message:function(e){e=e+"*"+B+"*"+S,A((function(t){return[].concat(Object(l.a)(t),[e])})),g.emit("message",e)},shareScreen:function(){navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){var t=e.getTracks()[0];v.getTracks().forEach((function(e){"video"===e.kind&&J.current.replaceTrack(e,t,v)}))}))},stopScreenShare:function(){var e=v.getVideoTracks()[0];v.getTracks().forEach((function(t){"video"===t.kind&&J.current.replaceTrack(t,e,v)}))},chat:V,img:z,setImg:W},children:t})},f=(n(295),n(502)),v=n(490),_=n(493),k=n(495),C=n(496),S=Object(v.a)((function(e){return{video:Object(o.a)({position:"relative",width:"700px",zIndex:0},e.breakpoints.down("xs"),{width:"300px"}),video2:Object(o.a)({position:"relative",width:"100px",zIndex:1},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:{display:"flex",flexDirection:"row"},paper:{border:"2px solid black",margin:"10px",backgroundColor:"black",color:"Cornsilk"}}})),y=function(){var e=Object(c.useContext)(h),t=e.name,n=e.callAccepted,a=e.myVideo,s=e.userVideo,i=e.callEnded,r=e.stream,o=e.call,l=S();return Object(x.jsxs)(_.a,{container:!0,className:l.gridContainer,children:[Object(x.jsx)("div",{className:"v1",children:r&&Object(x.jsx)(k.a,{className:l.paper,children:Object(x.jsxs)(_.a,{item:!0,xs:12,md:6,children:[Object(x.jsx)(C.a,{variant:"h8",gutterBottom:!0,children:t||"Name"}),Object(x.jsx)("video",{playsInline:!0,muted:!0,ref:a,autoPlay:!0,className:n&&!i?l.video2:l.video})]})})}),Object(x.jsx)("div",{className:"v2",children:n&&!i&&Object(x.jsx)(k.a,{className:l.paper,children:Object(x.jsxs)(_.a,{item:!0,xs:12,md:6,children:[Object(x.jsx)(C.a,{variant:"h8",gutterBottom:!0,children:o.name||"Name"}),Object(x.jsx)("video",{playsInline:!0,ref:s,autoPlay:!0,className:l.video})]})})})]})},w=(n(497),n(501),n(105)),N=(n(498),n(499)),I=n(500),T=(Object(v.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(o.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(o.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),function(){var e=Object(c.useContext)(h),t=e.answerCall,n=e.call,a=e.callAccepted;return Object(x.jsx)(x.Fragment,{children:n.isReceivingCall&&!a&&Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(x.jsxs)("h1",{children:[n.name," is calling:"]}),Object(x.jsx)(f.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})}),L=n(240),U=(n(450),n(451),function(e){var t=e.message,n=(e.name,Object(c.useContext)(h).me),a=t.split("*"),s=a[1];t=a[0],console.log(n+"vs"+s);var i=a[2];return i=i.substring(0,i.indexOf(" ")),n==s?Object(x.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(x.jsx)("p",{className:"sentText pr-10",children:i}),Object(x.jsx)("div",{className:"messageBox backgroundBlue",children:Object(x.jsx)("p",{className:"messageText colorWhite",children:t})})]}):Object(x.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(x.jsx)("p",{className:"sentText pr-10",children:i}),Object(x.jsx)("div",{className:"messageBox backgroundBlue",children:Object(x.jsx)("p",{className:"messageText colorWhite",children:t})})]})}),B=(n(452),function(e){var t=e.messages,n=e.name;return Object(x.jsxs)(L.a,{className:"messages",children:[console.log(t),t.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(U,{message:e,name:n})},t)}))]})}),D=n(79),E=n(239),P=n.n(E),V=n(503),A=Object(v.a)((function(e){return{appBar:Object(o.a)({borderRadius:15,margin:"30px 100px",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black",backgroundColor:"black",color:"cornsilk"},e.breakpoints.down("xs"),{width:"90%"}),image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}}));var F=function(){var e=A(),t=Object(c.useContext)(h),n=t.me,a=t.name,s=t.setName,i=t.setImg,o=t.callAccepted,l=(t.myVideo,t.userVideo,t.callEnded,t.stream,t.callUser),d=(t.call,t.answerCall,t.message),j=t.chat,u=t.leaveCall,b=t.shareScreen,m=t.stopScreenShare,O=t.img,g=Object(c.useState)(""),p=Object(r.a)(g,2),v=(p[0],p[1],Object(c.useState)("")),_=Object(r.a)(v,2),k=_[0],C=_[1],S=Object(c.useState)(""),L=Object(r.a)(S,2),U=L[0],E=L[1],F=Object(c.useState)(!1),R=Object(r.a)(F,2),z=R[0],W=R[1],M=Object(c.useState)("Share Screen"),G=Object(r.a)(M,2),J=G[0],H=G[1];return Object(x.jsxs)("div",{class:"main",children:[Object(x.jsxs)("div",{class:"main__left",children:[Object(x.jsxs)("div",{class:"main__videos",children:[Object(x.jsx)("div",{className:"video",children:Object(x.jsx)(y,{})}),!o&&Object(x.jsx)(T,{})]}),Object(x.jsxs)("div",{class:"main__controls",children:[Object(x.jsxs)("div",{class:"main__controls__block",children:[Object(x.jsx)(w.CopyToClipboard,{text:n,children:Object(x.jsxs)("div",{onclick:"muteUnmute()",class:"main__controls__button main__mute_button",children:[Object(x.jsx)("i",{class:"fas fa-microphone"}),Object(x.jsx)("span",{children:"Copy Your Id"})]})}),Object(x.jsxs)("div",{onClick:function(){z?(m(),H("Share Screen")):(b(),H("Share Video")),W(!z)},class:"main__controls__button main__video_button",children:[Object(x.jsx)("i",{class:"fas fa-video"}),Object(x.jsx)("span",{children:J})]})]}),Object(x.jsxs)("div",{class:"main__controls__block",children:[Object(x.jsx)("div",{class:"main__controls__button",children:Object(x.jsx)("input",{type:"text",placeholder:"ID to call",value:U,onChange:function(e){return E(e.target.value)},className:"idinput"})}),Object(x.jsx)("div",{class:"main__controls__button",children:Object(x.jsx)(f.a,{variant:"contained",color:"primary",startIcon:Object(x.jsx)(I.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return l(U)},className:e.margin,children:"Call"})})]}),Object(x.jsxs)("div",{class:"main__controls__block",children:[Object(x.jsx)("div",{class:"main__controls__button",children:Object(x.jsx)(f.a,{variant:"contained",color:"secondary",startIcon:Object(x.jsx)(N.a,{fontSize:"large"}),fullWidth:!0,onClick:u,className:e.margin,children:"Hang Up"})}),Object(x.jsx)("div",{class:"main__controls__button",children:Object(x.jsx)(D.GoogleLogout,{clientId:"828604919357-ejh87orh2vprhdk2v5cc07apad8d8642.apps.googleusercontent.com",render:function(t){return Object(x.jsx)(V.a,{alt:"Remy Sharp",src:O,className:e.small,onClick:t.onClick,disabled:t.disabled})},buttonText:"Logout",onLogoutSuccess:function(){s(""),i(""),localStorage.setItem("username",""),localStorage.setItem("image",""),alert("Logged out successfully \ud83d\ude0d")}})})]})]})]}),Object(x.jsxs)("div",{class:"main__right",children:[Object(x.jsx)("div",{class:"main__header",children:Object(x.jsx)("h6",{children:"Chat"})}),Object(x.jsx)("div",{class:"main__chat_window",children:Object(x.jsx)(B,{messages:j,name:a})}),Object(x.jsxs)("div",{class:"main__message_container",children:[Object(x.jsx)("input",{id:"chat_message",type:"text",value:k,placeholder:"Type message here...",onChange:function(e){return C(e.target.value)}}),Object(x.jsx)(f.a,{variant:"contained",color:"primary",className:e.button,startIcon:Object(x.jsx)(P.a,{fontsize:"large"}),fullwidth:!0,onClick:function(){return function(e){d(e),C("")}(k)}})]})]})]})},R=n(140),z=n(16);n(456);var W=function(){var e=Object(c.useContext)(h),t=e.setName,n=(e.name,e.setImg),a=Object(z.f)();return Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"login_container",children:[Object(x.jsx)("h1",{children:"Please Login to continue"}),Object(x.jsx)(D.GoogleLogin,{clientId:"828604919357-ejh87orh2vprhdk2v5cc07apad8d8642.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){console.log("Login Success: currentUser:",e.profileObj),t(e.profileObj.name),n(e.profileObj.imageUrl),localStorage.setItem("username",e.profileObj.name),localStorage.setItem("image",e.profileObj.imageUrl),alert("Logged in successfully welcome ".concat(e.profileObj.name," \ud83d\ude0d. \n See console for full profile object.")),a.push("/home")},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login. \ud83d\ude22 Please ping this to repo owner twitter.com/sivanesh_fiz")},cookiePolicy:"single_host_origin",style:{marginTop:"100px"},isSignedIn:!0}),Object(x.jsx)("p",{children:"By continuing, you agree to Our Conditions of Use and Privacy Notice."})]})})};var M=function(){return Object(x.jsx)(R.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(z.c,{children:[Object(x.jsx)(z.a,{path:"/home",children:Object(x.jsx)(F,{})}),Object(x.jsx)(z.a,{path:"/",children:Object(x.jsx)(W,{})})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,505)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(p,{children:Object(x.jsx)(M,{})})}),document.getElementById("root")),G()}},[[460,1,2]]]);
//# sourceMappingURL=main.f4252422.chunk.js.map