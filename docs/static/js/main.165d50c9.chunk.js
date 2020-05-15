(this["webpackJsonpcryptokitty-tree"]=this["webpackJsonpcryptokitty-tree"]||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a(44),l=a(60),i=a(59),c=a(151),o=a(170),s=a(171),u=a(175),m=a(172),p=a(153),d=a(160),h=a(157),y=a(178),E=a(150),f=a(176),k=a(0),g=a.n(k),v=function(e){return g.a.createElement(y.a,Object.assign({activeStep:e.activeStep,alternativeLabel:!0,style:{marginTop:"10px"}},e),g.a.createElement(E.a,null,g.a.createElement(f.a,null,"Submit KittyId")),g.a.createElement(E.a,null,g.a.createElement(f.a,null,"Scan Ancestor Kitties")),g.a.createElement(E.a,null,g.a.createElement(f.a,null,"Create Graph Elements")),g.a.createElement(E.a,null,g.a.createElement(f.a,null,"View Graph")))},b=a(85),x=a(10),S=a(74),w=a.n(S),D=a(75),K=a.n(D),C=a(152),j=function(e){var t=!0===e.isDark?k.createElement(w.a,null):k.createElement(K.a,null);return k.createElement(C.a,{color:!1===e.isDark?"primary":"secondary","aria-label":"Dark Mode Toggle",style:{position:"fixed",right:"25px",bottom:"75px"},onClick:e.onClick},t)},O=a(179),L=a(180),T=a(154),N=a(57),I=a.n(N),U=function(){return g.a.createElement(c.a,{color:"textSecondary",variant:"body2"},"CK-Tree is an open-source cryptokitty ancestor visualization tool.",g.a.createElement("br",null),"Enter a kitty id or full kitty id to scan a kittie's ancestors and display an awesome network-graph/family tree!",g.a.createElement("br",null),g.a.createElement("u",null,g.a.createElement("a",{href:"https://github.com/daylennguyen/CryptokittiesFamilyTree"},"Or visit the github repo! (Stars are much appreciated ^-^)")))},G=function(e){return g.a.createElement(O.a,{style:{marginBottom:"10px",marginTop:"20px"}},g.a.createElement(L.a,{expandIcon:g.a.createElement(I.a,null)},g.a.createElement(c.a,{variant:"subtitle2"},g.a.createElement("strong",null,"Description"))),g.a.createElement(T.a,{style:{justifyContent:"center"}},g.a.createElement(U,null)))},B=a(173);var _=function(e){return k.createElement("form",{onSubmit:function(t){t.persist(),t.preventDefault();var a=document.querySelector("#kitty-id-field").value;e.onKittySubmit(a)},style:{display:"flex",flexFlow:"row",alignItems:"center"}},k.createElement(B.a,{required:!0,fullWidth:!0,name:"kitty-id-field",id:"kitty-id-field",variant:"outlined",autoFocus:!0,label:"Kitty id or Full Kitty Url"}),k.createElement("label",{htmlFor:"submit-kitty-id-button"},k.createElement(h.a,{style:{marginLeft:"25px"},color:"primary",variant:"contained",type:"submit"},"Submit")))},F=a(158),P=function(e){return k.createElement(u.a,{style:{display:"flex",flexDirection:"column",alignItems:"center"}},k.createElement(F.a,{style:{marginBottom:10}}),k.createElement(c.a,{variant:"h6"},e.count," ",1===e.activeStep?"Kitties Scanned":"Kitties Converted to Graph Elements"))},R=a(41);function z(){var e=k.useState("\ud83d\udc31"),t=Object(R.a)(e,2),a=t[0],n=t[1],r=["\ud83d\ude3c","\ud83d\ude39","\ud83d\ude40","\ud83d\ude3e","\ud83d\ude3f","\ud83d\ude3b","\ud83d\ude3a","\ud83d\ude38","\ud83d\ude3d"];return k.createElement("header",{style:{marginTop:"50px",marginBottom:"50px"}},k.createElement("a",{href:"/",style:{textDecoration:"none"}},k.createElement(c.a,{variant:"h2",color:"textPrimary",style:{display:"flex",justifyContent:"center"}},"CK-Tree",k.createElement("span",{style:{minWidth:"83px"},role:"img","aria-label":"kitty",onMouseOver:function(){var e=Math.floor(Math.random()*r.length);n(r[e])},onMouseLeave:function(){n("\ud83d\udc31")}},a),k.createElement("span",{role:"img","aria-label":"tree"},"\ud83c\udf32"))))}var M=a(13),H=a.n(M),A=a(76),q=a(24),J="https://api.ckbox.co/kitties?id=";function W(){return(W=Object(q.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://cors-anywhere.herokuapp.com/".concat("https://api.ckbox.co/cattributes"),{method:"GET",headers:{origin:document.location.href}}).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(q.a)(H.a.mark((function e(t,a,n){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/".concat(J).concat(t),{method:"GET",headers:{origin:document.location.href}}).then((function(e){return e.json()})).then((function(e){var t=Y(a,e);return n(t),t})).catch((function(e){console.log(e)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e,t){for(var a=[],n=1;n<=12;n++){var r,l=[],i=Object(A.a)(t[0]["g".concat(n)]);try{for(i.s();!(r=i.n()).done;){var c=r.value;l.push(null===e[n-1].api_desc[c]?"".concat(e[n-1].group_tag).concat(c.toString().padStart(2,"0")):e[n-1].api_desc[c])}}catch(o){i.e(o)}finally{i.f()}a.push(l)}return console.log(a),a},Q=a(40),X=a(159),Z=a(181),$=a(78),ee=a.n($),te=a(79),ae=a.n(te),ne=a(80),re=a.n(ne),le=a(81),ie=a.n(le),ce=a(82),oe=a.n(ce),se=a(83),ue=a.n(se),me=a(177);var pe=function(e){var t=k.useState("UD"),a=Object(R.a)(t,2),n=a[0],r=a[1],l=k.useState(!0),i=Object(R.a)(l,2),c=i[0],o=i[1];return k.createElement("span",{style:{display:"flex",justifyContent:"space-around"}},k.createElement(Z.a,{value:n,onChange:function(t,a){null!==a&&(r(a),e.HandleLayoutChange(a))},exclusive:!0},k.createElement(X.a,{value:"UD",key:1},k.createElement(me.a,{title:"UpDown Layout","aria-label":"UpDown Graph Layout"},k.createElement(ee.a,null))),k.createElement(X.a,{value:"RL",key:2},k.createElement(me.a,{title:"RightLeft Layout","aria-label":"RightLeft Graph Layout"},k.createElement(ae.a,null))),k.createElement(X.a,{value:"LR",key:3},k.createElement(me.a,{title:"LeftRight Layout","aria-label":"LeftRight Graph Layout"},k.createElement(re.a,null))),k.createElement(X.a,{value:"DU",key:4},k.createElement(me.a,{title:"DownUp Layout","aria-label":"DownUp Graph Layout"},k.createElement(ie.a,null))),k.createElement(X.a,{value:"UNLOCK",key:5},k.createElement(me.a,{title:"Unlocked Layout","aria-label":"Unlocked Graph Layout"},k.createElement(oe.a,null)))),k.createElement(X.a,{value:"PHYSICS",key:6,selected:c,onChange:function(){o(!c),e.physics(!c)}},k.createElement(me.a,{title:"Physics Toggle","aria-label":"Physics Toggle"},k.createElement(ue.a,null))))};function de(){return(de=Object(q.a)(H.a.mark((function e(t,a){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.cryptokitties.co/kitties/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).networkComponent=k.createRef(),r.state={layoutDirection:"UD",physics:!0},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.networkComponent.current.network.on("click",(function(t){0!==t.nodes.length&&(function(e,t){de.apply(this,arguments)}(t.nodes[0],e.props.setSelectedKitty),function(e,t,a){V.apply(this,arguments)}(t.nodes[0],e.props.cattributes,e.props.setTraitData))}))}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.isDark!==e.isDark||this.state.layoutDirection!==t.layoutDirection||this.state.physics!==t.physics||this.props.edges.length!==e.edges.length}},{key:"render",value:function(){var e=this;return k.createElement("span",null,k.createElement(Q.Network,{style:{background:!1===this.props.isDark?"white":"#424242",border:!1===this.props.isDark?"1px solid rgba(0, 0, 0, 0.12)":"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"10px",marginTop:25,marginBottom:25},options:{physics:this.state.physics,interaction:{hover:!0,selectConnectedEdges:!1,tooltipDelay:0},autoResize:!0,layout:{hierarchical:{enabled:"UNLOCK"!==this.state.layoutDirection,direction:"UNLOCK"===this.state.layoutDirection?"UD":this.state.layoutDirection,sortMethod:"directed"}},nodes:{shadow:!0,font:{size:10,color:!1===this.props.isDark?"black":"white"}},edges:{color:{hover:"#ff0000"},smooth:{type:"cubicBezier"},arrows:"from"}},ref:this.networkComponent},this.props.nodes===[]?null:this.props.nodes.map((function(e){return e})),this.props.edges===[]?null:this.props.edges.map((function(e){return e}))),k.createElement(pe,{layout:this.state.layoutDirection,HandleLayoutChange:function(t){e.setState({layoutDirection:t})},physics:function(t){e.setState({physics:t})}}))}}]),a}(k.Component),ye=(a(115),"https://api.cryptokitties.co/kitties/"),Ee=function(e){return"Invalid Kitty - Kitty Not Found!\n\nNo Kitty Found at:\nhttps://api.cryptokitties.co/kitties/".concat(e,"\n\nPlease enter a valid kitty id")};function fe(e){return g.a.createElement(Q.Edge,{key:e.id,id:e.id,from:e.from,to:e.to})}function ke(e){return g.a.createElement(Q.Node,{id:"".concat(e.id),key:"".concat(e.key),title:"(Gen. ".concat(e.gen,") (").concat(null!==e.name?e.name:"#"+e.id,")"),level:e.gen,shape:"image",size:100,image:e.img})}var ge=function(e){return{id:e.id,key:e.id,img:e.image_url_png,gen:e.generation,name:e.name}},ve=function(e,t){return{matron:{from:e.id,to:e.matron.id,id:t+1},sire:{from:e.id,to:e.sire.id,id:t}}};function be(){return(be=Object(q.a)(H.a.mark((function e(t,a,n,r){var l,i,c,o,s,u,m,p,d;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=[],i=[],c=[],o=[],e.next=4,fetch(ye+t);case 4:return u=e.sent,e.next=7,u.text();case 7:m=e.sent;try{m=JSON.parse(m)}catch(h){"Not Found"!==m&&"Bad Request"!==m||(alert(Ee),m=null),r(0)}null!==m&&(c.push(m),p=420,d=setInterval(Object(q.a)(H.a.mark((function e(){var t,u,h,y,E,f,k,g,v;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c.length>0)){e.next=37;break}if(s=c.shift(),o.includes(s.id)?console.warn("duplicate id detected: "+s.id):(l.push(ge(s)),o.push(s.id)),!(s.generation>0)){e.next=34;break}return t=ve(s,p+=2),o.push(t.matron.id,t.sire.id),i.push(t.matron),i.push(t.sire),e.prev=8,e.next=11,fetch(ye+t.matron.to);case 11:return u=e.sent,e.next=14,u.json();case 14:h=e.sent,c.push(h),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),console.error("Error while fetching matron",e.t0);case 21:return e.prev=21,e.next=24,fetch(ye+t.sire.to);case 24:return y=e.sent,e.next=27,y.json();case 27:E=e.sent,c.push(E),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(21),console.error("Error while fetching sire",e.t1);case 34:n(l.length),e.next=44;break;case 37:for(g in clearInterval(d),r(2),f=[],k=[],l)f.push(ke(l[g])),n(g);for(v in i)k.push(fe(i[v])),n(v);try{a(f,k,m)}catch(b){console.err(b)}r(4);case 44:case"end":return e.stop()}}),e,null,[[8,18],[21,31]])}))),300));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var xe=a(66),Se=a(161),we=a(163),De=a(162),Ke=a(84),Ce=a.n(Ke),je={display:"flex",flexDirection:"row"},Oe=function(e){return k.createElement(d.a,{style:{position:"relative"},variant:"outlined"},k.createElement(Se.a,{style:je},e.SelectedKitty.id?k.createElement(we.a,{component:"img",alt:"Clicked CryptoKitty",height:"200px",width:"200px",image:"".concat(e.SelectedKitty.image_url_png),title:"Clicked CryptoKitty"}):k.createElement(De.a,{variant:"rect",width:200,height:200}),k.createElement("span",{id:"kittyCardText"},k.createElement(Le,{children:k.createElement("a",{href:"https://www.cryptokitties.co/kitty/".concat(e.SelectedKitty.id)},"".concat(null===e.SelectedKitty.name?"":e.SelectedKitty.name+"\n"," (#").concat(e.SelectedKitty.id,")"))}),k.createElement(Te,{text:k.createElement("a",{href:"https://cryptokitties.co/profile/"+e.SelectedKitty.owner.address},e.SelectedKitty.owner.nickname),icon:k.createElement(Ce.a,null)}),k.createElement(Te,{text:"Gen ".concat(e.SelectedKitty.generation)}))))};function Le(e){var t=e.children,a=Object(xe.a)(e,["children"]);return k.createElement(c.a,Object.assign({variant:"h6",color:"textPrimary"},a),t)}function Te(e){var t=e.icon,a=void 0===t?k.createElement("span",null):t,n=e.text,r=Object(xe.a)(e,["icon","text"]);return k.createElement("span",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},a,k.createElement(c.a,Object.assign({variant:"subtitle1",color:"textSecondary",style:{}},r),n))}var Ne=a(164),Ie=a(165),Ue=a(166),Ge=a(167),Be=a(168),_e=a(169),Fe=function(e){return k.createElement(k.Fragment,null,k.createElement(Ne.a,{key:123},"-"),k.createElement(Ne.a,{key:124},"-"),k.createElement(Ne.a,{key:125},"-"),k.createElement(Ne.a,{key:126},"-"))},Pe=function(e){return k.createElement(O.a,{style:{marginBottom:"10px",marginTop:"20px"}},k.createElement(L.a,{expandIcon:k.createElement(I.a,null)},k.createElement(c.a,{variant:"subtitle2"},k.createElement("strong",null,"CKBox Gene Table"))),k.createElement(T.a,{style:{justifyContent:"center",display:"flex",flexDirection:"column"}},e.children))},Re=function(e){var t=69420,a=function(e,a){return e.length>0?e[a].map((function(e){return k.createElement(Ne.a,{key:t++},e)})):k.createElement(Fe,null)};return console.log(e.traits),k.createElement(Pe,null,e.traits.length>0?k.createElement(Ie.a,{component:d.a},k.createElement(Ue.a,{size:"small"},k.createElement(Ge.a,null,k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Trait Type")),k.createElement(Ne.a,null,k.createElement("b",null,"Primary")),k.createElement(Ne.a,null,k.createElement("b",null,"Hidden 1")),k.createElement(Ne.a,null,k.createElement("b",null,"Hidden 2")),k.createElement(Ne.a,null,k.createElement("b",null,"Hidden 3")))),k.createElement(_e.a,null,k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Fur")),a(e.traits,0)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Pattern")),a(e.traits,1)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Eye Color")),a(e.traits,2)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Eye Shape")),a(e.traits,3)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Base Colour")),a(e.traits,4)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Highlight Colour")),a(e.traits,5)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Accent Colour")),a(e.traits,6)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Wild Element")),a(e.traits,7)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Mouth")),a(e.traits,8)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Environment")),a(e.traits,9)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Secret")),a(e.traits,10)),k.createElement(Be.a,null,k.createElement(Ne.a,null,k.createElement("b",null,"Purrstige")),a(e.traits,11))))):k.createElement(c.a,{variant:"h6"},"Click a kitty to display gene data"))},ze=Object(b.a)({palette:{type:"dark"}}),Me=Object(b.a)({palette:{type:"light"}}),He=k.createElement("footer",null,k.createElement("a",{id:"eth-donate",href:"https://flannyan.argent.xyz/",style:{margin:"10px"}},k.createElement(c.a,{variant:"body1",color:"textPrimary"},"eth donations: 0xb41919C5700779c45116377657Ce56B4E3508eb3"),k.createElement("span",{style:{display:"flex"}},k.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),k.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2960503596344601","data-ad-slot":"4348036133","data-ad-format":"auto","data-full-width-responsive":"true"}),k.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");")))),Ae=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={kittyNodes:[],kittyEdges:[],activeStep:0,scannedKitties:0,theme:{isDark:!0},checked:!0,selectedKitty:{},trait_data:[],cattributes:{}},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;!function(e){W.apply(this,arguments)}((function(t){e.setState({cattributes:t})}))}},{key:"render",value:function(){var e=this;return k.createElement(o.a,{theme:!1===this.state.theme.isDark?Me:ze},k.createElement(s.a,null),k.createElement(j,{isDark:this.state.theme.isDark,onClick:this.setStateThemeIsDark()}),k.createElement(u.a,{className:"App"},k.createElement(z,null),k.createElement(m.a,null,k.createElement(G,null),k.createElement(p.a,{in:this.state.checked},k.createElement(d.a,{variant:"outlined",style:{padding:"80px"}},0===this.state.activeStep?k.createElement(_,{onKittySubmit:this.handleKittySubmit()}):"",1===this.state.activeStep||2===this.state.activeStep?k.createElement(P,{activeStep:this.state.activeStep,count:this.state.scannedKitties}):"",k.createElement("main",null,4===this.state.activeStep?k.createElement("span",null,k.createElement(Oe,{SelectedKitty:this.state.selectedKitty}),k.createElement(he,{setCattributes:function(t){e.setState({cattributes:t})},cattributes:this.state.cattributes,className:"network",isDark:this.state.theme.isDark,edges:this.state.kittyEdges,nodes:this.state.kittyNodes,setSelectedKitty:function(t){t!==e.state.selectedKitty&&e.setState({selectedKitty:t})},setTraitData:function(t){e.setState({trait_data:t})}}),k.createElement(Re,{traits:this.state.trait_data}),k.createElement(h.a,{variant:"contained",color:"secondary",onClick:this.reInitializeState()},"Scan Another Kitty!")):""))),k.createElement(v,{activeStep:this.state.activeStep})),He))}},{key:"setStateThemeIsDark",value:function(){var e=this;return function(){e.setState({theme:{isDark:!0!==e.state.theme.isDark}})}}},{key:"reInitializeState",value:function(){var e=this;return function(){e.setState({checked:!1}),e.setState({kittyNodes:[],kittyEdges:[],activeStep:0,scannedKitties:0,theme:{isDark:!1},checked:!0,selectedKitty:{},trait_data:[]}),setTimeout((function(){return e.setState({checked:!0})}),500)}}},{key:"handleKittySubmit",value:function(){var e=this;return function(t){var a;e.setState({checked:!1}),function(e){var t=!1;return e.includes("/kitty/")&&(t=!0),t}(t)&&(t=(a=t).slice(a.lastIndexOf("/kitty/")+"/kitty/".length));var n=Number.parseInt(t,10);!isNaN(n)&&"0"!==t&&n>0&&(t=n,e.setState({activeStep:1}),setTimeout((function(){return e.setState({checked:!0})}),500),function(e,t,a,n){be.apply(this,arguments)}(t,(function(t,a,n){e.setState({kittyNodes:t,kittyEdges:a,selectedKitty:n})}),(function(t){e.setState({scannedKitties:t})}),(function(t){e.setState({activeStep:t,checked:!1}),e.setState({checked:!0})}))),e.setState({checked:!0})}}}]),a}(k.Component),qe=document.getElementById("root");Object(x.render)(k.createElement(Ae,null),qe)},95:function(e,t,a){e.exports=a(116)}},[[95,1,2]]]);
//# sourceMappingURL=main.165d50c9.chunk.js.map