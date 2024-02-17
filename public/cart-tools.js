   //############################## FUNGSI KETIKA KLIK ADD TO SHOPING CART ###############################

   $(document).ready(function() {
        
    var totalPrice  = 0;
    var totalWeight = 0;
    var selectedExpeditionCost = 0;
    var list_cart   = null;

    $.ajaxSetup({
        headers: { 'X-CSRF-Token' : "IB9J63DD3GOHRiBhaPkTr0PBJ2TzJRYF29piuaes", "X-Requested-With": "XMLHttpRequest" }
    });

    // hide shipping option if none active
    if (!locOrigin) {
        $('.shipping').remove();
    }

    // enable input when bootsrap modal shown
    $('.modal').on('shown.bs.modal', function() {
        $(document).off('focusin.modal');
    });

    //fungsi global untuk menyimpan data di localstorage berupa json 
    window.addCart = function (product_id, product_name, product_img , product_price, product_weight, product_stock) {
        $("#step2, #step3, #step4").hide();
        $("#step1").show();

        $("#cart-wrapper").removeClass("toggled");
        // retrieve it (Or create a blank array if there isn't any info saved yet),
        cart = localStorage.getItem('cart'); 

        //merubah cart menjadi array
        if ( cart == null || cart == "" ) { 
            cart = [] ; 
        } else {
            cart = JSON.parse(localStorage.getItem('cart')); 
        }

        // berat product tidak bisa 0 atau tidak ada
        if (product_weight == 0 || typeof product_weight === 'undefined' || product_weight === null) {
            product_weight = 1;
        }

        //cek dulu di json udah ada id produk blm , klo blm ada insert baru 

        status = "notExist"; 
        $.each(cart, function (i,data) {
            if ( data.product_id == product_id) {
                status = "exist";
                var newQty = parseInt(data.product_qty) + 1;
                if (newQty > product_stock) {
                    alert('Stok tidak memadai!!!');
                    return;
                }
                cart[i].product_qty = newQty; 
            }
        });

        if ( status == "notExist" ) {
            // memasukan list baru 
            cart.push({
                product_id: product_id, 
                product_name: product_name, 
                product_img: product_img, 
                product_price: product_price, 
                product_qty: 1,
                product_weight: product_weight,
                product_img: product_img,
                product_stock: product_stock == 'unlimited' ? 99999999 : product_stock,
            });
            // facebook event track add to cart
            if(typeof fbq == 'function') {
                fbq('track', 'AddToCart');
            }
            if (typeof ga == 'function') {
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Product',
                    eventAction: 'AddToCart',
                    eventLabel: 'Add to Cart'
                });
            }
        }

        //reset status
        status = "notExist"; 

        //console.log("isi cart: "+JSON.stringify(cart)) ;
        //console.log(cart) ;

        localStorage.setItem('cart', JSON.stringify(cart));
        refresh_cart();
    }

    //cek support local storage atau tidak 
    if(typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
    } else {
        alert("sorry , your browser is not support local storage , please open this website in other browser");
    }

    // fungsi pengirman akan aktif jika user menset fitur dan alamat pengiriman
    if(locOrigin) {
        // loading shipping location
        $.ajax({
            url: 'https://hijja.sistemtoko.com' + '/province',
            type: 'GET',
            dataType: 'json',
            beforeSend: function() {
        
                $('#loading-province').html('Loading... <span class="glyphicon glyphicon-refresh spinning"></span>');
            },
        }).done(function(response) {
            // append option
            $.each(response, function(index, val) {
                var option = $('<option/>', {'value' : val.province_id}).text(val.province);
                $('#province').append(option);
            });
        }).fail(function() {
            alert('error getting provinces');
        }).always(function() {
            $('#loading-province').text('');
        });

        // haqisaurus on province change it will fetch city data and disabled district
        $(document)
            .off('change', '#province')
            .on('change', '#province', function(e) {
                var _this = this;

                $.ajax({
                    url: 'https://hijja.sistemtoko.com' + '/city/' + $(_this).val(),
                    type: 'GET',
                    dataType: 'json',
                    beforeSend: function() {
                        $('#loading-city').html('Loading... <i class="fa fa-refresh spinning" aria-hidden="true"></i>');
                    },
                }).done(function(response) {
                    // append option
                    $('#city :not(.default-option)').remove();
                    $.each(response, function(index, val) {
                        var option = $('<option/>', {'value' : val.city_id}).text(val.city_name);
                        $('#city').append(option).removeAttr('disabled');
                        $('#district').prop('disabled', true);
                        $('#district').find('.default-option').prop('selected', true);
                    });

                }).fail(function() {
                    alert('error getting city');
                }).always(function() {
                    $('#loading-city').text('');
                });
        });

        // haqisaurus jika kota diganti maka akan men-fetch Kecamatan
        $(document)
            .off('change', '#city')
            .on('change', '#city', function(e) {
                var _this = this;

                $.ajax({
                    url: 'https://hijja.sistemtoko.com' + '/subdistrict',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        id: $(_this).val()
                    },
                    beforeSend: function() {
                        $('#loading-district').html('Loading... <i class="fa fa-refresh spinning" aria-hidden="true"></i>');
                    },
                }).done(function(response) {
                    // append option
                    $('#district :not(.default-option)').remove();
                    $.each(response, function(index, val) {
                        var option = $('<option/>', {'value' : val.subdistrict_id}).text(val.subdistrict_name);
                        $('#district').append(option).removeAttr('disabled');

                    });
                }).fail(function(t) {
                    console.log(t)
                    alert('error getting district');
                }).always(function() {
                    $('#loading-district').text('');
                });
        });

        // haqisaurus jika Kecamatan/ district diganti makan akan men-fetch jasa pengiriman yang tersedia
        var errorTimes = 0;
        $(document)
            .off('change', '#district')
            .on('change', '#district', function(e) {

                var _this            = this;
                var destID       = $('#submit_order select[name=delivery_district]').val();
               
                var dataRequest = {
                    id: brandID,
                    destination: destID,
                    weight: totalWeight,
                };
            
                $.ajax({
                    url: 'https://hijja.sistemtoko.com' + '/ongkir',
                    type: 'GET',
                    dataType: 'json',
                    data: dataRequest,
                    beforeSend: function() {
                        $('#step3').find('.go-step-3').attr('disabled', 'disabled');
                        $('#loading-ongkir').html('Loading data ongkir... <i class="fa fa-refresh spinning" aria-hidden="true"></i>');
                    }
                })
                .done(function(response) {

                    $('#step3').find('.go-step-3').removeAttr('disabled');
                     // generate expedition option

                    $('#service').html('');

                    if (response.status) {


                        $.each(response.data, function(indexGroup, val) {
                            var groupoption = '';

                            if (val.costs.length) {
                                var groupoption = $('<optgroup/>', {label: val.code});
                                var sorted      = val.costs.sort(function (a, b) {
                                    return a.cost[0].value - b.cost[0].value;
                                });

                                $.each(sorted, function(index, service) {
                                    // shorting by price
                                    var etd    = service.cost[0].etd ? ' (' + service.cost[0].etd + 'days)' : ''
                                    var option = $('<option/>', {'value' : service.cost[0].value, 'data-service' : service.service, 'data-code': val.code}).text(toRp(service.cost[0].value) + ' - (' + service.service + ') - ' + service.description  + etd);
                                    groupoption.append(option);
                                });
                            }

                            $('#service').append(groupoption);
                            // simpan selected untuk perhitungan jika ganti kurir
                            setTimeout(function() {
                                selectedExpeditionCost = $('#service').val();
                            }, 200);

                        });
                    } else {

                        if (confirm('Gagal mendapatkan data ongkir, Coba lagi?') && errorTimes < 2) {
                            errorTimes++;
                            $('#district').trigger('change');
                        } else {
                            // hapus opsi pengiriman
                            alert('Sepertinya server rajaongkir error\nKami akan menghapus opsi pengiriman. \nBiaya pengiriman akan dihubungi oleh Customer Service kami.');
                            $('.shipping').remove();
                            locOrigin = null;
                            showListReview();
                        }
                    }
                    // generate cart review
                    showListReview();
                })
                .fail(function(e) {

                    if (window.confirm('Gagal mendapatkan data ongkir, Coba lagi?') && errorTimes < 2) {
                        errorTimes++;
                        $('#district').trigger('change');
                    } else {
                        // hapus opsi pengiriman
                        alert('Sepertinya server rajaongkir error\nKami akan menghapus opsi pengiriman. \nBiaya pengiriman akan dihubungi oleh Customer Service kami.');
                        $('.shipping').remove();
                        locOrigin = null;
                        showListReview();
                    }
                })
                .always(function() {
                    
                    // first index will calculate as cost on init
                    var currentPrice = $('#service').val();
                    var expedition   = $("#service option:selected").text();
                    total            = totalPrice + parseInt(currentPrice);

                    $('#submit_order').find('#expedition').val(expedition);
                    $('#review-cart .total-cost').html(toRp(total));
                    $('#review-cart .cost-shipment').html(toRp(currentPrice));
                    $('#loading-ongkir').text('');

                    // calculation shipping and total cart
                    showListReview();
                });
            });
    }

    $(document)
        .off('change', '#service')
        .on('change', '#service', function(e) {

            var currentPrice = $(this).val();
            var expedition   = $("#service option:selected").text();
            totalPrice       = totalPrice - selectedExpeditionCost; // dikurangi biaya kurir sebelumnya
            total            = totalPrice + parseInt(currentPrice);
            selectedExpeditionCost = currentPrice;

            $('#submit_order').find('#expedition').val(expedition);
            $('#total-review .total-cost').html(toRp(total));
            $('#total-review .cost-shipment').html(toRp(currentPrice));
        });

    //pertama kali laod , cek shopping cart untuk debuging
    isi = localStorage.getItem('cart');
    //console.log("shopping cart right now : "+isi);
    $("#cart-order-list").val(isi) ; 

    $("#black").click(function() {
        //console.log("tes") ; 
        $("#black").hide();
        closeShowingModal();
    });

    function convertToAngka(rupiah)
    {
        return parseInt(String(rupiah).replace(/(\,\d\d)|(\.\d\d)?$/g, '').replace(/[^0-9]/g, ''), 10);
    }

    window.toRpFromOriginal = function(angka)
    {
        return toRp(parseInt(angka).toFixed(0)) ; 
    }

    window.toRp = function (angka) {
        var rupiah = '';  
        var angka = convertToAngka(angka);
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }

    // ################### FUNGSI MENAMPILKAN DATA SHOPPING CART DI ###############
    function refresh_cart() {

        isi = "kosong"; 
        $("#shoping_cart").html("");
        //mengisi html
        list_cart   = localStorage.getItem('cart'); 
        totalWeight = 0;


        if ( list_cart) {
            obj = JSON.parse(list_cart) ; 

            $.each(obj, function (i,data) {
                //########## MEMASUKAN FUNGSI DELETE ##################
                //console.log(data.product_name) ; 
                isi           = "isi"; 
                var del       = document.createElement("a");
                del.setAttribute("style","cursor:pointer") ; 
                del.innerHTML = "<div class='del-cart' style='float:right; margin-right:20px ; color: #C9302C; font-size: 18px;'><i class='fa fa-trash-o' aria-hidden='true'></i></div>" ;
                $(del).click(function() {
                    cart = JSON.parse(localStorage.getItem('cart')); 
                    cart.splice(i,1);
                    $(".data-id-"+i).remove();
                    //console.log("delete .data-id-"+i);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    refresh_cart();
                });

                //############# MEMASUKAN FUNGSI UPDATE ##################
                var minusDisabled = data.product_qty == 1 ? 'disabled' : '';

                // ## TAMBAHAN DDX , benerin nambah stock error di hijja ##
                if ( data.product_stock > 0 ){} else {data.product_stock = 99999 ;}

                var input_qty = '<div class="input-group group-' + i + '">' +
                                    '<span class="input-group-btn">' +
                                        '<button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[' + i + ']" ' + minusDisabled + '>' +
                                            '<span class="fa fa-minus"></span>' +
                                        '</button>' +
                                    '</span>' +
                                    '<input type="text" name="quant[' + i + ']" class="form-control input-number" value="' + data.product_qty + '" min="1" max="' + data.product_stock + '" readonly>' +
                                    '<span class="input-group-btn">' +
                                        '<button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[' + i + ']">' +
                                            '<span class="fa fa-plus"></span>' +
                                        '</button>' +
                                    '</span>' +
                                '</div>';

                // handle click
                $(document)
                    .off('click', '.group-' + i +' .btn-number')
                    .on('click', '.group-' + i +' .btn-number', function(e) {
                        e.preventDefault();

                        fieldName = $(this).attr('data-field');
                        type      = $(this).attr('data-type');

                        var input = $("input[name='"+fieldName+"']");
                        var currentVal = parseInt(input.val());

                        if (!isNaN(currentVal)) {
                            if(type == 'minus') {
                                
                                if(currentVal > input.attr('min')) {
                                    currentVal--;
                                    input.val(currentVal).change();
                                } 
                                if(parseInt(input.val()) == input.attr('min')) {
                                    $(this).attr('disabled', true);
                                }
                                if (input.val() < input.attr('max') ) {
                                    $('.group-' + i +' .btn-number[data-type="plus"]').removeAttr('disabled');
                                }

                            } else if(type == 'plus') {

                                if(currentVal < input.attr('max')) {
                                    currentVal++;
                                    input.val(currentVal).change();
                                }
                                if(parseInt(input.val()) == input.attr('max')) {
                                    $(this).attr('disabled', true);
                                }

                                if (input.val() > 1 ) {
                                    $('.group-' + i +' .btn-number[data-type="minus"]').removeAttr('disabled');
                                }
                            }
                            // obj berasal dari perulangan
                            obj[i].product_qty = parseInt(input.val()); 
                            localStorage.setItem('cart', JSON.stringify(obj));
                        } else {
                            input.val(0);
                        }
                    });

                //#################### MENGISI TAMPILAN 1-1 ###################
                $("#shoping_cart").append("<div class=' list-cart data-id-" + i + "' style='border-bottom:solid 1px #E2E2E2'>" +
                                                "<img src='" + data.product_img + "' width='88px' align='left' style='margin:0 10px 0 0 '>" +
                                                data.product_name + " <br> " + 
                                                toRp(data.product_price) + "<br>" +
                                                'Berat ' + data.product_weight + " gr<br>" +
                                                "Jumlah : " +
                                            "</div>");
                $(".data-id-"+i).append(input_qty).append(del).append("<div style='clear:both'></div>");

                // total berat
                totalWeight = totalWeight + (data.product_weight*data.product_qty);
            });

            $(".step2").show();
        }

        if ( isi == "kosong") {
            $(".step2").hide();
            $("#shoping_cart").html("<div style='color:gray;font-size:12px;text-align:center; padding:20px'> - Shopping Cart Empty - </div>");
        }

        //mengisi inputan
        isi = localStorage.getItem('cart');
        //console.log("shopping cart right now : "+isi);
        $("#cart-order-list").val(isi) ; 
    }
   
    function reset_cart() {
        localStorage.setItem('cart','') ; 
        //console.log(localStorage.getItem('cart'));
        refresh_cart();
    }


    //########################################## menampilkan review barang yang sudah dibeli step 3 ###########################
    var showListReview = function() {

        var parentList = $("#review-cart");
        var parentTotal = $("#total-review");
        // clear all list item in review cart
        parentList.find('li').remove();
        parentTotal.find('li').remove();

        listCart    = localStorage.getItem('cart');
        totalPrice  = 0;
        subTotal    = 0;
        // return;
        if (listCart) {

            obj = JSON.parse(listCart) ; 

            $.each(obj, function (i,data) {

                //#################### MENGISI TAMPILAN 1-1 ###################
                var image        = $('<img>', {'src' : data.product_img, 'align': 'left'}).css({
                                        width: 88,
                                        margin: '0 10px 0 0',
                                    });
                // console.log(data);
                var priceInt        = convertToAngka(data.product_price);
                var totalItem    = priceInt * data.product_qty;
                var pricePerItem = toRp( parseInt(priceInt) );

                var detail       = $('<div/>').append(data.product_name + '<br>' + pricePerItem + ' x ' + data.product_qty + '<br>' + data.product_weight + ' x ' + data.product_qty + ' = '+ (data.product_weight * data.product_qty) + ' gr' );
                var total        = $('<div/>', {'class' : 'pull-right data-item'}).append( toRp(priceInt * data.product_qty));
                var item         = $('<div/>', {'class' : 'full clearfix', 'style' : 'min-height: 70px'})
                                    .append(image)
                                    .append(detail)
                                    .append(total);

                var itemList = $('<li/>').append(item);
                parentList.prepend(itemList);

                // calculation item cost
                totalPrice  = totalPrice + totalItem;
                subTotal    = subTotal + totalItem;

            });

            // getting shipping cost
            var shippingLeft  = $('<div/>', {'class' : 'pull-left'}).html('&nbsp;Biaya pengiriman ' + Math.ceil(totalWeight/1000) + 'kg')
            var shippingRight = $('<div/>', {'class' : 'pull-right cost-shipment'}).html(toRp($("#service option:selected").val()));
            var shippingList  = $('<li/>').append('<br class="clearfix">').append(shippingLeft).append(shippingRight);

            // if shippiing activated
            if (locOrigin) {
                parentTotal.append(shippingList);
                // tambahkan delivery service
                deliveryCost = parseInt($("#service option:selected").val());
                totalPrice = totalPrice + deliveryCost;
            }

            var subLeft  = $('<div/>', {'class' : 'pull-left'}).html('&nbsp;Sub Total')
            var subRight = $('<div/>', {'class' : 'pull-right'}).html(toRp(subTotal));
            var subList  = $('<li/>').append('<br class="clearfix">').append(subLeft).append(subRight);
            parentTotal.append(subList);

            // show total price insert first to make stack perfect (urutan)
            var totalLeft  = $('<div/>', {'class' : 'pull-left'}).html('&nbsp;Total');
            var totalRight = $('<div/>', {'class' : 'pull-right total-cost'}).html(toRp(totalPrice));
            var totalList  = $('<li/>').append('<hr class="clearfix" style="float: none;clear: both;">').append(totalLeft).append(totalRight);
            parentTotal.append(totalList);




        } else {
            parentList.html("<div style='color:gray;font-size:12px;text-align:center; padding:20px'> - Shopping Cart Review Empty - </div>");
        }
    }

    //################################ FUNGSI OPEN SIDE BAR & MODAL DETAIL PRODUCT ########################################
    var closeFn;
    function closeShowingModal(liked) {

        if (liked !== undefined) {
            _gaq.push(['_trackEvent', 'ctajs', liked ? 'liked' : 'unliked']);
        }
        var showingModal = document.querySelector('.modal.show');
        if (!showingModal) return;
        showingModal.classList.remove('show');

        document.body.classList.remove('disable-mouse');
        document.body.classList.remove('disable-scroll');

        if (closeFn) {
            closeFn();
            closeFn = null;
        }
    }

    $(window)
        .on('click', document, function(e) {
            // console.log(e.target, $(e.target).hasClass("del-cart"))
            if ($(e.target).closest('#cart-wrapper').length == 0 && 
                !$(e.target).hasClass('menu-toggle') && 
                $(e.target).closest('.menu-toggle').length == 0 && 
                !$(e.target).is("button") &&
                $(e.target).closest(".del-cart").length == 0 &&
                $(e.target).closest(".buy-product").length == 0 &&
                $(e.target).closest(".buy-product-single").length == 0) {
                    $("#cart-wrapper").addClass("toggled");
            }
        });

    document.addEventListener('click', function (e) {

        var target = e.target;
        if (target.dataset.ctaTarget) {
            $("#black").show();
            $(".cart-step").addClass('hidden');
            $("#step1").removeClass('hidden');

            // _gaq.push(['_trackEvent', 'ctajs', 'modal']);
            closeFn = cta(target, document.querySelector(target.dataset.ctaTarget), { relativeToWindow: true }, function showModal(modal) {
                modal.classList.add('show');
                document.body.classList.add('disable-mouse');
                if (target.dataset.disableScroll) {
                    document.body.classList.add('disable-scroll');

                }
            });
        }
        else if (target.classList.contains('modal-close-btn')) {
            closeShowingModal();
            $("#black").hide();
        }
    });

    document.addEventListener('keyup', function (e) {
        if (e.which === 27) {
            $("#black").hide();
            closeShowingModal();
        }
    });

    var fillSame = function() {
        var checked       = $('#make-same').is(':checked');
        var deliveryName  = $('#submit_order input[name=delivery_from_name]');
        var deliveryPhone = $('#submit_order input[name=delivery_phone]');

        if (checked) {
            var name  = $('#submit_order input[name=customer_name]').val();
            var phone = $('#submit_order input[name=customer_phone]').val();

            deliveryName.val(name);
            deliveryPhone.val(phone);
        } else {
            deliveryName.val('');
            deliveryPhone.val('');
        }
    };

    $(document)
        .on('change', '#make-same' , fillSame);

    //langsung refresh ketika pertama kali load tampilan
    refresh_cart();

    $(".go-step-1").click(function() {
        $(".cart-step").hide();
        $("#step1").show();
        refresh_cart();
    });

    $(".go-step-2").click(function() {

        list_cart = localStorage.getItem('cart'); 
        if ( !list_cart) { alert("keranjang belanja masih kosong");  return false ; } 
        $(".cart-step").hide();
        $("#step2").show();
        refresh_cart();
    });

    $(".go-step-3").click(function() {
        refresh_cart();
        showListReview();

        // do validation
        var email            = $('#submit_order input[name=customer_email]');
        var name             = $('#submit_order input[name=customer_name]');
        var phone            = $('#submit_order input[name=customer_phone]');
        var deliveryName     = $('#submit_order input[name=delivery_from_name]');
        var deliveryPhone    = $('#submit_order input[name=delivery_from_phone]');
        var deliveryProvince = $('#submit_order select[name=delivery_province]');
        var deliveryCity     = $('#submit_order select[name=delivery_city]');
        var deliveryDistrict = $('#submit_order select[name=delivery_district]');
        var deliveryAddress  = $('#submit_order textarea[name=delivery_address]');

        if(email.val() == '') { 
            alert('Email Harus Diisi'); 
            email.focus() 
            return;
        }

        if(name.val() == '') { 
            alert('Nama Harus Diisi'); 
            name.focus();
            return;
        }

        if(phone.val() == '') { 
            alert('Nomer Handphone Harus Diisi'); 
            phone.focus();
            return;
        }

        if(deliveryName.val() == '') { 
            alert('Nama Tujuan Harus Diisi'); 
            deliveryName.focus();
            return;
        }

        if(deliveryPhone.val() == '') { 
            alert('Nomer Handphone Tujuan Harus Diisi'); 
            deliveryPhone.focus();
            return;
        }


        // if shippiing activated
        if (locOrigin) {
            if(deliveryProvince.val() == '') { 
                alert('Propinsi Tujuan Harus Dipilih');
                deliveryProvince.focus();
                return;
            }

            if(deliveryCity.val() == '') { 
                alert('Kota Tujuan Harus Dipilih'); 
                deliveryCity.focus();
                return;
            }

            if(deliveryDistrict.val() == '') { 
                alert('Kecamatan Tujuan Harus Dipilih'); 
                deliveryDistrict.focus();
                return;
            }

        }

        if(deliveryAddress.val() == '') { 
            alert('Alamat Tujuan Harus Diisi'); 
            deliveryAddress.focus();
            return;
        }   
        // jika district sudah di pilih
        if( $('#district').val() ) {
            $('#district').trigger('change')
        }
        $(".cart-step").hide();
        $("#step3").show();
    });

    $(".go-step-4").click(function() {

        // $(".cart-step").hide();
        // $("#step4").show();
    });

     //########################################## button cart setting ###########################
    $(".cart-submit")
        .click(function(e) {
            e.preventDefault();
            const current = $(this)
            var data = $("#submit_order").serializeArray();

            //disable submit dan form 
            $(".cart-submit").attr("disabled",true).val("loading..").css("background","#A7A7A7").css("color","#000");
            $("#submit_order input").attr("disabled",true); 
            $("#submit_order textarea").attr("disabled",true); 
            // add package name of expedition
            data.push({name: 'expedition_code', value : $('#service option:selected').attr('data-code')});
            data.push({name: 'expedition_service', value : $('#service option:selected').attr('data-service')});
            data.push({name: 'expedition_weight', value : $('#service option:selected').attr('data-service')});

            // deteksi jika locOrigin ada atau sudah terhapus karena rajaongkir error
            if (locOrigin) {
                data.push({name: 'use_expedition_setting', value : 1});
            } else {
                data.push({name: 'use_expedition_setting', value : 0});
            }

            // proteksi menggunakan csrf
            $.ajax({
                type: "POST",
                url: "https://hijja.sistemtoko.com/public/hijja/web_order",
                data: $.param(data), 
                dataType : 'json',
                cache : false,
                beforeSend: function() {
                    $(".cart-step").hide();
                    $("#step4").show();
                    // facebook event track sumbit order
                    if(typeof fbq == 'function') {
                        fbq('track', 'InitiateCheckout')
                    }
                    if (typeof ga == 'function') {
                        ga('send', {
                            hitType: 'event',
                            eventCategory: 'Product',
                            eventAction: 'InitiateCheckout',
                            eventLabel: 'Initite Checkout'
                        });
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(errorThrown)
                    $(".cart-submit").attr("disabled", false).val("Submit Order").css("background","#3498DB");
                    $("#submit_order input").attr("disabled",false) ; 
                    $("#submit_order textarea").attr("disabled",false) ;

                    if (textStatus == 'timeout') {
                        console.log("time out"); 
                    }

                    if (xhr.status == 500) {
                        console.log("500"); 
                    } else {
                        console.log(textStatus); 
                    }

                    // back to step 3
                    $(".cart-step").hide();
                    $("#step3").show();
                },
                success : function(hasil) {
                    //console.log(hasil) ; 
                    $(".cart-submit").attr("disabled",false).val("Submit Order").css("background","#3498DB");
                    $("#submit_order input").attr("disabled",false) ; 
                    $("#submit_order textarea").attr("disabled",false) ;

                    if(!hasil.status) {
                        alert(hasil.message);
                        // back to step 3
                        $(".cart-step").hide();
                        $("#step3").show();
                    } else {
                        var datas = $("#submit_order").serializeArray();
                        const obj = datas.find(item => item.name == 'order_json');

                        if (obj["value"]) {
                            const objVal = JSON.parse(obj["value"])
                            let list_total_price = 0 ; 
                            let list_item = [] ;
                            let list_item_gtag = [];
                            
                            $.each(objVal, function (i,data) 
                            {
                                /* #################### for gtag pixel ################## */
                                let obdata = new Object();
                                obdata.item_id = data.product_id ;
                                obdata.quantity = data.product_qty ;
                                obdata.price = data.product_price  ;
                                list_item_gtag.push(obdata);

                                /* #################### for facebook pixel ################## */
                                obdata = new Object();
                                obdata.id = data.product_id ;
                                obdata.quantity = data.product_qty ;
                                obdata.item_price = data.product_price  ;
                                list_item.push(obdata);

                                pr = parseInt(data.product_price.replaceAll('.', '')) ;
                                prx = parseInt(data.product_qty);
                                prs = pr * prx ; 
                                list_total_price=list_total_price+prs;
                                res = 0 ; 
                            });
                            delivery = $('input[type=radio][name=rbtnCount]:checked').val() ;
                            var currentPrice = current.val();
                            var expedition   = $('input[type=radio][name=rbtnCount]:checked').parent('li').text();
                            total            = subTotal + (delivery ? parseInt(delivery):0) + parseInt('0');
                            list_total_price = total
                            // facebook event track sumbit order
                            if(typeof fbq == 'function') {
                                fbq('track', 'Purchase', {
                                    value: list_total_price,
                                    currency: 'IDR',
                                    content_type: 'product',
                                    contents: list_item
                                })
                            }
                            if (typeof gtag == 'function') {
                                gtag("event", "purchase", {
                                    transaction_id: hasil.order_code,
                                    value: list_total_price,
                                    shipping: parseInt(delivery),
                                    currency: 'IDR',
                                    items: list_item_gtag
                                });
                            }
                        }
                        $("#submit_order")[0].reset();
                        reset_cart();
                        $(".cart-step").addClass('hidden');
                        $("#step4").removeClass('hidden');
                        window.location = "https://hijja.sistemtoko.com/i/"+hasil.order_code;
                    }
                }
            });

            return false ;
        });

    //side panel
    $(document).on('click', ".menu-toggle", function(e) {
        e.preventDefault();
        $("#cart-wrapper").toggleClass("toggled");
    });
});