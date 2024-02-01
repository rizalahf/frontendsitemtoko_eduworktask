 var data = {
        "name": "Lulur",
        "id": 25108,
        "category_id": null,
        "category_name": null,
        "submit": "success",
        "parent": 25107,
        "photo": "https://sistemtoko.com/img/user/demo/product/tbypij-2qws70-img-7377-jpg-jpg.JPG",
        "photo_type": "get_from_parent",
        "buyPrice": 50000,
        "total": 0,
        "display": "product",
        "totalPrice": 0,
        "stock_changes": 0,
        "stock": 10
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk12 = new Vue ({
        el: '#product_display12',
        data: datafinal,
    
       });