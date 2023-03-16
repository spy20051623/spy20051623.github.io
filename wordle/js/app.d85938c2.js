(function(){"use strict";var n={7042:function(n,e,i){i.r(e),i.d(e,{default:function(){return g}});var a=function(){var n=this,e=n._self._c;return e("el-container",{staticStyle:{height:"100%"}},[e("el-header",{attrs:{height:"100px"}},[e("span",{staticClass:"header-text",staticStyle:{"font-family":"Consolas","font-size":"24px"}},[n._v("忘川风华录辨音猜词辅助工具")])]),e("el-container",[e("el-aside",{attrs:{width:"220px"}},[e("div",[e("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"mini",plain:""},on:{click:function(e){n.helpVisible=!0}}},[n._v("帮助")]),e("el-dialog",{attrs:{title:"使用帮助",visible:n.helpVisible,width:"calc(40% + 150px)",align:"left"},on:{"update:visible":function(e){n.helpVisible=e}}},[e("div",{staticStyle:{height:"calc(100px + 30vh)","overflow-x":"auto"}},[n._v(" 1.使用时按任意顺序输入所有已知元素，每次只能输入一个元素，输入完成后按回车或点击查询按钮"),e("br"),n._v(" 2.元素分为四类：汉字、声母、韵母、音调。其中声母和韵母必须拆开来，否则会找不到，比如[shang]要拆成[sh]和[ang]。音调分别用[- / v \\]表示"),e("br"),n._v(" 3.游戏中显示红色的元素是存在但位置错误的元素，此类元素只需要直接输入[元素]即可，例如红色的ou，那么应当输入[ou]（说明中的[ ]符号仅为了起到界限作用，实际使用请勿输入）"),e("br"),n._v(" 4.游戏中显示绿色的元素是位置正确的元素，输入时需要[位置+空格+元素]，例如第三个字上有绿色的ang，那么输入[3 ang]"),e("br"),n._v(" 5.正确输入一条已知条件后，会自动显示当前所有可能的答案"),e("br"),n._v(" 6.输入英文点号[.]或者点击撤销按钮可以撤销最后一个条件（如果有的话）"),e("br"),n._v(" 7.输入英文感叹号[!]或者点击清除按钮可以清除所有已知条件，进行新的一轮"),e("br"),e("h4",[n._v("实例示范")]),n._v(" （以下实例是在第一次活动期间留下的，复刻活动会更换词库，请按实际词库为准）"),e("br"),e("el-image",{attrs:{src:i(9122),alt:"img1"}}),e("br"),n._v(" 上图中的例子中，通过第一次猜测，我们能得到以下线索："),e("br"),n._v(" 1.某个字的音调是第一声（第一个字音调是红色），输入[-]"),e("br"),n._v(" 2.某个字的韵母是uan（第二个字韵母是红色），输入[uan]"),e("br"),n._v(" 3.第二个字的音调是第二声（第二个字的音调是绿色），输入[2 /]"),e("br"),n._v(" 4.第四个字的音调是第四声（第四个字的音调是绿色），输入[4 \\]"),e("br"),n._v(" 经过筛选，发现只有1条结果满足所有线索，因此直接得到答案"),e("br"),e("el-image",{attrs:{src:i(1324),alt:"img2"}}),e("br"),n._v(" 上图中的例子中，通过第一次猜测，我们能得到以下线索："),e("br"),n._v(" 1.第二个字的音调是第二声（第二个字的音调是绿色），输入[2 /]"),e("br"),n._v(" 2.某个字的声母是j（第三个字声母是红色），输入[j]"),e("br"),n._v(" 3.某个字的音调是第四声（第四个字音调是红色），输入[\\]"),e("br"),n._v(" 经过筛选之后，发现还有5条结果，我们只能再进行第二次猜测，得到以下线索："),e("br"),n._v(" 4.某个字的音调是第四声（第一个字音调是红色），但是和之前的重复了，跳过"),e("br"),n._v(" 5.某个字的韵母是i（第二个字韵母是红色），输入[i]"),e("br"),n._v(" 6.第四个字的音调是第二声（第四个字音调是绿色），输入[4 /]"),e("br"),n._v(" 经过这一轮筛选，结果只剩1个，得到了答案"),e("br"),e("h4",[n._v("交流方式")]),e("p",[n._v(" 如果还对使用方法有疑惑，或是对功能改进有建议和意见，或是发现了漏洞或缺陷，欢迎加入QQ群交流：672777214 ")]),e("el-image",{staticStyle:{width:"250px",height:"448px"},attrs:{src:i(3146),alt:"img3"}})],1),e("span",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){n.helpVisible=!1}}},[n._v("关闭")])],1)])],1),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-input",{attrs:{placeholder:"输入已知条件"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.add.apply(null,arguments)}},model:{value:n.input,callback:function(e){n.input=e},expression:"input"}})],1),e("div",{staticStyle:{"margin-top":"15px","text-align":"center"}},[e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:n.add}},[n._v("查询")]),e("el-button",{attrs:{type:"warning",size:"small",plain:""},on:{click:n.pop}},[n._v("撤销")]),e("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:n.clear}},[n._v("清除")])],1),e("div",{staticStyle:{"margin-top":"15px",height:"calc(100% - 150px)"}},[e("el-table",{attrs:{data:n.query,"show-header":!1,stripe:"",height:"100%"}},[e("el-table-column",{attrs:{prop:"val",align:"center"}})],1)],1)]),e("el-main",[e("el-table",{attrs:{data:n.result,"show-header":!1,stripe:"",height:"calc(100% - 1px)"},on:{"cell-click":n.copy}},[e("el-table-column",{attrs:{prop:"val",align:"center"}})],1)],1)],1)],1)},t=[],u=i(7327);i(7658);class o{constructor(n,e){(0,u.Z)(this,"word",void 0),(0,u.Z)(this,"data",void 0),this.word=n,this.data=e}}class r{constructor(n,e){(0,u.Z)(this,"id",void 0),(0,u.Z)(this,"s",void 0),this.id=n,this.s=e}}var h={methods:{add(){let n=-1,e="",i=this.input;if(""===i)return;if("!"===i)return void this.clear();if("."===i)return void this.pop();let a=i.split(" ");!isNaN(Number(a[0]))&&Number(a[0])>=1&&Number(a[0])<=4?(n=a[0]-1,e=a[1]):e=a[0],this.que.push(new r(n,e)),""!==this.input&&this.query.push({val:this.input}),this.input="",this.work()},pop(){this.query.length>0&&(this.query.pop(),this.que.pop()),this.input="",this.work()},clear(){this.query=Array(),this.que=Array(),this.input="",this.work()},work(){if(0===this.query.length)return void(this.result=Array());const n=[new o("高屋建瓴",[["高","g","ao","-"],["屋","w","u","-"],["建","j","ian","\\"],["瓴","l","ing","/"]]),new o("作壁上观",[["作","z","uo","\\"],["壁","b","i","\\"],["上","sh","ang","\\"],["观","g","uan","-"]]),new o("四面楚歌",[["四","s","i","\\"],["面","m","ian","\\"],["楚","ch","u","v"],["歌","g","e","-"]]),new o("兵仙神帅",[["兵","b","ing","-"],["仙","x","ian","-"],["神","sh","en","/"],["帅","sh","uai","\\"]]),new o("气吞山河",[["气","q","i","\\"],["吞","t","un","-"],["山","sh","an","-"],["河","h","e","/"]]),new o("借箸代筹",[["借","j","ie","\\"],["箸","zh","u","\\"],["代","d","ai","\\"],["筹","ch","ou","/"]]),new o("勋冠三杰",[["勋","x","un","-"],["冠","g","uan","\\"],["三","s","an","-"],["杰","j","ie","/"]]),new o("所向披靡",[["所","s","uo","v"],["向","x","iang","\\"],["披","p","i","-"],["靡","m","i","v"]]),new o("按甲休兵",[["按","*","an","\\"],["甲","j","ia","v"],["休","x","iu","-"],["兵","b","ing","-"]]),new o("楚河汉界",[["楚","ch","u","v"],["河","h","e","/"],["汉","h","an","\\"],["界","j","ie","\\"]]),new o("以一当十",[["以","y","i","v"],["一","y","i","-"],["当","d","ang","-"],["十","sh","i","/"]]),new o("暗渡陈仓",[["暗","*","an","\\"],["渡","d","u","\\"],["陈","ch","en","/"],["仓","c","ang","-"]]),new o("妇人之仁",[["妇","f","u","\\"],["人","r","en","/"],["之","zh","i","-"],["仁","r","en","/"]]),new o("国士无双",[["国","g","uo","/"],["士","sh","i","\\"],["无","w","u","/"],["双","sh","uang","-"]]),new o("政由己出",[["政","zh","eng","\\"],["由","y","ou","/"],["己","j","i","v"],["出","ch","u","-"]]),new o("破釜沉舟",[["破","p","o","\\"],["釜","f","u","v"],["沉","ch","en","/"],["舟","zh","ou","-"]]),new o("一饭千金",[["一","y","i","-"],["饭","f","an","\\"],["千","q","ian","-"],["金","j","in","-"]]),new o("拔旗易帜",[["拔","b","a","/"],["旗","q","i","/"],["易","y","i","\\"],["帜","zh","i","\\"]]),new o("登坛拜将",[["登","d","eng","-"],["坛","t","an","/"],["拜","b","ai","\\"],["将","j","iang","\\"]]),new o("解衣推食",[["解","j","ie","v"],["衣","y","i","-"],["推","t","ui","-"],["食","sh","i","/"]]),new o("胯下之辱",[["胯","k","ua","\\"],["下","x","ia","\\"],["之","zh","i","-"],["辱","r","u","v"]]),new o("捷足先登",[["捷","j","ie","/"],["足","z","u","/"],["先","x","ian","-"],["登","d","eng","-"]]),new o("各自为战",[["各","g","e","\\"],["自","z","i","\\"],["为","w","ei","/"],["战","zh","an","\\"]]),new o("十面埋伏",[["十","sh","i","/"],["面","m","ian","\\"],["埋","m","ai","/"],["伏","f","u","/"]]),new o("劳苦功高",[["劳","l","ao","/"],["苦","k","u","v"],["功","g","ong","-"],["高","g","ao","-"]]),new o("江东父老",[["江","j","iang","-"],["东","d","ong","-"],["父","f","u","\\"],["老","l","ao","v"]]),new o("略不世出",[["略","l","ve","\\"],["不","b","u","\\"],["世","sh","i","\\"],["出","ch","u","-"]]),new o("披坚执锐",[["披","p","i","-"],["坚","j","ian","-"],["执","zh","i","/"],["锐","r","ui","\\"]]),new o("秋毫无犯",[["秋","q","iu","-"],["毫","h","ao","/"],["无","w","u","/"],["犯","f","an","\\"]]),new o("匹夫之勇",[["匹","p","i","v"],["夫","f","u","-"],["之","zh","i","-"],["勇","y","ong","v"]]),new o("略谙世事",[["略","l","ve","\\"],["谙","*","an","-"],["世","sh","i","\\"],["事","sh","i","\\"]]),new o("推陈出新",[["推","t","ui","-"],["陈","ch","en","/"],["出","ch","u","-"],["新","x","in","-"]]),new o("肝胆照人",[["肝","g","an","-"],["胆","d","an","v"],["照","zh","ao","\\"],["人","r","en","/"]]),new o("多多益善",[["多","d","uo","-"],["多","d","uo","-"],["益","y","i","\\"],["善","sh","an","\\"]]),new o("功高震主",[["功","g","ong","-"],["高","g","ao","-"],["震","zh","en","\\"],["主","zh","u","v"]]),new o("逐鹿中原",[["逐","zh","u","/"],["鹿","l","u","\\"],["中","zh","ong","-"],["原","y","uan","/"]]),new o("人心难测",[["人","r","en","/"],["心","x","in","-"],["难","n","an","/"],["测","c","e","\\"]]),new o("大失所望",[["大","d","a","\\"],["失","sh","i","-"],["所","s","uo","v"],["望","w","ang","\\"]]),new o("异军突起",[["异","y","i","\\"],["军","j","un","-"],["突","t","u","-"],["起","q","i","v"]]),new o("锦衣夜行",[["锦","j","in","v"],["衣","y","i","-"],["夜","y","e","\\"],["行","x","ing","/"]]),new o("独当一面",[["独","d","u","/"],["当","d","ang","-"],["一","y","i","-"],["面","m","ian","\\"]]),new o("霸王别姬",[["霸","b","a","\\"],["王","w","ang","/"],["别","b","ie","/"],["姬","j","i","-"]]),new o("金石之交",[["金","j","in","-"],["石","sh","i","/"],["之","zh","i","-"],["交","j","iao","-"]]),new o("力能扛鼎",[["力","l","i","\\"],["能","n","eng","/"],["扛","g","ang","-"],["鼎","d","ing","v"]]),new o("步步为战",[["步","b","u","\\"],["步","b","u","\\"],["为","w","ei","/"],["战","zh","an","\\"]]),new o("约法三章",[["约","y","ue","-"],["法","f","a","v"],["三","s","an","-"],["章","zh","ang","-"]]),new o("不赏之功",[["不","b","u","\\"],["赏","sh","ang","v"],["之","zh","i","-"],["功","g","ong","-"]]),new o("背水一战",[["背","b","ei","\\"],["水","sh","ui","v"],["一","y","i","-"],["战","zh","an","\\"]]),new o("八面威风",[["八","b","a","-"],["面","m","ian","\\"],["威","w","ei","-"],["风","f","eng","-"]]),new o("居常鞅鞅",[["居","j","u","-"],["常","ch","ang","/"],["鞅","y","ang","-"],["鞅","y","ang","-"]]),new o("一竿之微",[["一","y","i","-"],["竿","g","an","-"],["之","zh","i","-"],["微","w","ei","-"]]),new o("乡利倍义",[["乡","x","iang","-"],["利","l","i","\\"],["倍","b","ei","\\"],["义","y","i","\\"]]),new o("伪游云梦",[["伪","w","ei","v"],["游","y","ou","/"],["云","y","un","/"],["梦","m","eng","\\"]]),new o("伐功矜能",[["伐","f","a","/"],["功","g","ong","-"],["矜","j","in","-"],["能","n","eng","/"]]),new o("宜室宜家",[["宜","y","i","/"],["室","sh","i","\\"],["宜","y","i","/"],["家","j","ia","-"]]),new o("上善若水",[["上","sh","ang","\\"],["善","sh","an","\\"],["若","r","uo","\\"],["水","sh","ui","v"]]),new o("弊绝风清",[["弊","b","i","\\"],["绝","j","ue","/"],["风","f","eng","-"],["清","q","ing","-"]]),new o("剑胆琴心",[["剑","j","ian","\\"],["胆","d","an","v"],["琴","q","in","/"],["心","x","in","-"]]),new o("花团锦簇",[["花","h","ua","-"],["团","t","uan","/"],["锦","j","in","v"],["簇","c","u","\\"]]),new o("十指连心",[["十","sh","i","/"],["指","zh","i","v"],["连","l","ian","/"],["心","x","in","-"]]),new o("车水马龙",[["车","ch","e","-"],["水","sh","ui","v"],["马","m","a","v"],["龙","l","ong","/"]]),new o("大音希声",[["大","d","a","\\"],["音","y","in","-"],["希","x","i","-"],["声","sh","eng","-"]]),new o("闭月羞花",[["闭","b","i","\\"],["月","y","ue","\\"],["羞","x","iu","-"],["花","h","ua","-"]]),new o("行云流水",[["行","x","ing","/"],["云","y","un","/"],["流","l","iu","/"],["水","sh","ui","v"]]),new o("似水流年",[["似","s","i","\\"],["水","sh","ui","v"],["流","l","iu","/"],["年","n","ian","/"]]),new o("浩然之气",[["浩","h","ao","\\"],["然","r","an","/"],["之","zh","i","-"],["气","q","i","\\"]]),new o("手舞足蹈",[["手","sh","ou","v"],["舞","w","u","v"],["足","z","u","/"],["蹈","d","ao","v"]]),new o("两小无猜",[["两","l","iang","v"],["小","x","iao","v"],["无","w","u","/"],["猜","c","ai","-"]]),new o("人才出众",[["人","r","en","/"],["才","c","ai","/"],["出","ch","u","-"],["众","zh","ong","\\"]]),new o("张灯结彩",[["张","zh","ang","-"],["灯","d","eng","-"],["结","j","ie","/"],["彩","c","ai","v"]]),new o("桃花流水",[["桃","t","ao","/"],["花","h","ua","-"],["流","l","iu","/"],["水","sh","ui","v"]]),new o("无中生有",[["无","w","u","/"],["中","zh","ong","-"],["生","sh","eng","-"],["有","y","ou","v"]]),new o("青梅竹马",[["青","q","ing","-"],["梅","m","ei","/"],["竹","zh","u","/"],["马","m","a","v"]]),new o("沉鱼落雁",[["沉","ch","en","/"],["鱼","y","u","/"],["落","l","uo","\\"],["雁","y","an","\\"]]),new o("知足常乐",[["知","zh","i","-"],["足","z","u","/"],["常","ch","ang","/"],["乐","l","e","\\"]]),new o("笑而不答",[["笑","x","iao","\\"],["而","*","er","/"],["不","b","u","\\"],["答","d","a","/"]]),new o("风雨萧条",[["风","f","eng","-"],["雨","y","u","v"],["萧","x","iao","-"],["条","t","iao","/"]]),new o("千金一笑",[["千","q","ian","-"],["金","j","in","-"],["一","y","i","-"],["笑","x","iao","\\"]]),new o("摩肩接踵",[["摩","m","o","/"],["肩","j","ian","-"],["接","j","ie","-"],["踵","zh","ong","v"]]),new o("大块文章",[["大","d","a","\\"],["块","k","uai","\\"],["文","w","en","/"],["章","zh","ang","-"]]),new o("无人问津",[["无","w","u","/"],["人","r","en","/"],["问","w","en","\\"],["津","j","in","-"]]),new o("千金一刻",[["千","q","ian","-"],["金","j","in","-"],["一","y","i","-"],["刻","k","e","\\"]]),new o("直上青云",[["直","zh","i","/"],["上","sh","ang","\\"],["青","q","ing","-"],["云","y","un","/"]]),new o("封妻荫子",[["封","f","eng","-"],["妻","q","i","-"],["荫","y","in","\\"],["子","z","i","v"]]),new o("和光同尘",[["和","h","e","/"],["光","g","uang","-"],["同","t","ong","/"],["尘","ch","en","/"]]),new o("招兵买马",[["招","zh","ao","-"],["兵","b","ing","-"],["买","m","ai","v"],["马","m","a","v"]]),new o("蓦然回首",[["蓦","m","o","\\"],["然","r","an","/"],["回","h","ui","/"],["首","sh","ou","v"]]),new o("仙风道骨",[["仙","x","ian","-"],["风","f","eng","-"],["道","d","ao","\\"],["骨","g","u","v"]]),new o("白面书生",[["白","b","ai","/"],["面","m","ian","\\"],["书","sh","u","-"],["生","sh","eng","-"]]),new o("笑逐颜开",[["笑","x","iao","\\"],["逐","zh","u","/"],["颜","y","an","/"],["开","k","ai","-"]]),new o("喜笑颜开",[["喜","x","i","v"],["笑","x","iao","\\"],["颜","y","an","/"],["开","k","ai","-"]]),new o("落英缤纷",[["落","l","uo","\\"],["英","y","ing","-"],["缤","b","in","-"],["纷","f","en","-"]]),new o("好梦难圆",[["好","h","ao","v"],["梦","m","eng","\\"],["难","n","an","/"],["圆","y","uan","/"]]),new o("画饼充饥",[["画","h","ua","\\"],["饼","b","ing","v"],["充","ch","ong","-"],["饥","j","i","-"]]),new o("姹紫嫣红",[["姹","ch","a","\\"],["紫","z","i","v"],["嫣","y","an","-"],["红","h","ong","/"]]),new o("灯火辉煌",[["灯","d","eng","-"],["火","h","uo","v"],["辉","h","ui","-"],["煌","h","uang","/"]]),new o("烽火连天",[["烽","f","eng","-"],["火","h","uo","v"],["连","l","ian","/"],["天","t","ian","-"]]),new o("大器晚成",[["大","d","a","\\"],["器","q","i","\\"],["晚","w","an","v"],["成","ch","eng","/"]]),new o("一叶知秋",[["一","y","i","-"],["叶","y","e","\\"],["知","zh","i","-"],["秋","q","iu","-"]]),new o("金玉满堂",[["金","j","in","-"],["玉","y","u","\\"],["满","m","an","v"],["堂","t","ang","/"]]),new o("扬眉吐气",[["扬","y","ang","/"],["眉","m","ei","/"],["吐","t","u","v"],["气","q","i","\\"]]),new o("天伦之乐",[["天","t","ian","-"],["伦","l","un","/"],["之","zh","i","-"],["乐","l","e","\\"]]),new o("虚怀若谷",[["虚","x","u","-"],["怀","h","uai","/"],["若","r","uo","\\"],["谷","g","u","v"]]),new o("重温旧梦",[["重","ch","ong","/"],["温","w","en","-"],["旧","j","iu","\\"],["梦","m","eng","\\"]]),new o("火树银花",[["火","h","uo","v"],["树","sh","u","\\"],["银","y","in","/"],["花","h","ua","-"]]),new o("百代过客",[["百","b","ai","v"],["代","d","ai","\\"],["过","g","uo","\\"],["客","k","e","\\"]]),new o("花好月圆",[["花","h","ua","-"],["好","h","ao","v"],["月","y","ue","\\"],["圆","y","uan","/"]]),new o("量才录用",[["量","l","iang","\\"],["才","c","ai","/"],["录","l","u","\\"],["用","y","ong","\\"]]),new o("余杯冷炙",[["余","y","u","/"],["杯","b","ei","-"],["冷","l","eng","v"],["炙","zh","i","\\"]]),new o("祸福相依",[["祸","h","uo","\\"],["福","f","u","/"],["相","x","iang","-"],["依","y","i","-"]]),new o("清歌妙舞",[["清","q","ing","-"],["歌","g","e","-"],["妙","m","iao","\\"],["舞","w","u","v"]]),new o("灯火阑珊",[["灯","d","eng","-"],["火","h","uo","v"],["阑","l","an","/"],["珊","sh","an","-"]]),new o("豁然开朗",[["豁","h","uo","\\"],["然","r","an","/"],["开","k","ai","-"],["朗","l","ang","v"]]),new o("人生如梦",[["人","r","en","/"],["生","sh","eng","-"],["如","r","u","/"],["梦","m","eng","\\"]]),new o("人山人海",[["人","r","en","/"],["山","sh","an","-"],["人","r","en","/"],["海","h","ai","v"]]),new o("万家灯火",[["万","w","an","\\"],["家","j","ia","-"],["灯","d","eng","-"],["火","h","uo","v"]]),new o("投桃报李",[["投","t","ou","/"],["桃","t","ao","/"],["报","b","ao","\\"],["李","l","i","v"]]),new o("东山再起",[["东","d","ong","-"],["山","sh","an","-"],["再","z","ai","\\"],["起","q","i","v"]]),new o("小心翼翼",[["小","x","iao","v"],["心","x","in","-"],["翼","y","i","\\"],["翼","y","i","\\"]]),new o("未雨绸缪",[["未","w","ei","\\"],["雨","y","u","v"],["绸","ch","ou","/"],["缪","m","ou","/"]]),new o("脱颖而出",[["脱","t","uo","-"],["颖","y","ing","v"],["而","*","er","/"],["出","ch","u","-"]]),new o("夙兴夜寐",[["夙","s","u","\\"],["兴","x","ing","-"],["夜","y","e","\\"],["寐","m","ei","\\"]]),new o("瓜田李下",[["瓜","g","ua","-"],["田","t","ian","/"],["李","l","i","v"],["下","x","ia","\\"]]),new o("完璧归赵",[["完","w","an","/"],["璧","b","i","\\"],["归","g","ui","-"],["赵","zh","ao","\\"]]),new o("洛阳纸贵",[["洛","l","uo","\\"],["阳","y","ang","/"],["纸","zh","i","v"],["贵","g","ui","\\"]]),new o("毛遂自荐",[["毛","m","ao","/"],["遂","s","ui","\\"],["自","z","i","\\"],["荐","j","ian","\\"]]),new o("月落星沉",[["月","y","ue","\\"],["落","l","uo","\\"],["星","x","ing","-"],["沉","ch","en","/"]]),new o("下里巴人",[["下","x","ia","\\"],["里","l","i","v"],["巴","b","a","-"],["人","r","en","/"]]),new o("买椟还珠",[["买","m","ai","v"],["椟","d","u","/"],["还","h","uan","/"],["珠","zh","u","-"]]),new o("七月流火",[["七","q","i","-"],["月","y","ue","\\"],["流","l","iu","/"],["火","h","uo","v"]]),new o("阳春白雪",[["阳","y","ang","/"],["春","ch","un","-"],["白","b","ai","/"],["雪","x","ue","v"]]),new o("白云苍狗",[["白","b","ai","/"],["云","y","un","/"],["苍","c","ang","-"],["狗","g","ou","v"]]),new o("叶公好龙",[["叶","y","e","\\"],["公","g","ong","-"],["好","h","ao","\\"],["龙","l","ong","/"]]),new o("春风得意",[["春","ch","un","-"],["风","f","eng","-"],["得","d","e","/"],["意","y","i","\\"]]),new o("一鼓作气",[["一","y","i","-"],["鼓","g","u","v"],["作","z","uo","\\"],["气","q","i","\\"]]),new o("东郭先生",[["东","d","ong","-"],["郭","g","uo","-"],["先","x","ian","-"],["生","sh","eng","-"]]),new o("如履薄冰",[["如","r","u","/"],["履","l","v","v"],["薄","b","o","/"],["冰","b","ing","-"]]),new o("韦编三绝",[["韦","w","ei","/"],["编","b","ian","-"],["三","s","an","-"],["绝","j","ue","/"]]),new o("心有灵犀",[["心","x","in","-"],["有","y","ou","v"],["灵","l","ing","/"],["犀","x","i","-"]]),new o("东窗事发",[["东","d","ong","-"],["窗","ch","uang","-"],["事","sh","i","\\"],["发","f","a","-"]]),new o("信誓旦旦",[["信","x","in","\\"],["誓","sh","i","\\"],["旦","d","an","\\"],["旦","d","an","\\"]]),new o("闻鸡起舞",[["闻","w","en","/"],["鸡","j","i","-"],["起","q","i","v"],["舞","w","u","v"]]),new o("兢兢业业",[["兢","j","ing","-"],["兢","j","ing","-"],["业","y","e","\\"],["业","y","e","\\"]]),new o("一视同仁",[["一","y","i","-"],["视","sh","i","\\"],["同","t","ong","/"],["仁","r","en","/"]]),new o("高山景行",[["高","g","ao","-"],["山","sh","an","-"],["景","j","ing","v"],["行","x","ing","/"]]),new o("三令五申",[["三","s","an","-"],["令","l","ing","\\"],["五","w","u","v"],["申","sh","en","-"]]),new o("勇冠三军",[["勇","y","ong","v"],["冠","g","uan","\\"],["三","s","an","-"],["军","j","un","-"]]),new o("指鹿为马",[["指","zh","i","v"],["鹿","l","u","\\"],["为","w","ei","/"],["马","m","a","v"]]),new o("滥竽充数",[["滥","l","an","\\"],["竽","y","u","/"],["充","ch","ong","-"],["数","sh","u","\\"]]),new o("沧海桑田",[["沧","c","ang","-"],["海","h","ai","v"],["桑","s","ang","-"],["田","t","ian","/"]]),new o("如弃敝履",[["如","r","u","/"],["弃","q","i","\\"],["敝","b","i","\\"],["履","l","v","v"]]),new o("高瞻远瞩",[["高","g","ao","-"],["瞻","zh","an","-"],["远","y","uan","v"],["瞩","zh","u","v"]]),new o("一代风流",[["一","y","i","-"],["代","d","ai","\\"],["风","f","eng","-"],["流","l","iu","/"]]),new o("炙手可热",[["炙","zh","i","\\"],["手","sh","ou","v"],["可","k","e","v"],["热","r","e","\\"]]),new o("英姿飒爽",[["英","y","ing","-"],["姿","z","i","-"],["飒","s","a","\\"],["爽","sh","uang","v"]]),new o("春树暮云",[["春","ch","un","-"],["树","sh","u","\\"],["暮","m","u","\\"],["云","y","un","/"]]),new o("发人深省",[["发","f","a","-"],["人","r","en","/"],["深","sh","en","-"],["省","x","ing","v"]]),new o("明眸皓齿",[["明","m","ing","/"],["眸","m","ou","/"],["皓","h","ao","\\"],["齿","ch","i","v"]]),new o("并蒂芙蓉",[["并","b","ing","\\"],["蒂","d","i","\\"],["芙","f","u","/"],["蓉","r","ong","/"]]),new o("蜻蜓点水",[["蜻","q","ing","-"],["蜓","t","ing","/"],["点","d","ian","v"],["水","sh","ui","v"]]),new o("指挥若定",[["指","zh","i","v"],["挥","h","ui","-"],["若","r","uo","\\"],["定","d","ing","\\"]]),new o("倾盆大雨",[["倾","q","ing","-"],["盆","p","en","/"],["大","d","a","\\"],["雨","y","u","v"]]),new o("别开生面",[["别","b","ie","/"],["开","k","ai","-"],["生","sh","eng","-"],["面","m","ian","\\"]]),new o("清新俊逸",[["清","q","ing","-"],["新","x","in","-"],["俊","j","un","\\"],["逸","y","i","\\"]]),new o("翻云覆雨",[["翻","f","an","-"],["云","y","un","/"],["覆","f","u","\\"],["雨","y","u","v"]]),new o("十有八九",[["十","sh","i","/"],["有","y","ou","v"],["八","b","a","-"],["九","j","iu","v"]]),new o("判若云泥",[["判","p","an","\\"],["若","r","uo","\\"],["云","y","un","/"],["泥","n","i","/"]]),new o("文采风流",[["文","w","en","/"],["采","c","ai","v"],["风","f","eng","-"],["流","l","iu","/"]]),new o("暴殄天物",[["暴","b","ao","\\"],["殄","t","ian","v"],["天","t","ian","-"],["物","w","u","\\"]]),new o("冰雪聪明",[["冰","b","ing","-"],["雪","x","ue","v"],["聪","c","ong","-"],["明","m","ing","/"]]),new o("锦绣河山",[["锦","j","in","v"],["绣","x","iu","\\"],["河","h","e","/"],["山","sh","an","-"]]),new o("济世之才",[["济","j","i","\\"],["世","sh","i","\\"],["之","zh","i","-"],["才","c","ai","/"]]),new o("老泪纵横",[["老","l","ao","v"],["泪","l","ei","\\"],["纵","z","ong","\\"],["横","h","eng","/"]]),new o("弱不禁风",[["弱","r","uo","\\"],["不","b","u","\\"],["禁","j","in","-"],["风","f","eng","-"]]),new o("雾里看花",[["雾","w","u","\\"],["里","l","i","v"],["看","k","an","\\"],["花","h","ua","-"]]),new o("风吹雨打",[["风","f","eng","-"],["吹","ch","ui","-"],["雨","y","u","v"],["打","d","a","v"]]),new o("欣喜若狂",[["欣","x","in","-"],["喜","x","i","v"],["若","r","uo","\\"],["狂","k","uang","/"]]),new o("日暮途穷",[["日","r","i","\\"],["暮","m","u","\\"],["途","t","u","/"],["穷","q","iong","/"]]),new o("名垂千古",[["名","m","ing","/"],["垂","ch","ui","/"],["千","q","ian","-"],["古","g","u","v"]]),new o("惨淡经营",[["惨","c","an","v"],["淡","d","an","\\"],["经","j","ing","-"],["营","y","ing","/"]]),new o("擒贼擒王",[["擒","q","in","/"],["贼","z","ei","/"],["擒","q","in","/"],["王","w","ang","/"]])],e=this.que;let i=[];for(let a of n){let n=!0;for(let i of e)if(-1===i.id){let e=!1;for(let n=0;n<4;n++){for(let t=0;t<4;t++)if(a.data[n][t]===i.s){e=!0;break}if(e)break}if(!e){n=!1;break}}else{let e=!1;for(let n=0;n<4;n++)if(a.data[i.id][n]===i.s){e=!0;break}if(!e){n=!1;break}}n&&i.push({val:a.word})}this.result=i},copy(n,e,i,a){const t=n.val;navigator.clipboard.writeText(t),this.$message.success("已复制")}},data(){return{input:"",result:Array(),query:Array(),que:Array(),helpVisible:!0}}},w=h,s=i(1001),l=(0,s.Z)(w,a,t,!1,null,null,null),g=l.exports},8148:function(n,e,i){var a=i(6369),t=i(8499),u=i.n(t),o=i(7042),r=i(2631);a["default"].use(r.ZP);const h=[{path:"/wordle",name:"home",component:()=>Promise.resolve().then(i.bind(i,7042)),meta:{title:"Welcome to Spy's Website!"}}],w=new r.ZP({mode:"history",base:"",routes:h});w.beforeEach((async n=>{n.meta.title&&(document.title=n.meta.title)}));var s=w;a["default"].config.productionTip=!1,a["default"].use(u()),new a["default"]({router:s,render:n=>n(o["default"])}).$mount("#app")},9122:function(n,e,i){n.exports=i.p+"img/img1.f2cd343b.jpg"},1324:function(n,e,i){n.exports=i.p+"img/img2.e397d415.jpg"},3146:function(n,e,i){n.exports=i.p+"img/img3.ffc815d9.png"}},e={};function i(a){var t=e[a];if(void 0!==t)return t.exports;var u=e[a]={id:a,loaded:!1,exports:{}};return n[a].call(u.exports,u,u.exports,i),u.loaded=!0,u.exports}i.m=n,function(){var n=[];i.O=function(e,a,t,u){if(!a){var o=1/0;for(s=0;s<n.length;s++){a=n[s][0],t=n[s][1],u=n[s][2];for(var r=!0,h=0;h<a.length;h++)(!1&u||o>=u)&&Object.keys(i.O).every((function(n){return i.O[n](a[h])}))?a.splice(h--,1):(r=!1,u<o&&(o=u));if(r){n.splice(s--,1);var w=t();void 0!==w&&(e=w)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[a,t,u]}}(),function(){i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,{a:e}),e}}(),function(){i.d=function(n,e){for(var a in e)i.o(e,a)&&!i.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){i.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){i.p=""}(),function(){var n={143:0};i.O.j=function(e){return 0===n[e]};var e=function(e,a){var t,u,o=a[0],r=a[1],h=a[2],w=0;if(o.some((function(e){return 0!==n[e]}))){for(t in r)i.o(r,t)&&(i.m[t]=r[t]);if(h)var s=h(i)}for(e&&e(a);w<o.length;w++)u=o[w],i.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return i.O(s)},a=self["webpackChunkwordle"]=self["webpackChunkwordle"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(8148)}));a=i.O(a)})();
//# sourceMappingURL=app.d85938c2.js.map