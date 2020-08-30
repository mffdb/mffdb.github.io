$(document).ready(function(event){
   $('[id^="btn"]')
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

 event.preventDefault();
})