"use strict";function _defineProperty(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var vm=new Vue({el:"#app",components:{},props:{},data:{user:{},show:!0,navList:[{url:"asset/images/icon/review_success.png",navTitle:"租用中",status:9},{url:"asset/images/icon/wait_deliver.png",navTitle:"待发货",status:2},{url:"asset/images/icon/wait_receive.png",navTitle:"待收货",status:3},{url:"asset/images/icon/wait_pay.png",navTitle:"待支付",status:0},{url:"asset/images/icon/in_review.png",navTitle:"审核中",status:15}],navList2:[{url:"asset/images/icon/wait_pay.png",navTitle:"待支付",status:0},{url:"asset/images/icon/in_review.png",navTitle:"审核中",status:15},{url:"asset/images/icon/review_fail.png",navTitle:"审核失败",status:16},{url:"asset/images/icon/lease_full.png",navTitle:"租期已满",status:10},{url:"asset/images/icon/order_cancel.png",navTitle:"订单取消",status:1}]},computed:{},watch:{},filters:{},methods:_defineProperty({toHome:function(){location.href="home.html?corpId="+this.user.corpId},toOrderList:function(){location.href="orderList.html"},toBillOrder:function(){location.href="billOrder.html"},toUserAuth:function(){location.href="userAuth.html"},toManageAddress:function(){location.href="manageAddress.html?addressType=userCenter"},toAbout:function(){location.href="about.html"}},"toOrderList",function(e){location.href="orderList.html?status="+e}),created:function(){},destroyed:function(){},mounted:function(){this.user=getSession()}});