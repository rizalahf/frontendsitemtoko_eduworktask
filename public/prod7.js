 var data = {
        "name": "hijab dua",
        "id": 25125,
        "category_id": null,
        "category_name": null,
        "submit": "success",
        "parent": 25124,
        "photo": "https://sistemtoko.com/img/user/demo/product/jwxhrx-0npi8m-img-6670-jpg-jpg.JPG",
        "photo_type": "get_from_parent",
        "buyPrice": 100000,
        "total": 0,
        "display": "product",
        "totalPrice": 0,
        "stock_changes": 0,
        "stock": 10
            }

var datapar = JSON.stringify(data);

var datafinal = JSON.parse(datapar);

var produk7 = new Vue ({
        el: '#product_display7',
        data: datafinal,
    
       });