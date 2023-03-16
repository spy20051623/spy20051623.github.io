(function(){"use strict";var t={3757:function(t,e,r){r.r(e),r.d(e,{default:function(){return Z}});var s=function(){var t=this,e=t._self._c;return e("el-container",{staticStyle:{height:"100%"}},[e("el-header",{staticClass:"header",attrs:{height:"100px"}},[e("span",{staticStyle:{"font-family":"Consolas","font-size":"24px"}},[t._v("忘川风华录概率在线计算模拟器")])]),e("el-container",[e("el-aside",{staticClass:"menubar",attrs:{width:"100px"}},[e("el-menu",{staticClass:"menu",attrs:{"default-active":"1"},model:{value:t.menuActive,callback:function(e){t.menuActive=e},expression:"menuActive"}},[e("el-menu-item",{attrs:{index:"1"},on:{click:function(e){t.menuActive="1"}}},[e("span",[t._v("抽卡")])]),e("el-menu-item",{attrs:{index:"2"},on:{click:function(e){t.menuActive="2"}}},[e("span",[t._v("洗装备")])]),e("el-menu-item",{attrs:{index:"3"},on:{click:function(e){t.menuActive="3"}}},[e("span",[t._v("洗猫")])])],1)],1),e("el-main",{staticClass:"main"},["1"===t.menuActive?e("card"):t._e(),"2"===t.menuActive?e("equipment"):t._e(),"3"===t.menuActive?e("cat"):t._e()],1)],1)],1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"total"},[e("div",{staticClass:"button-area"},[e("el-button",{attrs:{type:"primary"},on:{click:t.get1}},[t._v("单抽")]),e("el-button",{attrs:{type:"primary"},on:{click:t.get10}},[t._v("十连")]),e("el-button",{attrs:{disabled:0===t.res.length,type:"danger"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("清除")]),e("el-dialog",{attrs:{title:"警告",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("span",[t._v("确认清空？")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){t.clear(),t.dialogVisible=!1}}},[t._v("确定")])],1)])],1),e("div",{staticClass:"summary-area"},[e("span",[t._v("你抽卡"+t._s(t.c)+"次，一共出了"+t._s(t.ct)+"个天卡，歪了"+t._s(t.cw)+"次，鉴定为"+t._s(t.ct/t.c>.04?"可恶的欧皇":t.c<=20||t.ct/t.c>.02&&(t.ct<=3||t.cw/t.ct<.6)?"平凡的使君":"纯纯的非酋")+"。")])]),e("div",{ref:"result-area",staticClass:"result-area"},[e("div",{staticClass:"hidden-sm-and-down"},[e("el-row",t._l(t.res,(function(r,s){return e("el-col",{key:s,attrs:{span:4,offset:s%5===0?0:1}},[e("show-card",{key:r,attrs:{type:r.type,attr:r.attr}},[t._v(" "+t._s(r.type)+","+t._s(r.attr)+" ")])],1)})),1)],1),e("div",{staticClass:"hidden-md-and-up"},[e("el-row",t._l(t.res,(function(r,s){return e("el-col",{key:s,attrs:{span:24}},[e("show-card",{key:r,attrs:{type:r.type,attr:r.attr}},[t._v(" "+t._s(r.type)+","+t._s(r.attr)+" ")])],1)})),1)],1)])])},a=[],o=(r(7658),function(){var t=this,e=t._self._c;return e("div",{class:"div "+t.color+" "+t.dec},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(0===t.type?"天卡":1===t.type?"地卡":"玄卡")+t._s(t.type<=1&&1===t.attr?"，但是歪了":""))])])}),l=[],c={name:"show-card",props:{type:{type:"number",default:0},attr:{type:"number",default:0}},data(){return{color:0===this.type?"T":1===this.type?"D":"X",dec:0===this.attr?"U":"W"}}},u=c,p=r(1001),h=(0,p.Z)(u,o,l,!1,null,"55955ea3",null),d=h.exports,f={name:"card",components:{ShowCard:d},data(){return{dialogVisible:!1,nd:0,nt:0,bd:0,res:[],c:0,ct:0,cw:0}},methods:{getNext(){let t;return++this.c,t=this.nt<=50?.02:this.nt<=60?.02+.02*(this.nt-50):this.nt<=70?.22+.03*(this.nt-60):.52+.05*(this.nt-70),Math.random()<t?(++this.ct,this.nt=0,this.nd=0,2===this.bd||Math.random()<.3?(this.bd=0,{type:0,attr:0}):(++this.cw,++this.bd,{type:0,attr:1})):(++this.nt,9===this.nd||Math.random()<.15?(this.nd=0,Math.random()<.3?{type:1,attr:0}:{type:1,attr:1}):(++this.nd,{type:2,attr:1}))},get1(){this.res=[],this.res.push(this.getNext())},get10(){this.res=[];for(let t=0;t<10;t++)this.res.push(this.getNext())},clear(){this.c=0,this.ct=0,this.cw=0,this.res=[]}}},g=f,y=(0,p.Z)(g,n,a,!1,null,"78c43a2a",null),v=y.exports,b=function(){var t=this,e=t._self._c;return e("div")},m=[],_={name:"equipment"},w=_,k=(0,p.Z)(w,b,m,!1,null,"34ee6ffd",null),j=k.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"total"},[e("div",{staticClass:"button-area"},[e("el-switch",{staticStyle:{"margin-right":"20px"},attrs:{disabled:t.jyc,"active-text":"精养","inactive-text":"普通"},model:{value:t.jy,callback:function(e){t.jy=e},expression:"jy"}}),e("el-button",{attrs:{type:"primary"},on:{click:t.work}},[t._v("培养")]),e("el-button",{attrs:{disabled:0===t.res1.length,type:"success"},on:{click:t.accept}},[t._v("替换")]),e("el-button",{attrs:{disabled:0===t.res.length,type:"danger"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("清空")]),e("el-dialog",{attrs:{title:"警告",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("span",[t._v("确认清空？")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){t.clear(),t.dialogVisible=!1}}},[t._v("确定")])],1)])],1),e("div",{staticClass:"summary-area"},[e("span",[t._v("你已经洗猫"+t._s(t.count)+"次，其中精养了"+t._s(t.countJy)+"次！")])]),e("div",{staticClass:"summary-area"},[e("el-row",[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"hidden-md-and-up"},[e("el-progress",{attrs:{percentage:20*t.p[0],color:"red"}}),e("el-progress",{attrs:{percentage:20*t.p[1],color:"springgreen"}}),e("el-progress",{attrs:{percentage:20*t.p[2],color:"yellow"}}),e("el-progress",{attrs:{percentage:20*t.p[3],color:"cyan"}}),e("el-progress",{attrs:{percentage:20*t.p[4],color:"pink"}})],1),e("div",{staticClass:"hidden-sm-and-down"},[e("div",{staticStyle:{width:"50%","margin-left":"25%","margin-right":"25%"}},[e("el-progress",{attrs:{percentage:20*t.p[0],color:"red"}}),e("el-progress",{attrs:{percentage:20*t.p[1],color:"springgreen"}}),e("el-progress",{attrs:{percentage:20*t.p[2],color:"yellow"}}),e("el-progress",{attrs:{percentage:20*t.p[3],color:"cyan"}}),e("el-progress",{attrs:{percentage:20*t.p[4],color:"pink"}})],1)])]),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"hidden-md-and-up"},[e("el-progress",{attrs:{percentage:20*t.p1[0],color:"red"}}),e("el-progress",{attrs:{percentage:20*t.p1[1],color:"springgreen"}}),e("el-progress",{attrs:{percentage:20*t.p1[2],color:"yellow"}}),e("el-progress",{attrs:{percentage:20*t.p1[3],color:"cyan"}}),e("el-progress",{attrs:{percentage:20*t.p1[4],color:"pink"}})],1),e("div",{staticClass:"hidden-sm-and-down"},[e("div",{staticStyle:{width:"50%","margin-left":"25%","margin-right":"25%"}},[e("el-progress",{attrs:{percentage:20*t.p1[0],color:"red"}}),e("el-progress",{attrs:{percentage:20*t.p1[1],color:"springgreen"}}),e("el-progress",{attrs:{percentage:20*t.p1[2],color:"yellow"}}),e("el-progress",{attrs:{percentage:20*t.p1[3],color:"cyan"}}),e("el-progress",{attrs:{percentage:20*t.p1[4],color:"pink"}})],1)])])],1)],1),e("div",{staticClass:"result-area"},[e("el-row",[e("el-col",{attrs:{span:11}},[e("h1",[t._v("原性格")]),t._l(this.res,(function(r,s){return e("h3",{key:s,style:"color: "+t.color[t.type[r]]},[t._v(t._s(t.name[r]))])}))],2),e("el-col",{attrs:{span:11,offset:2}},[e("h1",[t._v("新性格")]),t._l(this.res1,(function(r,s){return e("h3",{key:s,style:"color: "+t.color[t.type[r]]},[t._v(t._s(t.name[r]))])}))],2)],1)],1)])},C=[],M={name:"cat",data(){return{dialogVisible:!1,jy:!1,jyc:!0,count:0,countJy:0,res:[],res1:[],bd4:0,bd5:0,jy1:0,jy2:0,color:["red","springgreen","yellow","cyan","pink"],p:[0,0,0,0,0],p1:[0,0,0,0,0],countProbability:[3,15,64,15,3],probability:[1550,350,350,350,775,775,350,350,350,350,350,350],w1:[1,12,.08,.5,.5],w2:[1,1,45,50,10],name:["攻击","攻击加成","暴击强度","暴击伤害","生命","防御","生命加成","防御加成","暴击抵抗","敏捷","效果命中","效果抵抗"],type:[0,0,0,0,1,1,1,1,1,2,3,4],cnt:[0,0,0,0,0,0,0,0,0,0,0,0],cnt1:[0,0,0,0,0,0,0,0,0,0,0,0]}},methods:{getCount(){let t=Math.floor(100*Math.random());for(let e=0;e<5;e++){if(t<this.countProbability[e])return e+1;t-=this.countProbability[e]}return-1},getNext(){let t=[],e=0;for(let s=0;s<12;s++)0===s||4===s||5===s?t.push(this.probability[s]*this.w1[this.cnt1[s]]):t.push(this.probability[s]*this.w2[this.cnt1[s]]),e+=t[s];let r=Math.floor(Math.random()*e);for(let s=0;s<12;s++){if(r<t[s])return s;r-=t[s]}return-1},getNext1(){let t=0;for(let r=0;r<12;r++)t+=this.probability[r];let e=Math.floor(Math.random()*t);for(let r=0;r<12;r++){if(e<this.probability[r])return r;e-=this.probability[r]}return-1},get(t){this.res1.push(t),++this.cnt1[t],++this.p1[this.type[t]]},work1(){let t=this.getCount();++this.bd4,++this.bd5,10===this.bd4&&(t=Math.max(t,4),this.bd4=0),50===this.bd5&&(t=5,this.bd5=0);for(let e=0;e<t;e++)this.get(this.getNext())},work2(){let t,e;++this.countJy;for(let s=0;s<12;s++)if(this.cnt[s]>=3){t=s,e=this.cnt[s];break}for(let s=0;s<e-1;s++)this.get(t);++this.jy1;let r=Math.floor(10*Math.random());(3===e&&3===this.jy1||4===e&&10===this.jy1||0===r)&&(this.get(t),this.jy1=0,++this.jy2),20===this.jy2?(this.get(t),this.jy2=0):this.get(this.getNext1())},work(){++this.count,this.p1=[0,0,0,0,0],this.cnt1=[0,0,0,0,0,0,0,0,0,0,0,0],this.res1=[],this.jy?this.work2():this.work1()},accept(){this.p=this.p1,this.cnt=this.cnt1,this.res=this.res1,this.p1=[0,0,0,0,0],this.cnt1=[0,0,0,0,0,0,0,0,0,0,0,0],this.res1=[];let t=0;for(let e=0;e<12;e++)t=Math.max(t,this.cnt[e]);t<3||t>4?(this.jyc=!0,this.jy=!1):this.jyc=!1},clear(){this.p=[0,0,0,0,0],this.cnt=[0,0,0,0,0,0,0,0,0,0,0,0],this.res=[],this.p1=[0,0,0,0,0],this.cnt1=[0,0,0,0,0,0,0,0,0,0,0,0],this.res1=[],this.jyc=!0,this.jy=!1,this.count=0,this.countJy=0,this.bd4=0,this.bd5=0,this.jy1=0,this.jy2=0}}},O=M,S=(0,p.Z)(O,x,C,!1,null,"1b93ed00",null),V=S.exports,A={components:{Cat:V,Equipment:j,Card:v},data(){return{menuActive:"1"}}},P=A,N=(0,p.Z)(P,s,i,!1,null,null,null),Z=N.exports},8148:function(t,e,r){var s=r(6369),i=r(8499),n=r.n(i),a=r(3757),o=r(2631);s["default"].use(o.ZP);const l=[{path:"/random",name:"home",component:()=>Promise.resolve().then(r.bind(r,3757)),meta:{title:"Welcome to Spy's Website!"}}],c=new o.ZP({mode:"history",base:"",routes:l});c.beforeEach((async t=>{t.meta.title&&(document.title=t.meta.title)}));var u=c;s["default"].config.productionTip=!1,s["default"].use(n()),new s["default"]({router:u,render:t=>t(a["default"])}).$mount("#app")}},e={};function r(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={id:s,loaded:!1,exports:{}};return t[s](n,n.exports,r),n.loaded=!0,n.exports}r.m=t,function(){r.amdO={}}(),function(){var t=[];r.O=function(e,s,i,n){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],n=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((function(t){return r.O[t](s[l])}))?s.splice(l--,1):(o=!1,n<a&&(a=n));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,i,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,a=s[0],o=s[1],l=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(l)var u=l(r)}for(e&&e(s);c<a.length;c++)n=a[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},s=self["webpackChunkrandom"]=self["webpackChunkrandom"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(8148)}));s=r.O(s)})();
//# sourceMappingURL=app.6b5c9b6f.js.map