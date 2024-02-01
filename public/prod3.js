 var data = {
    "name": "tas 2",
    "id": 25135,
    "category_id": null,
    "category_name": null,
    "submit": "success",
    "parent": 25134,
    "photo": "https://sistemtoko.com/img/user/demo/product/vsarzz-j8x3tm-18-png-png.png",
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

var produk3 = new Vue ({
    el: '#product_display3',
    data: datafinal,

   });