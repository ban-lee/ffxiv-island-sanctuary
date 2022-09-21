(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(506)}])},506:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ye}});var i=a(828),r=a(5944),l=a(7294),n=a(6817),s=a(7803),o=a(5044),d=a(9236),m=(0,n.k)((function(e){return{header:{backgroundColor:e.colors.dark[6],color:e.white,display:"flex",alignItems:"center",height:56,padding:"0 8px","> div":{marginRight:"8px","&:last-child":{marginRight:0}}}}}));function c(e){var t=e.children,a=e.title,i=m().classes;return(0,r.BX)(r.HY,{children:[(0,r.BX)(s.h,{height:56,className:i.header,children:[(0,r.tZ)("div",{children:(0,r.tZ)(o.k,{color:"dark",sx:{i:{fontSize:20,lineHeight:20}},size:44,children:(0,r.tZ)("i",{className:"icon bi-sun-fill"})})}),(0,r.tZ)(d.D,{order:1,sx:{flex:"1 1 auto"},children:a}),(0,r.tZ)("div",{children:t})]}),(0,r.tZ)("div",{className:"spacer2"})]})}var u=a(1238),p=a(7841),h=a(6486),k=a(5266),y=a(1944);function I(e){var t=e.setTrendData,a=(0,l.useMemo)((function(){return(0,h.debounce)((function(e){try{var a=e.target.value,i=(0,y.Q)(a,{delimiter:"\t",trim:!0,skip_empty_lines:!0}).map((function(e){return{item:e[0],popularity:e[1],supply:e[2],demandShift:e[3]}}));t((function(){return new Map(i.map((function(e){return[e.item,e]})))}))}catch(r){console.error(r)}}),200)}),[t]);return(0,l.useEffect)((function(){return function(){return a.cancel()}}),[a]),(0,r.tZ)(r.HY,{children:(0,r.tZ)(p.z,{onClick:function(){(0,k.h7)({size:"lg",centered:!0,title:(0,r.tZ)(d.D,{order:3,children:"Import Trends"}),children:(0,r.BX)(r.HY,{children:[(0,r.BX)("div",{children:["Import tab-separated values for the popularity, supply and demand shift of each product. ",(0,r.tZ)("br",{}),(0,r.tZ)("a",{href:"https://docs.google.com/spreadsheets/d/1af0E8NkUIRMLf6dIY8pnMyUdjC9H5CQiAmH9Jaa4R6U/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:"Example Sheet"}),(0,r.tZ)("div",{className:"spacer2"})]}),(0,r.tZ)(u.g,{id:"trend-data",minRows:10,onChange:a})]})})},children:"Import Trends"})})}var f=a(9008),C=a.n(f),v=a(8826),w=a.n(v);function g(e){var t=e.children,a=e.layoutProps;return(0,r.BX)(r.HY,{children:[(0,r.BX)(C(),{children:[(0,r.tZ)("title",{children:a.title}),(0,r.tZ)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.tZ)("meta",{name:"description",content:a.description}),(0,r.tZ)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),(0,r.tZ)("main",{children:t}),(0,r.tZ)("footer",{children:(0,r.BX)("div",{className:w().footer,children:[(0,r.BX)("div",{children:["2022 \xa9 ",(0,r.tZ)("a",{href:"https://github.com/ban-lee/ffxiv-island-sanctuary",children:"Ban Lee"})]}),(0,r.BX)("div",{className:w().credit,children:["Built with Nekkowe's permission to use the data ",(0,r.tZ)("br",{}),"from their\xa0",(0,r.tZ)("a",{href:"https://docs.google.com/spreadsheets/d/1e5dyaHSt5lj25l3nFWO5QcPmAJ2aAoPxCWj-iZnKxRk/edit#gid=1283864903",target:"_blank",rel:"noreferrer",children:"Island Sanctuary Workshop Sheet"}),"!"]})]})})]})}var S,Z=a(1799),q=a(9396),b=a(4882);function N(e){var t=e.sanctuary,a=e.setSanctuary;return(0,r.tZ)(r.HY,{children:(0,r.BX)("form",{onSubmit:function(e){var i;e.preventDefault(),console.log(e),a((0,q.Z)((0,Z.Z)({},t),{rank:parseInt((i=S.rank,document.getElementById(i).value))}))},children:[(0,r.tZ)(b.Y,{id:S.rank,min:1,max:10,defaultValue:t.rank,label:"Rank"}),(0,r.tZ)("div",{className:"spacer2"}),(0,r.tZ)("div",{css:{textAlign:"end"},children:(0,r.tZ)(p.z,{type:"submit",children:"Save"})})]})})}!function(e){e.rank="sanctuary-rank"}(S||(S={}));var _=a(6137),B=a(4078),E=a(1310);function O(e){var t=e.sanctuary,a=e.setSanctuary,i=(0,l.useState)(!1),n=i[0],s=i[1],o=n?"Close menu":"Open menu";return(0,r.BX)(_.Z,{children:[(0,r.BX)("div",{css:function(e){return{color:e.white}},children:["Rank: ",t.rank]}),(0,r.BX)(B.v,{shadow:"md",position:"bottom-end",width:250,opened:n,onChange:s,children:[(0,r.tZ)(B.v.Target,{children:(0,r.tZ)(E.O,{sx:function(e){return{height:"44px",width:"44px","&:hover":{backgroundColor:e.colors.dark}}},styles:{burger:{margin:"0 auto"}},color:"white",size:"sm",opened:n,"aria-label":o})}),(0,r.tZ)(B.v.Dropdown,{children:(0,r.tZ)(B.v.Item,{icon:(0,r.tZ)("i",{className:"bi bi-gear"}),onClick:function(){(0,k.h7)({centered:!0,closeButtonLabel:"Close Sanctuary Info",title:(0,r.tZ)(d.D,{order:3,children:"Sanctuary Info"}),children:(0,r.tZ)(N,{sanctuary:t,setSanctuary:a})})},children:"Set Sanctuary Info"})})]})]})}var T=a(4703),P=a.n(T),H=a(9815),R=a(5078),A=(0,n.k)((function(e){return{trendData:{margin:"0 16px",padding:"0 8px"}}}));function X(e){var t=e.trendData,a=A().classes;return(0,r.BX)("div",{className:a.trendData,children:[(0,r.tZ)(d.D,{order:3,children:"Trend Data"}),(0,r.BX)(R.i,{fontSize:"sm",highlightOnHover:!0,children:[(0,r.tZ)("thead",{children:(0,r.BX)("tr",{children:[(0,r.tZ)("th",{children:"Product"}),(0,r.tZ)("th",{children:"Popularity"}),(0,r.tZ)("th",{children:"Supply"}),(0,r.tZ)("th",{children:"Demand Shift"})]})}),(0,r.BX)("tbody",{children:[(0,H.Z)(t.values()).map((function(e){return(0,r.BX)("tr",{children:[(0,r.tZ)("td",{children:e.item}),(0,r.tZ)("td",{children:e.popularity}),(0,r.tZ)("td",{children:e.supply}),(0,r.tZ)("td",{children:e.demandShift})]},e.item)})),0===t.size&&(0,r.BX)("div",{children:[(0,r.tZ)("div",{className:"spacer2"}),"No trend data found!"]})]})]})]})}var x=a(4201),L=a(7789);function M(e){var t,a=e.option,i=e.onClose,l=null!==(t=a.color)&&void 0!==t?t:"gray",n=i?(0,r.tZ)(x.P,{"aria-label":a.label,size:"xs",color:l,radius:"lg",onMouseDown:i,children:(0,r.tZ)("i",{className:"bi bi-x"})}):(0,r.tZ)(r.HY,{});return(0,r.tZ)(L.C,{color:l,rightSection:n,children:a.label})}var W=a(50),D=(0,n.k)({scheduledHours:{margin:"16px auto 8px auto",maxWidth:350},grid:{textAlign:"center"},digits:{fontWeight:"bold",fontSize:24}});function F(e){var t=e.availableHours,a=e.usedHours,i=D(),l=i.classes,n=i.cx;return(0,r.BX)("div",{className:l.scheduledHours,children:[(0,r.BX)(W.r,{className:l.grid,justify:"center",gutter:0,children:[(0,r.tZ)(W.r.Col,{span:4,children:"Used"}),(0,r.tZ)(W.r.Col,{span:4,children:"Available"})]}),(0,r.BX)(W.r,{className:n(l.grid,l.digits),justify:"center",gutter:0,children:[(0,r.tZ)(W.r.Col,{span:4,children:a}),(0,r.tZ)(W.r.Col,{span:4,children:t})]})]})}var U,V,z,G=JSON.parse('{"R":[{"id":1,"item":"Isleworks Potion","material1":{"id":0,"qty":2,"item":"Island Palm Leaf"},"material2":{"id":7,"qty":2,"item":"Islewort"},"purposeCat":"Concoctions","materialCat":"","rank":1,"time":4,"value":28},{"id":2,"item":"Isleworks Firesand","material1":{"id":8,"qty":2,"item":"Island Sand"},"material2":{"id":14,"qty":1,"item":"Island Limestone"},"purposeCat":"Concoctions","materialCat":"Unburied Treasures","rank":1,"time":4,"value":28,"material3":{"id":7,"qty":1,"item":"Islewort"}},{"id":3,"item":"Isleworks Wooden Chair","material1":{"id":9,"qty":4,"item":"Island Log"},"material2":{"id":11,"qty":2,"item":"Island Vine"},"purposeCat":"Furnishings","materialCat":"Woodworks","rank":1,"time":6,"value":42},{"id":4,"item":"Isleworks Grilled Clam","material1":{"id":4,"qty":2,"item":"Island Clam"},"material2":{"id":5,"qty":2,"item":"Island Laver"},"purposeCat":"Foodstuffs","materialCat":"Marine Merchandise","rank":1,"time":4,"value":28},{"id":5,"item":"Isleworks Necklace","material1":{"id":2,"qty":3,"item":"Island Branch"},"material2":{"id":11,"qty":1,"item":"Island Vine"},"purposeCat":"Accessories","materialCat":"Woodworks","rank":1,"time":4,"value":28},{"id":6,"item":"Isleworks Coral Ring","material1":{"id":6,"qty":3,"item":"Island Coral"},"material2":{"id":11,"qty":3,"item":"Island Vine"},"purposeCat":"Accessories","materialCat":"Marine Merchandise","rank":1,"time":6,"value":42},{"id":7,"item":"Isleworks Barbut","material1":{"id":13,"qty":3,"item":"Island Copper Ore"},"material2":{"id":8,"qty":3,"item":"Island Sand"},"purposeCat":"Attire","materialCat":"Metalworks","rank":1,"time":6,"value":42},{"id":8,"item":"Isleworks Macuahuitl","material1":{"id":10,"qty":3,"item":"Island Palm Log"},"material2":{"id":3,"qty":3,"item":"Island Stone"},"purposeCat":"Arms","materialCat":"Woodworks","rank":1,"time":6,"value":42},{"id":9,"item":"Isleworks Sauerkraut","material1":{"id":43,"qty":1,"item":"Island Cabbage"},"material2":{"id":15,"qty":3,"item":"Island Rock Salt"},"purposeCat":"Preserved Food","materialCat":"","rank":1,"time":4,"value":40},{"id":10,"item":"Isleworks Baked Pumpkin","material1":{"id":45,"qty":1,"item":"Island Pumpkin"},"material2":{"id":12,"qty":3,"item":"Island Sap"},"purposeCat":"Foodstuffs","materialCat":"","rank":1,"time":4,"value":40},{"id":11,"item":"Isleworks Tunic","material1":{"id":52,"qty":2,"item":"Sanctuary Fleece"},"material2":{"id":11,"qty":4,"item":"Island Vine"},"purposeCat":"Attire","materialCat":"Textiles","rank":1,"time":6,"value":72},{"id":12,"item":"Isleworks Culinary Knife","material1":{"id":53,"qty":1,"item":"Sanctuary Claw"},"material2":{"id":10,"qty":3,"item":"Island Palm Log"},"purposeCat":"Sundries","materialCat":"Creature Creations","rank":1,"time":4,"value":44},{"id":13,"item":"Isleworks Brush","material1":{"id":54,"qty":1,"item":"Sanctuary Fur"},"material2":{"id":10,"qty":3,"item":"Island Palm Log"},"purposeCat":"Sundries","materialCat":"Woodworks","rank":1,"time":4,"value":44},{"id":14,"item":"Isleworks Boiled Egg","material1":{"id":56,"qty":1,"item":"Sanctuary Egg"},"material2":{"id":5,"qty":3,"item":"Island Laver"},"purposeCat":"Foodstuffs","materialCat":"Creature Creations","rank":1,"time":4,"value":44},{"id":15,"item":"Isleworks Hora","material1":{"id":57,"qty":2,"item":"Sanctuary Carapace"},"material2":{"id":3,"qty":4,"item":"Island Stone"},"purposeCat":"Arms","materialCat":"Creature Creations","rank":1,"time":6,"value":72},{"id":16,"item":"Isleworks Earrings","material1":{"id":58,"qty":1,"item":"Sanctuary Fang"},"material2":{"id":11,"qty":3,"item":"Island Vine"},"purposeCat":"Accessories","materialCat":"Creature Creations","rank":1,"time":4,"value":44},{"id":17,"item":"Isleworks Butter","material1":{"id":60,"qty":1,"item":"Sanctuary Milk"},"material2":{"id":15,"qty":3,"item":"Island Rock Salt"},"purposeCat":"Ingredients","materialCat":"Creature Creations","rank":1,"time":4,"value":44},{"id":18,"item":"Isleworks Brick Counter","material1":{"id":19,"qty":2,"item":"Island Clay"},"material2":{"id":14,"qty":2,"item":"Island Limestone"},"purposeCat":"Furnishings","materialCat":"Unburied Treasures","rank":5,"time":6,"value":48,"material3":{"id":10,"qty":2,"item":"Island Palm Log"}},{"id":19,"item":"Bronze Sheep","material1":{"id":20,"qty":3,"item":"Island Tinsand"},"material2":{"id":13,"qty":3,"item":"Island Copper Ore"},"purposeCat":"Furnishings","materialCat":"Metalworks","rank":5,"time":8,"value":64,"material3":{"id":9,"qty":2,"item":"Island Log"}},{"id":20,"item":"Isleworks Growth Formula","material1":{"id":27,"qty":2,"item":"Island Alyssum"},"material2":{"id":7,"qty":3,"item":"Islewort"},"purposeCat":"Concoctions","materialCat":"","rank":5,"time":8,"value":136,"material3":{"id":2,"qty":3,"item":"Island Branch"}},{"id":21,"item":"Isleworks Garnet Rapier","material1":{"id":28,"qty":2,"item":"Raw Island Garnet"},"material2":{"id":13,"qty":3,"item":"Island Copper Ore"},"purposeCat":"Arms","materialCat":"Unburied Treasures","rank":5,"time":8,"value":136,"material3":{"id":20,"qty":3,"item":"Island Tinsand"}},{"id":22,"item":"Isleworks Spruce Round Shield","material1":{"id":29,"qty":2,"item":"Island Spruce Log"},"material2":{"id":13,"qty":3,"item":"Island Copper Ore"},"purposeCat":"Attire","materialCat":"Woodworks","rank":5,"time":8,"value":136,"material3":{"id":3,"qty":3,"item":"Island Stone"}},{"id":23,"item":"Isleworks Shark Oil","material1":{"id":30,"qty":2,"item":"Island Hammerhead"},"material2":{"id":5,"qty":3,"item":"Island Laver"},"purposeCat":"Sundries","materialCat":"Marine Merchandise","rank":5,"time":8,"value":136,"material3":{"id":12,"qty":3,"item":"Island Sap"}},{"id":24,"item":"Isleworks Silver Ear Cuffs","material1":{"id":31,"qty":2,"item":"Island Silver Ore"},"material2":{"id":20,"qty":3,"item":"Island Tinsand"},"purposeCat":"Accessories","materialCat":"Metalworks","rank":5,"time":8,"value":136,"material3":{"id":6,"qty":3,"item":"Island Coral"}},{"id":25,"item":"Isleworks Sweet Popoto","material1":{"id":42,"qty":2,"item":"Island Popoto"},"material2":{"id":60,"qty":1,"item":"Sanctuary Milk"},"purposeCat":"Confections","materialCat":"","rank":5,"time":6,"value":72,"material3":{"id":12,"qty":3,"item":"Island Sap"}},{"id":26,"item":"Isleworks Parsnip Salad","material1":{"id":50,"qty":2,"item":"Island Parsnip"},"material2":{"id":7,"qty":1,"item":"Islewort"},"purposeCat":"Foodstuffs","materialCat":"","rank":5,"time":4,"value":48,"material3":{"id":12,"qty":1,"item":"Island Sap"}},{"id":27,"item":"Isleworks Caramels","material1":{"id":16,"qty":4,"item":"Island Sugarcane"},"material2":{"id":60,"qty":2,"item":"Sanctuary Milk"},"purposeCat":"Confections","materialCat":"","rank":6,"time":6,"value":81},{"id":28,"item":"Isleworks Ribbon","material1":{"id":17,"qty":2,"item":"Island Cotton Boll"},"material2":{"id":13,"qty":2,"item":"Island Copper Ore"},"purposeCat":"Accessories","materialCat":"Textiles","rank":6,"time":6,"value":54,"material3":{"id":11,"qty":2,"item":"Island Vine"}},{"id":29,"item":"Isleworks Rope","material1":{"id":18,"qty":2,"item":"Island Hemp"},"material2":{"id":7,"qty":1,"item":"Islewort"},"purposeCat":"Sundries","materialCat":"Textiles","rank":6,"time":4,"value":36,"material3":{"id":11,"qty":1,"item":"Island Vine"}},{"id":30,"item":"Isleworks Cavalier\'s Hat","material1":{"id":55,"qty":2,"item":"Sanctuary Feather"},"material2":{"id":17,"qty":2,"item":"Island Cotton Boll"},"purposeCat":"Attire","materialCat":"Textiles","rank":6,"time":6,"value":81,"material3":{"id":18,"qty":2,"item":"Island Hemp"}},{"id":31,"item":"Isleworks Horn","material1":{"id":59,"qty":2,"item":"Sanctuary Horn"},"material2":{"id":19,"qty":2,"item":"Island Clay"},"purposeCat":"Sundries","materialCat":"Creature Creations","rank":6,"time":6,"value":81,"material3":{"id":18,"qty":2,"item":"Island Hemp"}},{"id":32,"item":"Isleworks Salt Cod","material1":{"id":24,"qty":4,"item":"Islefish"},"material2":{"id":15,"qty":2,"item":"Island Rock Salt"},"purposeCat":"Preserved Food","materialCat":"Marine Merchandise","rank":7,"time":6,"value":54},{"id":33,"item":"Isleworks Squid Ink","material1":{"id":25,"qty":2,"item":"Island Squid"},"material2":{"id":15,"qty":2,"item":"Island Rock Salt"},"purposeCat":"Ingredients","materialCat":"Marine Merchandise","rank":7,"time":4,"value":36},{"id":34,"item":"Isleworks Essential Draught","material1":{"id":26,"qty":2,"item":"Island Jellyfish"},"material2":{"id":0,"qty":2,"item":"Island Palm Leaf"},"purposeCat":"Concoctions","materialCat":"Marine Merchandise","rank":7,"time":6,"value":54,"material3":{"id":5,"qty":2,"item":"Island Laver"}},{"id":35,"item":"Isleberry Jam","material1":{"id":44,"qty":3,"item":"Isleberry"},"material2":{"id":16,"qty":2,"item":"Island Sugarcane"},"purposeCat":"Ingredients","materialCat":"","rank":7,"time":6,"value":78,"material3":{"id":12,"qty":1,"item":"Island Sap"}},{"id":36,"item":"Isleworks Tomato Relish","material1":{"id":47,"qty":2,"item":"Island Tomato"},"material2":{"id":16,"qty":1,"item":"Island Sugarcane"},"purposeCat":"Ingredients","materialCat":"","rank":7,"time":4,"value":52,"material3":{"id":7,"qty":1,"item":"Islewort"}},{"id":37,"item":"Isleworks Onion Soup","material1":{"id":46,"qty":3,"item":"Island Onion"},"material2":{"id":15,"qty":2,"item":"Island Rock Salt"},"purposeCat":"Foodstuffs","materialCat":"","rank":7,"time":6,"value":78,"material3":{"id":7,"qty":1,"item":"Islewort"}},{"id":38,"item":"Islefish Pie","material1":{"id":48,"qty":3,"item":"Island Wheat"},"material2":{"id":24,"qty":2,"item":"Islefish"},"purposeCat":"Confections","materialCat":"Marine Merchandise","rank":7,"time":6,"value":78,"material3":{"id":16,"qty":1,"item":"Island Sugarcane"}},{"id":39,"item":"Isleworks Corn Flakes","material1":{"id":49,"qty":2,"item":"Island Corn"},"material2":{"id":16,"qty":2,"item":"Island Sugarcane"},"purposeCat":"Preserved Food","materialCat":"","rank":7,"time":4,"value":52},{"id":40,"item":"Isleworks Pickled Radish","material1":{"id":51,"qty":4,"item":"Island Radish"},"material2":{"id":1,"qty":2,"item":"Island Apple"},"purposeCat":"Preserved Food","materialCat":"","rank":7,"time":8,"value":104,"material3":{"id":16,"qty":2,"item":"Island Sugarcane"}},{"id":41,"item":"Isleworks Iron Axe","material1":{"id":21,"qty":3,"item":"Island Iron Ore"},"material2":{"id":9,"qty":3,"item":"Island Log"},"purposeCat":"Arms","materialCat":"Metalworks","rank":8,"time":8,"value":72,"material3":{"id":8,"qty":2,"item":"Island Sand"}},{"id":42,"item":"Isleworks Quartz Ring","material1":{"id":22,"qty":3,"item":"Island Quartz"},"material2":{"id":21,"qty":3,"item":"Island Iron Ore"},"purposeCat":"Accessories","materialCat":"Unburied Treasures","rank":8,"time":8,"value":72,"material3":{"id":3,"qty":2,"item":"Island Stone"}},{"id":43,"item":"Isleworks Porcelain Vase","material1":{"id":23,"qty":3,"item":"Island Leucogranite"},"material2":{"id":22,"qty":3,"item":"Island Quartz"},"purposeCat":"Sundries","materialCat":"Unburied Treasures","rank":8,"time":8,"value":72,"material3":{"id":19,"qty":2,"item":"Island Clay"}},{"id":44,"item":"Isleworks Vegetable Juice","material1":{"id":43,"qty":3,"item":"Island Cabbage"},"material2":{"id":7,"qty":2,"item":"Islewort"},"purposeCat":"Concoctions","materialCat":"","rank":8,"time":6,"value":78,"material3":{"id":5,"qty":1,"item":"Island Laver"}},{"id":45,"item":"Isleworks Pumpkin Pudding","material1":{"id":45,"qty":3,"item":"Island Pumpkin"},"material2":{"id":56,"qty":1,"item":"Sanctuary Egg"},"purposeCat":"Confections","materialCat":"","rank":8,"time":6,"value":78,"material3":{"id":60,"qty":1,"item":"Sanctuary Milk"}},{"id":46,"item":"Isleworks Sheepfluff Rug","material1":{"id":52,"qty":3,"item":"Sanctuary Fleece"},"material2":{"id":17,"qty":2,"item":"Island Cotton Boll"},"purposeCat":"Furnishings","materialCat":"Creature Creations","rank":8,"time":6,"value":90,"material3":{"id":18,"qty":1,"item":"Island Hemp"}},{"id":47,"item":"Isleworks Garden Scythe","material1":{"id":53,"qty":3,"item":"Sanctuary Claw"},"material2":{"id":21,"qty":2,"item":"Island Iron Ore"},"purposeCat":"Sundries","materialCat":"Metalworks","rank":9,"time":6,"value":90,"material3":{"id":10,"qty":1,"item":"Island Palm Log"}},{"id":48,"item":"Isleworks Bed","material1":{"id":54,"qty":4,"item":"Sanctuary Fur"},"material2":{"id":17,"qty":2,"item":"Island Cotton Boll"},"purposeCat":"Furnishings","materialCat":"Textiles","rank":9,"time":8,"value":120,"material3":{"id":9,"qty":2,"item":"Island Log"}},{"id":49,"item":"Isleworks Scale Fingers","material1":{"id":57,"qty":4,"item":"Sanctuary Carapace"},"material2":{"id":21,"qty":2,"item":"Island Iron Ore"},"purposeCat":"Attire","materialCat":"Creature Creations","rank":9,"time":8,"value":120,"material3":{"id":17,"qty":2,"item":"Island Cotton Boll"}},{"id":50,"item":"Isleworks Crook","material1":{"id":58,"qty":4,"item":"Sanctuary Fang"},"material2":{"id":22,"qty":2,"item":"Island Quartz"},"purposeCat":"Arms","materialCat":"Woodworks","rank":9,"time":8,"value":120,"material3":{"id":9,"qty":2,"item":"Island Log"}}]}'),K=a(7561),Y=a.n(K);!function(e){e.UNKNOWN="",e.LOW="Low",e.AVERAGE="Average",e.HIGH="High",e.VERY_HIGH="Very High"}(U||(U={})),function(e){e.UNKNOWN="",e.NONEXISTENT="Nonexistent",e.INSUFFICIENT="Insufficient",e.SUFFICIENT="Sufficient",e.SURPLUS="Surplus",e.OVERFLOWING="Overflowing"}(V||(V={})),function(e){e.UNKNOWN="",e.PLUMMETING="Plummeting",e.DECREASING="Decreasing",e.NONE="None",e.INCREASING="Increasing",e.SKYROCKETING="Skyrocketing"}(z||(z={}));var Q=new Map([[U.UNKNOWN,1],[U.LOW,.8],[U.AVERAGE,1],[U.HIGH,1.2],[U.VERY_HIGH,1.4]]),J=new Map([[V.UNKNOWN,1],[V.NONEXISTENT,1.6],[V.INSUFFICIENT,1.3],[V.SUFFICIENT,1],[V.SURPLUS,.8],[V.OVERFLOWING,.6]]);function j(e){return Q.get(e.popularity)*J.get(e.supply)}var $=a(292);function ee(e){if(!e)return(0,r.tZ)(r.HY,{});var t=j(e),a=function(e){var t=j(e);if(1===t)return 0;if(t<1)return 100-(t-.48)/(2.24-.48)*100;return(t-.48)/(2.24-.48)*100}(e),i="",l="";t<1?(i="rgba(220, 53, 69, ".concat(a/100,")"),l="bi-arrow-down-circle-fill"):t>1&&(i="rgba(32, 201, 151, ".concat(a/100,")"),l="bi-arrow-up-circle-fill");var n={color:i};return(0,r.BX)("div",{className:Y().modifier,children:[(0,r.tZ)("div",{className:"".concat(Y()["icon-container"]),style:n,children:(0,r.tZ)("i",{className:"bi ".concat(l)})}),(0,r.tZ)("div",{children:t.toFixed(2)})]})}function te(e){if(!(null===e||void 0===e?void 0:e.demandShift))return(0,r.tZ)(r.HY,{});var t="",a="";switch(e.demandShift){case z.SKYROCKETING:t="rgba(32, 201, 151, 1)",a="bi-arrow-up-circle-fill";break;case z.INCREASING:t="rgba(32, 201, 151, 0.6)",a="bi-arrow-up-right-circle-fill";break;case z.NONE:t="rgba(0, 0, 0, 0.5)",a="bi-dash-circle-fill";break;case z.DECREASING:t="rgba(220, 53, 69, 0.7)",a="bi-arrow-down-right-circle-fill";break;case z.PLUMMETING:t="rgba(220, 53, 69, 1)",a="bi-arrow-down-circle-fill"}var i={color:t};return(0,r.BX)("div",{className:Y()["demand-shift"],children:[(0,r.tZ)("div",{className:"".concat(Y()["icon-container"]),style:i,children:(0,r.tZ)("i",{className:"bi ".concat(a)})}),(0,r.tZ)("div",{children:e.demandShift})]})}function ae(e){var t=e.rank,a=e.lastSelected,i=e.onSelectProduct,n=e.trendData,s=e.availableHours,o=function(e){var t=n.get(e.item);return(0,r.BX)(r.HY,{children:[(0,r.tZ)("td",{children:e.item}),(0,r.tZ)("td",{children:e.time}),(0,r.tZ)("td",{children:e.value}),(0,r.tZ)("td",{children:ee(t)}),(0,r.tZ)("td",{children:te(t)})]})},d=(0,l.useState)(0),m=d[0],c=d[1],u=(0,l.useState)(G.R),p=u[0],h=u[1];return(0,l.useEffect)((function(){h(G.R.filter((function(e){return function(e,t,a,i,r){var l=e.id===(null===t||void 0===t?void 0:t.id),n=!t||e.purposeCat===t.purposeCat||!!e.materialCat&&e.materialCat===t.materialCat,s=a>=e.time,o=0===i||e.time===i,d=r>=e.rank;return!l&&n&&s&&o&&d}(e,a,s,m,t)})))}),[a,s,m,t]),(0,r.BX)("div",{children:[(0,r.BX)("div",{className:Y()["select-filters"],children:[(0,r.tZ)("h5",{children:"Filters"}),(0,r.tZ)($.p,{id:"time-filter",label:"Time",data:[{value:"0",label:"None"},{value:"4",label:"4"},{value:"6",label:"6"},{value:"8",label:"8"}],onChange:function(e){var t=e.target.value;c(parseInt(t))}})]}),(0,r.tZ)("div",{className:Y()["select-table"],children:(0,r.BX)(R.i,{fontSize:"sm",highlightOnHover:!0,children:[(0,r.tZ)("thead",{children:(0,r.BX)("tr",{children:[(0,r.tZ)("th",{className:Y()["col-product"],children:"Product"}),(0,r.tZ)("th",{className:Y()["col-time"],children:"Time"}),(0,r.tZ)("th",{className:Y()["col-value"],children:"Value"}),(0,r.tZ)("th",{className:Y()["col-trend"],children:"Trend"}),(0,r.tZ)("th",{className:Y()["col-shift"],children:"Demand Shift"})]})}),(0,r.tZ)("tbody",{children:p.map((function(e){return(0,r.tZ)("tr",{onClick:function(){return i(e)},children:o(e)},e.id)}))})]})})]})}var ie=a(8393),re=a(9461),le=a(7632);var ne=a(2670);function se(e,t){return(0,ne.Z)(t,Map)?{dataType:"Map",value:Array.from(t.entries())}:(0,ne.Z)(t,Set)?{dataType:"Set",value:Array.from(t.entries())}:t}function oe(e,t){if("object"===typeof t&&null!==t){var a=t;if("dataType"in a&&"Map"===a.dataType)return new Map(a.value);if("dataType"in a&&"Set"===a.dataType)return new Set(a.value)}return t}var de,me=function(e,t){var a=(0,l.useState)(t),i=a[0],r=a[1];return(0,l.useEffect)((function(){try{var t=localStorage.getItem(e);t&&r(JSON.parse(t,oe))}catch(a){console.error(a)}}),[]),(0,l.useEffect)((function(){localStorage.setItem(e,JSON.stringify(i,se))}),[i,e]),[i,r]},ce=(0,n.k)((function(e){return{timelot:{backgroundColor:e.colors.yellow[0],border:"1px solid ".concat(e.colors.yellow[4])},bonus:{backgroundColor:e.colors.teal[5]},noBonus:{backgroundColor:e.colors.gray[5]}}}));function ue(e){var t=e.storageKeyPrefix,a=e.sanctuaryInfo,n=e.trendData,s=ce().classes,o=(0,i.Z)(me("".concat(t,"is-selected-products"),[]),2),m=o[0],c=o[1],u=(0,l.useState)(24),h=u[0],k=u[1],y=(0,l.useState)(0),I=y[0],f=y[1],C=(0,l.useState)(de.BELOW),v=C[0],w=C[1],g=(0,l.useState)(!1),S=g[0],q=g[1],b=(0,l.useState)(),N=b[0],_=b[1],B=(0,l.useCallback)((function(){if(0===m.length)_(void 0);else{var e=v===de.BELOW?m[m.length-1]:m[0];_(e)}}),[v,m]),E=function(e){w((function(){return e})),q((function(e){return!e}))};return(0,l.useEffect)((function(){B()}),[B]),(0,l.useEffect)((function(){var e=m.reduce((function(e,t){return e+t.time}),0);k(24-e),f(e)}),[h,I,m]),(0,r.BX)("div",{children:[(0,r.tZ)(F,{availableHours:h,usedHours:I}),(0,r.BX)("div",{className:Y()["add-btns"],children:[(0,r.tZ)("div",{children:(0,r.tZ)(p.z,{disabled:h<4,onClick:function(){return E(de.BELOW)},"aria-label":"Add products from start",rightIcon:(0,r.tZ)("i",{className:"bi bi-arrow-down"}),children:"Add"})}),(0,r.tZ)("div",{children:(0,r.tZ)(p.z,{disabled:h<4,"aria-label":"Add products from end",onClick:function(){return E(de.ABOVE)},rightIcon:(0,r.tZ)("i",{className:"bi bi-arrow-up"}),children:"Add"})}),(0,r.tZ)("div",{children:(0,r.tZ)(p.z,{color:"red",disabled:0===m.length,"aria-label":"Remove all products from schedule",onClick:function(){c([])},rightIcon:(0,r.tZ)("i",{className:"bi bi-x-lg"}),children:"Clear"})})]}),(0,r.tZ)("div",{className:Y().scheduled,children:m.map((function(e,t){var a,i,l=(a=e,!!(i=m[t-1])&&(i.purposeCat===a.purposeCat||i.materialCat===a.materialCat)),n=100/(24/e.time);return(0,r.BX)("div",{className:"".concat(s.timelot," ").concat(Y().timeslot),style:{height:"".concat(n,"%")},children:[(0,r.BX)("div",{className:Y()["timeslot-header"],children:[(0,r.BX)("div",{css:function(e){return{color:e.white}},className:Y()["timeslot-icon"],children:[l&&(0,r.tZ)(ie.u,{label:"Efficiency Bonus!",withinPortal:!0,children:(0,r.tZ)("div",{className:s.bonus,children:(0,r.tZ)("i",{className:"bi bi-stars"})})}),!l&&(0,r.tZ)(ie.u,{label:"No bonus",withinPortal:!0,children:(0,r.tZ)("div",{className:s.noBonus,children:(0,r.tZ)("i",{className:"bi bi-dash-lg"})})})]}),(0,r.BX)("div",{className:Y()["timeslot-title"],children:[(0,r.tZ)("span",{children:e.item})," (",e.time,")"]}),(0,r.tZ)("div",{className:Y()["timeslot-remove"],children:(0,r.tZ)(x.P,{size:"lg",variant:"transparent","aria-label":"Remove ".concat(e.item," from schedule"),onClick:function(){return function(e){c((function(t){return t.splice(e,1),(0,H.Z)(t)}))}(t)}})})]}),(0,r.BX)("div",{className:Y()["timeslot-categories"],children:[(0,r.tZ)(M,{option:{value:e.purposeCat,label:e.purposeCat,color:"blue"}}),e.materialCat&&(0,r.tZ)(M,{option:{value:e.materialCat,label:e.materialCat,color:"grape"}})]})]},e.key)}))}),(0,r.tZ)(re.u,{centered:!0,size:"xl",opened:S,onClose:function(){return q(!1)},title:(0,r.tZ)(d.D,{order:3,children:"Select Products"}),children:(0,r.BX)(r.HY,{children:[(0,r.tZ)("div",{className:"".concat(Y()["table-sticky"]),children:(0,r.tZ)(F,{availableHours:h,usedHours:I})}),(0,r.tZ)(ae,{rank:a.rank,onSelectProduct:function(e){c((function(t){var a,i=(0,Z.Z)({key:(a="is","".concat(a||"id","-").concat((0,le.Z)()))},e);return v===de.BELOW?(0,H.Z)(t).concat([i]):[i].concat((0,H.Z)(t))}))},lastSelected:N,trendData:n,availableHours:h,usedHours:I})]})})]})}!function(e){e[e.ABOVE=0]="ABOVE",e[e.BELOW=1]="BELOW"}(de||(de={}));var pe,he="Island Sanctuary Planner";!function(e){e[e.WORKSHOPS=0]="WORKSHOPS",e[e.TREND_DATA=1]="TREND_DATA"}(pe||(pe={}));var ke={rank:1,workshop1Level:1,workshop2Level:1,workshop3Level:1},ye=function(){var e=(0,l.useState)(pe.WORKSHOPS),t=e[0],a=e[1],n=(0,l.useState)("View Trends"),s=n[0],o=n[1],m=(0,i.Z)(me("is-trend-data",new Map),2),u=m[0],k=m[1],y=(0,i.Z)(me("is-sanctuary",(0,h.cloneDeep)(ke)),2),f=y[0],C=y[1];return(0,r.tZ)(g,{layoutProps:{title:he,description:"Workshop Helper"},children:(0,r.BX)(r.HY,{children:[(0,r.tZ)(c,{title:he,children:(0,r.tZ)(O,{sanctuary:f,setSanctuary:C})}),(0,r.BX)("div",{css:{paddingBottom:16},children:[(0,r.BX)(_.Z,{align:"center",position:"center",children:[(0,r.tZ)(I,{setTrendData:k}),(0,r.tZ)(p.z,{color:"violet",onClick:function(){t===pe.WORKSHOPS?(a(pe.TREND_DATA),o("View Workshops")):(a(pe.WORKSHOPS),o("View Trends"))},children:s})]}),(0,r.tZ)("div",{className:"spacer2"}),t===pe.WORKSHOPS&&(0,r.BX)("div",{className:"".concat(P().workshops),css:function(e){return{h3:{borderBottom:"1px solid ".concat(e.colors.blue[4])},".workshop":{border:"1px solid ".concat(e.colors.blue[4])}}},children:[(0,r.BX)("div",{className:"workshop ".concat(P().workshop),children:[(0,r.tZ)(d.D,{order:3,children:"Workshop 1"}),(0,r.tZ)(ue,{storageKeyPrefix:"w1-",sanctuaryInfo:f,trendData:u})]}),(0,r.BX)("div",{className:"workshop ".concat(P().workshop),children:[(0,r.tZ)(d.D,{order:3,children:"Workshop 2"}),(0,r.tZ)(ue,{storageKeyPrefix:"w2-",sanctuaryInfo:f,trendData:u})]}),(0,r.BX)("div",{className:"workshop ".concat(P().workshop),children:[(0,r.tZ)(d.D,{order:3,children:"Workshop 3"}),(0,r.tZ)(ue,{storageKeyPrefix:"w3-",sanctuaryInfo:f,trendData:u})]})]}),t===pe.TREND_DATA&&(0,r.tZ)(X,{trendData:u})]})]})})}},8826:function(e){e.exports={toast:"layout_toast__uV9_a",footer:"layout_footer__U7ng8",credit:"layout_credit__8kaNA"}},7561:function(e){e.exports={"add-btns":"workshop_add-btns__TcUEL",scheduled:"workshop_scheduled__rRg15",timeslot:"workshop_timeslot__qInIM","timeslot-header":"workshop_timeslot-header__oBZLq","timeslot-title":"workshop_timeslot-title__kTCip","timeslot-icon":"workshop_timeslot-icon__tuDRM","timeslot-categories":"workshop_timeslot-categories__taFTs","timeslot-remove":"workshop_timeslot-remove__7XBZ3","table-sticky":"workshop_table-sticky__75Juj","select-filters":"workshop_select-filters__1fmGw","select-table":"workshop_select-table__5TWTv","col-product":"workshop_col-product___4EW_","col-time":"workshop_col-time__PuYNb","col-value":"workshop_col-value__T6kpd","col-trend":"workshop_col-trend__Duk7j","col-shift":"workshop_col-shift__fisNQ",modifier:"workshop_modifier__XAwKm","demand-shift":"workshop_demand-shift__V_IE6","icon-container":"workshop_icon-container__WmQHb"}},4703:function(e){e.exports={container:"ffxiv_container__LgI_h","trend-controls":"ffxiv_trend-controls__JZMlk",workshops:"ffxiv_workshops__5Up9s",workshop:"ffxiv_workshop__QPaQf"}}},function(e){e.O(0,[662,717,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);