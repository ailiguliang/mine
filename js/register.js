// 正则验证

var phoneNum = document.querySelector('.phoneNum'),
    tishi = document.querySelector('.tishi'),
    yanzhneg = document.querySelector('.yanzhneg');



// // 注册手机号的验证
phoneNum.onblur = function () {
    var phoneNumVal = phoneNum.value;
    var reg = /^(13|15|16|17|18|19)\d{9}$/;
    var phoneTest = reg.test(phoneNumVal);
    if (phoneTest == true) {
        tishi.innerHTML = '手机号正确';
    } else {
        tishi.innerHTML = '请输入正确的手机号';
    }
}


// 验证码的验证
yanzhneg.onblur = function () {
    var yanzhnegVal = yanzhneg.value;
    console.log(yanzhnegVal)
    var reg = /^\d{6}$/;
    var yzTest = reg.test(yanzhnegVal);
    if (yzTest == true) {
        tishi.innerHTML = '验证通过';
    } else {
        tishi.innerHTML = '请输入正确的验证码';
    }
}

// 登录密码


// 勾选
