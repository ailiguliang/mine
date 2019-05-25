QYKF_PARAM = {
    uid: '',
    name: '',
    email: '',
    mobile: '',
    staffid: '',
    data: JSON.stringify([
        {"key": "real_name", "value": ""},
        {"key": "mobile_phone", "value": ""},
        {"key": "email", "value": ""},
        {"index": 1, "key": "sex", "label": "性别", "value": ""},
        {"index": 2, "key": "reg_date", "label": "注册日期", "value": ""}
    ]),
    robotShuntSwitch: 0,
    success: function () {
        console.log('load qykf successfully!')
        console.log(QYKF_PARAM);
    },
    error: function () {
        console.log('load qykf error!')
        console.log(QYKF_PARAM);
    }
}
ysf('onready', function () {
    ysf('config', QYKF_PARAM);
});