"use strict";(self["webpackChunkrandom"]=self["webpackChunkrandom"]||[]).push([[979],{3979:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"total"},[e("div",{staticClass:"button-area"},[e("el-switch",{staticStyle:{"margin-right":"20px"},attrs:{disabled:t.jyc,"active-text":"精养","inactive-text":"普通"},model:{value:t.jy,callback:function(e){t.jy=e},expression:"jy"}}),e("el-button",{attrs:{type:"primary"},on:{click:t.work}},[t._v("培养")]),e("el-button",{attrs:{disabled:0===t.res1.length,type:"success"},on:{click:t.accept}},[t._v("替换")]),e("el-button",{attrs:{disabled:0===t.res.length&&0===t.res1.length,type:"danger"},on:{click:function(e){t.dialogVisible1=!0}}},[t._v("清空 ")]),e("el-dialog",{attrs:{title:"警告",visible:t.dialogVisible1,width:"200px"},on:{"update:visible":function(e){t.dialogVisible1=e}}},[e("span",[t._v("确认清空？")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible1=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){t.clear(),t.dialogVisible1=!1}}},[t._v("确定")])],1)]),e("el-dialog",{attrs:{title:"警告",visible:t.dialogVisible2,width:"200px"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[e("span",[t._v("当前属性较好，确认放弃？")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible2=!1}}},[t._v("取消")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){t.confirm(),t.dialogVisible2=!1}}},[t._v("确定")])],1)])],1),e("div",{staticClass:"summary-area"},[e("span",[t._v("你已经洗猫"+t._s(t.count)+"次，其中精养了"+t._s(t.countJy)+"次！")])]),e("div",{staticClass:"summary-area"},[e("el-row",[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"hidden-md-and-up"},[e("el-progress",{attrs:{percentage:20*t.p[0],color:"red"}}),e("el-progress",{attrs:{percentage:20*t.p[1],color:"springgreen"}}),e("el-progress",{attrs:{percentage:20*t.p[2],color:"yellow"}}),e("el-progress",{attrs:{percentage:20*t.p[3],color:"cyan"}}),e("el-progress",{attrs:{percentage:20*t.p[4],color:"pink"}})],1),e("div",{staticClass:"hidden-sm-and-down"},[e("div",{staticStyle:{width:"50%","margin-left":"25%","margin-right":"25%"}},[e("el-progress",{attrs:{percentage:20*t.p[0],color:"red"}}),e("el-progress",{attrs:{percentage:20*t.p[1],color:"springgreen"}}),e("el-progress",{attrs:{percentage:20*t.p[2],color:"yellow"}}),e("el-progress",{attrs:{percentage:20*t.p[3],color:"cyan"}}),e("el-progress",{attrs:{percentage:20*t.p[4],color:"pink"}})],1)])]),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"hidden-md-and-up"},[e("el-progress",{attrs:{percentage:20*t.p1[0],color:"red"}}),e("el-progress",{attrs:{percentage:20*t.p1[1],color:"springgreen"}}),e("el-progress",{attrs:{percentage:20*t.p1[2],color:"yellow"}}),e("el-progress",{attrs:{percentage:20*t.p1[3],color:"cyan"}}),e("el-progress",{attrs:{percentage:20*t.p1[4],color:"pink"}})],1),e("div",{staticClass:"hidden-sm-and-down"},[e("div",{staticStyle:{width:"50%","margin-left":"25%","margin-right":"25%"}},[e("el-progress",{attrs:{percentage:20*t.p1[0],color:"red"}}),e("el-progress",{attrs:{percentage:20*t.p1[1],color:"springgreen"}}),e("el-progress",{attrs:{percentage:20*t.p1[2],color:"yellow"}}),e("el-progress",{attrs:{percentage:20*t.p1[3],color:"cyan"}}),e("el-progress",{attrs:{percentage:20*t.p1[4],color:"pink"}})],1)])])],1)],1),e("div",{staticClass:"result-area"},[e("el-row",[e("el-col",{attrs:{span:11}},[e("h1",[t._v("原性格")]),t._l(t.res,(function(s,r){return e("h3",{key:r,style:"color: "+t.color[t.type[s]]},[t._v(t._s(t.name[s]))])}))],2),e("el-col",{attrs:{span:11,offset:2}},[e("h1",[t._v("新性格")]),t._l(t.res1,(function(s,r){return e("h3",{key:r,style:"color: "+t.color[t.type[s]]},[t._v(t._s(t.name[s]))])}))],2)],1)],1)])},i=[],o=(s(7658),{name:"cat",data(){return{dialogVisible1:!1,dialogVisible2:!1,jy:!1,jyc:!0,count:0,countJy:0,res:[],res1:[],bd4:0,bd5:0,jy1:0,jy2:0,color:["red","springgreen","yellow","cyan","pink"],p:[0,0,0,0,0],p1:[0,0,0,0,0],countProbability:[3,15,64,15,3],probability:[62,14,14,14,31,31,14,14,14,14,14,14],w1:[50,600,4,25,25],w2:[50,50,2250,2500,500],name:["攻击","攻击加成","暴击强度","暴击伤害","生命","防御","生命加成","防御加成","暴击抵抗","敏捷","效果命中","效果抵抗"],type:[0,0,0,0,1,1,1,1,1,2,3,4],cnt:[0,0,0,0,0,0,0,0,0,0,0,0],cnt1:[0,0,0,0,0,0,0,0,0,0,0,0]}},methods:{getCount(){let t=Math.floor(100*Math.random());for(let e=0;e<5;e++){if(t<this.countProbability[e])return e+1;t-=this.countProbability[e]}return-1},getNext(){let t=[],e=0;for(let r=0;r<12;r++)0===r||4===r||5===r?t.push(this.probability[r]*this.w1[this.cnt1[r]]):t.push(this.probability[r]*this.w2[this.cnt1[r]]),e+=t[r];let s=Math.floor(Math.random()*e);for(let r=0;r<12;r++){if(s<t[r])return r;s-=t[r]}return-1},getNext1(){let t=0;for(let s=0;s<12;s++)t+=this.probability[s];let e=Math.floor(Math.random()*t);for(let s=0;s<12;s++){if(e<this.probability[s])return s;e-=this.probability[s]}return-1},get(t){this.res1.push(t),++this.cnt1[t],++this.p1[this.type[t]]},work1(){let t=this.getCount();++this.bd4,++this.bd5,10===this.bd4&&(t=Math.max(t,4),this.bd4=0),50===this.bd5&&(t=5,this.bd5=0);for(let e=0;e<t;e++)this.get(this.getNext())},work2(){let t,e;++this.countJy;for(let r=0;r<12;r++)if(this.cnt[r]>=3){t=r,e=this.cnt[r];break}for(let r=0;r<e-1;r++)this.get(t);++this.jy1;let s=Math.floor(10*Math.random());(3===e&&3===this.jy1||4===e&&10===this.jy1||0===s)&&(this.get(t),this.jy1=0,++this.jy2),20===this.jy2?(this.get(t),this.jy2=0):this.get(this.getNext1())},work(){if(!this.jy)for(let t=0;t<12;t++)if(0!==t&&4!==t&&5!==t&&this.cnt1[t]>=3)return void(this.dialogVisible2=!0);++this.count,this.p1=[0,0,0,0,0],this.cnt1=[0,0,0,0,0,0,0,0,0,0,0,0],this.res1=[],this.jy?this.work2():this.work1()},confirm(){++this.count,this.p1=[0,0,0,0,0],this.cnt1=[0,0,0,0,0,0,0,0,0,0,0,0],this.res1=[],this.work1()},accept(){this.p=this.p1,this.cnt=this.cnt1,this.res=this.res1,this.p1=[0,0,0,0,0],this.cnt1=[0,0,0,0,0,0,0,0,0,0,0,0],this.res1=[];let t=0;for(let e=0;e<12;e++)t=Math.max(t,this.cnt[e]);t<3||t>4?(this.jyc=!0,this.jy=!1):this.jyc=!1},clear(){this.p=[0,0,0,0,0],this.cnt=[0,0,0,0,0,0,0,0,0,0,0,0],this.res=[],this.p1=[0,0,0,0,0],this.cnt1=[0,0,0,0,0,0,0,0,0,0,0,0],this.res1=[],this.jyc=!0,this.jy=!1,this.count=0,this.countJy=0,this.bd4=0,this.bd5=0,this.jy1=0,this.jy2=0}}}),l=o,a=s(1001),n=(0,a.Z)(l,r,i,!1,null,"18b4fb00",null),c=n.exports}}]);
//# sourceMappingURL=979.7bc8054b.js.map