"use strict";var vm=new Vue({el:"#app",components:{},props:{},data:{tabDefault:[{id:-1,name:"全部"},{id:0,name:"待支付"},{id:2,name:"待发货"},{id:3,name:"待收货"}],tabNew:[],tab:[{id:-1,name:"全部"},{id:0,name:"待支付"},{id:2,name:"待发货"},{id:3,name:"待收货"}],open:!1,tabId:-1,clientWidth:{},categryList:[{id:9,name:"租赁中"},{id:1,name:"订单取消"},{id:10,name:"租期已满"}],orderList:[{orderId:1,cover:"http://img.taozugong.com/product/2018-04-11/15293fb5jTpA2a",createTime:"2018-10-10 10:10:19",orderState:"待发货",status:1,productName:"123",brief:"21324",totalAmount:123},{orderId:1,cover:"http://img.taozugong.com/product/2018-04-11/15293fb5jTpA2a",createTime:"2018-10-10 10:10:1",orderState:"待发货",status:1,productName:"123",brief:"21324",totalAmount:123}],page:1,pageSize:15,status:-1,loading:!1,isEnd:!1,orderStatus:{cancel:"1",unpay:"0",lease:"9",complete:"10",send:"2",receive:"3",end:"4"}},computed:{},watch:{},filters:{},methods:{loadMore:function(){1!=this.isEnd&&(this.loading=!0,this.getOrderList())},getOrderList:function(){alert(1)},showCategory:function(){this.open=!this.open,this.open?(this.tabNew=this.tab,this.tab=this.tabDefault):this.tab=this.tabNew},chooseCategory:function(t,e){e==-1&&(e=9==t||1==t||10==t?1:0),e?(this.open=!1,this.tabNew=this.categryList,this.tab=this.tabNew):!e&&this.open&&(this.open=!1),this.tabId=t,this.orderList=[],this.page=1,this.loading=!1,this.isEnd=!1,this.getOrderList()}},created:function(){},destroyed:function(){},mounted:function(){document.body.clientWidth;document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px"}});