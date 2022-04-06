$(document).ready(function () {
         
    // $('[data-toggle="tooltip"]').tooltip();

    // $('[data-toggle="popover"]').popover();

    // $('.table').DataTable();


    // $('.carousel-landing').slick({
    //     arrows: false,
    //     prevArrow: "<div class='slick--prev'><i class='fa fa-chevron-left fa-2x' aria-hidden='true'></i></div>",
    //     nextArrow: "<div class='slick--next'><i class='fa fa-chevron-right fa-2x' aria-hidden='true'></i></div>",
    //     dots: false,
    //     infinite: true,
    //     speed: 1,
    //     slidesToShow: 1,
    //     adaptiveHeight: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000
    // });

    // $('.slick-cat-slider').slick({
    //     arrows: false,
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true,
    //     autoplay: true,
    //     autoplaySpeed: 1000
    // })


    // $('.trending-slider').slick({
    //     arrows: false,
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 4,
    //     slidesToScroll: 2,
    //     adaptiveHeight: false,
    //     autoplay: true,
    //     autoplaySpeed: 2000,

    //     responsive: [
    //         {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 2,
    //             infinite: true,
    //             dots: true
    //         }
    //         },
    //         {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1
    //         }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //     ]
    // })
    
    
    // $('.slider-card').slick({
    //     arrows: true,
    //     prevArrow: "<div class='slick--prev'><i class='fa fa-chevron-left fa-2x' aria-hidden='true'></i></div>",
    //     nextArrow: "<div class='slick--next'><i class='fa fa-chevron-right fa-2x' aria-hidden='true'></i></div>",
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     adaptiveHeight: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     cssEase: 'linear',
    //     responsive: [
    //         {
    //         breakpoint: 769,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //         },
    //         {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //         }      
    //     ] 
    //   });



    $('#mobileAbsoluteSearchToggler').on('click', function(e) {
        if ($('#mobileAbsoluteSearch').css('display') == "block") {
            $('#mobileAbsoluteSearch').hide()
        }else{
            $('#mobileAbsoluteSearch').show()
        }
    
    })


    $(document).mouseup(function (e) {

        var $mobileAbsoluteSearch = $('#mobileAbsoluteSearch');
        if (!$mobileAbsoluteSearch.is(e.target) && $mobileAbsoluteSearch.has(e.target).length === 0) {
          $mobileAbsoluteSearch.hide();
        }
    
    });
    
    
    

    $(document).on('click', '.topupAmountBtn', function() {
        $amount = $(this).text();
        $(`.topup-form [name="credit_unit"]`).val($amount);
    })
    


    $('#bidCreditModal').on('shown.bs.modal', function () {
        $('.bidding-credit-modal #modal-loader').show();
        $.ajax({
            type: 'GET',
            url: "/credit/",
            success: function (response) {

                if (response['login_required']) {
                    Swal.fire({
                        position: 'bottom-end',
                        html: `<label class="text-dark"><a href="/account/login/" class="btn-link">Login</a> is required</label>`,
                        showConfirmButton: false,
                        timer: 10000,
                        timerProgressBar: true,
                    });
                    return
                }

                $('#bidding-credit-container').html(response.html)
                $('.bidding-credit-modal #modal-loader').hide();
            },
            error: function (rs, e) {
                console.log(rs.responseText);
            },
        });
    });


});










$(document).ready(function () {  //to check if clicked outside the element
    $(document).on('mouseover, click', '.cart', function (e) {
        /*$('.cart-dropdown-block').css({ opacity: 1 });
        $('.cart-dropdown-block').trigger('click', function(event){
            event.stopPropagation();
        })
        */
        $('.cart-dropdown-block').show();
        //e.stopPropagation();    // <==
    });

    $('.megamenu-toggler').on('click', function (e) {
        $('.dropdown-content').show();
        e.stopPropagation();
    });

    $('.toggle-off-canvas-menu').on('click', function (e) {
        $('.off-canvas-wrapper').show();
    });


    $(document).mouseup(function (e) {
        var $offCanvasInner = $(".off-canvas-inner");

        // if the target of the click isn't the $offCanvasInner nor a descendant of the container
        if (!$offCanvasInner.is(e.target) && $offCanvasInner.has(e.target).length === 0) {
            if ($('.off-canvas-wrapper').css('display') == "block") {
                $('.off-canvas-wrapper').hide();
            }
        }

        //$('.cart-dropdown-block').css({ opacity: 0 });
        var $cartDropdownBlock = $(".cart-dropdown-block");
        if (!$cartDropdownBlock.is(e.target) && $cartDropdownBlock.has(e.target).length === 0){
            $cartDropdownBlock.hide();
        }

        $('.dropdown-content').hide();
    });



})



const countDownFunction = ($this=false, id=false) => {
    if (id) {
        $this = $(id);
    }
    var countdownTime = new Date($($this).data('end-time'));

    $($this).countdown(countdownTime, function(event) {
        days = event.strftime('%D');
        hr = event.strftime('%H');
        minutes = event.strftime('%M');
        seconds = event.strftime('%S');
        fullCountDownStr = `
        <span class="time-ticker"><span>${days}</span> <br><span class="time-label">Days</span></span> :
        <span class="time-ticker"><span>${hr}</span> <br><span class="time-label">Hours</span></span> :
        <span class="time-ticker"><span>${minutes}</span> <br><span class="time-label">Minutes</span></span> :
        <span class="time-ticker"><span>${seconds}</span> <br><span class="time-label">Seconds</span></span>`

        if(days < 1){
            fullCountDownStr = `<span class="text--secondary">${fullCountDownStr}</span>`
        }
        $($this).html(
            fullCountDownStr
        );

    });
}

$(function (){
    $('.count-down').each(function(){
        countDownFunction(this);
    });
});










$(function() {
    loadCart();
})

$(function() {
    $(document).on('click', '.subImg', function(){
        $('#mainImg').attr("src", this.src);
    })

    $(document).on('click', '.product-clickable', function() {
        var url = $(this).data('url');
        window.location.href = url;
    })

    $(document).on('click', '.deal-dropdown, .dealnow, .bidnow', function(e) {
        //prevent the .product-clickable container click bubbling into the child elements
        e.stopPropagation();
    })  



})








$(function() {
    $(document).on('submit', '#bid-form', function(e) {
        e.preventDefault();
        $bid_amount = parseFloat($('#bid-amount').val());
        $highest_bid = window.highest_bid_amount + window.bid_increment;
        if($bid_amount < $highest_bid){
            //alert(`Enter amount greater than ${$highest_bid}`);
            //return false;
        }
        
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            dataType: 'json',
            success: function (response) {
                if (response['login_required']) {
                    Swal.fire({
                        position: 'bottom-end',
                        html: `<label class="text-dark"><a href="/account/login/" class="btn-link">Login</a> is required</label>`,
                        showConfirmButton: false,
                        timer: 10000,
                        timerProgressBar: true,
                    });
                    return
                }

                $('.details-container').html(response["html"]);
                // $('[data-toggle="tooltip"]').tooltip();
                // calculateRatings();
                
                // $('.product-img-slider').slick({
                //     arrows: false,
                //     dots: false,
                //     infinite: true,
                //     speed: 300,
                //     slidesToShow: 3,
                //     adaptiveHeight: true,
                //     autoplay: true,
                //     autoplaySpeed: 1000
                // })

                //invoke the countdown function
                // countDownFunction(false, '#countdown');

                // $('#modal-loader').hide();


                Swal.fire({
                    position: 'top-end',
                    html: `<span class="text-white pl-3">${response['message']}</span>`,
                    showConfirmButton: false,
                    icon: response["status"],
                    toast: true,
                    background: '#46631F',
                    padding: '1.5em',
                    timer: 6500,
                    timerProgressBar: true,
                });
                
            },
            error: function (rs, e) {
                console.log(rs.responseText);
            },
        });
    })
});














$(function() {
    $(document).on('click', '.bidnow', function(e) {
        $('#modal-loader').show();

        $('#bidModal').modal(
            //{ backdrop: 'static', keyboard: false }
        );
        
        var product_id = $(this).data('product-id');
        
        $.ajax({
            type: 'POST',
            url: "/get-product/",
            data: {'product_id': product_id, 'csrfmiddlewaretoken': csrf_token },
            dataType: 'json',
            success: function (response) {
                if (response['login_required']) {
                    Swal.fire({
                        position: 'bottom-end',
                        html: `<label class="text-dark"><a href="/account/login/" class="btn-link">Login</a> is required</label>`,
                        showConfirmButton: false,
                        timer: 10000,
                        timerProgressBar: true,
                    });
                    return
                }

                $('#product-details-container').html(response["html"]);
                $('[data-toggle="tooltip"]').tooltip();
                calculateRatings();

                $('.product-img-slider').slick({
                    arrows: false,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    adaptiveHeight: true,
                    autoplay: true,
                    autoplaySpeed: 1000
                })

                //invoke the countdown function
                countDownFunction(false, '#countdown');

                $('#modal-loader').hide();
            },
            error: function (rs, e) {
                console.log(rs.responseText);
            },
        });
    })
})


$(function() {
    $(document).on('click', '.biddingLogs', function(){
        $('#modal-loader').show();

        $('#bidModal').modal(
            //{ backdrop: 'static', keyboard: false }
        );

        var product_id = $(this).data('product-id');
        $.ajax({
            type: 'POST',
            url: "/bids/",
            data: {'product_id': product_id, 'csrfmiddlewaretoken': csrf_token },
            dataType: 'json',
            success: function (response) {
                if (response['login_required']) {
                    setTimeout(function(){
                        $('#bidModal').modal('hide');
                    }, 1000)
                    
                    Swal.fire({
                        position: 'bottom-end',
                        html: `<label class="text-dark"><a href="/account/login/" class="btn-link">Login</a> is required</label>`,
                        showConfirmButton: false,
                        timer: 10000,
                        timerProgressBar: true,
                    });
                    
                    return
                }

                $('#product-details-container').html(response["html"]);
                $('[data-toggle="tooltip"]').tooltip();
                $('.table').DataTable();
                $('#modal-loader').hide();
            },
            error: function (rs, e) {
                console.log(rs.responseText);
            },
        });
    })
})






$(function() {
    calculateRatings();

    $(document).on('click', '#writeReview', function(){
        $('#myTab a[href="#reviews"]').tab('show'); // show tab

        setTimeout(function(){  // wait 3 milliseconds the scroll to the open tab
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".reviewsPane").offset().top
            }, 2000);
        }, 300);
        
    })

    $(document).on('click', '.read-more-desc', function(){
        $('#myTab a[href="#description"]').tab('show'); // show tab

        setTimeout(function(){  // wait 3 milliseconds the scroll to the open tab
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#myTab").offset().top
            }, 2000);
        }, 300);
        
    })
})

const calculateRatings = () => {
    $('.bar-5-count').text(window.$5star);
    $('.bar-4-count').text(window.$4star);
    $('.bar-3-count').text(window.$3star);
    $('.bar-2-count').text(window.$2star);
    $('.bar-1-count').text(window.$1star);

    if(window.$rateCount > 0){
        $('.bar-5').css({width: `${((window.$5star / window.$rateCount) * 100)}%` })
        $('.bar-4').css({width: `${((window.$4star / window.$rateCount) * 100)}%` })
        $('.bar-3').css({width: `${((window.$3star / window.$rateCount) * 100)}%` })
        $('.bar-2').css({width: `${((window.$3star / window.$rateCount) * 100)}%` })
        $('.bar-1').css({width: `${((window.$2star / window.$rateCount) * 100)}%` })
    }else{
        $('.bar-container div').css('width', "0%");
    }
}



$(function() {
    $(document).on('mouseover', '.your-rating .fa-star', function() {
        var val = $(this).data('val');
        addRatingsColor(this, val, {'color': 'orange'})
    })


    $(document).on('mouseout', '.your-rating .fa-star', function() {
        var val = $(this).data('val');
        addRatingsColor(this, val, {'color': ''})
    })


    $(document).on('click', '.your-rating .fa-star', function() {
        var val = $(this).data('val');
        $('.your-rating .fa-star').removeClass('checked');
        checkSelectedRatings(this, val);
        $('form [name="star"]').val(val);
    })
})

const addRatingsColor = ($this, val, cssProps) => {
    if(val == "1"){
        $($this).css(cssProps);
    }else if(val == "2"){
        $('[data-val="1"]').css(cssProps);
        $($this).css(cssProps);
    }
    else if(val == "3"){
        $('[data-val="1"]').css(cssProps);
        $('.fa-star[data-val="2"]').css(cssProps);
        $($this).css(cssProps);
    }
    else if(val == "4"){
        $('[data-val="1"]').css(cssProps);
        $('.fa-star[data-val="2"]').css(cssProps);
        $('.fa-star[data-val="3"]').css(cssProps);
        $($this).css(cssProps);
    }
    else if(val == "5"){
        $('.fa-star[data-val="1"]').css(cssProps);
        $('.fa-star[data-val="2"]').css(cssProps);
        $('.fa-star[data-val="3"]').css(cssProps);
        $('.fa-star[data-val="4"]').css(cssProps);
        $($this).css(cssProps);
    }
}


const checkSelectedRatings = ($this, val) => {
    if(val == "1"){
        $($this).addClass('checked');
    }else if(val == "2"){
        $('[data-val="1"]').addClass('checked');
        $($this).addClass('checked');
    }
    else if(val == "3"){
        $('[data-val="1"]').addClass('checked');
        $('.fa-star[data-val="2"]').addClass('checked');
        $($this).addClass('checked');
    }
    else if(val == "4"){
        $('[data-val="1"]').addClass('checked');
        $('.fa-star[data-val="2"]').addClass('checked');
        $('.fa-star[data-val="3"]').addClass('checked');
        $($this).addClass('checked');
    }
    else if(val == "5"){
        $('.fa-star[data-val="1"]').addClass('checked');
        $('.fa-star[data-val="2"]').addClass('checked');
        $('.fa-star[data-val="3"]').addClass('checked');
        $('.fa-star[data-val="4"]').addClass('checked');
        $($this).addClass('checked');
    }
}











function cart_template (value){
    html = `
            <div class="cart-item">
                <div class="cart-product-img">
                    <img src="${value["img"]}" alt="">
                    <!-- div class="offer-badge">6% OFF</!-- -->
                </div>
                <div class="cart-text">
                    <h4>${value["name"]}</h4>
                    <div class="qty-group">
                        <div class="quantity buttons_added">
                            <input type="button" value="-" class="minus minus-btn">
                            <input type="number" step="1" name="quantity" value="${value["quantity"]}" class="input-text qty text">
                            <input type="button" value="+" class="plus plus-btn">
                        </div>
                        <div class="cart-item-price">&#x20a6;${value["price"]}</div>
                    </div>
                    <button type="button" class="cart-close-btn" onclick="remove_from_cart(${value["id"]})"><i class="uil uil-multiply"></i></button>
                </div>
            </div>
        `
    return html;
}


const addToCart = (product_id, qty = 1, checkout=false) => {
    // Check if an element currently exists
    if ($('[name="qty"]').length) {
        qty = $('[name="qty"]').val();
    }

    if ($(`[name="qty${product_id}"]`).length) {
        qty = $(`[name="qty${product_id}"]`).val();
    }

    $.ajax({
        type: 'POST',
        url: "/cart/new/",
        data: { 'product_id': product_id, 'quantity': qty, 'csrfmiddlewaretoken': csrf_token },
        dataType: 'json',
        success: function (response) {
            Swal.fire({
                position: 'top-end',
                html: `<span class="pl-3">${response['message']}</span>`,
                showConfirmButton: false,
                icon: "success",
                toast: true,
                timer: 4500,
                timerProgressBar: true,
            });

            

            if (checkout) {
                window.location.href = "/checkout/";
            }
        
            if (window.location.pathname == "/checkout/") {
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            }
            
            $('.cart--count-badge').text( Object.keys(response['response']).length );
            html = "";
            subtotal = 0
            Object.entries(response['response']).forEach(
                function([key, value]) {
                    html += cart_template(value).toString();
                    subtotal += (value.price)
                }
            );
            $('.cart-dropdown-items').html(html);
            $('.subtotal').text(subtotal)
            
        },
        error: function (rs, e) {
            console.log(rs.responseText);
        },
    });
}



const remove_from_cart = (product_id) => {
    $.ajax({
        type: 'POST',
        url: "/cart/delete/",
        data: { 'product_id': product_id, 'csrfmiddlewaretoken': csrf_token },
        dataType: 'json',
        success: function (response) {
            Swal.fire({
                position: 'bottom-start',
                html: `<span class="text-light pl-2">${response["message"]}</span>`,
                showConfirmButton: false,
                icon: "success",
                toast: true,
                background: '#D93030',
                padding: '1.3em',
                timer: 4500,
                timerProgressBar: true,
            });
            
            $('.cart--count-badge').text( Object.keys(response['response']).length );
            html = "";
            subtotal = 0
            Object.entries(response['response']).forEach(
                function([key, value]) {
                    html += cart_template(value).toString();
                    subtotal += (value.price)
                }
            );
            $('.cart-dropdown-items').html(html);
            $('.subtotal').text(subtotal)
            //loadCart();
        },
        error: function (rs, e) {
            console.log(rs.responseText);
        },
    });
}



const loadCart = () => {
    $.ajax({
        type: 'POST',
        url: "/cart/",
        data: {'csrfmiddlewaretoken': csrf_token },
        dataType: 'json',
        success: function (response) {
            
            $('.cart--count-badge').text( Object.keys(response['response']).length );
            html = "";
            subtotal = 0
            Object.entries(response['response']).forEach(
                function([key, value]) {
                    html += cart_template(value).toString();
                    subtotal += (value.price)
                }
            );
            $('.cart-dropdown-items').html(html);
            $('.subtotal').text(subtotal)

        },
        error: function (rs, e) {
            console.log(rs.responseText);
        },
    });
}




const addToWishlist = (product_id, product_name, qty = 1) => {
    $.ajax({
        type: 'POST',
        url: "/account/wishlist/",
        data: { 'product_id': product_id, 'csrfmiddlewaretoken': csrf_token },
        dataType: 'json',
        success: function (response) {
            if (response['login_required']) {
                
                Swal.fire({
                    position: 'top-end',
                    html: ` <label class="text-dark"><a href="/accounts/login/" class="btn-link">Login</a> is required</label>`,
                    showConfirmButton: false,
                    icon: "success",
                    toast: true,
                    padding: '1.5em',
                    timer: 4500,
                    timerProgressBar: true,
                });
                return
            }
            Swal.fire({
                position: 'top-end',
                html: ` ${response['result']}`,
                showConfirmButton: false,
                toast: true,
                padding: '1.5em',
                icon: 'info',
                timer: 4500,
                timerProgressBar: true,
            });
        },
        error: function (rs, e) {
            console.log(rs.responseText);
        },
    });
}





// conver string to slug
const converToSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}


$(function() {
    var timer;
    var $qString;
    // $('.qInput').keyup(function (e) {
    $(document).on('keyup', '.qInput', function () {
        $event = this;
        $qString = $($event).val();

        // pass the search string to the rest of the carousel search input in the carousel if exists
        $('.carousel-search-form input.search__input').val($qString);

        clearTimeout(timer);
        timer = setTimeout(function () {
            $form = $($event).closest("form");
            $form.submit();
            // $(".search-form").submit();
        }, 1000);

    });


    // search 
    $(document).on('submit', '.search-form, .carousel-search-form', function (event) {
        event.preventDefault();

        var url_string = window.location.href
        var url = new URL(url_string);
        var host = url.hostname;
        
        // set query parameter to url
        var search_params = url.searchParams;
        search_params.set( 'query', converToSlug($qString) )
        url.search = search_params.toString();

        var newPath = '/filter/' + url.search;
        window.history.pushState({ path: newPath }, '', newPath);


        $('.product-container').empty();
        $('#content-loader').show();
        $.ajax({
            type: 'POST',
            // url: $(this).attr('action'),
            url: newPath,
            data: $(this).serialize(),
            dataType: 'json',
            success: function (response) {

                $('.product-container').html(response['search']);
                $('#content-loader').hide();

            },
            error: function (rs, e) {
                console.log(rs.responseText);
            },
        });
    });


});

