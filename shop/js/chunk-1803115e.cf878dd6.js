(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1803115e"],{5387:function(t,a,s){"use strict";s("792e")},"630e":function(t,a,s){},"792e":function(t,a,s){},"93c7":function(t,a,s){},ac2a:function(t,a,s){"use strict";s("93c7")},cf2a:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"order"},[s("div",{staticClass:"top_box"},[s("p",[t._v("订单信息")]),s("div",{staticClass:"text"},[s("p",[t._v(" 累计订单: "),s("span",[t._v(t._s(t.datas.order_count))])]),s("p",[t._v(" 总消费: "),s("span",[t._v("￥"+t._s(t.datas.sum_price))])])]),s("img",{attrs:{src:"http://47.115.51.185/h5/img/orderTime.e95f9090.png",alt:""}})]),s("van-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[s("van-tab",{attrs:{name:"1"},scopedSlots:t._u([{key:"title",fn:function(){return[s("p",[t._v("待付款")]),s("p",[t._v(t._s(t.datas.unpaid_count))])]},proxy:!0}])},t._l(t.unpaid_count,(function(a,i){return s("Shop",{key:i,staticClass:"shop_bxo",attrs:{l:a},on:{datas:t.datass,lists:t.lists}})})),1),s("van-tab",{attrs:{name:"2"},scopedSlots:t._u([{key:"title",fn:function(){return[s("p",[t._v("待发货")]),s("p",[t._v(t._s(t.datas.order_count))])]},proxy:!0}])},t._l(t.order_count,(function(a,i){return s("ShopFahuo",{key:i,staticClass:"shop_bxo",attrs:{l:a},on:{datas:t.datass,lists:t.lists}})})),1),s("van-tab",{attrs:{name:"3"},scopedSlots:t._u([{key:"title",fn:function(){return[s("p",[t._v("待收货")]),s("p",[t._v(t._s(t.datas.received_count))])]},proxy:!0}])},[s("img",{staticClass:"tab_img",attrs:{src:"http://47.115.51.185/h5/img/noOrder.90017ce2.png",alt:""}})]),s("van-tab",{attrs:{name:"4"},scopedSlots:t._u([{key:"title",fn:function(){return[s("p",[t._v("待评价")]),s("p",[t._v(t._s(t.datas.evaluated_count))])]},proxy:!0}])},[s("img",{staticClass:"tab_img",attrs:{src:"http://47.115.51.185/h5/img/noOrder.90017ce2.png",alt:""}})]),s("van-tab",{attrs:{name:"5"},scopedSlots:t._u([{key:"title",fn:function(){return[s("p",[t._v("待付款")]),s("p",[t._v(t._s(t.datas.complete_count))])]},proxy:!0}])},[s("img",{staticClass:"tab_img",attrs:{src:"http://47.115.51.185/h5/img/noOrder.90017ce2.png",alt:""}})])],1)],1)},n=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"shop",on:{click:function(a){return a.target!==a.currentTarget?null:t.goStatus(a)}}},[s("div",{staticClass:"time"},[s("p",[t._v(t._s(t.l._add_time))]),s("p",[t._v(t._s(t.l._status._title))])]),s("div",{staticClass:"br"}),t._l(t.l.cartInfo,(function(a,i){return s("div",{key:i,staticClass:"shop"},[s("img",{attrs:{src:a.productInfo.image,alt:""}}),s("p",[t._v(t._s(a.productInfo.store_name))]),s("div",{staticClass:"money_num"},[s("p",[t._v("￥"+t._s(a.productInfo.price))]),s("div",[t._v("×"+t._s(a.cart_num))])])])})),s("div",{staticClass:"total_prices"},[t._v(" 总"+t._s(t.l.cartInfo.length)+"件商品，总金额 "),s("span",[t._v("￥"+t._s(t.l.pay_price))])]),s("div",{staticClass:"br"}),s("div",{staticClass:"shop_btn"},[s("van-button",{staticClass:"cancel",attrs:{size:"small",round:"",type:"info"},on:{click:function(a){return a.stopPropagation(),t.callOff(a)}}},[t._v("取消订单")]),s("van-button",{attrs:{size:"small","is-link":"",color:"rgb(233,51,35)",round:"",type:"info"},on:{click:function(a){return a.stopPropagation(),t.showPopup(a)}}},[t._v("立即付款")]),s("van-popup",{style:{height:"30%"},attrs:{position:"bottom",closeable:""},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[s("p",[t._v("选择支付方式")]),s("van-cell",{attrs:{"is-link":"",title:"微信支付",label:"使用微信快捷支付"},on:{click:function(a){return t.wx(t.l.order_id)}}}),s("van-cell",{attrs:{"is-link":"",title:"余额支付",label:"当前可用余额："+t.datas.now_money},on:{click:function(a){return t.yue(t.l.order_id)}}})],1)],1),s("div",{staticClass:"br2"})],2)},e=[],r={props:["l"],data:function(){return{show:!1,datas:[]}},created:function(){var t=this;this.$axios.get("/api/userinfo").then((function(a){t.datas=a.data.data})),console.log(this.l)},methods:{goStatus:function(){this.$router.push("/status/"+this.l.order_id)},showPopup:function(){this.show=!0},callOff:function(){var t=this;this.$dialog.confirm({title:"标题",message:"弹窗内容"}).then((function(){t.$axios.post("/api/order/cancel",{id:t.l.order_id}).then((function(a){t.$toast.success(a.data.msg)})),t.$axios.get("/api/order/data").then((function(a){t.$emit("datas",a.data.data)})),t.$axios.get("/api/order/list?page=1&limit=20&type=0").then((function(a){t.$emit("lists",a.data.data)}))})).catch((function(){}))},wx:function(t){var a=this;this.show=!1,this.$toast.loading({message:"加载中...",forbidClick:!0}),this.$axios.post("/api/order/pay",{from:"weixinh5",paytype:"weixin",uni:t}).then((function(t){console.log(t),a.$toast(t.data.msg)}))},yue:function(t){var a=this;this.show=!1,this.$toast.loading({message:"加载中...",forbidClick:!0}),this.$axios.post("/api/order/pay",{from:"weixinh5",paytype:"yue",uni:t}).then((function(t){a.$toast(t.data.msg),a.$axios.get("/api/order/data").then((function(t){a.$emit("datas",t.data.data)})),a.$axios.get("/api/order/list?page=1&limit=20&type=0").then((function(t){a.$emit("lists",t.data.data)}))}))}}},c=r,l=(s("ac2a"),s("2877")),u=Object(l["a"])(c,o,e,!1,null,"bb1567b8",null),p=u.exports,d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"shop",on:{click:t.goStatus}},[s("div",{staticClass:"time"},[s("p",[t._v(t._s(t.l._add_time))]),s("p",[t._v(t._s(t.l._status._title))])]),s("div",{staticClass:"br"}),t._l(t.l.cartInfo,(function(a,i){return s("div",{key:i,staticClass:"shop"},[s("img",{attrs:{src:a.productInfo.image,alt:""}}),s("p",[t._v(t._s(a.productInfo.store_name))]),s("div",{staticClass:"money_num"},[s("p",[t._v("￥"+t._s(a.productInfo.price))]),s("div",[t._v("×"+t._s(a.cart_num))])])])})),s("div",{staticClass:"total_prices"},[t._v(" 总"+t._s(t.l.cartInfo.length)+"件商品，总金额 "),s("span",[t._v("￥"+t._s(t.l.pay_price))])]),s("div",{staticClass:"br"}),s("div",{staticClass:"shop_btn"},[s("van-button",{attrs:{size:"small",color:"rgb(233,51,35)",round:"",type:"info"},on:{click:function(a){return a.stopPropagation(),t.goStatus(a)}}},[t._v("查看详情")])],1),s("div",{staticClass:"br2"})],2)},_=[],f={props:["l"],methods:{goStatus:function(){this.$router.push("/status/"+this.l.order_id)}}},h=f,v=(s("f6e9"),Object(l["a"])(h,d,_,!1,null,"7e8a415c",null)),m=v.exports,g={props:["id"],components:{Shop:p,ShopFahuo:m},data:function(){return{datas:[],activeName:this.$route.params.id,unpaid_count:[],order_count:[]}},created:function(){var t=this;this.$axios.get("/api/order/data").then((function(a){t.datas=a.data.data})),this.$axios.get("/api/order/list?page=1&limit=20&type=0").then((function(a){t.unpaid_count=a.data.data})),this.$axios.get("/api/order/list?page=1&limit=20&type=1").then((function(a){t.order_count=a.data.data}))},methods:{datass:function(t){this.datas=t},lists:function(t){this.unpaid_count=t}}},b=g,y=(s("5387"),Object(l["a"])(b,i,n,!1,null,null,null));a["default"]=y.exports},f6e9:function(t,a,s){"use strict";s("630e")}}]);
//# sourceMappingURL=chunk-1803115e.cf878dd6.js.map