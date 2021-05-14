import { $ } from './library/jquery.js'
import  {cookie}from './library/cookie.js';
let id = location.search.split('=')[1];
$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        let picture = JSON.parse(res.picture);

        let temp = `
        <img src="../${picture[0].src}" >
        `;

        $('.left-pr').append(temp);

        //收到数据渲染商品详情页
        let temp1=`
        <h2>${res.title}</h2>
                <p>${res.title} | ${res.details}</p>
                <p>小米自营</p>
                <p>${res.price}元</p>
                <div><img src="../img/index/beijing.png" alt=""></div>
                <p class="pp">选择配置 </p>
                <p class="p-a">
                    <a href="#" class="fl">8GB+256GB</a>
                    <a href="#" class="fr">12GB+256GB</a>
                    <a href="#" class="fl">16GB+512GB</a>
                </p>
                <p class="pp">选择颜色</p>
                <p >
                    <a href="#" class="fl">银色</a>
                    
                </p>
                <p class="tol">总计：${res.price}元</p>
                <a href="./shopcar.html" class="btn btn-warning" id="additem">加入购物车</a>
        `
        $('.right-pr').append(temp1).find('#additem').on('click',function(){
            addItem(res.id, res.price, 1)
        });
        let temp3 =`
            <span class="pr-span1">${res.title}</span>
            <span>| ${res.details}</span>
            <span class="fr">用户评价</span>
            <span class="fr">咨询客服 |</span>
            <span class="fr">F码通道 |</span>
            <span class="fr">参数页 |</span>
            <span class="fr">概述页 |</span>
        `
        $('.product-c').append(temp3)
    }
});

function addItem(id, price, num) {
    let shop = cookie.get('shop');
    console.log(shop)
    let product = {
        id,
        price,
        num
    }
    // 判断当前cookie中是否有购物数据
    if (shop) { // 如果有数据 取出是一个字符串
        shop = JSON.parse(shop);

        // 添加之前先要判断数据中有没有该商品
        if (shop.some(el => el.id === id)) {
            let _index = shop.findIndex(elm => elm.id == id);
            let count = parseInt(shop[_index].num);
            count += parseInt(num); //再次点击加入购物车就增加一
            shop[_index].num = count;
        } else {
            shop.push(product);
        }


    } else { // 第一次没有数据的情况 创建一个新数据
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop), 1); //有商品
}
