var cloneMedia = $('.media').clone();

$('#lupa').on('click', function(){

	var valorPesquisa = $('#pesquisa').val();
	$('.panel-title').text('Resultados da pesquisa de "' + valorPesquisa + '"');

	$('.media-list').html('');

	$.ajax({
		method: "GET",
		url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + valorPesquisa + '&api_key=8ad8a891f9b7f2cefeb5ac37cd0487e9&format=json'
	})
	.done(function(msg){
		//console.log('msg');
		console.log(msg);

		//$.each(msg.Search, function(index, result){
		msg.results.trackmatches.track.forEach(function(result){
			var liMedia = cloneMedia.clone();
			$('a', liMedia).attr('href', result.url);
			if(result.Poster != 'N/A')
				$('#image', liMedia).attr("src", result.Poster);
			$('.title', liMedia).text(result.name);
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