 var data = {
        "name": "lulur 4",
        "id": 25118,
        "category_id": null,
        "category_name": null,
        "submit": "success",
        "parent": 25117,
        "photo": "https://sistemtoko.com/img/user/demo/product/4d9fb9-ashl4q-img-7389-jpg-jpg.JPG",
        "photo_type": "get_from_parent",
        "buyPrice": 50000,
        "total": 0,
        "display": "product",
        "totalPrice": 0,
        "stock_changes": 0,
        "stock": 50
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk9 = new Vue ({
        el: '#product_display9',
        data: datafinal,
    
       });