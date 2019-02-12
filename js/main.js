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
$(".book-wrapper").on('click', function() {
   count++;
   console.log(count);
   thisIs = $(this)
   $(this).toggleClass('animate hinge');
   setTimeout(function(){ 
    $(".book-wrapper").removeClass('animate hinge') 
    thisIs.css('visibility','hidden');
}, 2000);
})