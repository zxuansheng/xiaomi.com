import { $ } from './library/jquery.js'
import { cookie } from './library/cookie.js'
let shop = cookie.get('shop');

if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: { idList: idList },
        dataType: "json",
        success: function (res) {
            let temp = '';
            res.forEach(elm => {
                let picture = JSON.parse(elm.picture);
                // 让ajax请求到的数据结果中遍历后的id与cookie中数据的id 相同的数据
                let current = shop.filter(val => val.id == elm.id);
                temp += `   
                            <div class="product-mi">
                                <input type="checkbox" class="c-b">
                                <img src="../${picture[0].src}" alt="" class="img1">
                                <p>${elm.title}</p>
                                <p>${parseFloat(elm.price).toFixed(2)}元</p>
                                <p class="p-goods">
                                    <a  id="less" data-id="${elm.id}">-</a>
                                    <input type="text" class="goods-num form-control" value="${current[0].num}">
                                    <a  id="add" data-id="${elm.id}" >+</a>
                                </p>
                                <p style="color: red;" class="p-tol">${(elm.price * current[0].num).toFixed(2)}</p>
                                <p class="del" data-id="${elm.id}">X</p>
                            </div>`;
            });
            //删除商品
            $('.shop-c1').append(temp).find('.del').on('click', function () {
                let res = shop.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1);
                location.reload();
            })
            //增加商品
            $('.shop-c1').find('.product-mi>.p-goods>#add').on('click', function () {
                let res = shop.filter(el => el.id == $(this).attr('data-id'))
                let inp = $(this).siblings('input')
                let tol = $(this).parent().siblings('.p-tol')
                res[0].num++      //获得对应id的cookie的值
                if (res[0].num < 100) {
                    inp.val(res[0].num)
                    let tol1 = parseInt(inp.val()) * parseInt(res[0].price)
                    tol.text(tol1.toFixed(2))
                } else {
                    alert('cuowu')
                }
                cookie.set('shop', JSON.stringify(shop), 1);//设置cookie
            })
            //删除商品数量
            $('.shop-c1').find('.product-mi>.p-goods>#less').on('click', function () {
                let res = shop.filter(el => el.id == $(this).attr('data-id'))
                let inp = $(this).siblings('input')
                let tol = $(this).parent().siblings('.p-tol')
                res[0].num--      //获得对应id的cookie的值
                if (res[0].num) {
                    inp.val(res[0].num)
                    let tol1 = parseInt(inp.val()) * parseInt(res[0].price)
                    tol.text(tol1.toFixed(2))
                } else {
                    alert('cuowu')
                }
                cookie.set('shop', JSON.stringify(shop), 1);//设置cookie
            })
            //全选
            let check1 = $('.shop-c1').find($('.c-b'))
            $('.allcheck').on('click', function () {
                if (this.checked) {
                    check1.prop("checked", true);
                } else {
                    check1.prop("checked", false);
                }
                total()
            })
            //总计
            for (let i = 0; i < check1.length; i++) {
                $(check1[i]).on('click', function () {
                    total()
                })
            }
            //总商品数量

        }
    });
}
function total() {
    let num = 0;
    let num2 =0;
    let len = $('.p-tol').length;
    let tol = $('.p-tol')
    let check1 = $('.shop-c1').find($('.c-b')) //获得复选框
    let tolnum = $('.goods-num')//获得商品的数量
    let to_num= $('.to-num')//获得要填充的商品的数量的元素
    let total = $('.total') //获得要填充总价的元素
    for (let i = 0; i < len; i++) {
        // $('.p-tol').text()
        if (check1[i].checked) {  
            num += parseInt(tol[i].innerText);
            num2 += parseInt(tolnum[i].value)
        }

    }
    total.text('合计：'+num+'元') 
    to_num.text( '已购'+num2+'件' )
    
}


