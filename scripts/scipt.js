$(document).ready(function(event){
/*   $('[id^="btn"]')
    .css("cursor", "pointer")
    .attr("title", "열기")
    .click(function(){    
   var name = $(this).attr("name");
    $('[id^="btn"]').removeClass('selected');
    $('[class^="content"]').removeClass('selected');
    $(this).addClass('selected');
    $(".content-" + name).addClass('selected');
  })
  
   $('[id^="toggle"]')
    .css("cursor", "pointer")
    .attr("title", "열기")
    .click(function(){    
   var name = $(this).attr("name");
   $('.tr-' + name).toggleClass("selected");
    $(this).toggleClass("selected");
  })
*/
 $( "[id^=btn]" ).click(function() {
 /*  var html = [ "The clicked div has the following styles:" ];

     var styleProps = $( this ).css(["width", "height", "color", "background-color", "background-image"]);
      $.each( styleProps, function( prop, value ) {
        html.push( prop + ": " + value );
      });
      */
     var name = $(this).attr("name");
      $( ".result1" ).css({"background-image": "url("+name+".jpg)"});
  /*  $( ".result2" ).html( html.join( "<br>" ) );*/
    });

 event.preventDefault();
})
