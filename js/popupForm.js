

class FormPopup extends Popup{
	
	constructor(){		
	super(null);
	this.newPlaylistObject ={};
	
}

build(sourcePlayList){
	    
	    this.sourcePlayList = sourcePlayList;
		super.build();
		this.buildForm();
		var container = $('<div>',{
		class:"container",
	}).appendTo(this.popup.find('#popup_container'));
		this.buildForm().appendTo(container);
	}


	resetPopup(){
		 $('.formInput').val("");
	}



   saveData(){
     	new Promise(function (resolve) {
               console.log($('.formpop'))
               $('.formpop').submit(function(event) {
                        event.preventDefault();
                            resolve(event);
                   });
          }).then(function(event) {
	   		 		//console.log(221)
                   this.saveFirstPopupData(event);
          }.bind(this));
          console.log(this)
      }


 saveData2(){
     	new Promise(function (resolve) {
               console.log($('.formpop'))
               $('.formpop').submit(function(event) {
                        event.preventDefault();
                            resolve(event);
                   });
          }).then(function(event) {
	   		 		//console.log(221)
                   this.saveSecondPopupData(event);
          }.bind(this));
          console.log(this)
      }



       saveFirstPopupData(event){
       
      	    this.newPlaylistObject = {};

      	     


       	    this.newPlaylistObject.name = $(event.target).find('input[name=name]').val();
			this.newPlaylistObject.photo = $(event.target).find('input[name=photo]').val();	
			debugger



			ajax({
                    "name": this.newPlaylistObject.name,
                    "image": this.newPlaylistObject.photo,
                    "songs":"[{'name': 'Efrat', 'url':'aaa'}]",
                    //"id":4
                },
                "api/playlist?type=playlist",
                'POST')

		 			.then(function(response) {
					debugger;

		               // console.log(data.data.id);
		               // console.log(data.data);
		              //  $.each(data.data, function(index, val) {
		              //   buildPlaylist(index, val);
		              // }); 
		         });
			 // $.post("api/playlist.php?type=playlist&id=" + this.sourcePlayList.length+1, {
    //                 name: this.newPlaylistObject.name,
    //                 image: this.newPlaylistObject.photo,
    //             }, function (data, textStatus, xhr) {
    //             	debugger;
    //             	console.log("id=" + data.id + ", status=" + textStatus + ", statusId=" + xhr.status);
    //                 return (data.success);
    //             });


			this.buildNextPop();
       }

       saveSecondPopupData(){

		this.newPlaylistObject.songs = [];
		//$.each($(".classblablabla"))
       	//When you create name/url elements in the page, add class for url song, and another class to name song
       	//when you get here - get all objects by jquery with those classes
       	//each loop, add new object to this.newPlaylistObject.songs

         debugger;
       		data = {

       			"name": this.newPlaylistObject.name,
       			"image": this.newPlaylistObject.photo,
       			"songs":[{"name": "Efrat", "url":"aaa"}]
       		};


       	ajax(data,"api/playlist",'POST')
 			.then(function(response) {
			debugger;

               // console.log(data.data.id);
               // console.log(data.data);
              //  $.each(data.data, function(index, val) {
              //   buildPlaylist(index, val);
              // }); 
         });


		}

       buildNextPop(){

debugger;
       	$('.formpop').remove();
		var form = $('<form>');
		form.appendTo($('#popup_container'));

       	var songUrlLabel = $('<label>', {
					class: "song-url",
					text: "Song URL", 
				}).appendTo(form);

				$('<input>', {
					type: "text", 
					placeholder: "song url", 
					value:"C:\\Users\\yg6y\\Music\\אברהם פריד אוצר של יר''ש - עותק\\07 - Playing With Fire.mp3"
				}).appendTo(form);

			var songNameLabel = $('<label>', {
				class: "song-name",
				text: "Name", 
			}).appendTo(form);

			$('<input>', {
				type: "text", 
				placeholder: "song name", 
				value: "Playing With Fire"
			}).appendTo(form);


			$('<button>', {
				text: "save", 
				click: this.saveSecondPopupData.bind(this)
				
			}).appendTo(form);

			
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
					value:'Fried',
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
					value:"C:\\Users\\yg6y\\Music\\אברהם פריד אוצר של יר''ש - עותק\\Frid.jpg",
					placeholder: "Playlist Url", 
				}).appendTo(urlAlbom);		
		$('<input>',{
			type: 'submit',
			value:"NEXT",
			// text:"NEXT",
			class:'next',
			click: this.saveData.bind(this),
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



}
