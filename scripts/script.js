$(document).ready(function(event){

  $( "[id^=navbtn]" ).click(function() {

    const name = $(this).attr("name");

    switch( name ) {

      case "index" :
        $( ".main" ).load( "index.html .main" );
        break;

      case "char" :
        $( ".main" ).load( "char.html" );
        break;

      case "info" :
        $( ".main" ).load( "info.html" );
        break;

      case "tier" :
        $( ".main" ).load( "tier.html" );
        break;

      default :
        $( ".main" ).load( "https://future-fight.fandom.com/" );
        break;
                 }

  });

  event.preventDefault();
});
