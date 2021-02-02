'use strict'

var cloneMedia = $('.media').clone();

$('#lupa').on('click', function(){

	var valorPesquisa = $('#pesquisa').val();
	$('.panel-title').text('Resultados da pesquisa de "' + valorPesquisa + '"');

	$('.media-list').html('');

	$.ajax({
		method: "GET",
		url: "http://ws.audioscrobbler.com/2.0/?method=track.search&limit=10&track=" + valorPesquisa + "&api_key=8ad8a891f9b7f2cefeb5ac37cd0487e9&format=json"
	})
	.done(function(msg){
		//console.log('msg');
		console.log(msg);

		msg.results.trackmatches.track.forEach(function(result){
			var liMedia = cloneMedia.clone();

			$('.title', liMedia).text(result.name);
			$('.artista', liMedia).text("Artista: " + result.artist);
			$('.ouvintes', liMedia).text(" - " + result.listeners + " ouvintes");

			$('.media-list').append(liMedia);
		})

		$.ajax({
			method: "GET",
			url: "http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe" + valorPesquisa + "&api_key=8ad8a891f9b7f2cefeb5ac37cd0487e9&format=json"
		})
		.done(function(msg){
			console.log(msg);

			msg.results.albummatches.album.forEach(function(result){
				var liMedia = cloneMedia.clone();

				$('#image', liMedia).attr('src', result.image[2]["#text"])
			})
		})
	})
});

