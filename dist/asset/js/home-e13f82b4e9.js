"use strict";var vm=new Vue({el:"#app",components:{},props:{loading:!1},data:{id:"",goodsList1:[],show:!0,selected:[]},computed:{},watch:{},filters:{},methods:{getGoodsList:function(t){var e=this,o=getApiUrl("/rest/products/list");$.ajax({type:"GET",url:o,xhrFields:{withCredentails:!0},crossDomain:!0,data:{categoryId:1},success:function(t){e.goodsList1=t.data}})},toUserCenter:function(){location.href="userCenter.html"},toGoodsDetail:function(t){location.href="goodsDetail.html?productId="+t},getCode:function(){var t="ding232f30042c7d834635c2f4657eb6378f",e=requestAuthCode(t);alert(e)}},created:function(){},destroyed:function(){},mounted:function(){this.getGoodsList(),this.getCode()}});