@extends('layouts.app')

@section('content')

<div>
                <ul class="product-list-grid desktop-columns-4 tablet-columns-3 mobile-columns-1 row flex-flow">

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                    
                        <div id="product_display1" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">

                                <img src="https://sistemtoko.com/img/user/demo/product/7d4adl-nzbmjz-6-png-png.png" alt="" class="product-img"> 
                                    
                                </a>

                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{ name }}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                   Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25138' 
                                                    data-product-name='tas 4' 
                                                    data-product-price='60.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/7d4adl-nzbmjz-6-png-png.png' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/7d4adl-nzbmjz-6-png-png.png"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='100' 
                                                    data-varian='Varian 1'>Varian 1 (@{{stock}})</option><option 
                                                    data-product-id='28546' 
                                                    data-product-name='tas 4' 
                                                    data-product-price='70.000'
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/7d4adl-nzbmjz-6-png-png.png' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/7d4adl-nzbmjz-6-png-png.png"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='70' 
                                                    data-varian='Varian 2'>Varian 2 (@{{stock}}) </option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>

                    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16"></script>
                    <script src="{{asset ('prod1.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display2" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/jakc1i-ovhycn-1-png-png.png" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25136' 
                                                    data-product-name='tas 3' 
                                                    data-product-price='10.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/jakc1i-ovhycn-1-png-png.png' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/jakc1i-ovhycn-1-png-png.png"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='100' 
                                                    data-varian='Varian 1'>Varian 1 (@{{stock}})</option><option 
                                                    data-product-id='28546' 
                                                    data-product-name='tas 4' 
                                                    data-product-price='50.000'
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/3yxdyf-jfrklu-10-png-png.png' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/3yxdyf-jfrklu-10-png-png.png"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='100' 
                                                    data-varian='Varian 2'>Varian 2 (@{{stock}}) </option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod2.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display3" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/vsarzz-j8x3tm-18-png-png.png" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25135' 
                                                    data-product-name='tas 2' 
                                                    data-product-price='60.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/vsarzz-j8x3tm-18-png-png.png' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/vsarzz-j8x3tm-18-png-png.png"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='100' 
                                                    data-varian='Varian 1'>Varian 1 (@{{stock}})</option><option 
                                                    data-product-id='28546' 
                                                    data-product-name='tas 4' 
                                                    data-product-price='10.000'
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/vsarzz-j8x3tm-18-png-png.png' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/vsarzz-j8x3tm-18-png-png.png"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='100' 
                                                    data-varian='Varian 2'>Varian 2 (@{{stock}}) </option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod3.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display4" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/kdkxol-mxnjcy-23-png-png.png" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{price}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25135' 
                                                    data-product-name='tas 1' 
                                                    data-product-price='100.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/vsarzz-j8x3tm-18-png-png.png' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/vsarzz-j8x3tm-18-png-png.png"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='59' 
                                                    data-varian='Varian 1'>Varian 1 (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod4.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display5" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25131' 
                                                    data-product-name='baju empat' 
                                                    data-product-price='180.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='55' 
                                                    data-varian='m'>m (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25131' 
                                                    data-product-name='baju empat' 
                                                    data-product-price='80.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='55' 
                                                    data-varian='xl'>xl (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod5.js')}}"></script>


                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display6" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                   Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25127' 
                                                    data-product-name='baju tiga' 
                                                    data-product-price='0.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/qwkggf-0va3bn-img-6499-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/qwkggf-0va3bn-img-6499-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='88' 
                                                    data-varian='s'>s (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25128' 
                                                    data-product-name='baju tiga' 
                                                    data-product-price='60.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/xyizsc-12hbwe-img-7106-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='29' 
                                                    data-varian='m'>m (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod6.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display7" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/jwxhrx-0npi8m-img-6670-jpg-jpg.JPG" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25127' 
                                                    data-product-name='hijab dua' 
                                                    data-product-price='10.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/jwxhrx-0npi8m-img-6670-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/jwxhrx-0npi8m-img-6670-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='10' 
                                                    data-varian='m'>m (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25128' 
                                                    data-product-name='hijab dua' 
                                                    data-product-price='200.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/jwxhrx-0npi8m-img-6670-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/jwxhrx-0npi8m-img-6670-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='29' 
                                                    data-varian='xl'>xl (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod7.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id = "product_display8" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/vzfsba-0hyu4z-img-7214-jpg-jpg.JPG" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25127' 
                                                    data-product-name='hijab dua' 
                                                    data-product-price='60.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/vzfsba-0hyu4z-img-7214-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/vzfsba-0hyu4z-img-7214-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='30' 
                                                    data-varian='s'>s (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25128' 
                                                    data-product-name='hijab dua' 
                                                    data-product-price='120.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/vzfsba-0hyu4z-img-7214-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/vzfsba-0hyu4z-img-7214-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='29' 
                                                    data-varian='m'>m (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod8.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display9" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/4d9fb9-ashl4q-img-7389-jpg-jpg.JPG" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25127' 
                                                    data-product-name='lulur 4' 
                                                    data-product-price='50.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/4d9fb9-ashl4q-img-7389-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/4d9fb9-ashl4q-img-7389-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='30' 
                                                    data-varian='starbery'>starbery (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25128' 
                                                    data-product-name='lulur 4' 
                                                    data-product-price='50.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/4d9fb9-ashl4q-img-7389-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/4d9fb9-ashl4q-img-7389-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='50' 
                                                    data-varian='bengkoang'>bengkoang (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod9.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display10" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/n2scfz-fkgpit-img-7405-jpg-jpg.JPG" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25127' 
                                                    data-product-name='lulur 3' 
                                                    data-product-price='50.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/n2scfz-fkgpit-img-7405-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/n2scfz-fkgpit-img-7405-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='20' 
                                                    data-varian='merah'>merah (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25128' 
                                                    data-product-name='lulur 3' 
                                                    data-product-price='50.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/n2scfz-fkgpit-img-7405-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/n2scfz-fkgpit-img-7405-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='19' 
                                                    data-varian='biru'>biru (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod10.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display11" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/9ngdpq-13vgu9-img-7362-jpg-jpg.JPG" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25127' 
                                                    data-product-name='lulur 2' 
                                                    data-product-price='100.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/9ngdpq-13vgu9-img-7362-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/9ngdpq-13vgu9-img-7362-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='0' 
                                                    data-varian='merah'>kecil (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25128' 
                                                    data-product-name='lulur 2' 
                                                    data-product-price='50.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/9ngdpq-13vgu9-img-7362-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/9ngdpq-13vgu9-img-7362-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='19' 
                                                    data-varian='sedang'>sedang (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li>
                    <script src="{{asset ('prod11.js')}}"></script>

                    <li class="product-item col-xs-12 col-sm-4 col-md-3">
                        <div id="product_display12" class="product-inner">
                            <div class="product-thumb has-back-image">
                                <a href="#">
                                    <img src="https://sistemtoko.com/img/user/demo/product/tbypij-2qws70-img-7377-jpg-jpg.JPG" alt="" class="product-img">
                                </a>
                                
                            </div>
                            <div class="product-info">
                                <h3 class="product-name"><a href="#">@{{name}}</a></h3>

                                

                                <div style="padding-bottom:10px" class="product_price">
                                    Rp. @{{buyPrice}}
                                </div>

                                <span class="price">
                                    <select class="product_dropdown">
                                    <option 
                                                    data-product-id='25127' 
                                                    data-product-name='lulur' 
                                                    data-product-price='100.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/tbypij-2qws70-img-7377-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/tbypij-2qws70-img-7377-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='10' 
                                                    data-varian='m'>m (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25128' 
                                                    data-product-name='lulur' 
                                                    data-product-price='50.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/tbypij-2qws70-img-7377-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/tbypij-2qws70-img-7377-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='10' 
                                                    data-varian='l'>l (@{{stock}})</option>
                                    <option 
                                                    data-product-id='25128' 
                                                    data-product-name='lulur' 
                                                    data-product-price='110.000' 
                                                    data-product-img='https://sistemtoko.com/img/user/demo/product/tbypij-2qws70-img-7377-jpg-jpg.JPG' 
                                                    data-product-gallery='["https://sistemtoko.com/img/user/demo/product/tbypij-2qws70-img-7377-jpg-jpg.JPG"]'
                                                    data-product-weight='350' 
                                                    data-product-stock='7' 
                                                    data-varian='xl'>xl (@{{stock}})</option>
                                                                                      </select>
                                </span>
                                <a class="button buy-product" style="cursor:pointer" >ADD TO CART</a>
                            </div>
                        </div>
                    </li> 
                    <script src="{{asset ('prod12.js')}}"></script>

                    
                   

                </ul>



            </div>

@endsection