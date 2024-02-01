 var data = {
        "name": "lulur 2",
        "id": 25112,
        "category_id": null,
        "category_name": null,
        "submit": "success",
        "parent": 25111,
        "photo": "https://sistemtoko.com/img/user/demo/product/9ngdpq-13vgu9-img-7362-jpg-jpg.JPG",
        "photo_type": "get_from_parent",
        "buyPrice": 50000,
        "total": 0,
        "display": "product",
        "totalPrice": 0,
        "stock_changes": 0,
        "stock": 99
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk11 = new Vue ({
        el: '#product_display11',
        data: datafinal,
    
       });