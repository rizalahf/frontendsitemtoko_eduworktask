 var data = {
    "name": "tas 3",
    "id": 25137,
    "category_id": null,
    "category_name": null,
    "submit": "success",
    "parent": 25136,
    "photo": "https://sistemtoko.com/img/user/demo/product/jakc1i-ovhycn-1-png-png.png",
    "photo_type": "get_from_parent",
    "buyPrice": 20000,
    "total": 0,
    "display": "product",
    "totalPrice": 0,
    "stock_changes": 0,
    "stock": 100
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk2 = new Vue ({
    el: '#product_display2',
    data: datafinal,

   });