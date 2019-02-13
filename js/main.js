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

$(".book-hinge").on('click', function() {
    thisIs = $(this)
    var clicked = true;

    console.log($(this).attr('data-nr'))
    var dataNr = $(this).attr('data-nr');

    imageName = $(this).find('img').attr('src');
    $(this).removeClass('book-hinge');
    var imageObject = {'img': imageName};
    var dataNumber = {'data-nr': dataNr};
    shoppingCart.shoppingCartChild[shoppingCart.shoppingCartChild.length] = {...shoppingCart.shoppingCartChild[shoppingCart.shoppingCartChild.length], ...imageObject, ...dataNumber};
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

    $(".remove-item").on('click', function() {
        var dataNr = $(this).parent().parent().parent().attr('data-nr');
        $('.book-wrapper[data-nr="' + dataNr + '"]').addClass('animate hinge');
        $('.book-wrapper[data-nr="' + dataNr + '"]').css('visibility','visible');
    })

   setTimeout(function(){ 
    $(".book-hinge").removeClass('animate hinge') 
    thisIs.css('visibility','hidden');
}, 2000);
})



// $(".shopping-cart").hide();
// $(".shopping-cart-box").hide();

$(".shopping-cart").on('click', function() {
    $(".shopping-cart-box").slideToggle();
});