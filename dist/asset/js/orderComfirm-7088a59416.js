"use strict";var vm=new Vue({el:"#app",data:{user:{},productDeposit:0,zmStatus:0,productId:0,skuId:0,hasDefaultAddress:!1,address:{},order:{nailUserId:"",nailCropId:"",productId:"",productPriceId:"",companyName:"",count:"",provinceId:"",cityId:"",districtId:"",address:"",name:"",phone:"",is_once_pay:0,order_remark:"",invitationCode:""},goodsInfo:{productName:"",cover:"",brief:"",count:1,productPrice:{},totalAmount:0,productDeposit:0},redeceDeposit:1e4,isAgreement:!1,showAddressTip:!1,readFile:!1,showPop:!1,popTitle:"",popContent:[],setStyle:"",payHtml:"",orderNo:"",orderId:"",isPay:"",name:"",hasSubmit:0},methods:{submitOrder:function(){var t=this;if(this.submitValid()){if("p"==this.isPay)return void this.pay();this.hasSubmit=1,window.localStorage.setItem("tzgInvitationCode",this.order.invitationCode),window.localStorage.setItem("tzgOrderRemark",this.order.order_remark);var o=getApiUrl("/shop-test/rest/orders/Ddcreate");this.order.nailUserId=this.user.userId,this.order.nailCropId=this.user.corpId,this.order.count=this.goodsInfo.count,$.ajax({url:o,type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(this.order),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(o){200==o.code?(t.orderNo=o.data.sn,t.orderId=o.data.orderId,7010==o.data.authCode||7016==o.data.authCode||7022==o.data.authCode?location.href="userAuth.html?productId="+t.order.productId+"&orderNo="+t.orderNo:7014==o.data.authCode?ddToast("授权待审核中"):7015==o.data.authCode&&t.pay()):ddToast(o.message)},error:function(o){ddToast("网络错误"),t.hasSubmit=0}})}},submitValid:function(){var t=this;return 0==this.hasDefaultAddress?(this.showAddressTip=!0,setTimeout(function(){t.showAddressTip=!1},2e3),!1):0!=this.isAgreement||(this.readFile=!0,$(".readFile").show(),!1)},pay:function(){var t=this,o=getPhpApiUrl("/nail/pay.html");$.ajax({url:o,type:"POST",dataType:"json",data:{order_no:this.orderNo,product_id:this.order.productId,product_price_id:this.order.productPriceId,count:this.order.count,order_id:this.orderId},xhrFields:{withCredentials:!0},crossDomain:!0,success:function(o){200==o.code?1==o.data.flag||2==o.data.flag?(2==o.data.flag&&window.localStorage.setItem("tzgPay",!0),location.href=o.data.html):0==o.data.flag&&(t.orderId=o.data.order_id,t.SecretFree()):ddToast(o.message)},error:function(t){ddToast("网络错误")}})},SecretFree:function(){var t=this,o=getPhpApiUrl("/nail/nailpay.html");$.ajax({url:o,type:"POST",dataType:"json",data:{order_no:this.orderNo,order_id:this.orderId},xhrFields:{withCredentials:!0},crossDomain:!0,success:function(o){200==o.code?(t.orderId=o.data,location.href="orderSuccess.html?orderId="+t.orderId):o.code==-1&&(location.href="orderFailed.html?productId="+t.order.productId)},error:function(t){ddToast("网络错误")}})},openModal:function(t){"payTip"==t?(this.popTitle="支付宝免密支付",this.setStyle="",this.popContent=["租用中，相关费用由商户通过支付宝向用户发起扣款，如约归还物品后，支付宝免密支付自动取消"]):"signTip"==t?(this.popTitle="签收须知",this.setStyle="",this.popContent=["收货当天你需求:","1.检查商品外包装完整；","2.快递本人签收；","3.签收当天视为合约生效"]):"contactTip"==t&&(this.popTitle="客服电话",this.setStyle="textAlign:center;fontSize:.38rem;lineHeight:2",this.popContent=['<a href="tel:0571-8518073" style="color:#333">0571-85180735</a>']),this.showPop=!0},getAddress:function(){var t=this,o=getApiUrl("/shop-test/api/address/get_default_address/");$.ajax({url:o,type:"GET",dataType:"json",data:{nailUserId:this.user.userId,nailUserInfoId:this.user.corpId},xhrFields:{withCredentials:!0},crossDomain:!0,success:function(o){200==o.code?o.data?(t.hasDefaultAddress=!0,t.order.name=o.data.addressEntity.username,t.order.phone=o.data.addressEntity.mobile,t.order.address=o.data.addressEntity.detail,t.order.provinceId=o.data.addressEntity.provinceId,t.order.cityId=o.data.addressEntity.cityId,t.order.districtId=o.data.addressEntity.districtId,t.order.companyName=o.data.addressEntity.company,t.order.mobile=o.data.addressEntity.mobile.substring(0,4)+"****"+o.data.addressEntity.mobile.substring(7)):t.hasDefaultAddress=!1:ddToast(o.message)},error:function(t){ddToast("网络错误")}})},toManageAddress:function(t){0==t?location.href="editAddress.html?product="+getUrlParam("product"):1==t&&(location.href="manageAddress.html?product="+getUrlParam("product"))},getGoodsInfo:function(){var t=this,o=getApiUrl("/shop-test/rest/ddproducts/dingding/view");$.ajax({url:o,type:"GET",dataType:"json",data:{id:this.order.productId},xhrFields:{withCredentials:!0},crossDomain:!0,success:function(o){200==o.code?(o.data.productPriceEntity.some(function(o){if(o.id==t.order.productPriceId)return t.goodsInfo.productPrice=o,!0}),t.goodsInfo.productName=o.data.productName,t.goodsInfo.cover=o.data.cover,t.goodsInfo.brief=o.data.brief,t.goodsInfo.count=t.order.count,t.goodsInfo.inventory=o.data.inventory,t.getTotalAmount()):ddToast(o.message)},error:function(t){ddToast("网络错误")}})},getTotalAmount:function(){this.goodsInfo.totalAmount=(this.goodsInfo.count*this.goodsInfo.productPrice.price*this.goodsInfo.productPrice.timeLength).toFixed(2),this.goodsInfo.productDeposit=this.goodsInfo.count*this.goodsInfo.productPrice.price*this.goodsInfo.productPrice.timeLength,7018==this.zmStatus&&(this.goodsInfo.productDeposit=parseFloat(this.goodsInfo.productDeposit)-this.redeceDeposit>0?parseFloat(this.goodsInfo.productDeposit)-this.redeceDeposit:0),this.goodsInfo.productDeposit=this.goodsInfo.productDeposit.toFixed(2)},countChange:function(){this.getTotalAmount()},getZmStatus:function(){var t=this,o=getApiUrl("/shop-test/rest/dingDingUserInfo/DdZmStatus");$.ajax({url:o,type:"POST",dataType:"json",data:{nailCropId:this.user.corpId,userId:this.user.userId},xhrFields:{withCredentials:!0},crossDomain:!0,success:function(o){t.zmStatus=o.code,t.getGoodsInfo()},error:function(t){ddToast("网络错误")}})},adjust:function(t){if(this.goodsInfo.count=parseInt(this.goodsInfo.count),!(t<0&&this.goodsInfo.count<=1)){if(t>0&&this.goodsInfo.count>=parseInt(this.goodsInfo.inventory))return void ddToast("超过库存了");this.goodsInfo.count+=t,this.getTotalAmount()}}},mounted:function(){var t=this;this.user=getSession(),this.getAddress();var o=getUrlParam("product");if(o){var e=o.split("-");this.order.productId=e[0],this.order.productPriceId=e[1],this.order.count=e[2],this.orderId=e[5],e[3]&&(this.isPay=e[3],this.orderNo=e[4],"true"==window.localStorage.getItem("tzgPay")&&(this.order.invitationCode=window.localStorage.getItem("tzgInvitationCode"),this.order.order_remark=window.localStorage.getItem("tzgOrderRemark"),this.isAgreement=!0,setTimeout(function(){t.pay()},2e3),window.localStorage.setItem("tzgPay",!1)))}this.getZmStatus(),window.sessionStorage.setItem("tzdDingDingOrderComfirmUrl",window.location.href)}});