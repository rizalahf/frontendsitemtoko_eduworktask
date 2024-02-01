 var data = {
        "name": "baju tiga",
        "id": 25128,
        "category_id": null,
        "category_name": null,
        "submit": "success",
        "parent": 25127,
        "photo": "https://sistemtoko.com/img/user/demo/product/qwkggf-0va3bn-img-6499-jpg-jpg.JPG",
        "photo_type": "get_from_parent",
        "buyPrice": 60000,
        "total": 0,
        "display": "product",
        "totalPrice": 0,
        "stock_changes": 0,
        "stock": 29
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk6 = new Vue ({
        el: '#product_display6',
        data: datafinal,
    
       });