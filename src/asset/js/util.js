function uploadImg(e, url) {
    return new Promise((resolve, reject) => {
        const imgFile = e.target.files[0]
        let length = imgFile.length
        let formData = new FormData()
        formData.append('picture', imgFile)
        formData.append('filename', imgFile.name)

        $.ajax({
            url: url,
            type: "POST",
            // dataType: "json",
            data: formData,
            // contentType: "application/json;charset=utf-8",
            // contentType: "multipart/form-data",
            contentType: false,  
            processData: false,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: result => {
                if (result.code == 200) {
                    resolve(result.data)
                } 
            },
            error: e => {
                reject('上传失败')
            }
        });
    })
}


function checkID(ID) {
	if (typeof ID !== 'string') return false;
	var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
	var birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2));
	var d = new Date(birthday);
	var newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate());
	var currentTime = new Date().getTime();
	var time = d.getTime();
	var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
	var sum = 0, i, residue;

	if (!/^\d{17}(\d|x)$/i.test(ID)) return false;
	if (city[ID.substr(0, 2)] === undefined) return false;
	if (time >= currentTime || birthday !== newBirthday) return false;
	for (i = 0; i < 17; i++) {
		sum += ID.substr(i, 1) * arrInt[i];
	}
	residue = arrCh[sum % 11];
	if (residue !== ID.substr(17, 1)) return false;

	return true
}

//解析url
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return decodeURI(r[2]);
	return null; //返回参数值
}


//租赁正式域名
function getHostUrl(url) {
    const tzg_lease_domain = "https://lease.taozugong.com"; 
    return tzg_lease_domain + url
}
//接口api地址
function getApiUrl(url) {
    const taozugonghost = "//api.taozugong.com/8080";
    return taozugonghost + url
}