(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-577de19a"],{"0ebf":function(t,s,a){},"467a":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"orderform"},[a("div",{staticClass:"box"},[a("div",{staticClass:"gou"},[a("svg",{staticClass:"icon",attrs:{t:"1622112305571",viewBox:"0 0 1397 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2318",width:"32",height:"32"}},[a("path",{attrs:{d:"M1396.363636 121.018182c0 0-223.418182 74.472727-484.072727 372.363636-242.036364 269.963636-297.890909 381.672727-390.981818 530.618182C512 1014.690909 372.363636 744.727273 0 549.236364l195.490909-186.181818c0 0 176.872727 121.018182 297.890909 344.436364 0 0 307.2-474.763636 902.981818-707.490909L1396.363636 121.018182 1396.363636 121.018182zM1396.363636 121.018182","p-id":"2319",fill:"#ffffff"}})])]),a("p",{staticClass:"zf"},[t._v("订单支付成功")]),a("div",{staticClass:"hr"}),a("ul",[a("li",[a("p",[t._v("订单编号")]),a("span",[t._v(t._s(t.sid))])]),a("li",[a("p",[t._v("下单时间")]),a("span",[t._v(t._s(t.datas._add_time))])]),a("li",[a("p",[t._v("支付方式")]),a("span",[t._v(t._s(t.datas.pay_price))])]),a("li",[a("p",[t._v("支付金额")]),a("span",[t._v(t._s(t.payType))])])]),a("div",{staticClass:"hr"}),a("div",{staticClass:"btn"},[a("van-button",{attrs:{color:"rgb(233,51,35)",round:"",type:"info"},on:{click:t.button}},[t._v("查看订单")]),a("van-button",{attrs:{color:"rgb(233,51,35)",plain:"",round:"",type:"info"},on:{click:function(s){return t.$router.push("/")}}},[t._v("返回首页")])],1)])])},n=[],o={props:["sid"],data:function(){return{datas:{},payType:""}},methods:{button:function(){this.$router.push("/status/"+this.sid)}},created:function(){var t=this;this.$axios.get("/api/order/detail/"+this.sid).then((function(s){console.log(s),t.datas=s.data.data,t.payType=s.data.data._status._payType}))}},e=o,r=(a("ad00"),a("2877")),d=Object(r["a"])(e,i,n,!1,null,"60845528",null);s["default"]=d.exports},ad00:function(t,s,a){"use strict";a("0ebf")}}]);
//# sourceMappingURL=chunk-577de19a.bc6c0a00.js.map