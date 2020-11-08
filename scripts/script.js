$(document).ready(function(event){

  $( "[id^=navbtn]" ).click(function() {

    const name = $(this).attr("name");

    switch( name ) {

      case "index" :
        $( ".contents" ).load( "index.html .main" );
        break;

      case "char" :
        $( ".contents" ).load( "char.html" );
        break;

      case "info" :
        $( ".contents" ).load( "info.html" );
        break;

      case "tier" :
        $( ".contents" ).load( "tier.html" );
        break;

      default :
        $( ".contents" ).load( "https://future-fight.fandom.com/" );
        break;
                 }

  });

  event.preventDefault();
});
