$( "[id^=btn]" ).css({"cursor": "pointer"}).click(function() {
var name = $(this).attr("name");
$('[id^="btn"]').removeClass('selected');
$( ".portrait" ).css({"background-image": "url(./portraits/"+name+".png)"}).removeClass('selected');

$(this).addClass('selected');
$(".portrait").css({"background-image": "url(./portraits/"+name+".png)"}).addClass('selected');

var idcode = []; 
var idtype = [];
var idgender = [];
var idside = [];
var figure = [
  { id: "hero_adamwarlock01", type: "컴뱃", gender: "남", side: "악당", allies: "인간", ability: "타임 프리징, 마법", team: "어벤져스", utilities: "잠재력, T3" }, 
  { id: "hero_aero01", type: "스피드", gender: "여", side: "영웅", allies: "인간", ability: "타임 프리징, 마법", team: "어벤져스", utilities: "잠재력, T3" }, 

];


$.each(figure, function(idx, obj) {    
  if (name == obj.id) {
    idtype.push( obj.id );
    idgender.push( obj.type );
    idside.push( obj.side );

  }
}); 

$(".type").text( idtype.join( "" ) );
$(".genter").text( idgender.join( "" ) );
$(".side").text( idside.join( "" ) );
    
});
