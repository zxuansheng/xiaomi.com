import { $ } from './library/jquery.js'
//轮播图
$.fn.extend({
    slider: function (options) {
        let defaults = {
            speed: 1000, // 动画执行时间
            delay: 3000 // 图片停留时间
        };

        // 合并参数
        $.extend(defaults, options);

        // 抽象功能(将所有可能要执行的动作都声明成变量)
        let main = null, // 主函数(入口函数)
            init = null, // 初始化
            start = null, // 开始动画
            stop = null, // 停止动画
            next = null, // 下一张
            prev = null, // 上一张
            timer = null, // 计时器
            elms = {}; // 命名空间 提供可共享作用域的变量


        init = function () {
            // 1. 获得元素
            elms.sliderElm = this.children('div');
            elms.btns = this.children('span');
            elms.lis = $('.list>li');
            // console.log(elms.lis)
            // 2. 复制第一张图片
            elms.sliderElm.append(elms.sliderElm.children('img').first().clone());
            // 获得图片宽度
            elms.imgWidth = elms.sliderElm.children('img').first().width();
            // 设置播放索引
            elms.index = 1;
            // 悬停事件
            this.hover(function () {
                stop();
            }, function () {
                timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
            });

            // 按钮点击事件
            elms.btns.on('click', function () {
                if (elms.btns.index(this)) {
                    next();
                } else {
                    prev();
                }
            });
            elms.lis.on('click', function () {
                console.log(elms.lis)
                let _index = elms.lis.index(this);
                let res = elms.imgWidth * _index;
                switch (elms.lis.index(this)) {
                    case 0:
                        elms.sliderElm.css('left', `0`);
                        break;
                    case 1:
                        elms.sliderElm.css('left', `-${res}px`);
                        break;
                    case 2:
                        elms.sliderElm.css('left', `-${res}px`);
                        break;
                    case 3:
                        elms.sliderElm.css('left', `-${res}px`);
                        break;
                    case 4:
                        elms.sliderElm.css('left', `-${res}px`);
                        break;

                }


            })

        }.bind(this);


        start = function (direction) {
            let left = `-=${elms.imgWidth}`;

            if (!direction) {
                left = `+=${elms.imgWidth}`;

                if (elms.index === 1) {
                    elms.index = 6;
                    let divLeft = this.offset().left,
                        imgLeft = elms.sliderElm.children('img').last().offset().left;
                    elms.sliderElm.css('left', `-${imgLeft - divLeft}px`);
                }
            }

            elms.sliderElm.animate({
                left: left
            }, defaults.speed, function () {
                if (direction) {
                    elms.index++;
                } else {
                    elms.index--;
                }

                if (elms.index === 6) {
                    elms.index = 1;
                    elms.sliderElm.css('left', 0);
                }
            });
        }.bind(this);


        stop = function () {
            clearInterval(timer);
            elms.sliderElm.stop(true, true);
        }

        next = function () {
            stop();
            start(1);
        }

        prev = function () {
            stop();
            start(0);
        }



        main = function () {
            init();
            timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
        }

        main();
    },
    //选项卡
    tabs: function (options) {
        let defaults = {
            ev: 'click',
            active: 'actived',
            content: 'display'
        };

        $.extend(defaults, options); //合并对象 将 defaults中的内容合并到options中
        // console.log(options)
        // console.log(defaults)
        // console.log(options==defaults) 
        // 元素选取  this指向实例对象
        // console.log(this)
        let btns = this.children('ul').children('li');
        let divs = this.children('div');
        btns.on(defaults.ev, function () {
            let index = btns.index(this);
            $(this).addClass(defaults.active).siblings().removeClass(defaults.active);
            divs.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
        });
    }

});


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
    $('.mi-header-ul>li>a').mouseover(function () {
        console.log($('.mi-header-ul>li>a'))
        let _index = $('.mi-header-ul>li>a').index(this);
        $('.list-m').eq(_index).stop().slideDown()
    })
    $('.mi-header-ul>li').mouseleave(function () {
        let _index = $('.mi-header-ul>li').index(this);
        $('.list-m').eq(_index).stop().slideUp()
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
    console.log($('.download-a'))
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
            var current = new Date();
            var ms = futuer - current;
            var s = ms / 1000; // 获得秒
            var hour = parseInt(s % 86400 / 3600) < 10 ? '0' + parseInt(s % 86400 / 3600) : parseInt(s % 86400 / 3600);
            var min = parseInt(s % 3600 / 60) < 10 ? '0' +  parseInt(s % 3600 / 60) : parseInt(s % 3600 / 60);
            var sec = parseInt(s % 60) < 10 ? '0' + parseInt(s % 60) :parseInt(s % 60);
            $('.hour').html(hour)
            $('.min').html(min)
            $('.sec').html(sec)
            $('.time-show').html(timer.getHours() + ':00场')
        }, 1000);
    }
    timer()
});