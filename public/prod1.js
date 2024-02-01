 var data = {
    "name": "tas 4",
    "id": 25139,
    "category_id": null,
    "category_name": null,
    "submit": "success",
    "parent": 25138,
    "photo": "https://sistemtoko.com/img/user/demo/product/7d4adl-nzbmjz-6-png-png.png",
    "photo_type": "get_from_parent",
    "buyPrice": 60000,
    "total": 0,
    "display": "product",
    "totalPrice": 0,
    "stock_changes": 0,
    "stock": 100
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk1 = new Vue ({
    el: '#product_display1',
    data: datafinal,

   });