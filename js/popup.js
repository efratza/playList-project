var newPlaylistObject = {};

class Popup {
	constructor (text) {
		this.text = text;
	}
	build () {
		this.popup = $('<div>', {
			id: "popup",
			click: function (e) {
				if (e.target.id === 'popup') {
					this.remove();
				}
			}.bind(this), 
			tabindex: 1, 
			keydown: function (e) {
				console.log(e)
				if (e.keyCode === 27) {
					this.remove();
				}
			}.bind(this), 
		}).appendTo('body');
		var popupContainer = $('<div>', {
			id: "popup_container"
		}).appendTo(this.popup);
		$('<button>', {
			html: "&#10005;", 
			id: "remove_btn", 
			click: this.remove.bind(this), 
		}).appendTo(popupContainer);
		
		$('<h3>', {
			text: this.text
		}).appendTo(popupContainer);
	};
	remove(e) {
		this.popup.remove();
	}



}












