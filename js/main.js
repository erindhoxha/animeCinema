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
var count = 0;
var clicked = false;
var imageName;

$(".book-wrapper").on('click', function() {
    thisIs = $(this)
    var clicked = true;

    imageName = $(this).find('img').attr('src');

    var imageObject = {'img': imageName};
    shoppingCart.shoppingCartChild[shoppingCart.shoppingCartChild.length] = {...shoppingCart.shoppingCartChild[shoppingCart.shoppingCartChild.length], ...imageObject};
    $("#shopping-cart-box").empty();
    renderCartList();
    if (clicked == true) {
        $(this).toggleClass('animate hinge');
        count++;
        $(".shopping-cart").show(200);
        $(".badge-shopping-cart").text(count);
        clicked = false;
    } else {
        // do nothing
    }

   setTimeout(function(){ 
    $(".book-wrapper").removeClass('animate hinge') 
    thisIs.css('visibility','hidden');
}, 2000);
})

$(".shopping-cart").hide();
$(".shopping-cart-box").hide();

$(".shopping-cart").on('click', function() {
    $(".shopping-cart-box").slideToggle();
});