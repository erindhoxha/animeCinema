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
var imageName;


$(".book-hinge").on('click', function() {

    thisIs = $(this);
    var dataNr = $(this).attr('data-nr');
    imageName = $(this).find('img').attr('src');
    $(this).removeClass('book-hinge');

    var imageObject = {'img': imageName};
    var dataNumber = {'data-nr': dataNr};

    shoppingCart.shoppingCartChild[shoppingCart.shoppingCartChild.length] = {...shoppingCart.shoppingCartChild[shoppingCart.shoppingCartChild.length], ...imageObject, ...dataNumber};

    $("#shopping-cart-box").empty();
    renderCartList();
    $(this).css('visibility','hidden');
    console.log(dataNr);
    count++;
    $(".shopping-cart").show(200);
    $(".badge-shopping-cart").text(count);
 
    $(".remove-item").on('click', function() {
        count--;
        $(".badge-shopping-cart").text(count);

        var dataNr = $(this).parent().parent().parent().attr('data-nr');
        var dataIndex = $(this).parent().parent().parent().attr('data-index');
        console.log(dataNr);
        console.log(dataIndex);
        
        $('.book-wrapper[data-nr="' + dataNr + '"]').css('visibility','visible');
        shoppingCart.shoppingCartChild.splice(dataIndex, 1);
        $(this).parent().parent().parent().hide();
    })

    $(".book-hinge").removeClass('animate hinge') 
    thisIs.css('visibility','hidden');
})



$(".shopping-cart").hide();
$(".shopping-cart-box").hide();

$(".shopping-cart").on('click', function() {
    $(".shopping-cart-box").slideToggle();
});