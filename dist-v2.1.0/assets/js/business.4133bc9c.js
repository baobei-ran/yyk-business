(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["business"],{1276:function(t,e,i){"use strict";var n=i("d784"),s=i("44e7"),a=i("825a"),l=i("1d80"),r=i("4840"),c=i("8aa5"),p=i("50c4"),_=i("14c3"),u=i("9263"),o=i("d039"),v=[].push,f=Math.min,d=4294967295,m=!o((function(){return!RegExp(d,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(l(this)),a=void 0===i?d:i>>>0;if(0===a)return[];if(void 0===t)return[n];if(!s(t))return e.call(n,t,a);var r,c,p,_=[],o=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,m=new RegExp(t.source,o+"g");while(r=u.call(m,n)){if(c=m.lastIndex,c>f&&(_.push(n.slice(f,r.index)),r.length>1&&r.index<n.length&&v.apply(_,r.slice(1)),p=r[0].length,f=c,_.length>=a))break;m.lastIndex===r.index&&m.lastIndex++}return f===n.length?!p&&m.test("")||_.push(""):_.push(n.slice(f)),_.length>a?_.slice(0,a):_}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var s=l(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s,i):n.call(String(s),e,i)},function(t,s){var l=i(n,t,this,s,n!==e);if(l.done)return l.value;var u=a(t),o=String(this),v=r(u,RegExp),h=u.unicode,y=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),g=new v(m?u:"^(?:"+u.source+")",y),b=void 0===s?d:s>>>0;if(0===b)return[];if(0===o.length)return null===_(g,o)?[o]:[];var x=0,w=0,k=[];while(w<o.length){g.lastIndex=m?w:0;var C,R=_(g,m?o:o.slice(w));if(null===R||(C=f(p(g.lastIndex+(m?0:w)),o.length))===x)w=c(o,w,h);else{if(k.push(o.slice(x,w)),k.length===b)return k;for(var I=1;I<=R.length-1;I++)if(k.push(R[I]),k.length===b)return k;w=x=C}}return k.push(o.slice(x)),k}]}),!m)},"44e7":function(t,e,i){var n=i("861d"),s=i("c6b6"),a=i("b622"),l=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[l])?!!e:"RegExp"==s(t))}},"6bcd":function(t,e,i){t.exports=i.p+"assets/img/default.cc8de680.png"},"6beb":function(t,e,i){"use strict";var n=i("8454"),s=i.n(n);s.a},8454:function(t,e,i){},b297:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"business"},[n("div",{staticClass:"business-detail"},[t._l(t.bus_list,(function(e,i){return n("div",{key:i,staticClass:"flow-list"},[e.state?n("dl",{staticClass:"list-pre"},[n("dt",[n("span",{staticClass:"color_blue"},[t._v(t._s(t._f("Time")(e.createtime,"MM-dd"))+" "),n("b",[t._v(t._s(t._f("Time")(e.createtime,"hh:mm")))])]),n("i",{staticClass:"blue"})]),n("dd",[n("div",{staticClass:"div-color"},[n("h2",[t._v(t._s(1==e.state?"新增客户":2==e.state?"设为C类客户":3==e.state?1==e.fair_type?"扔至公海":"客户自动流失至公海":4==e.state?"从公海认领":5==e.state?"添加代理站点":6==e.state?"补全合同":7==e.state?"代理商退款,已扔至公海":8==e.state?"影像设备已安装":9==e.state?"代理商退款":""))]),n("p",[n("b",[t._v(t._s(e.uname))]),t._v(" | "),n("span",[t._v(t._s(e.dname))])]),n("br"),5==e.state||6==e.state?n("p",{staticClass:"lx"},[t._v(" 站点名称："+t._s(e.agency_name)+" ")]):t._e(),e.pact?n("p",{staticClass:"lx"},[t._v(" 合同类型："+t._s(2==e.pact?"定金合同":1==e.pact?"全款合同":"")+" "+t._s(1==e.site_type?"大型ID站点":2==e.site_type?"中型ID站点":3==e.site_type?"小型ID站点":"")+" ")]):t._e(),e.fixation_money>0?n("p",{staticClass:"lx"},[t._v(" 定金金额："+t._s(e.fixation_money)+"元 ")]):t._e(),7==e.state||9==e.state?n("ol",[e.tk_money>0?n("li",[n("span",[t._v("退款金额：")]),n("span",[t._v(t._s(e.tk_money)+"元 ")])]):t._e(),n("li",[n("span",[t._v("退款站点：")]),n("span",[t._v(t._s(e.agency_name))])]),e.apply_pic&&e.apply_pic.length?n("li",[n("span",[t._v("退款申请表：")]),n("span",t._l(e.apply_pic,(function(e,i){return n("img",{key:i,attrs:{src:t.baseURL+e,preview:"3",alt:""}})})),0)]):t._e(),e.affirm_pic&&e.affirm_pic.length?n("li",[n("span",[t._v("退款确认单：")]),n("span",t._l(e.affirm_pic,(function(e,i){return n("img",{key:i,attrs:{src:t.baseURL+e,preview:"1",alt:""}})})),0)]):t._e(),e.tk_cause?n("li",[n("span",[t._v("退款原因：")]),n("span",[t._v(t._s(e.tk_cause))])]):t._e()]):t._e()]),n("p")])]):t._e(),e.type?n("dl",{staticClass:"list-next"},[n("dt",[n("span",{staticStyle:{color:"#808080"}},[t._v(t._s(t._f("Time")(e.createtime,"MM-dd"))+" "),n("b",[t._v(t._s(t._f("Time")(e.createtime,"hh:mm")))])]),n("i")]),n("dd",[n("div",[n("h2",[t._v(t._s(1==e.type?"再次拜访":2==e.type?"电话回访":3==e.type?"会议邀约":4==e.type?"其他":5==e.type?"邀约公司":6==e.type?"微信跟进":7==e.type?"邮件回访":8==e.type?"添加回款":9==e.type?"回款完成":""))]),n("p",[n("b",[t._v(t._s(e.uname))]),t._v(" | "),n("span",{staticStyle:{color:"#808080"}},[t._v(t._s(e.dname))])]),n("ul",[e.content?n("li",[n("span",[t._v("跟进情况：")]),n("span",[t._v(t._s(e.content))])]):t._e()]),1==e.type?n("ul",[e.name?n("li",[n("span",[t._v("拜访人：")]),n("span",[t._v(t._s(e.name))])]):t._e(),e.phone?n("li",[n("span",[t._v("拜访电话：")]),n("span",[t._v(t._s(e.phone))])]):t._e()]):t._e(),3==e.type?n("ul",[e.meeting?n("li",[n("span",[t._v("会议名称：")]),n("span",[t._v(t._s(e.meeting))])]):t._e(),e.meeting_result?n("li",[n("span",[t._v("邀约结果：")]),n("span",[t._v(t._s(1==e.meeting_result?"同意参会":2==e.meeting_result?"未同意参会":""))])]):t._e(),2==e.meeting_result&&e.meeting_text?n("li",[n("span",[t._v("未参会原因：")]),n("span",[t._v(t._s(e.meeting_text))])]):t._e()]):t._e(),n("ul",[8==e.type||9==e.type?n("li",[n("span",[t._v("站点名称：")]),n("span",[t._v(t._s(e.agency_name))])]):t._e(),e.answer_money>0?n("li",[n("span",[t._v("回款金额：")]),n("span",[t._v(t._s(e.answer_money)+"元")])]):t._e(),e.still_money>0?n("li",[n("span",[t._v("仍需回款金额：")]),n("span",[t._v(t._s(e.still_money)+"元")])]):t._e(),e.receipt_pic&&e.receipt_pic.length?n("li",[n("span",[t._v("收据：")]),n("span",t._l(e.receipt_pic,(function(e,i){return n("img",{key:i,attrs:{src:t.baseURL+e,preview:"2",alt:""}})})),0)]):t._e()])]),n("p")])]):t._e()])})),t.is_not?n("div",{staticClass:"empty"},[n("img",{attrs:{src:i("6bcd"),alt:""}}),n("p",[t._v("暂无数据")])]):t._e()],2)])},s=[],a=(i("d81d"),i("d3b7"),i("4ae1"),i("ac1f"),i("25f0"),i("1276"),i("9f12")),l=i("53fe"),r=i("8b83"),c=i("c65a"),p=i("c03e"),_=i("9ab4"),u=i("dbe5"),o=i("60a3");function v(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var i,n=Object(c["a"])(t);if(e()){var s=Object(c["a"])(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return Object(r["a"])(this,i)}}var f=new u["a"],d=function(t){Object(p["a"])(i,t);var e=v(i);function i(){var t;return Object(a["a"])(this,i),t=e.apply(this,arguments),t.bus_list=[],t.is_not=!1,t.baseURL=f.baseURL,t}return Object(l["a"])(i,[{key:"mounted",value:function(){this.initdata()}},{key:"initdata",value:function(){var t=this.$route.query,e=t.id,i=t.type,n=this,s={id:e,type:i};f.post("/inside/H5/follow_record",s).then((function(t){200==t.code?(n.is_not=!1,t.data.map((function(t){if(t.receipt_pic){var e=t.receipt_pic.split(",");t.receipt_pic=e}if(t.apply_pic){var i=t.apply_pic.split(",");t.apply_pic=i}if(t.affirm_pic){var n=t.affirm_pic.split(",");t.affirm_pic=n}})),n.bus_list=t.data,n.$nextTick((function(){setTimeout((function(){n.$previewRefresh()}),500)}))):n.is_not=!0}))}}]),i}(o["c"]);d=_["a"]([o["a"]],d);var m=d,h=m,y=(i("6beb"),i("2877")),g=Object(y["a"])(h,n,s,!1,null,"1c4abad5",null);e["default"]=g.exports},d81d:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").map,a=i("1dde"),l=i("ae40"),r=a("map"),c=l("map");n({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);