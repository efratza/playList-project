var newPlaylistObject = {};

$('.addsong').click (creataPopup);

function creataPopup(e){
	// $('.allContainer').css('background-color', 'black');
	  // $('body').empty();
	  // $.get('header.html', function(data) {
		content.html(data);
		});

	var popup = $('<div>',{
		id:"popup"
	});
	$.get('form.html' ,function(data){
		var content = $('<div>',{
			id:"popupContent",
			html:data,
			click:function(e){
			},
		}).appendTo(popup);

		content.find('form').submit (function(event){
			event.preventDefault();
			newPlaylistObject.name = $(event.target).find('input [name = name]').val();
			newPlaylistObject.name = $(event.target).find('input [name = photo]').val();
			addSongs($(event.target));
		});
	});
	popup.appendTo('body');
}


function addSongs(form) {
	var content = form.parent();
	form.remove();
	console.log(content);
	$.get('popupAdd.html', function(data) {
		content.html(data);
		for (var i = 0; i < 3; i++) {
			addSong().prependTo(content.find('form'));
		}

		content.find('.add-song').click(function(event) {
			addSong().insertAfter(content.find('form fieldset:last-of-type'));
		});

		content.find('form').submit(function(event) {
			event.preventDefault();
			newPlaylistObject.songs = [];
			$(event.target).find('fieldset').each(function(index, el) {
				var song = {};
				song.url = $(el).find('.song-name input:not(:placeholder-shown)').val();
				newPlaylistObject.songs.push(song);
			});
			console.log(newPlaylistObject);
		});
	});

	// function addSong() {
	// 	var fieldset = $('<fieldset>');
		
	// 	var songNameLabel = $('<label>', {
	// 		class: "song-name", 
	// 	}).appendTo(fieldset);
	// 	$('<span>', {text: "Song URL"}).appendTo(songNameLabel);
	// 	$('<input>', {
	// 		type: "text", 
	// 		placeholder: "song url", 
	// 	}).appendTo(songNameLabel);

	// 	return fieldset;
	// }
}