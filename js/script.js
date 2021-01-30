var cloneMedia = $('.media').clone();

$('#lupa').on('click', function(){

	var valorPesquisa = $('#pesquisa').val();
	$('.panel-title').text('Resultados da pesquisa de "' + valorPesquisa + '"');

	$('.media-list').html('');

	$.ajax({
		method: "GET",
		url: "http://www.last.fm/api/auth/?api_key=8ad8a891f9b7f2cefeb5ac37cd0487e9&token=KidpygA4KK0PoiI75HU2GpHoAbl2D6gt" + valorPesquisa + "&r=json"
	})
	.done(function(msg){
		//console.log('msg');
		console.log(msg);

		//$.each(msg.Search, function(index, result){
		msg.Search.forEach(function(result){
			var liMedia = cloneMedia.clone();
			$('a', liMedia).attr('href', 'http://www.imdb.com/title/'+ result.imdbID);
			if(result.Poster != 'N/A')
				$('#image', liMedia).attr("src", result.Poster);
			$('.title', liMedia).text(result.Title);
			$('.ano', liMedia).text(result.Year);
			$('.tipo', liMedia).text(result.Type);
			$('.media-list').append(liMedia);
		})
	})
});

function showDetalhes() {
  var x = document.getElementById("tabela-detalhes");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}