var template = $("#logo-anime").html();
var templateScript = Handlebars.compile(template);
var html = templateScript(animeList);
$('#anime-list').append(html);

var templateMovie = $("#movies-anime").html();
var templateMovieScript = Handlebars.compile(templateMovie);
var htmlMovie = templateMovieScript(animeMovieListParent);
$("#anime-movie").append(htmlMovie);