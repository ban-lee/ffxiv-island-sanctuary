(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5170)}])},5170:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return eQ},default:function(){return eJ}});var l,i,a,n,c,d,o,s,h,u,m,p,f,g,Z,b=r(5944),N=r(6817),v=r(9094),y=r(7414),x=r(2445),S=r(5117),k=r(7860),C=r(579),B=r(1232),w=r(6486),E=r(7294);let R=(0,E.createContext)({products:[],items:[]});var A=r(9008),I=r.n(A),X=r(3723),T=r(4777),O=r(7564),D=r(4065),H=r(3643),P=r(5044),W=r(8540),z=r(9236);let L=(0,N.k)(e=>({header:{backgroundColor:e.colors.dark[6],color:e.white,display:"flex",alignItems:"center",height:56,padding:"0 8px","> div":{marginRight:"8px","&:last-child":{marginRight:0}}}}));function _(e){let{title:t,headerMenu:r}=e,l=(0,D.a)("(max-width: 400px)"),{classes:i}=L();return(0,b.tZ)(b.HY,{children:(0,b.BX)(H.h,{height:56,className:i.header,children:[(0,b.tZ)("div",{children:(0,b.tZ)(P.k,{color:"dark",sx:{i:{fontSize:20,lineHeight:20}},size:l?30:44,children:(0,b.tZ)("i",{className:"icon bi-sun-fill"})})}),(0,b.tZ)(W.z,{smallerThan:"sm",styles:l?{fontSize:20}:{fontSize:24},children:(0,b.tZ)(z.D,{order:1,sx:{flex:"1 1 auto"},children:t})}),(0,b.tZ)("div",{children:r})]})})}let U=(0,N.k)(()=>({footer:{margin:"0 16px",padding:"16px 8px"}}));function M(e){let{children:t,layoutProps:r}=e,{classes:l}=U();return(0,b.BX)(b.HY,{children:[(0,b.BX)(I(),{children:[(0,b.tZ)("title",{children:r.title}),(0,b.tZ)("link",{rel:"icon",href:"/favicon.ico"}),(0,b.tZ)("meta",{name:"description",content:r.description}),(0,b.tZ)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),(0,b.BX)(X.x,{sx:{height:"100vh"},children:[(0,b.tZ)(_,{title:r.headerDetails.title||r.title,headerMenu:r.headerDetails.headerMenu}),(0,b.tZ)("div",{className:"spacer1"}),(0,b.tZ)("main",{children:t}),(0,b.tZ)("div",{className:"spacer1"}),(0,b.BX)("footer",{className:l.footer,children:[(0,b.tZ)(T.i,{pb:16}),(0,b.BX)(B.Z,{grow:!0,align:"center",noWrap:!0,children:[(0,b.BX)(O.K,{spacing:0,children:[(0,b.tZ)(S.x,{size:"sm",children:"v1.3.0"}),(0,b.BX)(S.x,{size:"sm",children:["2022 \xa9 ",(0,b.tZ)("a",{href:"https://github.com/ban-lee/ffxiv-island-sanctuary",children:"Ban Lee"})]})]}),(0,b.BX)(S.x,{size:"sm",align:"right",children:["Built with Nekkowe's permission to use the data ",(0,b.tZ)("br",{}),"from their\xa0",(0,b.tZ)("a",{href:"https://docs.google.com/spreadsheets/d/1e5dyaHSt5lj25l3nFWO5QcPmAJ2aAoPxCWj-iZnKxRk/edit#gid=1283864903",target:"_blank",rel:"noreferrer",children:"Island Sanctuary Workshop Sheet"}),"!"]})]})]})]})]})}var G=r(7789),F=r(8002),K=r(1310),Y=r(8393),V=r(7484),j=r.n(V),Q=r(4110),J=r.n(Q),q=r(178),$=r.n(q);function ee(){let e=j()().utc(),t=e.startOf("day").add(e.hour()>=8?1:0,"day").hour(8),r=e.startOf("week").day(2).hour(8);return e.isBefore(r)&&(r=r.subtract(7,"day")),{cycle:e.diff(r,"day")+1,timeRemaining:e.to(t)}}j().extend(J()),j().extend($());var et=r(5217);function er(){var e;let[t,r]=(0,E.useState)(ee()),l=(0,et.Y)(function(){let e=ee();(e.cycle!==t.cycle||e.timeRemaining!==t.timeRemaining)&&r(e)},6e4);return e=()=>(l.start(),l.stop),(0,E.useEffect)(()=>e(),[]),t}function el(){let e=(0,D.a)("(max-width: 400px)"),t=(0,D.a)("(min-width: 400px) and (max-width: 620px)"),r=er();return(0,b.tZ)(Y.u,{label:"Next cycle ".concat(r.timeRemaining),children:(0,b.BX)(G.C,{color:"dark",size:e?"sm":t?"md":"lg",children:["Cycle: ",r.cycle]})})}var ei=r(5266),ea=r(4882),en=r(7841);function ec(e){let{sanctuary:t,setSanctuary:r}=e;return(0,b.tZ)(b.HY,{children:(0,b.BX)("form",{onSubmit:function(e){var l;e.preventDefault(),r({...t,rank:parseInt((l=s.rank,document.getElementById(l).value))})},children:[(0,b.tZ)(ea.Y,{id:s.rank,min:1,max:12,defaultValue:t.rank,label:"Rank"}),(0,b.tZ)("div",{className:"spacer2"}),(0,b.tZ)("div",{css:{textAlign:"end"},children:(0,b.tZ)(en.z,{type:"submit",children:"Save"})})]})})}function ed(e){let{sanctuary:t,setSanctuary:r}=e,l=(0,D.a)("(max-width: 400px)"),i=(0,D.a)("(min-width: 400px) and (max-width: 620px)"),[a,n]=(0,E.useState)(!1);return(0,b.BX)(B.Z,{noWrap:!0,children:[(0,b.tZ)(el,{}),(0,b.BX)(G.C,{color:"dark",size:l?"sm":i?"md":"lg",children:["Rank: ",t.rank]}),(0,b.BX)(F.v,{shadow:"md",position:"bottom-end",width:250,opened:a,onChange:n,children:[(0,b.tZ)(F.v.Target,{children:(0,b.tZ)(K.O,{sx:e=>({height:l?30:44,width:l?30:44,"&:hover":{backgroundColor:e.colors.dark}}),styles:{burger:{margin:"0 auto"}},color:"white",size:l?"xs":"sm",opened:a,"aria-label":a?"Close menu":"Open menu"})}),(0,b.tZ)(F.v.Dropdown,{children:(0,b.tZ)(F.v.Item,{icon:(0,b.tZ)("i",{className:"bi bi-gear"}),onClick:function(){(0,ei.h7)({centered:!0,closeButtonLabel:"Close Sanctuary Info",title:(0,b.tZ)(z.D,{order:3,children:"Sanctuary Info"}),children:(0,b.tZ)(ec,{sanctuary:t,setSanctuary:r})})},children:"Set Sanctuary Info"})})]})]})}(s||(s={})).rank="sanctuary-rank";var eo=r(1238),es=r(6559),eh=r.n(es);let eu=eh()({name:"is-planner",level:"info"});var em=r(1944);function ep(e){let{selectedCycle:t,setTrendData:r}=e,l=(0,E.useMemo)(()=>(0,w.debounce)(e=>{try{let l=e.target.value,i=(0,em.Q)(l,{delimiter:"	",trim:!0,skip_empty_lines:!0}),a=i.map(e=>{let t=e[0],r=e[1],l=e[2],i=e[3];return{item:t,popularity:r,supply:l,demandShift:i}});r({importDate:new Date,cycle:t,data:new Map(a.map(e=>[e.item,e]))})}catch(n){eu.error(n)}},200),[t,r]);return(0,E.useEffect)(()=>()=>l.cancel(),[l]),(0,b.tZ)(b.HY,{children:(0,b.tZ)(en.z,{onClick:function(){(0,ei.h7)({size:"lg",centered:!0,title:(0,b.tZ)(z.D,{order:3,children:"Import Trends"}),children:(0,b.BX)(b.HY,{children:[(0,b.BX)("div",{children:["Import tab-separated values for the popularity, supply and demand shift of each handicraft. ",(0,b.tZ)("br",{}),(0,b.tZ)("a",{href:"https://docs.google.com/spreadsheets/d/1af0E8NkUIRMLf6dIY8pnMyUdjC9H5CQiAmH9Jaa4R6U/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:"Example Sheet"}),(0,b.tZ)("div",{className:"spacer2"})]}),(0,b.tZ)(eo.g,{id:"trend-data",minRows:10,onChange:l})]})})},children:"Import Data"})})}var ef=r(5078),eg=r(2623);let eZ=(0,N.k)(()=>({header:{paddingBottom:16},headerControls:{textAlign:"right"}}));function eb(e){let{selectedCycle:t,trendData:r,setTrendData:l}=e,{classes:i}=eZ(),a=function(){let e=(0,E.useRef)();return(0,E.useEffect)(()=>{let t=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language;e.current=t},[]),e.current}();return(0,b.BX)("div",{children:[(0,b.BX)(B.Z,{grow:!0,className:i.header,children:[(0,b.BX)(O.K,{spacing:0,children:[(0,b.tZ)(z.D,{order:3,children:"Supply & Demand"}),!!r.importDate&&(0,b.BX)(S.x,{size:"sm",children:["Imported on: ",r.importDate.toLocaleDateString(a)]})]}),(0,b.tZ)("div",{className:i.headerControls,children:(0,b.tZ)(ep,{selectedCycle:t,setTrendData:l})})]}),(0,b.BX)(ef.i,{fontSize:"sm",highlightOnHover:!0,children:[(0,b.tZ)("thead",{children:(0,b.BX)("tr",{children:[(0,b.tZ)("th",{children:"Handicraft"}),(0,b.tZ)("th",{children:"Popularity"}),(0,b.tZ)("th",{children:"Supply"}),(0,b.tZ)("th",{children:"Demand Shift"})]})}),(0,b.tZ)("tbody",{children:[...r.data.values()].map(e=>(0,b.BX)("tr",{children:[(0,b.tZ)("td",{children:e.item}),(0,b.tZ)("td",{children:e.popularity}),(0,b.tZ)("td",{children:e.supply}),(0,b.tZ)("td",{children:e.demandShift})]},e.item))})]}),0===r.data.size&&(0,b.BX)(b.HY,{children:[(0,b.tZ)("div",{className:"spacer2"}),(0,b.tZ)(eg.X,{p:"md",sx:e=>({backgroundColor:e.colors.gray[1]}),children:(0,b.BX)(v.M,{sx:{flexDirection:"column"},children:[(0,b.tZ)(P.k,{color:"gray",size:"lg",radius:"lg",variant:"filled",children:(0,b.tZ)("i",{className:"bi bi-patch-exclamation"})}),(0,b.tZ)(S.x,{mt:8,children:"No trend data found!"})]})})]})]})}var eN=r(8446),ev=r.n(eN),ey=r(8118),ex=r(5686);let eS=(e,t)=>{let[r,l]=(0,E.useState)(e),[i,a]=(0,E.useState)(t),[n,c]=(0,ex._)({key:e,defaultValue:t,serialize:ey.ZP.stringify,deserialize:ey.ZP.parse});return(0,E.useEffect)(()=>{var t;if(r===e)return;l(e);let a=null==(t=localStorage.getItem(e))?i:ey.ZP.parse(t);c(a)},[e,r,i,c]),(0,E.useEffect)(()=>{ev()(i,t)||a(t)},[t,i]),[n,c]};var ek=r(8049),eC=r(7632),eB=r(9834),ew=r(50);function eE(e){var t;let{option:r,onClose:l}=e,i=(0,E.useRef)(null!==(t=r.color)&&void 0!==t?t:"gray"),a=l?(0,b.tZ)(eB.A,{"aria-label":r.label,size:"xs",color:i.current,radius:"lg",onMouseDown:l,children:(0,b.tZ)("i",{className:"bi bi-x"})}):(0,b.tZ)(b.HY,{});return(0,b.tZ)(G.C,{color:i.current,rightSection:a,children:r.label})}let eR=(0,N.k)(e=>({scheduled:{backgroundColor:e.colors.gray[3],display:"flex",flexFlow:"column nowrap",height:672,boxShadow:"0 0 0 1px ".concat(e.colors.gray[5]," inset"),padding:1,"> div:first-of-type":{borderTop:0},"> div:last-of-type":{borderBottom:"1px solid ".concat(e.colors.gray[5])}},timeslot:{backgroundColor:e.colors.yellow[0],borderTop:"1px solid ".concat(e.colors.gray[5]),padding:8},timeslotHeader:{marginBottom:8},timeslotBonus:{marginRight:4},help:{height:"100%",width:"100%",flexDirection:"column"},noBorder:{borderBottom:"0 !important"}}));function eA(e){let{selectedProducts:t,setSelectedProducts:r}=e,{classes:l,cx:i}=eR(),[a,n]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{let e=t.reduce((e,t)=>e+t.time,0);n(24===e)},[t]),(0,b.BX)("div",{className:l.scheduled,children:[0===t.length&&(0,b.tZ)(v.M,{className:i(l.noBorder,l.help),children:(0,b.BX)(x.W,{css:{maxWidth:250},children:[(0,b.tZ)(v.M,{children:(0,b.tZ)(P.k,{color:"gray",size:"lg",radius:"lg",variant:"filled",children:(0,b.tZ)("i",{className:"bi bi-patch-exclamation"})})}),(0,b.tZ)(S.x,{align:"center",mb:"sm",children:"Workshop is empty"}),(0,b.BX)(S.x,{align:"justify",size:"sm",mb:"xs",children:[(0,b.BX)("b",{children:["Add ",(0,b.tZ)("i",{className:"bi bi-arrow-down"})]}),": To add handicrafts starting from the start to end of the cycle."]}),(0,b.BX)(S.x,{align:"justify",size:"sm",children:[(0,b.BX)("b",{children:["Add ",(0,b.tZ)("i",{className:"bi bi-arrow-up"})]}),": To add handicrafts starting from the end to the start of the cycle."]})]})}),t.map((e,n)=>{var c;let d=n===t.length-1&&a,o=!!(c=t[n-1])&&(c.purposeCat===e.purposeCat||c.materialCat===e.materialCat),s=28*e.time;return(0,b.BX)("div",{className:i(l.timeslot,d?l.noBorder:""),css:{height:s},children:[(0,b.BX)(B.Z,{className:l.timeslotHeader,children:[(0,b.BX)("div",{className:l.timeslotBonus,children:[o&&(0,b.tZ)(Y.u,{label:"Efficiency Bonus!",withinPortal:!0,children:(0,b.tZ)(P.k,{color:"green.5",radius:"lg",children:(0,b.tZ)("i",{className:"bi bi-stars"})})}),!o&&(0,b.tZ)(Y.u,{label:"No bonus",withinPortal:!0,children:(0,b.tZ)(P.k,{color:"gray.5",radius:"lg",children:(0,b.tZ)("i",{className:"bi bi-dash-lg"})})})]}),(0,b.tZ)(B.Z,{noWrap:!0,css:{flex:"1 1",padding:"0 4px"},children:(0,b.tZ)(Y.u,{label:e.item,children:(0,b.tZ)(S.x,{sx:{flex:"1 1"},lineClamp:1,children:(0,b.tZ)("b",{children:e.item})})})}),(0,b.tZ)(Y.u,{label:"Remove",children:(0,b.tZ)(eB.A,{"aria-label":"Remove ".concat(e.item," from schedule"),size:28,onClick:()=>{r(e=>(e.splice(n,1),[...e]))},children:(0,b.tZ)("i",{className:"bi bi-x-lg"})})})]}),(0,b.BX)(ew.r,{gutter:4,sx:e=>({fontSize:e.fontSizes.xs,textAlign:"center"}),children:[(0,b.tZ)(ew.r.Col,{sx:{"> div":{width:"100%"}},span:6,children:(0,b.tZ)(eE,{option:{value:e.purposeCat,label:e.purposeCat,color:"blue"}})}),(0,b.tZ)(ew.r.Col,{sx:{"> div":{width:"100%"}},span:6,children:e.materialCat&&(0,b.tZ)(eE,{option:{value:e.materialCat,label:e.materialCat,color:"grape"}})}),(0,b.BX)(ew.r.Col,{span:6,children:[(0,b.tZ)("b",{children:"Time:"})," ",e.time]}),(0,b.BX)(ew.r.Col,{span:6,children:[(0,b.tZ)("b",{children:"Value:"})," ",e.value]})]})]},e.key)})]})}var eI=r(3941);let eX=(0,N.k)({scheduledHours:{margin:"0 auto"},grid:{textAlign:"center"},digits:{fontWeight:"bold",fontSize:24}});function eT(e){let{availableHours:t,usedHours:r,fillWidth:l=!1}=e,{classes:i}=eX(),[a,n]=(0,E.useState)([]);return(0,E.useEffect)(()=>{let e=Math.round(r/24*100);n([{value:e,color:"yellow",label:24===r?"Fully scheduled":"Scheduled",tooltip:24===r?"":"".concat(r," hours scheduled")},{value:100-e,color:"gray",label:24===t?"Nothing scheduled":"",tooltip:24===t?"":"".concat(t," hours free")}])},[t,r]),(0,b.tZ)("div",{className:i.scheduledHours,css:{maxWidth:l?"":350},children:(0,b.tZ)(eI.E,{"aria-label":"Amount of time scheduled",color:"yellow",size:24,sections:a})})}var eO=r(6222),eD=r(292),eH=r(7328);function eP(e){let{trend:t}=e;if(!(null==t?void 0:t.demandShift))return(0,b.tZ)(b.HY,{});let r="transparent",l="";switch(t.demandShift){case m.SKYROCKETING:r="rgba(32, 201, 151, 1)",l="bi-arrow-up";break;case m.INCREASING:r="rgba(32, 201, 151, 0.6)",l="bi-arrow-up-right";break;case m.DECREASING:r="rgba(220, 53, 69, 0.7)",l="bi-arrow-down-right";break;case m.PLUMMETING:r="rgba(220, 53, 69, 1)",l="bi-arrow-down";case m.NONE:}let i={backgroundColor:r};return(0,b.BX)(B.Z,{spacing:8,children:[(0,b.tZ)(P.k,{style:i,size:"sm",radius:"lg",children:(0,b.tZ)("i",{className:"bi ".concat(l)})}),(0,b.tZ)("div",{children:t.demandShift})]})}(l=h||(h={})).UNKNOWN="",l.LOW="Low",l.AVERAGE="Average",l.HIGH="High",l.VERY_HIGH="Very High",(i=u||(u={})).UNKNOWN="",i.NONEXISTENT="Nonexistent",i.INSUFFICIENT="Insufficient",i.SUFFICIENT="Sufficient",i.SURPLUS="Surplus",i.OVERFLOWING="Overflowing",(a=m||(m={})).UNKNOWN="",a.PLUMMETING="Plummeting",a.DECREASING="Decreasing",a.NONE="None",a.INCREASING="Increasing",a.SKYROCKETING="Skyrocketing",(n=p||(p={}))[n.UNKNOWN=0]="UNKNOWN",n[n.MATERIAL=1]="MATERIAL",n[n.RARE_MATERIAL=2]="RARE_MATERIAL",n[n.GARDEN_STARTER=3]="GARDEN_STARTER",n[n.PRODUCE=4]="PRODUCE",n[n.LEAVINGS=5]="LEAVINGS",n[n.FEED=6]="FEED",n[n.RESTRAINT=7]="RESTRAINT",n[n.TOOL=8]="TOOL",n[n.HANDICRAFT=9]="HANDICRAFT",(c=f||(f={})).UNKNOWN="",c.GATHERING="gathering",c.GRANARY="granary",c.FARM_SHOP="farm_shop",c.FARM="farm",c.PASTURE="pasture",c.CRAFTING="crafting";let eW=new Map([[h.UNKNOWN,1],[h.LOW,.8],[h.AVERAGE,1],[h.HIGH,1.2],[h.VERY_HIGH,1.4]]),ez=new Map([[u.UNKNOWN,1],[u.NONEXISTENT,1.6],[u.INSUFFICIENT,1.3],[u.SUFFICIENT,1],[u.SURPLUS,.8],[u.OVERFLOWING,.6]]);function eL(e){return eW.get(e.popularity)*ez.get(e.supply)}var e_=r(8454);function eU(e){let{trend:t}=e;if(!t)return(0,b.tZ)(b.HY,{});let r=eL(t),l=function(e){let t=eL(e);return 1===t?0:t<1?100-(t-.48)/1.7600000000000002*100:(t-.48)/1.7600000000000002*100}(t),i="transparent",a="";r<1?(i="rgba(220, 53, 69, ".concat(l/100,")"),a="bi-arrow-down"):r>1&&(i="rgba(32, 201, 151, ".concat(l/100,")"),a="bi-arrow-up");let n={backgroundColor:i};return(0,b.BX)(e_.z,{position:"left",closeDelay:0,withArrow:!0,shadow:"md",children:[(0,b.tZ)(e_.z.Target,{children:(0,b.BX)(B.Z,{spacing:8,grow:!0,children:[(0,b.tZ)(P.k,{sx:{flex:"0 0"},style:n,size:"sm",radius:"lg",children:(0,b.tZ)("i",{className:"bi ".concat(a)})}),(0,b.BX)(S.x,{align:"right",children:[(100*r).toFixed(0),"%"]})]})}),(0,b.tZ)(e_.z.Dropdown,{children:(0,b.BX)(ew.r,{sx:{width:180},gutter:0,children:[(0,b.tZ)(ew.r.Col,{span:6,children:(0,b.tZ)("b",{children:"Popularity:"})}),(0,b.tZ)(ew.r.Col,{span:6,children:t.popularity}),(0,b.tZ)(ew.r.Col,{span:6,children:(0,b.tZ)("b",{children:"Supply:"})}),(0,b.tZ)(ew.r.Col,{span:6,children:t.supply})]})})]})}let eM=(0,N.k)(e=>({control:{backgroundColor:e.colors.gray[1],"&:hover":{backgroundColor:e.colors.gray[2]}},panel:{backgroundColor:e.colors.gray[1]},selectTable:{height:600,table:{tableLayout:"fixed",tr:{cursor:"default"},td:{verticalAlign:"middle"}},".col-time":{width:65},".col-value":{width:65},".col-trend":{width:120},".col-shift":{width:140}}}));function eG(e){let{rank:t,lastSelected:r,onSelectProduct:l,trendData:i,availableHours:a,usedHours:n}=e,{classes:c}=eM(),d=(0,E.useContext)(R),[o,s]=(0,E.useState)(!0),[h,u]=(0,E.useState)(0),[m,p]=(0,E.useState)(d.products);return(0,E.useEffect)(()=>{p(d.products.filter(e=>(function(e,t,r,l,i,a){let n=e.id===(null==t?void 0:t.id),c=!t||e.purposeCat===t.purposeCat||!!e.materialCat&&e.materialCat===t.materialCat,d=r>=e.time,o=0===l||e.time===l,s=i>=e.rank;return(!a||!n&&c)&&d&&o&&s})(e,r,a,h,t,o)))},[d,r,a,h,t,o]),(0,b.BX)("div",{children:[(0,b.tZ)(eT,{availableHours:a,usedHours:n,fillWidth:!0}),(0,b.tZ)("div",{className:"spacer1"}),(0,b.tZ)(eO.U,{classNames:{control:c.control,panel:c.panel},variant:"filled",defaultValue:"filters",children:(0,b.BX)(eO.U.Item,{value:"filters",children:[(0,b.tZ)(eO.U.Control,{icon:(0,b.tZ)("i",{className:"bi bi-funnel"}),sx:e=>({borderRadius:e.radius.sm}),children:(0,b.tZ)(z.D,{order:4,children:"Filters"})}),(0,b.tZ)(eO.U.Panel,{children:(0,b.BX)(ew.r,{align:"center",gutter:8,sx:e=>({fontSize:e.fontSizes.sm,maxWidth:500}),mx:"auto",children:[(0,b.tZ)(ew.r.Col,{span:12}),(0,b.tZ)(ew.r.Col,{span:5,children:(0,b.tZ)("label",{htmlFor:"time-filter",children:"Time"})}),(0,b.tZ)(ew.r.Col,{span:7,children:(0,b.tZ)(eD.p,{id:"time-filter",data:[{value:"0",label:"None"},{value:"4",label:"4"},{value:"6",label:"6"},{value:"8",label:"8"}],onChange:function(e){let t=e.target.value;u(parseInt(t))}})}),(0,b.tZ)(ew.r.Col,{span:5,children:(0,b.tZ)("label",{htmlFor:"efficiency-bonus",children:"Efficiency Bonus Only"})}),(0,b.tZ)(ew.r.Col,{span:7,children:(0,b.tZ)("div",{css:{margin:"0 0 0 auto",width:"fit-content"},children:(0,b.tZ)(eH.X,{id:"efficiency-bonus",checked:o,onChange:e=>s(e.target.checked)})})})]})})]})}),(0,b.tZ)("div",{className:"spacer2"}),(0,b.BX)(X.x,{className:c.selectTable,children:[(0,b.BX)(ef.i,{fontSize:14,highlightOnHover:!0,children:[(0,b.tZ)("thead",{children:(0,b.BX)("tr",{children:[(0,b.tZ)("th",{className:"col-product",children:"Handicraft"}),(0,b.tZ)("th",{className:"col-time",children:"Time"}),(0,b.tZ)("th",{className:"col-value",children:"Value"}),(0,b.tZ)("th",{className:"col-trend",children:(0,b.tZ)(Y.u,{label:"Value modifier from Popularity and Supply",withinPortal:!0,children:(0,b.BX)(B.Z,{children:["Multiplier",(0,b.tZ)(P.k,{size:"xs",radius:"lg",children:(0,b.tZ)("i",{className:"bi bi-question"})})]})})}),(0,b.tZ)("th",{className:"col-shift",children:"Demand Shift"})]})}),(0,b.tZ)("tbody",{children:m.map(e=>(0,b.tZ)("tr",{onClick:()=>l(e),children:function(e){let t=i.get(e.item);return(0,b.BX)(b.HY,{children:[(0,b.tZ)("td",{children:e.item}),(0,b.tZ)("td",{css:{textAlign:"center"},children:e.time}),(0,b.tZ)("td",{css:{textAlign:"center"},children:e.value}),(0,b.tZ)("td",{children:(0,b.tZ)(eU,{trend:t})}),(0,b.tZ)("td",{children:(0,b.tZ)(eP,{trend:t})})]})}(e)},e.id))})]}),(0,b.tZ)("div",{className:"spacer1"})]})]})}function eF(e){let{metadata:t,selectedCycle:r,sanctuaryInfo:l,trendData:i}=e,[a,n]=eS("is-workshop-".concat(t.id,"-").concat(r),{selectedProducts:[]}),[c,d]=(0,E.useState)(24),[o,s]=(0,E.useState)(0),[h,u]=(0,E.useState)(g.BELOW),[m,p]=(0,E.useState)(!1),[f,Z]=(0,E.useState)(),N=(0,E.useCallback)(()=>{if(0===a.selectedProducts.length)Z(void 0);else{let e=h===g.BELOW?a.selectedProducts[a.selectedProducts.length-1]:a.selectedProducts[0];Z(e)}},[h,a]),v=e=>{u(()=>e),p(e=>!e)},y=e=>{n(t=>{let r={key:"".concat("is","-").concat((0,eC.Z)()),...e},l=h===g.BELOW?[...t.selectedProducts,r]:[r,...t.selectedProducts];return{...t,selectedProducts:l}})},x=e=>{let t="function"==typeof e?e(a.selectedProducts):e;n({...a,selectedProducts:t})},S=()=>{n(e=>({...e,selectedProducts:[]}))};return(0,E.useEffect)(()=>{N()},[N]),(0,E.useEffect)(()=>{let e=a.selectedProducts.reduce((e,t)=>e+t.time,0);d(24-e),s(e)},[c,o,a]),(0,b.BX)(eg.X,{sx:e=>({backgroundColor:e.colors.gray[1],minWidth:300,maxWidth:"475px !important"}),p:8,shadow:"sm",withBorder:!0,children:[(0,b.BX)("div",{children:[(0,b.tZ)(z.D,{order:3,sx:{textAlign:"center",padding:"4px 8px 0 8px"},children:t.title}),(0,b.tZ)("div",{className:"spacer2"}),(0,b.tZ)(eT,{availableHours:c,usedHours:o})]}),(0,b.BX)(B.Z,{position:"center",sx:{padding:"16px 0"},spacing:"xs",children:[(0,b.tZ)("div",{children:(0,b.tZ)(en.z,{disabled:c<4,onClick:()=>v(g.BELOW),"aria-label":"Add handicrafts from start",rightIcon:(0,b.tZ)("i",{className:"bi bi-arrow-down"}),children:"Add"})}),(0,b.tZ)("div",{children:(0,b.tZ)(en.z,{disabled:c<4,"aria-label":"Add handicrafts from end",onClick:()=>v(g.ABOVE),rightIcon:(0,b.tZ)("i",{className:"bi bi-arrow-up"}),children:"Add"})}),(0,b.tZ)("div",{children:(0,b.tZ)(en.z,{color:"red",disabled:0===a.selectedProducts.length,"aria-label":"Remove all handicrafts from schedule",onClick:()=>S(),rightIcon:(0,b.tZ)("i",{className:"bi bi-x-lg"}),children:"Remove All"})})]}),(0,b.tZ)(eA,{selectedProducts:a.selectedProducts,setSelectedProducts:x}),(0,b.tZ)(ek.u,{centered:!0,size:"xl",opened:m,onClose:()=>p(!1),title:(0,b.tZ)(z.D,{order:3,children:"Select Handicrafts"}),children:(0,b.tZ)(b.HY,{children:(0,b.tZ)(eG,{rank:l.rank,onSelectProduct:y,lastSelected:f,trendData:i.data,availableHours:c,usedHours:o})})})]})}(d=g||(g={}))[d.ABOVE=0]="ABOVE",d[d.BELOW=1]="BELOW";let eK="Island Sanctuary Planner";(o=Z||(Z={})).WORKSHOPS="workshops",o.TREND_DATA="trendData";let eY={rank:1,workshop1Level:1,workshop2Level:1,workshop3Level:1},eV=(0,N.k)({cycleSelect:{".today":{"> div:first-of-type":{display:"block"},"> div:last-of-type":{marginLeft:10}}}}),ej=e=>{let{products:t,items:r}=e,{classes:l,cx:i}=eV(),a=er(),[n,c]=eS("is-sanctuary",(0,w.cloneDeep)(eY)),[d,o]=(0,E.useState)("".concat(a.cycle)),[s,h]=eS("is-trend-data-".concat(d),{data:new Map});return(0,E.useEffect)(()=>{for(let e=1;e<=7;e++){let t=document.getElementById("cycle-select-".concat(e));if(!t)return;e===a.cycle?t.classList.add("today"):t.classList.remove("today")}},[a,l,i]),(0,b.tZ)(M,{layoutProps:{title:eK,description:"Workshop Helper",headerDetails:{title:eK,headerMenu:(0,b.tZ)(ed,{sanctuary:n,setSanctuary:c})}},children:(0,b.BX)(R.Provider,{value:{products:t,items:r},children:[(0,b.BX)(x.W,{sx:{marginLeft:0,maxWidth:500,paddingBottom:16},children:[(0,b.tZ)(S.x,{size:"sm",weight:"bold",children:"Current Season"}),(0,b.tZ)(k.s,{className:l.cycleSelect,size:"sm",radius:"md",color:"pink",fullWidth:!0,value:d,onChange:e=>o(e),data:(()=>{let e=[];for(let t=1;t<=7;t++){let r="".concat(t);e.push({value:r,label:(0,b.BX)(v.M,{id:"cycle-select-".concat(r),children:[(0,b.tZ)(y.x,{sx:{display:"none"},children:(0,b.tZ)("i",{className:"bi bi-calendar-check"})}),(0,b.tZ)(y.x,{children:r})]})})}return e})()})]}),(0,b.BX)(C.m,{sx:{margin:"0 24px"},defaultValue:Z.WORKSHOPS,children:[(0,b.BX)(C.m.List,{children:[(0,b.tZ)(C.m.Tab,{value:Z.WORKSHOPS,icon:(0,b.tZ)("i",{className:"bi bi-gear-fill"}),color:"yellow",children:"Workshops"}),(0,b.tZ)(C.m.Tab,{value:Z.TREND_DATA,icon:(0,b.tZ)("i",{className:"bi bi-bar-chart-fill"}),color:"violet",children:"Supply & Demand"})]}),(0,b.tZ)(C.m.Panel,{value:Z.WORKSHOPS,pt:16,children:(0,b.BX)(B.Z,{grow:!0,position:"center",spacing:16,children:[(0,b.tZ)(eF,{metadata:{id:1,title:"Workshop 1"},selectedCycle:d,sanctuaryInfo:n,trendData:s}),(0,b.tZ)(eF,{metadata:{id:2,title:"Workshop 2"},selectedCycle:d,sanctuaryInfo:n,trendData:s}),(0,b.tZ)(eF,{metadata:{id:3,title:"Workshop 3"},selectedCycle:d,sanctuaryInfo:n,trendData:s})]})}),(0,b.tZ)(C.m.Panel,{value:Z.TREND_DATA,pt:16,children:(0,b.tZ)(eb,{selectedCycle:d,trendData:s,setTrendData:h})})]})]})})};var eQ=!0,eJ=ej}},function(e){e.O(0,[662,887,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);