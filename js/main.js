// $(document).ready(function() {
//    ajax(null,"header.html",'GET');
// });

$(document).ready(function() {
 ajax(null,"api/playlist",'GET')
 .then(function(data) {
               console.log(data.data.id);
               console.log(data.data);
               $.each(data.data, function(index, val) {
                buildPlaylist(index, val);
              }); 
         });
  });



function buildPlaylist(index, val){
 console.log(val);
 // var id= val.id;
 var playList=$('#playList');            
 var item=$('<div>',{
  class:"playItem",
                //click:
                "data-id":index,
                css:{"background-image": 'url(img/'+val.image+')'},
                // text:"hi"
              }).appendTo(playList);

 var albumContainer =$('<span>',{
   class:"albumContainer",
 }).appendTo(item);

 var name =$('<h1>',{
   text: val.name,
//                   
}).appendTo(albumContainer);
 name.circleType({ radius: 170});


 var playItemSmall=$('<span>',{
   class:"playItemSmall"
 }).appendTo(item);

 var playIcon=$('<button>',{
   class:"buttonIcon",
           // click:playSong,
         }).appendTo(playItemSmall);


 var iconPlay =$('<span>',{
  class:"glyphicon glyphicon-play"
}).appendTo(playIcon);
 iconPlay.click({param1: index},playAlbum);

 var buttons=$('<div>',{
   class:"buttons"
 }).appendTo(item);

 var button=$('<button>',{
   class:"buttonIcon",
     id: "remove_btn",
     click:deletePopup,
 }).appendTo(buttons);

 var icon=$('<i>',{
   class:"fa fa-close",
   // id: "remove_btn", 
   css:{"font-size":"22px"}
 }).appendTo(button);

 var button=$('<button>',{
   class:"buttonIcon"
 }).appendTo(buttons);

 var icon=$('<i>',{
   class:"fa fa-pencil",
   css:{"font-size":"22px"}
 }).appendTo(button);


}


$('.addsong').click (function(){
  // var newPlaylistObject= {};
  var popup = new FormPopup();
  popup.build();
  // console.log(index)
});

function deletePopup (){
  var popup = new DeletePopup();
  popup.build(event);
}


function playAlbum(event){
   // console.log(event.data.param1);
   var index = event.data.param1+1;
   console.log(index)
   // var album = ajax(null,"api/playlist"+index+"",'GET')
   // var songs = ajax(null,"api/playlist"+index+"/songs",'GET')
    var album =  ajax(null,"api/playlist/"+(event.data.param1+1)+"",'GET');
    var songs = ajax(null,"api/playlist/"+(event.data.param1+1)+"/songs",'GET');
      console.log(album);
       console.log(songs);
    Promise.all([album, songs]).then(values => { 
        console.log(values);
        buildAlbum(values);
    });
 
  }

  function buildAlbum(values){
     ajax(null,"playsong.html",'GET')
     .then(function(data){
       $('#playList').empty();
       $('#playList').html(data);
           buildMusic(values);
     });
  }

  function buildMusic(values){
    // console.log(values[0].data.image);
      $('.playItem').css("background-image", 'url(img/'+values[0].data.image+')');
      var text = $('<p>',{
        text:"NOW PLAYING :"+values[1].data.songs[0].name
      }).appendTo($('#play'));
      // var buttons=$('<div>',{
      //  class:"buttons"
      // }).appendTo($('#play'));

      // var button=$('<button>',{
      //  class:"buttonIcon",
      // }).appendTo(buttons);

      // var icon=$('<i>',{
      //  class:"fa fa-close",
      //  id: "remove_btn", 
      //  css:{"font-size":"22px"}
      // }).appendTo(button);

      // var button=$('<button>',{
      //  class:"buttonIcon"
      // }).appendTo(buttons);

      // var icon=$('<i>',{
      //  class:"fa fa-pencil",
      //  css:{"font-size":"22px"}
      // }).appendTo(button);

      // $('.playItem').click(playMusic);
      var obj=values[1].data.songs;
        console.log(obj)
       $.each(obj, function(index,val){
        console.log(777)
         // $('#playList').append(buildList(index, val));
       


      });

  }

  function buildList(index, val){
    // var songlist = $('<div>',{
    //   class:songList
    // }).appendTo($('#playList'));
     var li = $('<li>',{
        html: $('<button>', {
        text: val.name,
        click: playSong,
        class: "player-song-button",
          }).attr('data-src', val.url), 
        tabindex:index,
      }).appendTo(songlist);
  }



  function playMusic(values){
    var song= values[1].data.songs[url];
    console.log(song);

  }







function ajax(data,url,method) {
  //method = "POST";
  data   = data  || null;
   console.log(data);
   console.log(url);
   console.log(method);
   return new Promise(function (resolve) {
    $.ajax({
      type: method,
      url: url, 
      data: data,
      success: function (response) {
        //console.log("response from success    "+response);
        // console.log(response);  
        resolve(response);
      }
    });
  });
}