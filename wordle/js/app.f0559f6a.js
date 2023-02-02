(function(){"use strict";var e={6459:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var i=function(){var e=this,n=e._self._c;return n("el-container",{staticStyle:{height:"100%"}},[n("el-header",{attrs:{height:"100px"}},[n("span",{staticClass:"header-text",staticStyle:{"font-family":"Consolas","font-size":"24px"}},[e._v("忘川风华录辨音猜词辅助工具")])]),n("el-container",[n("el-aside",{attrs:{width:"220px"}},[n("div",[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"mini",plain:""},on:{click:function(n){e.helpVisible=!0}}},[e._v("帮助")]),n("el-dialog",{attrs:{title:"帮助",visible:e.helpVisible,width:"calc(40% + 150px)",align:"left"},on:{"update:visible":function(n){e.helpVisible=n}}},[n("div",{staticStyle:{height:"300px","overflow-x":"auto"}},[e._v(" 1.使用时按任意顺序输入所有已知元素，每次只能输入一个元素，输入完成后按回车或点击查询按钮"),n("br"),e._v(" 2.元素分为四类：汉字、声母、韵母、音调。其中声母和韵母必须拆开来，否则会找不到，比如[shang]要拆成[sh]和[ang]。音调分别用[- / v \\]表示"),n("br"),e._v(" 3.游戏中显示红色的元素是存在但位置错误的元素，此类元素只需要直接输入即可，也可以输入[0+空格+元素]，例如红色的ou，那么输入[ou]或者[0 ou]都是可以的"),n("br"),e._v(" 4.游戏中显示绿色的元素是位置正确的元素，输入时需要[位置+空格+元素]，例如第三个字上有绿色的ang，那么输入[3 ang]"),n("br"),e._v(" 5.正确输入一条已知条件后，会自动显示当前所有可能的答案"),n("br"),e._v(" 6.输入英文点号[.]可以撤销最近一次操作（如果有的话）"),n("br"),e._v(" 7.输入英文感叹号[!]可以清除所有已知条件，进行新的一轮"),n("br"),n("h4",[e._v("实例示范")]),n("el-image",{attrs:{src:t(9122),alt:"img1"}}),n("br"),e._v(" 上图中的例子中，通过第一次猜测，我们能得到以下线索："),n("br"),e._v(" 1.某个字的音调是第一声（第一个字音调是红色），输入[-]"),n("br"),e._v(" 2.某个字的韵母是uan（第二个字韵母是红色），输入[uan]"),n("br"),e._v(" 3.第二个字的音调是第二声（第二个字的音调是绿色），输入[2 /]"),n("br"),e._v(" 4.第四个字的音调是第四声（第四个字的音调是绿色），输入[4 \\]"),n("br"),e._v(" 经过筛选，发现只有1条结果满足所有线索，因此直接得到答案"),n("br"),n("el-image",{attrs:{src:t(1324),alt:"img2"}}),n("br"),e._v(" 上图中的例子中，通过第一次猜测，我们能得到以下线索："),n("br"),e._v(" 1.第二个字的音调是第二声（第二个字的音调是绿色），输入[2 /]"),n("br"),e._v(" 2.某个字的声母是j（第三个字声母是红色），输入[j]"),n("br"),e._v(" 3.某个字的音调是第四声（第四个字音调是红色），输入[\\]"),n("br"),e._v(" 经过筛选之后，发现还有5条结果，我们只能再进行第二次猜测，得到以下线索："),n("br"),e._v(" 4.某个字的音调是第四声（第一个字音调是红色），但是和之前的重复了，跳过"),n("br"),e._v(" 5.某个字的韵母是i（第二个字韵母是红色），输入[i]"),n("br"),e._v(" 6.第四个字的音调是第二声（第四个字音调是绿色），输入[4 /]"),n("br"),e._v(" 经过这一轮筛选，结果只剩1个，得到了答案"),n("br"),n("h4",[e._v("交流方式")]),n("p",[e._v(" 如果还对使用方法有疑惑，或是对功能改进有建议和意见，或是发现了漏洞或缺陷，请加群交流 ")]),n("el-image",{staticStyle:{width:"250px",height:"448px"},attrs:{src:t(3146),alt:"img3"}})],1),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(n){e.helpVisible=!1}}},[e._v("关闭")])],1)])],1),n("div",{staticStyle:{"margin-top":"15px"}},[n("el-input",{attrs:{placeholder:"输入已知条件"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.add.apply(null,arguments)}},model:{value:e.input,callback:function(n){e.input=n},expression:"input"}})],1),n("div",{staticStyle:{"margin-top":"15px","text-align":"center"}},[n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.add}},[e._v("查询")]),n("el-button",{attrs:{type:"warning",size:"small",plain:""},on:{click:e.pop}},[e._v("撤销")]),n("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:e.clear}},[e._v("清除")])],1),n("div",{staticStyle:{"margin-top":"15px",height:"calc(100% - 150px)"}},[n("el-table",{attrs:{data:e.query,"show-header":!1,stripe:"",height:"100%"}},[n("el-table-column",{attrs:{prop:"val",align:"center"}})],1)],1)]),n("el-main",[n("el-table",{attrs:{data:e.result,"show-header":!1,stripe:"",height:"calc(100% - 1px)"}},[n("el-table-column",{attrs:{prop:"val",align:"center"}})],1)],1)],1)],1)},r=[],a=t(7327);t(7658);class o{constructor(e,n){(0,a.Z)(this,"word",void 0),(0,a.Z)(this,"data",void 0),this.word=e,this.data=n}}class u{constructor(e,n){(0,a.Z)(this,"id",void 0),(0,a.Z)(this,"s",void 0),this.id=e,this.s=n}}var l={methods:{add(){let e=-1,n="",t=this.input;if(""===t)return;if("!"===t)return void this.clear();if("."===t)return void this.pop();let i=t.split(" ");!isNaN(Number(i[0]))&&Number(i[0])>=1&&Number(i[0])<=4?(e=i[0]-1,n=i[1]):n=i[0],this.que.push(new u(e,n)),""!==this.input&&(this.query.push({val:this.input}),this.input=""),this.work()},pop(){this.query.length>0&&(this.query.pop(),this.que.pop()),this.work()},clear(){this.query=Array(),this.que=Array(),this.work()},work(){if(0===this.query.length)return void(this.result=Array());const e=[new o("高屋建瓴",[["高","g","ao","-"],["屋","w","u","-"],["建","j","ian","\\"],["瓴","l","ing","/"]]),new o("作壁上观",[["作","z","uo","\\"],["壁","b","i","\\"],["上","sh","ang","\\"],["观","g","uan","-"]]),new o("四面楚歌",[["四","s","i","\\"],["面","m","ian","\\"],["楚","ch","u","v"],["歌","g","e","-"]]),new o("兵仙神帅",[["兵","b","ing","-"],["仙","x","ian","-"],["神","sh","en","/"],["帅","sh","uai","\\"]]),new o("气吞山河",[["气","q","i","\\"],["吞","t","un","-"],["山","sh","an","-"],["河","h","e","/"]]),new o("借箸代筹",[["借","j","ie","\\"],["箸","zh","u","\\"],["代","d","ai","\\"],["筹","ch","ou","/"]]),new o("勋冠三杰",[["勋","x","un","-"],["冠","g","uan","\\"],["三","s","an","-"],["杰","j","ie","/"]]),new o("所向披靡",[["所","s","uo","v"],["向","x","iang","\\"],["披","p","i","-"],["靡","m","i","v"]]),new o("按甲休兵",[["按","*","an","\\"],["甲","j","ia","v"],["休","x","iu","-"],["兵","b","ing","-"]]),new o("楚河汉界",[["楚","ch","u","v"],["河","h","e","/"],["汉","h","an","\\"],["界","j","ie","\\"]]),new o("以一当十",[["以","y","i","v"],["一","y","i","-"],["当","d","ang","-"],["十","sh","i","/"]]),new o("暗渡陈仓",[["暗","*","an","\\"],["度","d","u","\\"],["陈","ch","en","/"],["仓","c","ang","-"]]),new o("妇人之仁",[["妇","f","u","\\"],["人","r","en","/"],["之","zh","i","-"],["仁","r","en","/"]]),new o("国士无双",[["国","g","uo","/"],["士","sh","i","\\"],["无","w","u","/"],["双","sh","uang","-"]]),new o("政由己出",[["政","zh","eng","\\"],["由","y","ou","/"],["己","j","i","v"],["出","ch","u","-"]]),new o("破釜沉舟",[["破","p","o","\\"],["釜","f","u","v"],["沉","ch","en","/"],["舟","zh","ou","-"]]),new o("一饭千金",[["一","y","i","-"],["饭","f","an","\\"],["千","q","ian","-"],["金","j","in","-"]]),new o("拔旗易帜",[["拔","b","a","/"],["旗","q","i","/"],["易","y","i","\\"],["帜","zh","i","\\"]]),new o("登坛拜将",[["登","d","eng","-"],["坛","t","an","/"],["拜","b","ai","\\"],["将","j","iang","\\"]]),new o("解衣推食",[["解","j","ie","v"],["衣","y","i","-"],["推","t","ui","-"],["食","sh","i","/"]]),new o("胯下之辱",[["胯","k","ua","\\"],["下","x","ia","\\"],["之","zh","i","-"],["辱","r","u","v"]]),new o("捷足先登",[["捷","j","ie","/"],["足","z","u","/"],["先","x","ian","-"],["登","d","eng","-"]]),new o("各自为战",[["各","g","e","\\"],["自","z","i","\\"],["为","w","ei","/"],["战","zh","an","\\"]]),new o("十面埋伏",[["十","sh","i","/"],["面","m","ian","\\"],["埋","m","ai","/"],["伏","f","u","/"]]),new o("劳苦功高",[["劳","l","ao","/"],["苦","k","u","v"],["功","g","ong","-"],["高","g","ao","-"]]),new o("江东父老",[["江","j","iang","-"],["东","d","ong","-"],["父","f","u","\\"],["老","l","ao","v"]]),new o("略不世出",[["略","l","ve","\\"],["不","b","u","\\"],["世","sh","i","\\"],["出","ch","u","-"]]),new o("披坚执锐",[["披","p","i","-"],["坚","j","ian","-"],["执","zh","i","/"],["锐","r","ui","\\"]]),new o("秋毫无犯",[["秋","q","iu","-"],["毫","h","ao","/"],["无","w","u","/"],["犯","f","an","\\"]]),new o("匹夫之勇",[["匹","p","i","v"],["夫","f","u","-"],["之","zh","i","-"],["勇","y","ong","v"]]),new o("略谙世事",[["略","l","ve","\\"],["谙","*","an","-"],["世","sh","i","\\"],["事","sh","i","\\"]]),new o("推陈出新",[["推","t","ui","-"],["陈","ch","en","/"],["出","ch","u","-"],["新","x","in","-"]]),new o("肝胆照人",[["肝","g","an","-"],["胆","d","an","v"],["照","zh","ao","\\"],["人","r","en","/"]]),new o("多多益善",[["多","d","uo","-"],["多","d","uo","-"],["益","y","i","\\"],["善","sh","an","\\"]]),new o("功高震主",[["功","g","ong","-"],["高","g","ao","-"],["震","zh","en","\\"],["主","zh","u","v"]]),new o("逐鹿中原",[["逐","zh","u","/"],["鹿","l","u","\\"],["中","zh","ong","-"],["原","y","uan","/"]]),new o("人心难测",[["人","r","en","/"],["心","x","in","-"],["难","n","an","/"],["测","c","e","\\"]]),new o("大失所望",[["大","d","a","\\"],["失","sh","i","-"],["所","s","uo","v"],["望","w","ang","\\"]]),new o("异军突起",[["异","y","i","\\"],["军","j","un","-"],["突","t","u","-"],["起","q","i","v"]]),new o("锦衣夜行",[["锦","j","in","v"],["衣","y","i","-"],["夜","y","e","\\"],["行","x","ing","/"]]),new o("独当一面",[["独","d","u","/"],["当","d","ang","-"],["一","y","i","-"],["面","m","ian","\\"]]),new o("霸王别姬",[["霸","b","a","\\"],["王","w","ang","/"],["别","b","ie","/"],["姬","j","i","-"]]),new o("金石之交",[["金","j","in","-"],["石","sh","i","/"],["之","zh","i","-"],["交","j","iao","-"]]),new o("力能扛鼎",[["力","l","i","\\"],["能","n","eng","/"],["扛","g","ang","-"],["鼎","d","ing","v"]]),new o("步步为战",[["步","b","u","\\"],["步","b","u","\\"],["为","w","ei","/"],["战","zh","an","\\"]]),new o("约法三章",[["约","y","ue","-"],["法","f","a","v"],["三","s","an","-"],["章","zh","ang","-"]]),new o("不赏之功",[["不","b","u","\\"],["赏","sh","ang","v"],["之","zh","i","-"],["功","g","ong","-"]]),new o("背水一战",[["背","b","ei","\\"],["水","sh","ui","v"],["一","y","i","-"],["战","zh","an","\\"]])],n=this.que;let t=[];for(let i of e){let e=!0;for(let t of n)if(-1===t.id){let n=!1;for(let e=0;e<4;e++){for(let r=0;r<4;r++)if(i.data[e][r]===t.s){n=!0;break}if(n)break}if(!n){e=!1;break}}else{let n=!1;for(let e=0;e<4;e++)if(i.data[t.id][e]===t.s){n=!0;break}if(!n){e=!1;break}}e&&t.push({val:i.word})}this.result=t}},data(){return{input:"",result:Array(),query:Array(),que:Array(),helpVisible:!1}}},s=l,h=t(1001),c=(0,h.Z)(s,i,r,!1,null,null,null),p=c.exports},8148:function(e,n,t){var i=t(6369),r=t(8499),a=t.n(r),o=t(6459),u=t(2631);i["default"].use(u.ZP);const l=[{path:"/",name:"home",component:()=>Promise.resolve().then(t.bind(t,6459)),meta:{title:"Welcome to Spy's Website!"}}],s=new u.ZP({mode:"history",base:"",routes:l});s.beforeEach((async e=>{e.meta.title&&(document.title=e.meta.title)}));var h=s;i["default"].config.productionTip=!1,i["default"].use(a()),new i["default"]({router:h,render:e=>e(o["default"])}).$mount("#app")},9122:function(e,n,t){e.exports=t.p+"img/img1.f2cd343b.jpg"},1324:function(e,n,t){e.exports=t.p+"img/img2.e397d415.jpg"},3146:function(e,n,t){e.exports=t.p+"img/img3.ffc815d9.png"}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var a=n[i]={id:i,loaded:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,a){if(!i){var o=1/0;for(h=0;h<e.length;h++){i=e[h][0],r=e[h][1],a=e[h][2];for(var u=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(u=!1,a<o&&(o=a));if(u){e.splice(h--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[i,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p=""}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,a,o=i[0],u=i[1],l=i[2],s=0;if(o.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var h=l(t)}for(n&&n(i);s<o.length;s++)a=o[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(h)},i=self["webpackChunkwordle"]=self["webpackChunkwordle"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(8148)}));i=t.O(i)})();
//# sourceMappingURL=app.f0559f6a.js.map