 var data = {
        "name": "lulur 3",
        "id": 25115,
        "category_id": null,
        "category_name": null,
        "submit": "success",
        "parent": 25114,
        "photo": "https://sistemtoko.com/img/user/demo/product/n2scfz-fkgpit-img-7405-jpg-jpg.JPG",
        "photo_type": "get_from_parent",
        "buyPrice": 50000,
        "total": 0,
        "display": "product",
        "totalPrice": 0,
        "stock_changes": 0,
        "stock": 19
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk10 = new Vue ({
        el: '#product_display10',
        data: datafinal,
    
       });