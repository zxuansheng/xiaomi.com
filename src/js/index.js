import { $ } from './library/jquery.js'
import './library/jquery.lazyload.js'
import './library/jquery-slider.js'
$(function () {
    $('.slider').slider({
        speed: 1000,
        delay: 3000
    });
    $('.tabs').tabs({
        ev: 'mouseenter',
        active: 'active',
        content: 'display'
    })
    $('.tabs').mouseleave(function () {
        $(this).children('div').removeClass('display')
    })
    //家居选项卡
    $('.household-header>span').mouseenter(function () {
        let _index = $('.household-header>span').index(this);
        $('.household-main>div').eq(_index + 1).addClass('display').siblings().removeClass('display')
    })
    // 智能选项卡
    $('.mind-header>span').mouseenter(function () {
        let _index = $('.mind-header>span').index(this);
        $('.mind-main>div').eq(_index + 1).addClass('display').siblings().removeClass('display')
    })
    //配件
    $('.fitting-header>span').mouseenter(function () {
        let _index = $('.fitting-header>span').index(this);
        $('.fitting-main>div').eq(_index + 1).addClass('display').siblings().removeClass('display')

    })
    //搭配
    $('.collocation-header>span').mouseenter(function () {
        let _index = $('.collocation-header>span').index(this);
        $('.collocation-main>div').eq(_index + 1).addClass('display').siblings().removeClass('display')

    })
    //首页下拉菜单

    $('.mi-header-ul>li').hover(function () {
        let _index = $('.mi-header-ul>li').index(this);
        $('.list-m').eq(_index).stop().slideDown()
    }
        , function () {
            let _index = $('.mi-header-ul>li').index(this);
            $('.list-m').eq(_index).stop().slideUp(200)
        })
    //返回顶部实现
    $('.backtop').hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".backtop").fadeIn(200);
        } else {
            $(".backtop").fadeOut(200);
        }
    });
    $(".backtop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    //下载app下拉1
    $('.download-a').mouseenter(function () {
        $('.download-img').stop().slideDown()
    })
    $('.download-a').mouseleave(function () {
        $('.download-img').stop().slideUp()
    })
    //下载app下拉2
    $('.download-li').mouseenter(function () {
        $('.download-div').stop().slideDown()
    })
    $('.download-li').mouseleave(function () {
        $('.download-div').stop().slideUp()
    })
    //倒计时部分
    function timer() {
        setInterval(function () {
            let timer = new Date(); //获得当前的时间 在此基础之上加一个小时
            let futuer = new Date(timer.getFullYear(), timer.getMonth(), timer.getDate(), timer.getHours() + 1)
            let current = new Date();
            let ms = futuer - current;
            let s = ms / 1000; // 获得秒
            let hour = parseInt(s % 86400 / 3600) < 10 ? '0' + parseInt(s % 86400 / 3600) : parseInt(s % 86400 / 3600);
            let min = parseInt(s % 3600 / 60) < 10 ? '0' + parseInt(s % 3600 / 60) : parseInt(s % 3600 / 60);
            let sec = parseInt(s % 60) < 10 ? '0' + parseInt(s % 60) : parseInt(s % 60);
            $('.hour').html(hour)
            $('.min').html(min)
            $('.sec').html(sec)
            $('.time-show').html(timer.getHours() + ':00场')
        }, 1000);
    }
    timer()
    //图片懒加载
    $('img').addClass('lazy')
    $("img").attr("data-original", function () { return this.src });
    $("img.lazy").lazyload({ effect: "fadeIn" });
    //
    $('.pr-miusha').slidered()
    //渲染商品首页
    $.ajax({
        type: "get",
        url: "../../interface/getData.php",
        dataType: "json",
        success: function (res) {
            console.log(res)
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);
                console.log(picture);
                // console.log()

                temp += `<li class="phone-ul-li">
                            <a href="./shopping.html?id=${elm.id}">
                                <img src="../${picture[0].src}" alt="">
                                <p>${elm.title}</p>
                                <p>${elm.details}</p>
                                <p>${elm.price}元起</p>
                            </a>
                        </li>`;
            });
            $('.phone-ul').html(temp)
        }
    });
});