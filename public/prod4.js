 var data = {
    "name": "tas 1",
    "id": 25133,
    "parent": 0,
    "photo": "https://sistemtoko.com/img/user/demo/product/kdkxol-mxnjcy-23-png-png.png",
    "photo_type": "customize",
    "total": 0,
    "display": "product",
    "totalPrice": 0,
    "stock_changes": 0,
    "stock": 54,
    "varian": [],
    "plain_varian": [],
    "childs": [],
    "type": "parent",
    "local": 0,
    "status": "active",
    "description": "",
    "currency": "Rp.",
    "plain_price": "100000.0000",
    "price_before_discount": "0.0000",
    "price": "100.000",
    "publish": "true",
    "code": "P101",
    "plain_code": "P101"
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk4 = new Vue ({
    el: '#product_display4',
    data: datafinal,

   });