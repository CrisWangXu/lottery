webpackJsonp([0],{"9L1a":function(t,e){},E51W:function(t,e){},G2Sh:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("Zdsi")},null,null).exports,l=s("/ocq"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"fullscreen",rawName:"v-fullscreen"}],staticClass:"page-container"},[e("div",[e("mu-container",[e("router-link",{attrs:{to:"/shiyixuanwu/index"}},[e("mu-list",{staticClass:"list-box"},[e("mu-list-item",{attrs:{button:"",ripple:!1}},[e("mu-list-item-action",[e("mu-icon",{attrs:{value:"radio_button_checked",color:"#ef5350"}})],1),this._v(" "),e("mu-list-item-title",[this._v("11选5")]),this._v(" "),e("mu-list-item-action")],1)],1)],1),this._v(" "),e("router-link",{attrs:{to:"/pailiesan/index"}},[e("mu-list",{staticClass:"list-box"},[e("mu-list-item",{attrs:{button:"",ripple:!1}},[e("mu-list-item-action",[e("mu-icon",{attrs:{value:"radio_button_checked",color:"#4caf50"}})],1),this._v(" "),e("mu-list-item-title",[this._v("排列3")]),this._v(" "),e("mu-list-item-action")],1)],1)],1)],1)],1)])},staticRenderFns:[]};var u=s("VU/8")({},r,!1,function(t){s("G2Sh")},"data-v-f0c3afb2",null).exports,o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-appbar",{staticStyle:{width:"100%"},attrs:{title:"11选5脱胆杀号过滤缩水",color:"primary"}}),t._v(" "),s("div",{staticClass:"box"},[s("mu-select",{attrs:{label:"选择玩法","full-width":""},model:{value:t.currentResultCount,callback:function(e){t.currentResultCount=e},expression:"currentResultCount"}},t._l(t.options,function(t,e){return s("mu-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),s("div",{staticClass:"group"},[s("div",{staticStyle:{color:"#4caf50"}},[t._v("请选择要脱胆的号码")]),t._v(" "),s("div",{staticClass:"ball"},t._l(t.ballArr,function(e,a){return s("div",{staticClass:"item-box"},[s("div",{staticClass:"item",style:{background:"1"==e.status?"#4caf50":"2"==e.status?"#f44336":""},on:{click:function(s){return t.changeFirstBallStatus(e.status,a)}}},[t._v(t._s(e.value))])])}),0),t._v(" "),s("div",{staticStyle:{clear:"both"}})]),t._v(" "),s("div",{staticClass:"group"},[s("div",{staticStyle:{color:"#f44336"}},[t._v("请选择要杀掉的号码")]),t._v(" "),s("div",{staticClass:"ball"},t._l(t.ballArr,function(e,a){return s("div",{staticClass:"item-box"},[s("div",{staticClass:"item",style:{background:"1"==e.status?"#4caf50":"2"==e.status?"#f44336":""},on:{click:function(s){return t.changeSecondBallStatus(e.status,a)}}},[t._v(t._s(e.value))])])}),0),t._v(" "),s("div",{staticStyle:{clear:"both"}})]),t._v(" "),s("div",{staticClass:"btn"},[s("mu-button",{attrs:{"full-width":"",color:"primary",large:"",loading:t.btnLoading},on:{click:t.submit}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")({name:"shiyixuanwu-index",data:function(){return{currentResultCount:5,allBall:[],confirmBall:[],btnLoading:!1,ballArr:[{value:1,status:0},{value:2,status:0},{value:3,status:0},{value:4,status:0},{value:5,status:0},{value:6,status:0},{value:7,status:0},{value:8,status:0},{value:9,status:0},{value:10,status:0},{value:11,status:0}],options:[{label:"11选3",value:3},{label:"11选4",value:4},{label:"11选5",value:5},{label:"11选6",value:6},{label:"11选7",value:7}]}},created:function(){},mounted:function(){},methods:{changeFirstBallStatus:function(t,e){0==t||2==t?this.ballArr[e].status=1:1==t&&(this.ballArr[e].status=0)},changeSecondBallStatus:function(t,e){0==t||1==t?this.ballArr[e].status=2:2==t&&(this.ballArr[e].status=0)},arrange:function(t,e){var s=[];return this.is([],t)?(function t(a,n){var i=(n=n||[[]])[0].length,l=a.length,r=[];if(i==e)return s=n,n;if(0==i){for(var u=0;u<l;u++)r.push([a[u]]),s.push([a[u]]);return t(a,r)}if(i==l)return n;for(u=0;u<n.length;u++)for(var o=0;o<l;o++)if(-1==n[u].indexOf(a[o])){var c=n[u].slice();c.push(a[o]),r.push(c),s.push(c)}return t(a,r)}(t),s):s},is:function(t,e){var s={}.toString;return s.call(t)===s.call(e)},computedResult:function(t,e){var s=this,a=this.arrange(t,this.currentResultCount);a.map(function(t){t.sort(s.sortNumber)}),a=this.uniqueArr(a),e.map(function(t){a=a.filter(function(e){return-1!=e.indexOf(t)})}),this.GLOBAL.shiyixuanwuResult=a,this.btnLoading=!1,this.$router.push("/shiyixuanwu/result")},sortNumber:function(t,e){return t-e},uniqueArr:function(t){for(var e={},s=[],a=0,n=t.length;a<n;a++)e[t[a]]||(s.push(t[a]),e[t[a]]=!0);return s},submit:function(){var t=this;this.allBall=[],this.confirmBall=[],this.ballArr.forEach(function(e){0!=e.status&&1!=e.status||t.allBall.push(e.value),1==e.status&&t.confirmBall.push(e.value)}),this.allBall.length<=this.currentResultCount?this.$toast.error("最少选择"+(this.currentResultCount+1)+"个数"):this.confirmBall.length>=this.currentResultCount?this.$toast.error("最多选择"+(this.currentResultCount-1)+"个数脱胆"):(this.btnLoading=!0,this.computedResult(this.allBall,this.confirmBall))}}},o,!1,function(t){s("WVjr")},"data-v-6eedccf9",null).exports,d={name:"shiyixuanwu-result",data:function(){return{allResult:this.GLOBAL.shiyixuanwuResult,result:this.GLOBAL.shiyixuanwuResult,count:10,randomArr:[1,5,10,20,50,100]}},created:function(){this.count=this.GLOBAL.shiyixuanwuResult.length,this.copyRandom()},mounted:function(){},methods:{random:function(t){this.result=this.getRandomArrayElements(this.allResult,t),this.copyRandom()},copyRandom:function(){this.copyResult=this.result.join("\n")},getRandomArrayElements:function(t,e){for(var s,a,n=t.slice(0),i=t.length,l=i-e;i-- >l;)s=n[a=Math.floor((i+1)*Math.random())],n[a]=n[i],n[i]=s;return n.slice(l)},onCopy:function(){this.$toast.success("复制成功！")},onError:function(){}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container"},[s("div",{staticClass:"title"},[t._v("计算结果")]),t._v(" "),s("div",{staticClass:"count"},[t._v("共"+t._s(t.count)+"注")]),t._v(" "),s("div",{staticClass:"random-box"},[t._l(t.randomArr,function(e,a){return s("div",{key:a},[e<t.GLOBAL.shiyixuanwuResult.length?s("div",{key:a,staticClass:"single-btn"},[s("mu-button",{attrs:{round:"",color:"success"},on:{click:function(s){return t.random(e)}}},[t._v("随机"+t._s(e)+"注")])],1):t._e()])}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],2),t._v(" "),s("div",{staticClass:"result-box"},[t._l(t.result,function(e){return s("div",{staticClass:"single-result"},[t._v(t._s(e.join(",")))])}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],2),t._v(" "),s("div",{staticClass:"bottom-btn"},[s("mu-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copyResult,expression:"copyResult",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{"full-width":"",color:"primary",large:""}},[t._v("复制结果")])],1)])},staticRenderFns:[]};var h=s("VU/8")(d,v,!1,function(t){s("UTKb")},"data-v-6d4dc063",null).exports,m={name:"pailiesan-index",data:function(){return{currentResultCount:5,btnLoading:!1,ballArr:[{value:1,selected:!1},{value:2,selected:!1},{value:3,selected:!1},{value:4,selected:!1},{value:5,selected:!1},{value:6,selected:!1},{value:7,selected:!1},{value:8,selected:!1},{value:9,selected:!1},{value:10,selected:!1},{value:11,selected:!1},{value:12,selected:!1},{value:13,selected:!1},{value:14,selected:!1},{value:15,selected:!1},{value:16,selected:!1},{value:17,selected:!1},{value:18,selected:!1},{value:19,selected:!1},{value:20,selected:!1},{value:21,selected:!1},{value:22,selected:!1},{value:23,selected:!1},{value:24,selected:!1},{value:25,selected:!1},{value:26,selected:!1},{value:27,selected:!1}]}},created:function(){},mounted:function(){},methods:{changeBallStatus:function(t){this.ballArr[t].selected=!this.ballArr[t].selected},computedResult:function(t){var e=[];t.map(function(t){var s=[0,1,2,3,4,5,6,7,8,9],a=[0,1,2,3,4,5,6,7,8,9];[0,1,2,3,4,5,6,7,8,9].map(function(n){s.map(function(s){a.map(function(a){n+s+a==t&&e.push(String(n)+String(s)+String(a))})})})}),this.GLOBAL.pailiesanResult=e,this.btnLoading=!1,this.$router.push("/pailiesan/result")},submit:function(){this.btnLoading=!0;var t=[];this.ballArr.map(function(e){e.selected&&t.push(e.value)}),console.log(t),t.length?this.computedResult(t):this.$toast.error("最少要选择一个数字")}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-appbar",{staticStyle:{width:"100%"},attrs:{title:"3D排列三和值缩水",color:"primary"}}),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"group"},[s("div",{staticClass:"title",staticStyle:{color:"#f44336"}},[t._v("请选择和值")]),t._v(" "),s("div",{staticClass:"ball"},t._l(t.ballArr,function(e,a){return s("div",{staticClass:"item-box"},[s("div",{staticClass:"item",style:{background:e.selected?"#4caf50":""},on:{click:function(e){return t.changeBallStatus(a)}}},[t._v(t._s(e.value))])])}),0),t._v(" "),s("div",{staticStyle:{clear:"both"}})]),t._v(" "),s("div",{staticClass:"btn"},[s("mu-button",{attrs:{"full-width":"",color:"primary",large:"",loading:t.btnLoading},on:{click:t.submit}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var p=s("VU/8")(m,f,!1,function(t){s("lcrK")},"data-v-0659d1e4",null).exports,b={name:"shiyixuanwu-result",data:function(){return{allResult:this.GLOBAL.pailiesanResult,result:this.GLOBAL.pailiesanResult,count:10,randomArr:[1,5,10,20,50,100]}},created:function(){console.log(this.GLOBAL),this.count=this.GLOBAL.pailiesanResult.length,this.copyRandom()},mounted:function(){},methods:{random:function(t){this.result=this.getRandomArrayElements(this.allResult,t),this.copyRandom()},copyRandom:function(){this.copyResult=this.result.join("\n")},getRandomArrayElements:function(t,e){for(var s,a,n=t.slice(0),i=t.length,l=i-e;i-- >l;)s=n[a=Math.floor((i+1)*Math.random())],n[a]=n[i],n[i]=s;return n.slice(l)},onCopy:function(){this.$toast.success("复制成功！")},onError:function(){}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container"},[s("div",{staticClass:"title"},[t._v("计算结果")]),t._v(" "),s("div",{staticClass:"count"},[t._v("共"+t._s(t.count)+"注")]),t._v(" "),s("div",{staticClass:"random-box"},[t._l(t.randomArr,function(e,a){return s("div",{key:a},[e<t.GLOBAL.pailiesanResult.length?s("div",{key:a,staticClass:"single-btn"},[s("mu-button",{attrs:{round:"",color:"success"},on:{click:function(s){return t.random(e)}}},[t._v("随机"+t._s(e)+"注")])],1):t._e()])}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],2),t._v(" "),s("div",{staticClass:"result-box"},[t._l(t.result,function(e){return s("div",{staticClass:"single-result"},[t._v(t._s(e))])}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],2),t._v(" "),s("div",{staticClass:"bottom-btn"},[s("mu-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copyResult,expression:"copyResult",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{"full-width":"",color:"primary",large:""}},[t._v("复制结果")])],1)])},staticRenderFns:[]};var y=s("VU/8")(b,_,!1,function(t){s("9L1a")},"data-v-62f9795b",null).exports;a.a.use(l.a);var g=new l.a({routes:[{path:"/",name:"home",component:u},{path:"/shiyixuanwu/index",name:"shiyixuanwuIndex",component:c},{path:"/shiyixuanwu/result",name:"shiyixuanwuResult",component:h},{path:"/pailiesan/index",name:"pailiesanIndex",component:p},{path:"/pailiesan/result",name:"pailiesanResult",component:y}]}),R=s("aFc6"),C=(s("E51W"),s("sXio")),x={shiyixuanwuResult:[],pailiesanResult:[]},A=s("wvfG"),w=s.n(A);a.a.config.productionTip=!1,a.a.use(R.a),a.a.use(C.a),s("WWTk"),s("W/WV"),a.a.use(w.a),a.a.prototype.GLOBAL=x,new a.a({el:"#app",router:g,components:{App:i},template:"<App/>"})},UTKb:function(t,e){},"W/WV":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={name:"fullscreen",bind:function(t,e){var s=window.innerHeight;t.style.minHeight=s+"px"}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},l=s("VU/8")(n,i,!1,null,null,null).exports;a.a.directive(l.name,l)},WVjr:function(t,e){},WWTk:function(t,e){},Zdsi:function(t,e){},lcrK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.12f72613c073b62bd68d.js.map