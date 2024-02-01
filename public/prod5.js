 var data = {
    "name": "baju empat",
    "id": 25131,
    "category_id": null,
    "category_name": null,
    "submit": "success",
    "parent": 25130,
    "photo": "https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG",
    "photo_type": "get_from_parent",
    "buyPrice": 80000,
    "total": 0,
    "display": "product",
    "totalPrice": 0,
    "stock_changes": 0,
    "stock": 55
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk5 = new Vue ({
    el: '#product_display5',
    data: datafinal,

   });