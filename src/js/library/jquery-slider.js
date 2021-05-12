import { $ } from './jquery.js'
(function ($) {
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
        tabs: function (options) {
            let defaults = {
                ev: 'click',
                active: 'actived',
                content: 'display'
            };

            $.extend(defaults, options); //合并对象 将 defaults中的内容合并到options中
            let btns = this.children('ul').children('li');
            let divs = this.children('div');
            btns.on(defaults.ev, function () {
                let index = btns.index(this);
                $(this).addClass(defaults.active).siblings().removeClass(defaults.active);
                divs.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
            });
        },
        slidered: function (options) {
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
                elms.sliderElm = $('.li1');
                console.log(elms.sliderElm)
                elms.btns = this.children('span');
                elms.sliderUl =this.children('ul')
                console.log(elms.btns)
                console.log(elms.sliderUl)
                // console.log(elms.lis)
                // 2. 复制第一个li元素
                elms.sliderElm.first().clone()
                // console.log( elms.sliderElm.append(elms.sliderElm.first().clone()))
                // 获得图片宽度
                elms.imgWidth = elms.sliderElm.width();
                console.log(elms.imgWidth)
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
                // elms.lis.on('click', function () {
                //     console.log(elms.lis)
                //     let _index = elms.lis.index(this);
                //     let res = elms.imgWidth * _index;
                //     switch (elms.lis.index(this)) {
                //         case 0:
                //             elms.sliderElm.css('left', `0`);
                //             break;
                //         case 1:
                //             elms.sliderElm.css('left', `-${res}px`);
                //             break;
                //         case 2:
                //             elms.sliderElm.css('left', `-${res}px`);
                //             break;
                //         case 3:
                //             elms.sliderElm.css('left', `-${res}px`);
                //             break;
                //         case 4:
                //             elms.sliderElm.css('left', `-${res}px`);
                //             break;

                //     }


                // })

            }.bind(this);


            start = function (direction) {
                let left = `-=${elms.imgWidth}`;
                console.log(left)

                if (!direction) {
                    left = `+=${elms.imgWidth*4}`;

                    if (elms.index === 1) {
                        elms.index = 6;
                        let divLeft = this.offset().left,
                            imgLeft = elms.sliderElm.last().offset().left;
                        elms.sliderUl.css('left', `-${imgLeft - divLeft}px`);
                    }
                }

                elms.sliderUl.animate({
                    left: left
                }, defaults.speed, function () {
                    if (direction) {
                        elms.index++;
                    } else {
                        elms.index--;
                    }

                    if (elms.index === 12) {
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
                start(4);
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
        }


    });
})($);