"use strict";var vm=new Vue({el:"#app",data:{orderId:"",orderInfo:{}},methods:{getOrderDetail:function(){var e=this,r=getApiUrl("/shop-test/rest/orders/dingding/view");$.ajax({type:"get",data:{id:this.orderId},url:r,success:function(r){200==r.code&&(e.orderInfo=r.data)},error:function(e){ddToast("网络错误")}})},toOrderDetail:function(){location.href="orderDetail.html?orderId="+this.orderId},toHome:function(){location.href="home.html"}},mounted:function(){this.orderId=getUrlParam("orderId"),this.getOrderDetail()}});