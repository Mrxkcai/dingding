"use strict";var vm=new Vue({el:"#app",components:{},props:{},data:{show:!0,navList:[{url:"asset/images/icon/review_success.png",navTitle:"租用中"},{url:"asset/images/icon/wait_deliver.png",navTitle:"待发货"},{url:"asset/images/icon/wait_receive.png",navTitle:"待收货"},{url:"asset/images/icon/wait_pay.png",navTitle:"待支付"},{url:"asset/images/icon/in_review.png",navTitle:"审核中"}],navList2:[{url:"asset/images/icon/in_review.png",navTitle:"审核中"},{url:"asset/images/icon/review_success.png",navTitle:"审核通过"},{url:"asset/images/icon/review_fail.png",navTitle:"审核失败"},{url:"asset/images/icon/lease_full.png",navTitle:"租期已满"},{url:"asset/images/icon/order_cancel.png",navTitle:"订单取消"}]},computed:{},watch:{},filters:{},methods:{toHome:function(){location.href="home.html"},toOrderList:function(){location.href="orderList.html"},toBillOrder:function(){location.href="billOrder.html"},toUserAuth:function(){location.href="UserAuth.html"},toManageAddress:function(){location.href="manageAddress.html"},toAbout:function(){location.href="about.html"}},created:function(){},destroyed:function(){},mounted:function(){document.body.clientWidth;document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px"}});