class DeletePopup extends Popup{
	
	constructor(text){		
	super(null);
	
}

build(){
	super.build();
	this.buildPopupDelete();
	var container = $('<div>',{
		class:"container",
	}).appendTo(this.popup.find('#popup_container'));
		this.buildPopupDelete().appendTo(container);
		

	
}

buildPopupDelete(){
	var deletePop = $('<form>',{
			class:"deletePop"});
		// }).appendTo(container);
		var title = $('<h3>',{
			text: "Are you Sure?"
		}).appendTo(deletePop);
		$('<input>',{
			type: 'submit',
			value:"DELETE",
			class:'delete_btn',
			click: this.deleteData
		}).appendTo(deletePop);
		$('<button>',{
			text: 'CANCEL',
			class:'cancel',
			click: this.cancelDelete,
		}).appendTo(deletePop);
		return deletePop;

}


 cancelDelete(){
	$('.deletePop').submit(function(event) {
        event.preventDefault();
        	$('#popup').remove();
	  });
   }

   deleteData(){


   }
 	

}