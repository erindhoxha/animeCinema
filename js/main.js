// $( document ).ready(function() {
//     $(".hide-everything").fadeOut(300);
//     setTimeout(function() {
//         $(".loading").fadeOut(300);
//     $(".hide-everything").fadeIn(300);
//     }, 2000)
// });

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var parsed = JSON.parse(xhttp.responseText)
       console.log(parsed);
       $(".quote-generate").text(parsed.starWarsQuote);
    } else {
       $(".quote-generate").text('PATIENCE YOU MUST HAVE MY YOUNG PADAWAN - YODA');
    }
};
xhttp.open("GET", "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote", true);
xhttp.send();

var thisIs;
var countOfShoppingCart = 0;
var imageName;


$(".book-hinge").on('click', function() {

    setTimeout(function() {
        thisIs.css('visibility','hidden');
        thisIs.removeClass('animate hinge');
    }, 2000);

    thisIs = $(this);
    var dataNr = $(this).attr('data-nr');
    imageName = $(this).find('img').attr('src');
    $(this).addClass('animate hinge');



    var imageObject = {'img': imageName};
    var dataNumber = {'data-nr': dataNr};
    var count = {'count':0}

    shoppingCart.shoppingCartChild[shoppingCart.shoppingCartChild.length] = {...shoppingCart.shoppingCartChild[shoppingCart.shoppingCartChild.length], ...imageObject, ...dataNumber, ...count};

    $("#shopping-cart-box").empty();
    renderCartList();

    console.log(dataNr);
    countOfShoppingCart++;
    $(".shopping-cart").show(200);
    $(".badge-shopping-cart").text(countOfShoppingCart);
    if ($("#shopping-cart-box").children().length == 0) {
        shoppingCart.shoppingCartChild = [];
    }
    $(".remove-item").on('click', function() {
        if (countOfShoppingCart == 0) {
            countOfShoppingCart = 0;
        } else {
            countOfShoppingCart--;
        }
        $(".badge-shopping-cart").text(countOfShoppingCart);

        var dataNr = $(this).parent().parent().parent().attr('data-nr');
        var dataIndex = $(this).parent().parent().parent().attr('data-index');
        console.log(dataNr);
        console.log(dataIndex);
        
        $('.book-wrapper[data-nr="' + dataNr + '"]').css('visibility','visible');
        $('.book-wrapper[data-nr="' + dataNr + '"]').addClass('animate bounceIn');
        shoppingCart.shoppingCartChild.splice(dataIndex, 1);
        $(this).parent().parent().parent().remove();
        if ($("#shopping-cart-box").children().length == 0) {
            shoppingCart.shoppingCartChild = [];
        }
    })



    $(".button-minus-sp").on('click', function(){
        var dataNr = $(this).parent().parent().parent().attr('data-index');
        var countNr = parseInt($("#count-book-" + dataNr).text());
        if (countNr == 0) {
            countNr = 0;
        } else {
            countNr--;
        }
        $("#count-book-" + dataNr).text(countNr);
        console.log(dataNr);
        console.log(countNr);
    });
    $(".button-plus-sc").on('click', function(){
        var dataNrOfObj = $(this).parent().parent().parent().attr('data-index');
        var dataNr = $(this).parent().parent().parent().attr('data-index');
        var countNr = parseInt($("#count-book-" + dataNr).text());
        shoppingCart.shoppingCartChild[dataNr].count++;
        if (countNr > 9) {
            countNr = 10;
            $("#count-book-" + dataNr).text(countNr + ' is the max to order.');
        } else {
            countNr++;
            $("#count-book-" + dataNr).text(countNr);
        }
        console.log(dataNr);
        console.log(countNr);
    });

})







$(".shopping-cart").hide();
$(".shopping-cart-box").hide();

$(".shopping-cart").on('click', function() {
    $(".shopping-cart-box").slideToggle();
});