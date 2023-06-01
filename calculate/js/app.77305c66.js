(function(){"use strict";var e={8843:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var a=function(){var e=this,t=e._self._c;return t("el-container",{staticStyle:{height:"100%"}},[t("el-header",{attrs:{height:"100px"}},[t("span",{staticStyle:{"font-family":"Consolas","font-size":"24px"}},[e._v("忘川风华录战斗数值在线计算器")])]),t("el-container",[t("el-aside",{attrs:{width:"150px"}},[t("el-menu",{attrs:{"default-active":1},model:{value:e.menuActive,callback:function(t){e.menuActive=t},expression:"menuActive"}},[t("el-menu-item",{attrs:{index:"1"},on:{click:function(t){e.menuActive="1"}}},[t("span",[e._v("伤害计算")])]),t("el-menu-item",{attrs:{index:"2"},on:{click:function(t){e.menuActive="2"}}},[t("span",[e._v("命中率计算")])])],1)],1),t("el-main",["1"===e.menuActive?t("attack"):e._e(),"2"===e.menuActive?t("control"):e._e()],1)],1)],1)},n=[],o=function(){var e=this,t=e._self._c;return t("div",[t("el-form",{attrs:{model:e.form,"label-width":"150px"}},[t("el-form-item",{attrs:{label:"攻击方攻击"}},[t("el-input-number",{attrs:{min:0,max:3e4},model:{value:e.form.attack,callback:function(t){e.$set(e.form,"attack",t)},expression:"form.attack"}})],1),t("el-form-item",{attrs:{label:"攻击方暴击强度"}},[t("el-input-number",{attrs:{min:0,max:600},model:{value:e.form.strike_val,callback:function(t){e.$set(e.form,"strike_val",t)},expression:"form.strike_val"}})],1),t("el-form-item",{attrs:{label:"攻击方暴击伤害(%)"}},[t("el-input-number",{attrs:{min:0,max:300},model:{value:e.form.strike_mul,callback:function(t){e.$set(e.form,"strike_mul",t)},expression:"form.strike_mul"}})],1),t("el-form-item",{attrs:{label:"攻击倍率(%)"}},[t("el-input-number",{attrs:{min:0,max:1e3},model:{value:e.form.multiply,callback:function(t){e.$set(e.form,"multiply",t)},expression:"form.multiply"}})],1),t("el-form-item",{attrs:{label:"攻击增减(%)"}},[t("el-input-number",{attrs:{min:-100,max:400},model:{value:e.form.attack_buff,callback:function(t){e.$set(e.form,"attack_buff",t)},expression:"form.attack_buff"}})],1),t("el-form-item",{attrs:{label:"防御方防御"}},[t("el-input-number",{attrs:{min:0,max:15e3},model:{value:e.form.defend,callback:function(t){e.$set(e.form,"defend",t)},expression:"form.defend"}})],1),t("el-form-item",{attrs:{label:"防御方暴击抵抗"}},[t("el-input-number",{attrs:{min:0,max:600},model:{value:e.form.strike_def,callback:function(t){e.$set(e.form,"strike_def",t)},expression:"form.strike_def"}})],1),t("el-form-item",{attrs:{label:"暴击率增减(%)"}},[t("el-input-number",{attrs:{min:-100,max:400},model:{value:e.form.d_strike_rate,callback:function(t){e.$set(e.form,"d_strike_rate",t)},expression:"form.d_strike_rate"}})],1),t("el-form-item",{attrs:{label:"伤害增减(%)"}},[t("el-input-number",{attrs:{min:-100,max:400},model:{value:e.form.d_damage_rate,callback:function(t){e.$set(e.form,"d_damage_rate",t)},expression:"form.d_damage_rate"}})],1),t("el-form-item",{attrs:{label:"防御增减(%)"}},[t("el-input-number",{attrs:{min:-100,max:400},model:{value:e.form.defend_buff,callback:function(t){e.$set(e.form,"defend_buff",t)},expression:"form.defend_buff"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:e.calculate}},[e._v("计算")])],1),t("p"),t("div",{staticClass:"result"},[t("el-tag",[e._v("造成伤害 "+e._s(e.damage))]),t("p"),t("el-progress",{attrs:{percentage:e.p_damage,"show-text":!1}}),t("p"),t("el-tag",[e._v("暴击率 "+e._s(e.strike_rate)+"%")]),t("p"),t("el-progress",{attrs:{percentage:e.strike_rate,"show-text":!1}}),t("p"),t("el-tag",[e._v("暴击伤害 "+e._s(e.damage_strike))]),t("p"),t("el-progress",{attrs:{percentage:e.p_damage_strike,"show-text":!1}})],1)],1)},l=[],i={name:"attack",data(){return{form:{attack:0,strike_val:0,strike_mul:0,multiply:0,attack_buff:0,defend:0,strike_def:0,d_strike_rate:0,d_damage_rate:0,defend_buff:0},damage:0,p_damage:0,strike_rate:0,damage_strike:0,p_damage_strike:0}},methods:{calculate(){const e=this.form.attack*(1+.01*this.form.attack_buff),t=this.form.defend*(1+.01*this.form.defend_buff),r=2143/(2143+t),a=Math.max(this.form.strike_val-.6*this.form.strike_def,0),n=a/(120+.8*a),o=n+.01*this.form.d_strike_rate,l=Math.max(1+.01*this.form.d_damage_rate,.3),i=e*this.form.multiply*.01*r*l,m=i*this.form.strike_mul*.01;this.damage=i.toFixed(2),this.p_damage=(i/500).toFixed(2),this.strike_rate=(100*o).toFixed(2),this.damage_strike=m.toFixed(2),this.p_damage_strike=(m/500).toFixed(2)}}},m=i,s=r(1001),f=(0,s.Z)(m,o,l,!1,null,"3d6ab0b6",null),u=f.exports,c=function(){var e=this,t=e._self._c;return t("div",[t("el-form",{attrs:{model:e.form,"label-width":"150px"}},[t("el-form-item",{attrs:{label:"攻击方效果命中(%)"}},[t("el-input-number",{attrs:{min:0,max:3e4},model:{value:e.form.control_val,callback:function(t){e.$set(e.form,"control_val",t)},expression:"form.control_val"}})],1),t("el-form-item",{attrs:{label:"防御方效果抵抗(%)"}},[t("el-input-number",{attrs:{min:0,max:600},model:{value:e.form.control_def,callback:function(t){e.$set(e.form,"control_def",t)},expression:"form.control_def"}})],1),t("el-form-item",{attrs:{label:"效果命中增减(%)"}},[t("el-input-number",{attrs:{min:0,max:300},model:{value:e.form.d_control_val,callback:function(t){e.$set(e.form,"d_control_val",t)},expression:"form.d_control_val"}})],1),t("el-form-item",{attrs:{label:"效果抵抗增减(%)"}},[t("el-input-number",{attrs:{min:0,max:1e3},model:{value:e.form.d_control_def,callback:function(t){e.$set(e.form,"d_control_def",t)},expression:"form.d_control_def"}})],1),t("el-form-item",{attrs:{label:"基础概率(%)"}},[t("el-input-number",{attrs:{min:-100,max:400},model:{value:e.form.base_rate,callback:function(t){e.$set(e.form,"base_rate",t)},expression:"form.base_rate"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:e.calculate}},[e._v("计算")])],1),t("p"),t("div",{staticClass:"result"},[t("el-tag",[e._v("控制命中率 "+e._s(e.rate)+"%")]),t("p"),t("el-progress",{attrs:{percentage:e.rate,"show-text":!1}})],1)],1)},d=[],_={name:"control",data(){return{form:{control_val:0,control_def:0,d_control_val:0,d_control_def:0,base_rate:0},rate:0}},methods:{calculate(){const e=this.form.control_val+this.form.d_control_val,t=this.form.control_def+this.form.d_control_def,r=e-t,a=(300+3*r)/(300+r),n=this.form.base_rate*a;this.rate=n.toFixed(2)}}},p=_,b=(0,s.Z)(p,c,d,!1,null,"7057a15a",null),v=b.exports,k={components:{attack:u,control:v},data(){return{menuActive:"1"}}},h=k,x=(0,s.Z)(h,a,n,!1,null,null,null),g=x.exports},8148:function(e,t,r){var a=r(6369),n=r(8499),o=r.n(n),l=r(8843),i=r(2631);a["default"].use(i.ZP);const m=[{path:"/wangchuan/calculate/",name:"home",component:()=>Promise.resolve().then(r.bind(r,8843)),meta:{title:"Welcome to Spy's Website!"}}],s=new i.ZP({mode:"history",base:"",routes:m});s.beforeEach((async e=>{e.meta.title&&(document.title=e.meta.title)}));var f=s;a["default"].config.productionTip=!1,a["default"].use(o()),new a["default"]({router:f,render:e=>e(l["default"])}).$mount("#app")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,function(){var e=[];r.O=function(t,a,n,o){if(!a){var l=1/0;for(f=0;f<e.length;f++){a=e[f][0],n=e[f][1],o=e[f][2];for(var i=!0,m=0;m<a.length;m++)(!1&o||l>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[m])}))?a.splice(m--,1):(i=!1,o<l&&(l=o));if(i){e.splice(f--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[a,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,l=a[0],i=a[1],m=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(m)var f=m(r)}for(t&&t(a);s<l.length;s++)o=l[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(f)},a=self["webpackChunkcalculate"]=self["webpackChunkcalculate"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(8148)}));a=r.O(a)})();
//# sourceMappingURL=app.77305c66.js.map