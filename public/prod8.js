 var data = {
        "name": "baju satu",
        "id": 25121,
        "category_id": null,
        "category_name": null,
        "submit": "success",
        "parent": 25120,
        "photo": "https://sistemtoko.com/img/user/demo/product/vzfsba-0hyu4z-img-7214-jpg-jpg.JPG",
        "photo_type": "get_from_parent",
        "buyPrice": 60000,
        "total": 0,
        "display": "product",
        "totalPrice": 0,
        "stock_changes": 0,
        "stock": 30
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk8 = new Vue ({
        el: '#product_display8',
        data: datafinal,
    
       });