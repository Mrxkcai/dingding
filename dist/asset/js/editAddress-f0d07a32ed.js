"use strict";var vm=new Vue({el:"#app",data:{user:{},addressId:"",address:{addressId:"",nailUserId:"1",nailUserInfoId:"1",username:"",mobile:"",company:"",provinceId:0,cityId:0,districtId:0,detail:""},addressName:"",validate:["username","mobile","company","provinceId","detail"],addressShow:!1,detailAddresslist:[],addressVisible:!1,addressList:[{name:"浙江省",id:"330903"},{name:"杭州市",id:"330903"},{name:"西湖区",id:"330903"}],province:province},methods:{getAddress:function(){var s=this,d=getApiUrl("/shop-test/api/address/get_shipping_address_one/");$.ajax({url:d,type:"POST",dataType:"json",data:{nailUserId:this.user.userId,nailUserInfoId:this.user.corpId,addressId:this.addressId},xhrFields:{withCredentials:!0},crossDomain:!0,success:function(d){200==d.code?(s.address=d.data.addressEntity,s.addressName=d.data.addressVo.prefix):ddToast(d.message)},error:function(s){ddToast("网络错误")}})},saveAddress:function(){var s=this,d=0;if(this.validate.some(function(e){if(!s.address[e])return ddToast("请填写完整"),d=1,!0}),!d){if(!phoneValid(this.address.mobile))return void ddToast("手机号码格式错误");this.address.addressId=this.addressId,this.address.nailUserId=this.user.userId,this.address.nailUserInfoId=this.user.corpId;var e=getApiUrl("/shop-test/api/address/add_shipping_address/");$.ajax({url:e,type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(this.address),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(s){200==s.code?location.href="manageAddress.html":ddToast(s.message)},error:function(s){ddToast("网络错误")}})}},addressChange:function(s){var d=this;this.addressName="",s.forEach(function(s){d.addressName+=s.name+" "}),this.address.provinceId=s[0].id,this.address.cityId=s[1].id,this.address.districtId=s[2].id},getDetailAddress:function(){var s=this,d="";d=""==this.address.provinceId?"":this.address.cityId;var e=this.address.detail,a="";AMap.plugin(["AMap.Autocomplete","AMap.PlaceSearch"],function(){var i={city:d};a=new AMap.Autocomplete(i),a.search(e,function(d,e){s.detailAddresslist=e.tips})}),this.addressShow=!0},looseBlur:function(){this.addressShow=!1},chooseDetailAddress:function(s){this.address.detail=s.name,this.addressShow=!1},chooseAddress:function(){var s=this;setTimeout(function(){s.addressVisible=!s.addressVisible},550)}},mounted:function(){this.user=getSession(),this.addressId=getUrlParam("addressId"),this.addressId&&this.getAddress()}});