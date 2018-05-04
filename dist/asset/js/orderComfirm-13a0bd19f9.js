"use strict";var vm=new Vue({el:"#app",data:{nailUserId:1,nailUserInfoId:1,productId:0,skuId:0,hasDefaultAddress:!1,address:{},order:{nailUserId:"1",nailCropId:"1",productId:"",productPriceId:"",companyName:"",count:"",provinceId:"",cityId:"",districtId:"",address:"",name:"",phone:"",is_once_pay:0,order_remark:"",invitationCode:""},goodsInfo:{productName:"",cover:"",brief:"",count:1,productPrice:{}},isAgreement:!1,showAddressTip:!1,readFile:!1,showPop:!1,popTitle:"",popContent:[],setStyle:""},methods:{submitOrder:function(){var t=this;if(this.submitValid()){var e=getApiUrl("/rest/orders/dingding/create");$.ajax({url:e,type:"POST",dataType:"json",data:this.order,xhrFields:{withCredentials:!0},crossDomain:!0,success:function(e){200==e.code?location.href="userAuth.html?productId="+t.order.productId:ddToast(e.message)},error:function(t){ddToast("网络错误")}})}},submitValid:function(){var t=this;return 0==this.hasDefaultAddress?(this.showAddressTip=!0,!1):0!=this.isAgreement||(this.readFile=!0,$(".readFile").show(),setTimeout(function(){t.readFile=!1,$(".readFile").hide()},1e3),!1)},openModal:function(t){"payTip"==t?(this.popTitle="支付宝免密支付",this.setStyle="",this.popContent=["租用中，相关费用由商户通过支付宝向用户发起扣款，如约归还物品后，支付宝免密支付自动取消"]):"signTip"==t?(this.popTitle="签收须知",this.setStyle="",this.popContent=["收货当天你需求:","1.检查商品外包装完整；","2.快递本人签收；","3.签收当天视为合约生效"]):"contactTip"==t&&(this.popTitle="客服电话",this.setStyle="textAlign:center;fontSize:.38rem;lineHeight:2",this.popContent=["0571-85180735"]),this.showPop=!0},getAddress:function(){var t=this,e=getApiUrl("/api/address/get_default_address/");$.ajax({url:e,type:"GET",dataType:"json",data:{nailUserId:this.nailUserId,nailUserInfoId:this.nailUserInfoId},xhrFields:{withCredentials:!0},crossDomain:!0,success:function(e){200==e.code?e.data?(t.hasDefaultAddress=!0,t.order.name=e.data.username,t.order.phone=e.data.mobile,t.order.address=e.data.detail,t.order.detail=e.data.detail,t.order.provinceId=e.data.provinceId,t.order.cityId=e.data.cityId,t.order.districtId=e.data.districtId,t.order.companyName=e.data.company,t.order.mobile=e.data.mobile.substring(0,4)+"****"+e.data.mobile.substring(7)):t.hasDefaultAddress=!1:ddToast(e.message)},error:function(t){ddToast("网络错误")}})},toManageAddress:function(){location.href="manageAddress.html"},getGoodsInfo:function(){var t=this,e=getApiUrl("/rest/ddproducts/dingding/view");$.ajax({url:e,type:"GET",dataType:"json",data:{id:this.order.productId},xhrFields:{withCredentials:!0},crossDomain:!0,success:function(e){200==e.code?(e.data.productPriceEntity.some(function(e){if(e.id==t.order.productPriceId)return t.goodsInfo.productPrice=e,!0}),t.goodsInfo.productName=e.data.productName,t.goodsInfo.cover=e.data.cover,t.goodsInfo.brief=e.data.brief,t.goodsInfo.count=t.order.count,t.getTotalAmount()):ddToast(e.message)},error:function(t){ddToast("网络错误")}})},getTotalAmount:function(){this.goodsInfo.totalAmount=(this.goodsInfo.count*this.goodsInfo.productPrice.price*this.goodsInfo.productPrice.timeLength).toFixed(2)},countChange:function(){this.getTotalAmount()}},mounted:function(){this.order.productId=getUrlParam("productId"),this.order.productPriceId=getUrlParam("productPriceId"),this.order.count=getUrlParam("count"),this.getAddress(),this.getGoodsInfo()}});