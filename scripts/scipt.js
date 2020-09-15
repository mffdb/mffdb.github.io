$(document).ready(function(){
  $( "[id^=btn]" ).css({"cursor": "pointer"}).click(function() {
  
    var name = $(this).attr("name");
    var print = [ ];
    var styleProps = $( this ).css([
      "width", "height", "color", "background-color", "background-image"
    ]);
    
    $('[id^="btn"]').removeClass('selected');
    $( ".portrait" ).css({"background-image": "url(./"+name+".jpg)"}).removeClass('selected');
    
    $(this).addClass('selected');
    $(".portrait").css({"background-image": "url(./"+name+".jpg)"}).addClass('selected');
    
        
    $.each( styleProps, function( prop, value ) {
      print.push( prop + ": " + value );
    });
    $( ".result1" ).html( print.join( "<br>" ) );
    
    
    var code = []; 
    var did = [];
    var figure = [
      { id: "img_forest", type: "컴뱃", gender: "남", side: "악당", allies: "인간", ability: "타임 프리징, 마법", team: "어벤져스", utilities: "잠재력, T3" }, 
      { id: "img_lights", type: "스피드", gender: "여", side: "영웅", allies: "인간", ability: "타임 프리징, 마법", team: "어벤져스", utilities: "잠재력, T3" }, 

    ];


    $.each(figure, function(idx, obj) {    
      if (name == obj.id) {
        code.push( obj.type );
        did.push( obj.gender );
        
      }
    }); 

    $(".result2").html( did.join( "<br>" ) );
    $(".result3").html( code.join( "<br>" ) );
     
  });
  
  event.preventDefault();
});
