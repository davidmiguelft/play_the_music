'use strict'

var cloneMedia = $('.media').clone();
var msg;

$('#lupa').on('click', function(){

	var valorPesquisa = $('#pesquisa').val();
	$('.panel-title').text('Resultados da Pesquisa para "' + valorPesquisa + '"');

	$('.media-list').html('');

	$.ajax({
		method: "GET",
		url: "http://www.last.fm/api/auth/?api_key=8ad8a891f9b7f2cefeb5ac37cd0487e9&token=2OH58H7cxviIJgbXC-El-aJNCf_63d8C" + valorPesquisa + "&r=json"
	})




	.done(function(msg){
		console.log('msg');
		console.log(msg);

		msg.Search.forEach(function(result){
			var liMedia = cloneMedia.clone();
			$('#image', liMedia).attr("src", result.Poster);
			$('.title', liMedia).text(result.Title);
			$('.ano', liMedia).text(result.Year);
			$('.tipo', liMedia).text(result.Type);

			$('.media-list').append(liMedia);
		})
	})

});