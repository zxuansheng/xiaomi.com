import { $ } from './library/jquery.js'
$(function () {
    // 用户名验证
    $('.username').change(function () {
        console.log($('.username').val())
        let username = $('.username').val();
        let reg = /^[a-zA-Z_]{3,18}$/;
        if (username == "") {
            $('.YHMerror').html('请输入用户名')
        } else if (username.length < 3 || username > 18) {
            $('.YHMerror').html('长度应为3-18字符')
        } else if (!reg.test(username)) {
            $('.YHMerror').html('只能包含英文字母和下划线')
        } else {
            $('.YHMerror').html('牛的')
        }
    })
    //密码验证
    $('.password').change(function () {
        let password = $('.password').val();
        console.log(password)
        let reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/;
        if (password == "") {
            $('.MMerror').html('请输入密码')
        } else if (password.length < 6) {
            $('.MMerror').html('密码长度至少6位')
        } else if (!reg.test(password)) {
            $('.MMerror').html('必须包含英文字母大小写和数字')
        } else {
            $('.MMerror').html('输的好啊哥哥儿')
        }
    })
    //邮箱
    $('.email').change(function () {
        let email = $('.email').val();
        console.log(email)
        let reg = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
        if (email == "") {
            $('.DZYXerror').html('请输入电子邮箱')
        } else if (!reg.test(email)) {
            $('.DZYXerror').html('请输入正确的格式')
        } else {
            $('.DZYXerror').html('输的好呀哥哥儿')
        }
    })
    //联系电话
    $('.phone').change(function () {
        let phone = $('.phone').val();
        let reg = /^1\d{10}$/;
        if (phone == "") {
            $('.LXDHerror').html('请输入电话号码')
        } else if (!reg.test(phone)) {
            $('.LXDHerror').html('输入电话格式错误')
        } else {
            $('.LXDHerror').html('输得好啊')
        }
    })
})