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
            })
            //总计
            
            
            //总商品数量
            
            console.log($('.shop-c1').find('.product-mi>.p-goods>.goods-num'))
            

        }
    });
}
