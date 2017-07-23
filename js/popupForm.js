

class FormPopup extends Popup{
	
	constructor(){		
	super(null);
	
}

build(){
	var myForm = this;
	    this.newPlaylistObject ={};
		super.build();
		this.buildForm();
		var container = $('<div>',{
		class:"container",
	}).appendTo(this.popup.find('#popup_container'));
		this.buildForm().appendTo(container);
	}


	resetPopup(){
		console.log(222);
		 $('.formInput').val("");
	}



   saveData(){
   	console.log(111)
     	new Promise(function (resolve) {
               console.log($('.formpop'))
               $('.formpop').submit(function(event) {
                        event.preventDefault();
                            resolve(event);
                   });
          }).then(function(event) {
	   		 		console.log(221)
                  save();
          }.bind(this));
      }


       save(event){
       	console.log(jjj)
       	    var newPlaylistObject = {};
       	    newPlaylistObject.name = $(event.target).find('input[name=name]').val();
			newPlaylistObject.photo = $(event.target).find('input[name=photo]').val();
   //      	newPlaylistObject.name = $('#nameInput').val();
			// newPlaylistObject.photo = $('#urlInput').val();
			console.log(newPlaylistObject);		
			buildNextPop();
       }

       buildNextPop(){
      		$('.formpop').remove();
			console.log(555)
       		var form = $('<form>');
				var songNameLabel = $('<label>', {
					class: "song-name", 
				}).appendTo(form);
				$('<span>', {text: "Song URL"}).appendTo(songNameLabel);
				$('<input>', {
					type: "text", 
					placeholder: "song url", 
				}).appendTo(songNameLabel);

				return form;
			}
       

buildForm(){
	console.log(54)
		var formPop = $('<form>',{
			class:"formpop"});
		// }).appendTo(container);
		var title = $('<h3>',{
			text: "Add New Playlist"
		}).appendTo(formPop);
		var form = $('<fieldset>').appendTo(formPop);
		var nameAlbom =  $('<label>', {
			class: "albom-name", 
			}).appendTo(form);
		$('<span>', {
			text: "Playlist Name"
	        }).appendTo(nameAlbom);
				$('<input>', {
					name: 'name',
					id:"nameInput",
					class:"formInput",
					type: "text", 
					placeholder: "Playlist Name", 
				}).appendTo(nameAlbom);
		var urlAlbom =  $('<label>', {
			class: "albom-url", 
			}).appendTo(form);
		$('<span>', {
			text: "Playlist URL"
	        }).appendTo(urlAlbom);
				$('<input>', {
					name: 'photo',
					id:"urlInput",
					class:"formInput",
					type: "text", 
					placeholder: "Playlist Url", 
				}).appendTo(urlAlbom);		
		$('<input>',{
			type: 'submit',
			value:"NEXT",
			// text:"NEXT",
			class:'next',
			click: this.saveData
		}).appendTo(form);
		 $('<button>',{
			text: 'RESET FIELDS',
			class:'reset',
			click: this.resetPopup.bind(this),
		}).appendTo(form);
		console.log(6546)
		return formPop;

	}



   	 	getAjax (url,data,method) {
			data = data  || null;
				  return new Promise(function (resolve) {
				   $.ajax({
						type: method,
						url: url, 
						data: data,
							success: function (response) {
							console.log(response);  
				                   resolve(response);
				      		}
				   		 })
				       })
				     }


  //    $.get('form.html' ,function(data){
		// var content = $('<div>',{
		// 	id:"popupContent",
		// 	html:data,
		// 	click:function(e){
		// 	},
		// }).appendTo(popupContainer);
		// content.find('form').submit (function(event){
		// 	newPlaylistObject={};
		// 	event.preventDefault();
		// 	newPlaylistObject.name = $(event.target).find('input [name = name]').val();
		// 	newPlaylistObject.name = $(event.target).find('input [name = photo]').val();
		// 	addSongs($(event.target));
		// });
		// });
		
		sum (num1 , num2){
			return num1+num2;
		 
		}




}
