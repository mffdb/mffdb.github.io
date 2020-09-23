$(document).ready(function(event){
 
  $( "[id^=btn]" ).css({"cursor": "pointer"}).click(function() {
  
    const name = $(this).attr("name");
    const type = $(this).attr("type");
    const sex = $(this).attr("sex");
    const side = $(this).attr("side");

    const print = [ ];
    const styleProps = $( this ).css([
      "width", "height", "color", "background-color", "background-image"
    ]);

    $( '[id^="btn"]' ).removeClass('selected');
    $( ".gra-port" ).css({"background-image": "url(./portraits/"+name+".png)"}).removeClass('selected');
    $( ".ico-type" ).css({"background-image": "url(./icons/"+type+".png)"}).removeClass('selected');
    $( ".ico-sex" ).css({"background-image": "url(./icons/"+sex+".png)"}).removeClass('selected');
    $( ".ico-side" ).css({"background-image": "url(./icons/"+side+".png)"}).removeClass('selected');

    $(this).addClass('selected');
    $( ".gra-port" ).css({"background-image": "url(./portraits/"+name+".png)"}).addClass('selected');
    $( ".ico-type" ).css({"background-image": "url(./icons/"+type+".png)"}).addClass('selected');
    $( ".ico-sex" ).css({"background-image": "url(./icons/"+sex+".png)"}).addClass('selected');
    $( ".ico-side" ).css({"background-image": "url(./icons/"+side+".png)"}).addClass('selected');

    const fchar = [], fsuit = [], ftier= [], fname= [], fhei = [], fwei = [], fpot = [], fabil = [];

    $.each(figure, function(idx, obj) {    
      if (name == obj.id) {

        fchar.push( obj.char);
        fsuit.push( obj.suit + " " );
        ftier.push( obj.tier + " " );
        fname.push( obj.name + " " );
        fhei.push( obj.hei + " " );
        fwei.push( obj.wei + " " );
        fpot.push( obj.pot + " " );
        fabil.push( obj.abil + " " );

      }
    }); 

    $(".gra-char").text( fchar );
    $(".info-part-suit").text( fsuit );
    $(".info-part-tier").text( ftier );
    $(".info-part-name").text( fname );
    $(".info-part-hei").text( fhei );
    $(".info-part-wei").text( fwei );
    $(".info-part-pot").text( fpot );
    $(".info-part-abil").text( fabil );

  });
 
    var figure = [

// 컴뱃 영웅
{ id: "hero_agentvenom01", char: "에이전트 베놈", suit: "올뉴, 올디퍼런트", tier: "1", name: "유진 \"플래시\" 톰슨", hei: "188cm", wei: "84kg", pot: "Potential", ability: "Symbiote, Leadership, Agent" },
{ id: "hero_agentvenom01_S01", char: "에이전트 베놈", suit: "에이전트 안티베놈", tier: "1", name: "유진 \"플래시\" 톰슨", hei: "188cm", wei: "84kg", pot: "Potential", ability: "Symbiote, Leadership, Agent" },
{ id: "hero_amadeuscho01", char: "헐크 (아마데우스 조)", suit: "토탈리 어썸 헐크", tier: "1", name: "아마데우스 조", hei: "변신전 168cm, 변신후 ?cm", wei: "변신전 53kg, 변신후 ?kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_amadeuscho01_S01", char: "헐크 (아마데우스 조)", suit: "몬스터 언리쉬드! (MFF 배리언트)", tier: "1", name: "아마데우스 조", hei: "변신전 168cm, 변신후 ?cm", wei: "변신전 53kg, 변신후 ?kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_amadeuscho01_S02", char: "헐크 (아마데우스 조)", suit: "브론", tier: "1", name: "아마데우스 조", hei: "변신전 168cm, 변신후 ?cm", wei: "변신전 53kg, 변신후 ?kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_americachavez01", char: "아메리카 차베스", suit: "얼티미츠", tier: "1", name: "아메리카 차베스", hei: "183cm", wei: "75kg", pot: "-", ability: "Fast Movement, Strong" },
{ id: "hero_beast01", char: "비스트", suit: "클래식", tier: "1", name: "헨리 \"행크\" 필립 맥코이", hei: "180cm", wei: "182kg", pot: "Potential", ability: "Strong, Agility" },
{ id: "hero_beast01_S01", char: "비스트", suit: "에이지 오브 아포칼립스", tier: "1", name: "헨리 \"행크\" 필립 맥코이", hei: "180cm", wei: "182kg", pot: "Potential", ability: "Strong, Agility" },
{ id: "hero_beast01_S02", char: "비스트", suit: "언캐니 엑스맨", tier: "1", name: "헨리 \"행크\" 필립 맥코이", hei: "180cm", wei: "182kg", pot: "Potential", ability: "Strong, Agility" },
{ id: "hero_blackpanther01", char: "블랙 팬서", suit: "모던", tier: "3", name: "티찰라", hei: "183cm", wei: "90kg", pot: "Potential", ability: "Agility, Command" },
{ id: "hero_blackpanther01_S01", char: "블랙 팬서", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "3", name: "티찰라", hei: "183cm", wei: "90kg", pot: "Potential", ability: "Agility, Command" },
{ id: "hero_blackpanther01_S02", char: "블랙 팬서", suit: "영화 - 블랙 팬서 1", tier: "3", name: "티찰라", hei: "183cm", wei: "90kg", pot: "Potential", ability: "Agility, Command" },
{ id: "hero_blade01", char: "블레이드", suit: "모던", tier: "1", name: "에릭 브룩스", hei: "188cm", wei: "98kg", pot: "<>", ability: "Healing, Weapon Master" },
{ id: "hero_blade01_S01", char: "블레이드", suit: "70년대 클래식", tier: "1", name: "에릭 브룩스", hei: "188cm", wei: "98kg", pot: "<>", ability: "Healing, Weapon Master" },
{ id: "hero_blade01_S02", char: "블레이드", suit: "어벤져스", tier: "1", name: "에릭 브룩스", hei: "188cm", wei: "98kg", pot: "<>", ability: "Healing, Weapon Master" },
{ id: "hero_captainamerica01", char: "캡틴 아메리카", suit: "영화 - 어벤져스", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S01", char: "캡틴 아메리카", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S02", char: "캡틴 아메리카", suit: "시크릿 워즈: 2099", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S03", char: "캡틴 아메리카", suit: "영화 - 캡틴 아메리카: 윈터 솔져", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S04", char: "캡틴 아메리카", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S05", char: "캡틴 아메리카", suit: "마블 나우!", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S06", char: "캡틴 아메리카", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S07", char: "캡틴 아메리카", suit: "영화 - 어벤져스: 엔드게임", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S08", char: "캡틴 아메리카", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S09", char: "캡틴 아메리카", suit: "어벤져스 3099", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_captainamerica01_S10", char: "캡틴 아메리카", suit: "하이드라 슈프림", tier: "3", name: "스티븐 그랜트 \"스티브\" 로저스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Leadership, Command" },
{ id: "hero_colossus01", char: "콜로서스", suit: "모던", tier: "1", name: "표트르 \"피터\" 니콜라예비치 라스푸틴", hei: "변신전 195cm, 변신후 225cm", wei: "변신전 113kg, 변신후 228kg", pot: "Potential", ability: "Leadership, Strong" },
{ id: "hero_colossus01_S01", char: "콜로서스", suit: "엑스포스", tier: "1", name: "표트르 \"피터\" 니콜라예비치 라스푸틴", hei: "변신전 195cm, 변신후 225cm", wei: "변신전 113kg, 변신후 228kg", pot: "Potential", ability: "Leadership, Strong" },
{ id: "hero_colossus01_S02", char: "콜로서스", suit: "피닉스 파이브", tier: "1", name: "표트르 \"피터\" 니콜라예비치 라스푸틴", hei: "변신전 195cm, 변신후 225cm", wei: "변신전 113kg, 변신후 228kg", pot: "Potential", ability: "Leadership, Strong, 피닉스 포스" },
{ id: "hero_crescent01", char: "크레센트", suit: "모던", tier: "3", name: "단비", hei: "127cm", wei: "27kg", pot: "Potential", ability: "Strong, Durability, Leadership" },
{ id: "hero_crescent01_S01", char: "크레센트", suit: "라이프스타일 시리즈 1", tier: "3", name: "단비", hei: "127cm", wei: "27kg", pot: "Potential", ability: "Strong, Durability, Leadership" },
{ id: "hero_deathlok01", char: "데쓰록", suit: "영화 - 에이전트 오브 쉴.드.", tier: "1", name: "마이클 \"마이크\" 피터슨", hei: "?cm", wei: "?kg", pot: "<>", ability: "Machin, Agent" },
{ id: "hero_deathlok01_S01", char: "데쓰록", suit: "모던", tier: "1", name: "마이클 \"마이크\" 피터슨", hei: "?cm", wei: "?kg", pot: "<>", ability: "Machin, Agent" },
{ id: "hero_drax01", char: "드랙스 더 디스트로이어", suit: "영화 - 가디언즈 오브 갤럭시", tier: "1", name: "과거 아서 샘슨 더글라스", hei: "현재 193cm, 과거 175cm, 강력 224cm", wei: "현재 308kg, 과거 73kg, 강력 476kg", pot: "Potential", ability: "Healing" },
{ id: "hero_drax01_S01", char: "드랙스 더 디스트로이어", suit: "올뉴, 올디퍼런트", tier: "1", name: "과거 아서 샘슨 더글라스", hei: "현재 193cm, 과거 175cm, 강력 224cm", wei: "현재 308kg, 과거 73kg, 강력 476kg", pot: "Potential", ability: "Healing" },
{ id: "hero_giantman01", char: "자이언트맨", suit: "모던", tier: "1", name: "헨리 \"행크\" 조나단 핌", hei: "183cm, 조절", wei: "84kg, 조절", pot: "Potential", ability: "Strong" },
{ id: "hero_giantman01_S01", char: "자이언트맨", suit: "골리앗", tier: "1", name: "헨리 \"행크\" 조나단 핌", hei: "183cm, 조절", wei: "84kg, 조절", pot: "Potential", ability: "Strong" },
{ id: "hero_giantman01_S02", char: "자이언트맨", suit: "울트론 핌", tier: "1", name: "헨리 \"행크\" 조나단 핌", hei: "183cm, 조절", wei: "84kg, 조절", pot: "Potential", ability: "Strong" },
{ id: "hero_gladiator01", char: "글래디에이터", suit: "모던", tier: "2", name: "칼라르크", hei: "198cm", wei: "269kg", pot: "Potential", ability: "Fast Movement, Strong, Leadership" },
{ id: "hero_goliath01", char: "골리앗", suit: "클래식", tier: "1", name: "윌리엄 \"빌\" 바렛 포스터", hei: "183cm, 조절", wei: "90kg, 조절", pot: "Potential", ability: "Durability, Strong" },
{ id: "hero_gorgon01", char: "고르곤", suit: "워 오브 킹즈", tier: "1", name: "고르곤 페트라곤", hei: "200cm", wei: "220kg", pot: "Potential", ability: "Strong" },
{ id: "hero_gorillaman01", char: "고릴라맨", suit: "모던", tier: "1", name: "케니스 \"켄\" 헤일", hei: "183cm", wei: "154kg", pot: "Potential", ability: "Strong, Agility, Weapon Master" },
{ id: "hero_groot01", char: "그루트", suit: "영화 - 가디언즈 오브 갤럭시", tier: "1", name: "그루트", hei: "?cm", wei: "?kg", pot: "Potential", ability: "Healing" },
{ id: "hero_groot01_S01", char: "그루트", suit: "시크릿 워즈: Thors", tier: "1", name: "그루트", hei: "?cm", wei: "?kg", pot: "Potential", ability: "Healing" },
{ id: "hero_groot01_S02", char: "그루트", suit: "영화 - 가디언즈 오브 갤럭시 Vol. 2", tier: "1", name: "그루트", hei: "?cm", wei: "?kg", pot: "Potential", ability: "Healing" },
{ id: "hero_groot01_S03", char: "그루트", suit: "영화 - 어벤져스: 인피니티 워", tier: "1", name: "그루트", hei: "?cm", wei: "?kg", pot: "Potential", ability: "Healing" },
{ id: "hero_hogun01", char: "호군", suit: "모던", tier: "1", name: "호군", hei: "190cm", wei: "304kg", pot: "<>", ability: "Strong" },
{ id: "hero_hulk01", char: "헐크", suit: "영화 - 어벤져스", tier: "3", name: "로버트 브루스 배너", hei: "변신전 177cm, 변신후229cm", wei: "변신전 58kg, 변신후 522kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_hulk01_S01", char: "헐크", suit: "시크릿 워즈: 퓨처 임퍼펙트 (마에스트로)", tier: "3", name: "로버트 브루스 배너", hei: "변신전 177cm, 변신후229cm", wei: "변신전 58kg, 변신후 522kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_hulk01_S02", char: "헐크", suit: "월드 워 헐크", tier: "3", name: "로버트 브루스 배너", hei: "변신전 177cm, 변신후229cm", wei: "변신전 58kg, 변신후 522kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_hulk01_S03", char: "헐크", suit: "영화 - 토르: 라그나로크", tier: "3", name: "로버트 브루스 배너", hei: "변신전 177cm, 변신후229cm", wei: "변신전 58kg, 변신후 522kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_hulk01_S04", char: "헐크", suit: "영화 - 어벤져스: 엔드게임", tier: "3", name: "로버트 브루스 배너", hei: "변신전 177cm, 변신후229cm", wei: "변신전 58kg, 변신후 522kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_hulk01_S05", char: "헐크", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "3", name: "로버트 브루스 배너", hei: "변신전 177cm, 변신후229cm", wei: "변신전 58kg, 변신후 522kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_hulk01_S06", char: "헐크", suit: "이모탈", tier: "3", name: "로버트 브루스 배너", hei: "변신전 177cm, 변신후229cm", wei: "변신전 58kg, 변신후 522kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_hulkbuster01", char: "헐크버스터 (마크 44)", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "1", name: "아이언맨의 아머", hei: "335cm", wei: "N/A", pot: "Potential", ability: "Strong, Machine" },
{ id: "hero_hulkbuster01_S01", char: "헐크버스터 (마크 43)", suit: "헤비 듀티 아머", tier: "1", name: "아이언맨의 아머", hei: "335cm", wei: "N/A", pot: "Potential", ability: "Strong, Machine" },
{ id: "hero_hulkbuster01_S02", char: "헐크버스터 2.0", suit: "영화 - 어벤져스: 인피니티 워", tier: "1", name: "아이언맨의 아머", hei: "335cm", wei: "N/A", pot: "Potential", ability: "Strong, Machine" },
{ id: "hero_hulkling01", char: "헐클링", suit: "뉴 어벤져스", tier: "1", name: "도렉 8세(Dorrek VIII) / 시어도어 \"테디\" 루퍼스 캐플란-알트먼", hei: "183cm", wei: "77kg", pot: "Potential", ability: "Strong, Durability" },
{ id: "hero_ironfist01", char: "아이언 피스트", suit: "클래식", tier: "1", name: "다니얼 \"대니\" 토마스 랜드-카이", hei: "180cm", wei: "80kg", pot: "<>", ability: "Agility, Healing" },
{ id: "hero_ironfist01_S01", char: "아이언 피스트", suit: "뉴 어벤져스", tier: "1", name: "다니얼 \"대니\" 토마스 랜드-카이", hei: "180cm", wei: "80kg", pot: "<>", ability: "Agility, Healing" },
{ id: "hero_ironfist01_S02", char: "아이언 피스트", suit: "올뉴, 올디퍼런트", tier: "1", name: "다니얼 \"대니\" 토마스 랜드-카이", hei: "180cm", wei: "80kg", pot: "<>", ability: "Agility, Healing" },
{ id: "hero_ironfist01_S03", char: "아이언 피스트", suit: "드라마 - 아이언 피스트", tier: "1", name: "다니얼 \"대니\" 토마스 랜드-카이", hei: "180cm", wei: "80kg", pot: "<>", ability: "Agility, Healing" },
{ id: "hero_jessicajones01", char: "제시카 캠벨 존스", suit: "모던", tier: "1", name: "", hei: "170cm", wei: "56kg", pot: "-", ability: "Strong, Durability" },
{ id: "hero_kamalakhan01", char: "미즈 마블 (카말라 칸)", suit: "올뉴, 올디퍼런트", tier: "1", name: "카말라 칸", hei: "163cm", wei: "조절", pot: "Potential", ability: "Strong, Healing" },
{ id: "hero_kamalakhan01_S01", char: "미즈 마블 (카말라 칸)", suit: "카라치 코스튬", tier: "1", name: "카말라 칸", hei: "163cm", wei: "조절", pot: "Potential", ability: "Strong, Healing" },
{ id: "hero_kamalakhan01_S02", char: "미즈 마블 (카말라 칸)", suit: "인휴먼즈: 아틸란 라이징", tier: "1", name: "카말라 칸", hei: "163cm", wei: "조절", pot: "Potential", ability: "Strong, Healing" },
{ id: "hero_lukecage01", char: "루크 케이지", suit: "모던", tier: "1", name: "칼 루카스", hei: "198cm", wei: "192kg", pot: "-", ability: "Strong, Durability" },
{ id: "hero_lukecage01_S01", char: "루크 케이지", suit: "올뉴, 올디퍼런트", tier: "1", name: "칼 루카스", hei: "198cm", wei: "192kg", pot: "-", ability: "Strong, Durability" },
{ id: "hero_lukecage01_S02", char: "루크 케이지", suit: "드라마 - 루크 케이지", tier: "1", name: "칼 루카스", hei: "198cm", wei: "191kg", pot: "-", ability: "Strong, Durability" },
{ id: "hero_misterfantastic01", char: "미스터 판타스틱", suit: "모던", tier: "3", name: "리드 리처즈", hei: "186cm", wei: "82kg", pot: "Potential", ability: "Leadership, Durability" },
{ id: "hero_misterfantastic01_S01", char: "미스터 판타스틱", suit: "퓨처 파운데이션", tier: "3", name: "리드 리처즈", hei: "186cm", wei: "82kg", pot: "Potential", ability: "Leadership, Durability" },
{ id: "hero_moonknight01", char: "문 나이트", suit: "모던", tier: "1", name: "마크 스펙터", hei: "188cm", wei: "102kg", pot: "-", ability: "Weapon Master, Leadership" },
{ id: "hero_moonknight01_S01", char: "문 나이트", suit: "아머드", tier: "1", name: "마크 스펙터", hei: "188cm", wei: "102kg", pot: "-", ability: "Weapon Master, Leadership" },
{ id: "hero_moonknight01_S02", char: "문 나이트", suit: "미스터 나이트", tier: "1", name: "마크 스펙터", hei: "188cm", wei: "102kg", pot: "-", ability: "Weapon Master, Leadership" },
{ id: "hero_namor01", char: "네이머 더 서브-마린너", suit: "클래식", tier: "3", name: "네이머 맥켄지", hei: "188cm", wei: "126kg", pot: "Potential", ability: "Strong, Durability" },
{ id: "hero_namor01_S01", char: "네이머 더 서브-마린너", suit: "피닉스 파이브", tier: "3", name: "네이머 맥켄지", hei: "188cm", wei: "126kg", pot: "Potential", ability: "Strong, Durability, 피닉스 Force" },
{ id: "hero_punisher01", char: "퍼니셔", suit: "모던", tier: "1", name: "프랜시스 \"프랭크\" 데이비드 G. 캐슬 / 프랜시스 카스틸리오네", hei: "185cm", wei: "90kg", pot: "Potential", ability: "Leadership, Weapon Master" },
{ id: "hero_punisher01_S01", char: "퍼니셔", suit: "느와르", tier: "1", name: "프랜시스 \"프랭크\" 데이비드 G. 캐슬 / 프랜시스 카스틸리오네", hei: "185cm", wei: "90kg", pot: "Potential", ability: "Leadership, Weapon Master" },
{ id: "hero_punisher01_S02", char: "퍼니셔", suit: "워 저널", tier: "1", name: "프랜시스 \"프랭크\" 데이비드 G. 캐슬 / 프랜시스 카스틸리오네", hei: "185cm", wei: "90kg", pot: "Potential", ability: "Leadership, Weapon Master" },
{ id: "hero_punisher01_S03", char: "퍼니셔", suit: "영화 - 데어데블", tier: "1", name: "프랜시스 \"프랭크\" 데이비드 G. 캐슬 / 프랜시스 카스틸리오네", hei: "185cm", wei: "90kg", pot: "Potential", ability: "Leadership, Weapon Master" },
{ id: "hero_punisher01_S04", char: "퍼니셔", suit: "마블 레거시", tier: "1", name: "프랜시스 \"프랭크\" 데이비드 G. 캐슬 / 프랜시스 카스틸리오네", hei: "185cm", wei: "90kg", pot: "Potential", ability: "Leadership, Weapon Master, Machine" },
{ id: "hero_punisher01_S05", char: "퍼니셔", suit: "코스믹 고스트 라이더", tier: "1", name: "프랜시스 \"프랭크\" 데이비드 G. 캐슬 / 프랜시스 카스틸리오네", hei: "185cm", wei: "90kg", pot: "Potential", ability: "Flame, Power Cosmic" },
{ id: "hero_redshehulk01", char: "레드 쉬헐크", suit: "모던", tier: "1", name: "엘리자베스 \"베티\" 로스", hei: "변신전 168cm, 변신후 200cm", wei: "변신전 50kg, 변신후 317kg", pot: "Potential", ability: "Gamma Radiation, Durability, Flame" },
{ id: "hero_shangchi01", char: "샹치", suit: "모던", tier: "1", name: "상기", hei: "178cm", wei: "79kg", pot: "Potential", ability: "Agility, Leadership" },
{ id: "hero_shehulk01", char: "쉬헐크", suit: "시크릿 워즈: 에이포스", tier: "1", name: "제니퍼 \"젠\" 수잔 월터스", hei: "변신전 178cm, 변신후 201cm", wei: "변신전 64kg, 변신후 295kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_shehulk01_S01", char: "쉬헐크", suit: "올뉴, 올디퍼런트", tier: "1", name: "제니퍼 \"젠\" 수잔 월터스", hei: "변신전 178cm, 변신후 201cm", wei: "변신전 64kg, 변신후 295kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_shehulk01_S02", char: "쉬헐크", suit: "판타스틱 포", tier: "1", name: "제니퍼 \"젠\" 수잔 월터스", hei: "변신전 178cm, 변신후 201cm", wei: "변신전 64kg, 변신후 295kg", pot: "Potential", ability: "Gamma Radiation, Durability, Fantastic Four" },
{ id: "hero_shehulk01_S03", char: "쉬헐크", suit: "어벤져스", tier: "1", name: "제니퍼 \"젠\" 수잔 월터스", hei: "변신전 178cm, 변신후 201cm", wei: "변신전 64kg, 변신후 295kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "hero_sif01", char: "시프", suit: "드라마 - 에이전트 오브 쉴.드.", tier: "1", name: "시프", hei: "188cm", wei: "193kg", pot: "-", ability: "Agility" },
{ id: "hero_sif01_S01", char: "시프", suit: "모던", tier: "1", name: "시프", hei: "188cm", wei: "193kg", pot: "-", ability: "Agility" },
{ id: "hero_swordmaster01", char: "소드 마스터", suit: "모던", tier: "1", name: "린 리에", hei: "175cm", wei: "79kg", pot: "Potential", ability: "Leadership, Weapon Master" },
{ id: "hero_thing01", char: "씽", suit: "모던", tier: "1", name: "벤자민 \"벤\" 제이콥 그림", hei: "183cm", wei: "227kg", pot: "Potential", ability: "Durability, Strong" },
{ id: "hero_thing01_S01", char: "씽", suit: "퓨처 파운데이션", tier: "1", name: "벤자민 \"벤\" 제이콥 그림", hei: "183cm", wei: "227kg", pot: "Potential", ability: "Durability, Strong" },
{ id: "hero_volstagg01", char: "볼스타그", suit: "모던", tier: "1", name: "볼스타그", hei: "203cm", wei: "646kg", pot: "-", ability: "Durability" },
{ id: "hero_whitetiger01", char: "화이트 타이거", suit: "뉴 어벤져스", tier: "1", name: "에이바 아얄라", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agility" },
{ id: "hero_wolverine01", char: "울버린", suit: "클래식", tier: "3", name: "제임스 \"로건\" 하울렛", hei: "160cm", wei: "136kg", pot: "Potential", ability: "Healing, Weapon Master" },
{ id: "hero_wolverine01_S01", char: "울버린", suit: "에이지 오브 아포칼립스", tier: "3", name: "제임스 \"로건\" 하울렛", hei: "160cm", wei: "136kg", pot: "Potential", ability: "Healing, Weapon Master" },
{ id: "hero_wolverine01_S02", char: "울버린", suit: "올뉴 마블 나우!", tier: "3", name: "제임스 \"로건\" 하울렛", hei: "160cm", wei: "136kg", pot: "Potential", ability: "Healing, Weapon Master" },
{ id: "hero_wolverine01_S03", char: "울버린", suit: "엑스포스", tier: "3", name: "제임스 \"로건\" 하울렛", hei: "160cm", wei: "136kg", pot: "Potential", ability: "Healing, Weapon Master" },
{ id: "hero_wolverine01_S04", char: "울버린", suit: "하우스 오브 엑스", tier: "3", name: "제임스 \"로건\" 하울렛", hei: "160cm", wei: "136kg", pot: "Potential", ability: "Healing, Weapon Master" },


// 컴뱃 악당
{ id: "sv_abomination01", char: "어보미네이션", suit: "모던", tier: "1", name: "에밀 블론스키", hei: "변신전 178, 변신후 203cm", wei: "변신전 82kg, 변신후 444kg", pot: "Potential", ability: "Gamma Radiation, Durability" },
{ id: "sv_absorbingman01", char: "앱소빙 맨", suit: "모던", tier: "1", name: "칼 \"크러셔\" 크릴", hei: "193cm", wei: "222kg", pot: "<>", ability: "Strong" },
{ id: "sv_apocalypse01", char: "아포칼립스", suit: "에이지 오브 아포칼립스", tier: "3", name: "엔 사바 누르", hei: "213cm", wei: "329kg", pot: "Potential", ability: "Strong, Agility" },
{ id: "sv_apocalypse01_S01", char: "아포칼립스", suit: "메시아 콤플렉스", tier: "3", name: "엔 사바 누르", hei: "213cm", wei: "329kg", pot: "Potential", ability: "Strong, Agility" },
{ id: "sv_bullseye01", char: "불스아이", suit: "모던", tier: "1", name: "레스터", hei: "183cm", wei: "79kg", pot: "Potential", ability: "Weapon Master, Pure Evil" },
{ id: "sv_bullseye01_S01", char: "불스아이", suit: "시크릿 워즈: 1872", tier: "1", name: "레스터", hei: "183cm", wei: "79kg", pot: "Potential", ability: "Weapon Master, Pure Evil" },
{ id: "sv_carnage01", char: "카니지", suit: "올뉴, 올디퍼런트", tier: "1", name: "클리터스 캐서디", hei: "185cm", wei: "86kg", pot: "Potential", ability: "Symbiote, Healing" },
{ id: "sv_crossbones01", char: "크로스본즈", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "1", name: "브록 럼로우", hei: "192cm", wei: "132kg", pot: "Potential", ability: "Weapon Master" },
{ id: "sv_crossbones01_S01", char: "크로스본즈", suit: "모던", tier: "1", name: "브록 럼로우", hei: "192cm", wei: "132kg", pot: "Potential", ability: "Weapon Master" },
{ id: "sv_crossbones01_S02", char: "크로스본즈", suit: "시크릿 엠파이어", tier: "1", name: "브록 럼로우", hei: "192cm", wei: "132kg", pot: "Potential", ability: "Weapon Master" },
{ id: "sv_doctorminerva01", char: "민-에르바", suit: "모던", tier: "1", name: "민-에르바", hei: "175cm", wei: "62kg", pot: "Potential", ability: "Strong, Durability, Pure Evil" },
{ id: "sv_doctorminerva01_S01", char: "민-에르바", suit: "영화 - 캡틴 마블", tier: "1", name: "민-에르바", hei: "175cm", wei: "62kg", pot: "Potential", ability: "Strong, Durability, Pure Evil" },
{ id: "sv_doctoroctopus01", char: "닥터 옥토버스", suit: "클래식", tier: "1", name: "오토 군터 옥타비우스", hei: "175cm", wei: "111kg", pot: "Potential", ability: "Machine, Durability, Sinister Six" },
{ id: "sv_doctoroctopus01_S01", char: "닥터 옥토버스", suit: "슈피리어 스파이더맨", tier: "1", name: "오토 군터 옥타비우스", hei: "175cm", wei: "111kg", pot: "Potential", ability: "Machine, Heightened Sense, Agility" },
{ id: "sv_doctoroctopus01_S02", char: "닥터 옥토버스", suit: "슈피리어 옥토퍼스", tier: "1", name: "오토 군터 옥타비우스", hei: "175cm", wei: "111kg", pot: "Potential", ability: "Machine, Agility, Sinister Six" },
{ id: "sv_juggernaut01", char: "저거너트", suit: "브라더후드 오브 뮤턴츠", tier: "1", name: "케인 마르코", hei: "290cm", wei: "862kg", pot: "Potential", ability: "Strong, Durability, Pure Evil" },
{ id: "sv_killmonger01", char: "킬몽거", suit: "클래식", tier: "1", name: "에릭 \"킬몽거\" 스티븐스 / 은자카다", hei: "198cm", wei: "102kg", pot: "-", ability: "Strong, Command" },
{ id: "sv_killmonger01_S01", char: "킬몽거", suit: "블랙 팬더", tier: "1", name: "에릭 \"킬몽거\" 스티븐스 / 은자카다", hei: "198cm", wei: "102kg", pot: "-", ability: "Strong, Command" },
{ id: "sv_kingpin01", char: "킹핀", suit: "모던", tier: "1", name: "윌슨 그랜트 피스크", hei: "200cm", wei: "204kg", pot: "Potential", ability: "Strong, Command" },
{ id: "sv_kingpin01_S01", char: "킹핀", suit: "시크릿 워즈: 아머 워즈", tier: "1", name: "윌슨 그랜트 피스크", hei: "200cm", wei: "204kg", pot: "Potential", ability: "Strong, Command, Machine" },
{ id: "sv_lizard01", char: "리자드", suit: "클래식", tier: "1", name: "커티스 \"커트\" 코너스", hei: "변신전 180cm, 변신후 203cm", wei: "변신전 79kg, 변신후 249kg", pot: "Potential", ability: "Healing" },
{ id: "sv_mistersinister01", char: "미스터 시니스터", suit: "모던", tier: "1", name: "나다니엘 에식스", hei: "196cm", wei: "120kg", pot: "Potential", ability: "Pure Evil, Energy Projection, Healing" },
{ id: "sv_moltenman01", char: "몰튼맨", suit: "영화 - 스파이더맨: 파 프롬 홈", tier: "1", name: "마크 랙스턴", hei: "198cm", wei: "249kg", pot: "Potential", ability: "Pure Evil, Durability, Flame" },
{ id: "sv_morbius01", char: "모비우스 더 리빙 뱀파이어", suit: "모던", tier: "1", name: "마이클 모비우스", hei: "178cm", wei: "77kg", pot: "-", ability: "New" },
{ id: "sv_nebula01", char: "네뷸라", suit: "영화 - 가디언즈 오브 갤럭시", tier: "1", name: "불명", hei: "185cm", wei: "84kg", pot: "Potential", ability: "Shock, Weapon Master" },
{ id: "sv_nebula01_S01", char: "네뷸라", suit: "클래식", tier: "1", name: "불명", hei: "185cm", wei: "84kg", pot: "Potential", ability: "Shock, Weapon Master" },
{ id: "sv_nebula01_S02", char: "네뷸라", suit: "영화 - 어벤져스: 엔드게임", tier: "1", name: "불명", hei: "185cm", wei: "84kg", pot: "Potential", ability: "Shock, Weapon Master" },
{ id: "sv_nebula01_S03", char: "네뷸라", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "1", name: "불명", hei: "185cm", wei: "84kg", pot: "Potential", ability: "Shock, Weapon Master" },
{ id: "sv_redguardian01", char: "레드 가디언", suit: "모던", tier: "1", name: "알렉세이 알라노비치 쇼스타코프", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Strong, Agility" },
{ id: "sv_redguardian01_S01", char: "레드 가디언", suit: "영화 - 블랙 위도우", tier: "1", name: "알렉세이 알라노비치 쇼스타코프", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Strong, Agility" },
{ id: "sv_redhulk01", char: "레드 헐크", suit: "모던", tier: "1", name: "테디어스 E. \"썬더볼트\" 로스", hei: "변신전 185cm,  변신후 213cm", wei: "변신전 111kg, 변신후 544kg", pot: "Potential", ability: "Gamma Radiation, Durability, Flame" },
{ id: "sv_redhulk01_S01", char: "레드 헐크", suit: "마블 나우!", tier: "1", name: "로버트 L. 매버릭", hei: "변신전 185cm,  변신후 213cm", wei: "변신전 111kg, 변신후 544kg", pot: "Potential", ability: "Gamma Radiation, Durability, Flame" },
{ id: "sv_redhulk01_S02", char: "레드 헐크", suit: "복수의 심비오트", tier: "1", name: "테디어스 E. \"썬더볼트\" 로스", hei: "변신전 185cm,  변신후 213cm", wei: "변신전 111kg, 변신후 544kg", pot: "Potential", ability: "Symbiote, Flame" },
{ id: "sv_sabretooth01", char: "세이버투스", suit: "브라더후드 오브 뮤턴츠", tier: "1", name: "빅터 크리드", hei: "201cm", wei: "125kg 아다만티움 170kg", pot: "Potential", ability: "Pure Evil, Agility" },
{ id: "sv_sabretooth01_S01", char: "세이버투스", suit: "언캐니 어벤져스", tier: "1", name: "빅터 크리드", hei: "201cm", wei: "125kg 아다만티움 170kg", pot: "Potential", ability: "Pure Evil, Agility" },
{ id: "sv_sandman01", char: "샌드맨", suit: "클래식", tier: "1", name: "윌리엄 베이커", hei: "185cm", wei: "113kg, 조절", pot: "Potential", ability: "Durability, Sinister Six" },
{ id: "sv_skurge01", char: "스커지 더 엑시큐셔너", suit: "영화 - 토르: 라그나로크", tier: "1", name: "스커지", hei: "218cm", wei: "499kg", pot: "-", ability: "Durability, Strong" },
{ id: "sv_taskmaster01", char: "태스크마스터", suit: "모던", tier: "1", name: "앤서니 \"토니\" 마스터스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Weapon Master, Pure Evil" },
{ id: "sv_taskmaster01_S01", char: "태스크마스터", suit: "영화 - 블랙 위도우", tier: "1", name: "앤서니 \"토니\" 마스터스", hei: "188cm", wei: "100kg", pot: "Potential", ability: "Weapon Master, Pure Evil" },
{ id: "sv_titania01", char: "티타니아", suit: "모던", tier: "1", name: "매리 맥페란", hei: "198cm", wei: "247kg", pot: "-", ability: "Strong" },
{ id: "sv_ulik01", char: "율리크", suit: "모던", tier: "1", name: "율리크", hei: "193cm", wei: "354kg", pot: "-", ability: "Durability, Strong" },
{ id: "sv_venom01", char: "베놈", suit: "클래식", tier: "1", name: "에드워드 \"에디\" 찰스 앨런 브록", hei: "190cm", wei: "117kg", pot: "-", ability: "Symbiote, Healing" },
{ id: "sv_venom01_S01", char: "베놈", suit: "시크릿 워즈: 마블 좀비스", tier: "1", name: "에드워드 \"에디\" 찰스 앨런 브록", hei: "190cm", wei: "117kg", pot: "-", ability: "Symbiote, Healing" },
{ id: "sv_venom01_S02", char: "베놈", suit: "안티 베놈", tier: "1", name: "에드워드 \"에디\" 찰스 앨런 브록", hei: "190cm", wei: "117kg", pot: "-", ability: "Symbiote, Healing" },


// 스피드 영웅
{ id: "hero_aero01", char: "에어로", suit: "모던", tier: "1", name: "레이 링", hei: "170cm", wei: "54kg", pot: "Potential", ability: "Fast Movement, Leadership" },
{ id: "hero_angel01", char: "엔젤", suit: "클래식", tier: "1", name: "워렌 케네스 워싱턴 3세", hei: "183cm", wei: "68kg", pot: "Potential", ability: "Leadership, Fast Movement" },
{ id: "hero_angel01_S01", char: "엔젤", suit: "엑스포스 (아크엔젤)", tier: "1", name: "워렌 케네스 워싱턴 3세", hei: "183cm", wei: "68kg", pot: "Potential", ability: "Leadership, Fast Movement" },
{ id: "hero_antman01", char: "앤트맨", suit: "모던", tier: "3", name: "스캇 에드워드 해리스 랭", hei: "183cm", wei: "83kg", pot: "Potential", ability: "Agility--" },
{ id: "hero_antman01_S01", char: "앤트맨", suit: "영화 - 앤트맨", tier: "3", name: "스캇 에드워드 해리스 랭", hei: "183cm", wei: "83kg", pot: "Potential", ability: "Agility" },
{ id: "hero_antman01_S02", char: "앤트맨", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "3", name: "스캇 에드워드 해리스 랭", hei: "183cm", wei: "83kg", pot: "Potential", ability: "Agility" },
{ id: "hero_antman01_S03", char: "앤트맨", suit: "영화 - 앤트맨과 와스프", tier: "3", name: "스캇 에드워드 해리스 랭", hei: "183cm", wei: "83kg", pot: "Potential", ability: "Agility" },
{ id: "hero_antman01_S04", char: "앤트맨", suit: "영화 - 어벤져스: 엔드게임", tier: "3", name: "스캇 에드워드 해리스 랭", hei: "183cm", wei: "83kg", pot: "Potential", ability: "Agility" },
{ id: "hero_antman01_S05", char: "앤트맨", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "3", name: "스캇 에드워드 해리스 랭", hei: "183cm", wei: "83kg", pot: "Potential", ability: "Agility" },
{ id: "hero_arachknight01", char: "아라크나이트", suit: "인피니피 워프", tier: "1", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Leadership, Weapon Master, Spider-Sense" },
{ id: "hero_blackcat01", char: "블랙 캣", suit: "모던", tier: "1", name: "펠리시아 사라 하디", hei: "178cm", wei: "54kg", pot: "-", ability: "Agility" },
{ id: "hero_blackcat01_S01", char: "블랙 캣", suit: "클로스", tier: "1", name: "펠리시아 사라 하디", hei: "178cm", wei: "54kg", pot: "-", ability: "Agility" },
{ id: "hero_blackcat01_S02", char: "블랙 캣", suit: "올뉴, 올디퍼런트", tier: "1", name: "펠리시아 사라 하디", hei: "178cm", wei: "54kg", pot: "-", ability: "Agility" },
{ id: "hero_blackwidow01", char: "블랙 위도우", suit: "영화 - 어벤져스", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S01", char: "블랙 위도우", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S02", char: "블랙 위도우", suit: "시크릿 워즈: 2099", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S03", char: "블랙 위도우", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S04", char: "블랙 위도우", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S05", char: "블랙 위도우", suit: "영화 - 어벤져스: 엔드게임", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S06", char: "블랙 위도우", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S07", char: "블랙 위도우", suit: "어벤져스 3099", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S08", char: "블랙 위도우", suit: "영화 - 블랙 위도우", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_blackwidow01_S09", char: "블랙 위도우", suit: "영화 - 블랙 위도우 (스노우 슈트)", tier: "3", name: "나탈리야 \"나타샤\" 알리야노브나 로마노바", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_daredevil01", char: "데어데블", suit: "모던", tier: "1", name: "매튜 \"맷\" 마이클 머독", hei: "183cm", wei: "90kg", pot: "Potential", ability: "Heightened Senses, Agility, Leadership" },
{ id: "hero_daredevil01_S01", char: "데어데블", suit: "드라마: 데빌 오브 헬스 키친", tier: "1", name: "매튜 \"맷\" 마이클 머독", hei: "183cm", wei: "90kg", pot: "Potential", ability: "Heightened Senses, Agility, Leadership" },
{ id: "hero_daredevil01_S02", char: "데어데블", suit: "올뉴, 올디퍼런트", tier: "1", name: "매튜 \"맷\" 마이클 머독", hei: "183cm", wei: "90kg", pot: "Potential", ability: "Heightened Senses, Agility, Leadership" },
{ id: "hero_darkhawk01", char: "다크호크", suit: "모던", tier: "1", name: "크리스토퍼 \"크리스\" 파웰", hei: "175cm", wei: "68kg", pot: "Potential", ability: "Leadership, Fast Movement" },
{ id: "hero_deadpool01", char: "데드풀", suit: "모던", tier: "3", name: "웨이드 윌슨", hei: "188cm", wei: "95kg", pot: "Potential", ability: "Weapon Master, Healing" },
{ id: "hero_deadpool01_S01", char: "데드풀", suit: "엑스포스", tier: "3", name: "웨이드 윌슨", hei: "188cm", wei: "95kg", pot: "Potential", ability: "Weapon Master, Healing" },
{ id: "hero_deadpool01_S02", char: "데드풀", suit: "레이디 데드풀", tier: "3", name: "웨이드 윌슨", hei: "188cm", wei: "95kg", pot: "Potential", ability: "Weapon Master, Healing" },
{ id: "hero_deadpool01_S03", char: "데드풀", suit: "레이디 데드풀 홀리데이 파티", tier: "3", name: "웨이드 윌슨", hei: "188cm", wei: "95kg", pot: "Potential", ability: "Weapon Master, Healing" },
{ id: "hero_domino01", char: "도미노", suit: "엑스포스", tier: "1", name: "니나 서먼", hei: "173cm", wei: "54kg", pot: "Potential", ability: "Weapon Maste, rAgility" },
{ id: "hero_domino01_S01", char: "도미노", suit: "마블 나우!", tier: "1", name: "니나 서먼", hei: "173cm", wei: "54kg", pot: "Potential", ability: "Weapon Master, Agility" },
{ id: "hero_elektra01", char: "엘렉트라", suit: "클래식", tier: "1", name: "엘렉트라 나치오스", hei: "175cm", wei: "59kg", pot: "-", ability: "Weapon Master" },
{ id: "hero_elektra01_S01", char: "엘렉트라", suit: "드라마 - 데어데블", tier: "1", name: "엘렉트라 나치오스", hei: "175cm", wei: "59kg", pot: "-", ability: "Weapon Master" },
{ id: "hero_elsabloodstone01", char: "엘사 블러드스톤", suit: "모던", tier: "1", name: "엘사 블러드스톤", hei: "175cm", wei: "54kg", pot: "-", ability: "Weapon Master" },
{ id: "hero_elsabloodstone01_S01", char: "엘사 블러드스톤", suit: "시크릿 워즈: 마블 좀비스", tier: "1", name: "엘사 블러드스톤", hei: "175cm", wei: "54kg", pot: "-", ability: "Weapon Master" },
{ id: "hero_elsabloodstone01_S02", char: "엘사 블러드스톤", suit: "몬스터 언리쉬드! (MFF 배리언트)", tier: "1", name: "엘사 블러드스톤", hei: "175cm", wei: "54kg", pot: "-", ability: "Weapon Master" },
{ id: "hero_falcon01", char: "팔콘", suit: "영화 - 캡틴 아메리카: 윈터 솔져", tier: "1", name: "사무엘 \"샘\" 토마스 윌슨", hei: "188cm", wei: "109kg", pot: "Potential", ability: "Fast Movement, Leadership" },
{ id: "hero_falcon01_S01", char: "팔콘", suit: "올뉴 캡틴 아메리카", tier: "1", name: "사무엘 \"샘\" 토마스 윌슨", hei: "188cm", wei: "109kg", pot: "Potential", ability: "Fast Movement, Leadership" },
{ id: "hero_falcon01_S02", char: "팔콘", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "1", name: "사무엘 \"샘\" 토마스 윌슨", hei: "188cm", wei: "109kg", pot: "Potential", ability: "Fast Movement, Leadership" },
{ id: "hero_falcon01_S03", char: "팔콘", suit: "마블 레거시", tier: "1", name: "사무엘 \"샘\" 토마스 윌슨", hei: "188cm", wei: "109kg", pot: "Potential", ability: "Fast Movement, Leadership" },
{ id: "hero_fandral01", char: "판드랄", suit: "모던", tier: "1", name: "판드랄", hei: "193cm", wei: "265kg", pot: "-", ability: "Agility" },
{ id: "hero_fantomex01", char: "판토멕스", suit: "엑스포스", tier: "1", name: "찰리 클러스터-7", hei: "175cm", wei: "79kg", pot: "Potential", ability: "Weapon Master, Agility" },
{ id: "hero_gamora01", char: "가모라", suit: "영화 - 가디언즈 오브 갤럭시", tier: "1", name: "가모라", hei: "183cm", wei: "77kg", pot: "Potential", ability: "Agility, Weapon Master" },
{ id: "hero_gamora01_S01", char: "가모라", suit: "올뉴, 올디퍼런트", tier: "1", name: "가모라", hei: "183cm", wei: "77kg", pot: "Potential", ability: "Agility, Weapon Master" },
{ id: "hero_gamora01_S02", char: "가모라", suit: "영화 - 가디언즈 오브 갤럭시 Vol. 2", tier: "1", name: "가모라", hei: "183cm", wei: "77kg", pot: "Potential", ability: "Agility, Weapon Master" },
{ id: "hero_gwenpool01", char: "그웬풀", suit: "올뉴, 올디퍼런트", tier: "1", name: "그웬 풀", hei: "170cm", wei: "59kg", pot: "-", ability: "Agility" },
{ id: "hero_gwenpool01_S01", char: "그웬풀", suit: "그웬 풀", tier: "1", name: "그웬 풀", hei: "170cm", wei: "59kg", pot: "-", ability: "Agility" },
{ id: "hero_gwenpool01_S02", char: "그웬풀", suit: "홀리데이 파티", tier: "1", name: "그웬 풀", hei: "170cm", wei: "59kg", pot: "-", ability: "Agility" },
{ id: "hero_hawkeye01", char: "호크아이", suit: "영화 - 어벤져스", tier: "1", name: "클린턴 \"클린트\" 프랜시스 바턴", hei: "190cm", wei: "104kg", pot: "Potential", ability: "Agent, Weapon Master" },
{ id: "hero_hawkeye01_S01", char: "호크아이", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "1", name: "클린턴 \"클린트\" 프랜시스 바턴", hei: "190cm", wei: "104kg", pot: "Potential", ability: "Agent, Weapon Master" },
{ id: "hero_hawkeye01_S02", char: "호크아이", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "1", name: "클린턴 \"클린트\" 프랜시스 바턴", hei: "190cm", wei: "104kg", pot: "Potential", ability: "Agent, Weapon Master" },
{ id: "hero_hawkeye01_S03", char: "호크아이", suit: "클래식", tier: "1", name: "클린턴 \"클린트\" 프랜시스 바턴", hei: "190cm", wei: "104kg", pot: "Potential", ability: "Agent, Weapon Master" },
{ id: "hero_hawkeye01_S04", char: "호크아이", suit: "영화 - 어벤져스: 엔드게임 (로닌)", tier: "1", name: "클린턴 \"클린트\" 프랜시스 바턴", hei: "190cm", wei: "104kg", pot: "Potential", ability: "Agent, Weapon Master" },
{ id: "hero_hellcat01", char: "헬캣", suit: "올뉴, 올디퍼런트", tier: "1", name: "패트리샤 \"팻시\" 트리시 워커", hei: "173cm", wei: "61kg", pot: "-", ability: "Agility" },
{ id: "hero_katebishop01", char: "호크아이 (케이트 비숍)", suit: "마블 나우!", tier: "1", name: "캐서린 \"케이트\" 엘리자베스 비숍", hei: "165cm", wei: "54kg", pot: "-", ability: "Agent, Agility" },
{ id: "hero_karnak01", char: "카르낙", suit: "워 오브 킹즈", tier: "1", name: "카르낙 만데르-아주르", hei: "170cm", wei: "68kg", pot: "Potential", ability: "Heightened Senses" },
{ id: "hero_karnak01_S01", char: "카르낙", suit: "올뉴, 올디퍼런트", tier: "1", name: "카르낙 만데르-아주르", hei: "170cm", wei: "68kg", pot: "Potential", ability: "Heightened Senses" },
{ id: "hero_kidkaiju01", char: "키드 카이쥬", suit: "몬스터 언리쉬드!", tier: "1", name: "케이 카와데", hei: "132cm", wei: "36kg", pot: "-", ability: "Command" },
{ id: "hero_kidkaiju01_S01", char: "키드 카이쥬", suit: "몬스터 언리쉬드! (MFF 배리언트)", tier: "1", name: "케이 카와데", hei: "132cm", wei: "36kg", pot: "-", ability: "Command" },
{ id: "hero_kittypryde01", char: "키티 프라이드", suit: "모던", tier: "1", name: "캐서린 \"키티\" 앤 프라이드", hei: "167cm", wei: "50kg", pot: "Potential", ability: "Command, Weapon Master" },
{ id: "hero_lunasnow01", char: "루나 스노우", suit: "모던", tier: "3", name: "설희", hei: "170cm", wei: "54kg", pot: "Potential", ability: "Cold Blooded, Leadership" },
{ id: "hero_lunasnow01_S01", char: "루나 스노우", suit: "안드로메다 슈트", tier: "3", name: "설희", hei: "170cm", wei: "54kg", pot: "Potential", ability: "Cold Blooded, Leadership" },
{ id: "hero_lunasnow01_S02", char: "루나 스노우", suit: "라이프스타일 시리즈 1", tier: "3", name: "설희", hei: "170cm", wei: "54kg", pot: "Potential", ability: "Cold Blooded, Leadership" },
{ id: "hero_mistyknight01", char: "미스티 나이트", suit: "올뉴, 올디퍼런트", tier: "1", name: "머세이디스 켈리 \"미스티\" 나이트", hei: "175cm", wei: "62kg", pot: "-", ability: "Weapon Master, Agent" },
{ id: "hero_mockingbird01", char: "모킹버드", suit: "영웅 시대", tier: "1", name: "바바라 \"바비\" 모스", hei: "175cm", wei: "61kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_mockingbird01_S01", char: "모킹버드", suit: "영화 - 에이전트 오브 쉴.드. (바비 모스)", tier: "1", name: "바바라 \"바비\" 모스", hei: "175cm", wei: "61kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_mockingbird01_S02", char: "모킹버드", suit: "모던", tier: "1", name: "바바라 \"바비\" 모스", hei: "175cm", wei: "61kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "hero_nickfury01", char: "닉 퓨리", suit: "모던", tier: "1", name: "니콜라스 \"닉\" 조셉 퓨리", hei: "190cm", wei: "95kg", pot: "Potential", ability: "Agent, Leadership, Weapon Master" },
{ id: "hero_nickfury01_S01", char: "닉 퓨리", suit: "영화 - 캡틴 마블", tier: "1", name: "니콜라스 \"닉\" 조셉 퓨리", hei: "190cm", wei: "95kg", pot: "Potential", ability: "Agent, Leadership, Weapon Master" },
{ id: "hero_nightcrawler01", char: "나이트크롤러", suit: "모던", tier: "1", name: "커트 와그너", hei: "180cm", wei: "73kg", pot: "Potential", ability: "Agility, Leadership" },
{ id: "hero_nightcrawler01_S01", char: "나이트크롤러", suit: "엑스포스", tier: "1", name: "커트 와그너", hei: "180cm", wei: "73kg", pot: "Potential", ability: "Agility, Leadership" },
{ id: "hero_quicksilver01", char: "퀵실버", suit: "클래식", tier: "3", name: "피에트로 장고 막시모프", hei: "183cm", wei: "79kg", pot: "Potential", ability: "Agility, Fast Movement" },
{ id: "hero_quicksilver01_S01", char: "퀵실버", suit: "마블 레거시", tier: "3", name: "피에트로 장고 막시모프", hei: "183cm", wei: "79kg", pot: "Potential", ability: "Agility, Fast Movement" },
{ id: "hero_quicksilver01_S02", char: "퀵실버", suit: "언캐니 어벤져스", tier: "3", name: "피에트로 장고 막시모프", hei: "183cm", wei: "79kg", pot: "Potential", ability: "Agility, Fast Movement" },
{ id: "hero_rogue01", char: "로그", suit: "클래식", tier: "1", name: "앤 마리 단칸토", hei: "173cm", wei: "54kg", pot: "Potential", ability: "Healing, Fast Movement" },
{ id: "hero_rogue01_S01", char: "로그", suit: "에이지 오브 아포칼립스", tier: "1", name: "앤 마리 단칸토", hei: "173cm", wei: "54kg", pot: "Potential", ability: "Healing, Fast Movement" },
{ id: "hero_rogue01_S02", char: "로그", suit: "언캐니 어벤져스", tier: "1", name: "앤 마리 단칸토", hei: "173cm", wei: "54kg", pot: "Potential", ability: "Healing, Fast Movement" },
{ id: "hero_scarletspider01", char: "스칼렛 스파이더", suit: "모던", tier: "1", name: "벤자민 \"벤\" 라일리", hei: "178cm", wei: "75kg", pot: "1", ability: "New" },
{ id: "hero_sharoncarter01", char: "에이전트 13", suit: "모던", tier: "1", name: "샤론 카터", hei: "173cm", wei: "61kg", pot: "Potential", ability: "Agent" },
{ id: "hero_sharoncarter01_S01", char: "에이전트 13", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "1", name: "샤론 카터", hei: "173cm", wei: "61kg", pot: "Potential", ability: "Agent" },
{ id: "hero_shuri01", char: "슈리", suit: "마블 레거시", tier: "1", name: "슈리", hei: "170cm", wei: "57kg", pot: "Potential", ability: "Heightened Senses--" },
{ id: "hero_shuri01_S01", char: "슈리", suit: "영화 - 블랙 팬서", tier: "1", name: "슈리", hei: "170cm", wei: "57kg", pot: "Potential", ability: "LeadershipHeightened Senses-" },
{ id: "hero_silk01", char: "실크", suit: "올뉴, 올디퍼런트", tier: "1", name: "신디 문", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Spider-Sense, Agility" },
{ id: "hero_silk01_S01", char: "실크", suit: "웹 슈트", tier: "1", name: "신디 문", hei: "170cm", wei: "59kg", pot: "Potential", ability: "Spider-Sense, Agility" },
{ id: "hero_spidergwen01", char: "스파이더 그웬", suit: "올뉴, 올디퍼런트", tier: "1", name: "그웬돌린 \"그웬\" 맥신 스테이시", hei: "165cm", wei: "57kg", pot: "-", ability: "Spider-Sense, Agility, Leadership" },
{ id: "hero_spidergwen01_S01", char: "스파이더 그웬", suit: "그웬돌린 스테이시", tier: "1", name: "그웬돌린 \"그웬\" 맥신 스테이시", hei: "165cm", wei: "57kg", pot: "-", ability: "Spider-Sense, Agility, Leadership" },
{ id: "hero_spiderman01", char: "스파이더맨", suit: "클래식", tier: "3", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_spiderman01_S01", char: "스파이더맨", suit: "시크릿 워즈: 리뉴 유어 바우", tier: "3", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_spiderman01_S02", char: "스파이더맨", suit: "올뉴, 올디퍼런트", tier: "3", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_spiderman01_S03", char: "스파이더맨", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "3", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_spiderman01_S04", char: "스파이더맨", suit: "영화 - 스파이더맨: 홈커밍 (홈메이드 슈트)", tier: "3", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_spiderman01_S05", char: "스파이더맨", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_spiderman01_S06", char: "스파이더맨", suit: "영화 - 스파이더맨: 파 프롬 홈", tier: "3", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_spiderman01_S07", char: "스파이더맨", suit: "영화 - 스파이더맨: 파 프롬 홈 (스텔스 슈트)", tier: "3", name: "피터 벤자민 파커", hei: "178cm", wei: "76kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_milesmorales01", char: "스파이더맨 (마일즈 모랄레스)", suit: "올뉴, 올디퍼런트", tier: "1", name: "마일즈 곤살로 모랄레스", hei: "157cm", wei: "57kg", pot: "Potential", ability: "Spider-Sense, Agility, Leadership" },
{ id: "hero_milesmorales01_S01", char: "스파이더맨 (마일즈 모랄레스)", suit: "인투 더 스파이더버스", tier: "1", name: "마일즈 곤살로 모랄레스", hei: "157cm", wei: "57kg", pot: "Potential", ability: "Spider-Sense, Agility, Leadership" },
{ id: "hero_spiderman209901", char: "스파이더맨 2099", suit: "모던", tier: "1", name: "미구엘 오하라", hei: "178cm", wei: "77kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_spiderman209901_S01", char: "스파이더맨 2099", suit: "올뉴, 올디퍼런트", tier: "1", name: "미구엘 오하라", hei: "178cm", wei: "77kg", pot: "Potential", ability: "Spider-Sense, Leadership, Agility" },
{ id: "hero_squirrelgirl01", char: "스쿼럴 걸", suit: "뉴 어벤져스", tier: "1", name: "도린 알렌 그린", hei: "160cm", wei: "45kg", pot: "Potential", ability: "Agility" },
{ id: "hero_squirrelgirl01_S01", char: "스쿼럴 걸", suit: "마블 나우!", tier: "1", name: "도린 알렌 그린", hei: "160cm", wei: "45kg", pot: "Potential", ability: "Agility" },
{ id: "hero_sunbird01", char: "썬 버드", suit: "모던", tier: "1", name: "불명", hei: "187cm", wei: "84kg", pot: "Potential", ability: "Flame, Agility" },
{ id: "hero_wave01", char: "웨이브", suit: "모던", tier: "1", name: "펄 팡안", hei: "167cm", wei: "61kg", pot: "Potential", ability: "Heightened Senses, Agility" },
{ id: "hero_whitefox01", char: "화이트 폭스", suit: "모던", tier: "1", name: "한아미", hei: "178cm", wei: "54kg", pot: "Potential", ability: "Leadership, Agility" },
{ id: "hero_whitefox01_S01", char: "화이트 폭스", suit: "라이프스타일 시리즈 1", tier: "1", name: "한아미", hei: "178cm", wei: "54kg", pot: "Potential", ability: "Leadership, Agility" },
{ id: "hero_wintersoldier01", char: "윈터 솔져", suit: "영화 - 캡틴 아메리카: 윈터 솔져", tier: "3", name: "제임스 뷰캐넌 \"버키\" 반즈", hei: "175cm", wei: "117kg", pot: "Potential", ability: "Weapon Master" },
{ id: "hero_wintersoldier01_S01", char: "윈터 솔져", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "3", name: "제임스 뷰캐넌 \"버키\" 반즈", hei: "175cm", wei: "117kg", pot: "Potential", ability: "Weapon Master" },
{ id: "hero_wintersoldier01_S02", char: "윈터 솔져", suit: "캡틴 아메리카", tier: "3", name: "제임스 뷰캐넌 \"버키\" 반즈", hei: "175cm", wei: "117kg", pot: "Potential", ability: "Weapon Master" },
{ id: "hero_wintersoldier01_S03", char: "윈터 솔져", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "제임스 뷰캐넌 \"버키\" 반즈", hei: "175cm", wei: "177kg", pot: "Potential", ability: "Weapon Master" },
{ id: "hero_wong01", char: "웡", suit: "올뉴, 올디퍼런트", tier: "1", name: "웡", hei: "173cm", wei: "63kg", pot: "Potential", ability: "Weapon Master" },
{ id: "hero_wong01_S01", char: "웡", suit: "영화 - 닥터 스트레인지", tier: "1", name: "웡", hei: "173cm", wei: "63kg", pot: "Potential", ability: "Weapon Master" },
{ id: "hero_x-2301", char: "X-23", suit: "클래식", tier: "1", name: "로라 키니", hei: "155cm", wei: "50kg", pot: "Potential", ability: "Healing, Agility" },
{ id: "hero_x-2301_S01", char: "X-23", suit: "엑스포스", tier: "1", name: "로라 키니", hei: "155cm", wei: "50kg", pot: "Potential", ability: "Healing, Agility" },

// 스피드 악당
{ id: "sv_baronzemo01", char: "제모 남작", suit: "모던", tier: "1", name: "헬무트 J. 제모", hei: "178cm", wei: "83kg", pot: "Potential", ability: "Agility, Pure Evil" },
{ id: "sv_electro01", char: "일렉트로", suit: "모던", tier: "1", name: "맥스웰 \"맥스\" 딜런", hei: "180cm", wei: "75kg", pot: "Potential", ability: "Pure Evil, Shock, Sinister Six" },
{ id: "sv_ghost01", char: "고스트", suit: "모던", tier: "1", name: "불명", hei: "180cm", wei: "79kg", pot: "Potential", ability: "Machine, Weapon Master" },
{ id: "sv_ghost01_S01", char: "고스트", suit: "영화 - 앤트맨과 와스프", tier: "1", name: "에이바 스타", hei: "167cm", wei: "55kg", pot: "Potential", ability: "Machine, Weapon Master" },
{ id: "sv_greengoblin01", char: "그린 고블린", suit: "클래식", tier: "1", name: "노먼 버질 오스본", hei: "180cm", wei: "84kg", pot: "Potential", ability: "Fast Movement, Poison" },
{ id: "sv_greengoblin01_S01", char: "그린 고블린", suit: "얼티밋", tier: "1", name: "노먼 버질 오스본", hei: "?cm", wei: "?kg", pot: "Potential", ability: "Fast Movement, Flame" },
{ id: "sv_korath01", char: "코라스 더 퍼수어", suit: "영화 - 캡틴 마블", tier: "1", name: "", hei: "183cm", wei: "131kg", pot: "Potential", ability: "Pure Evil, Weapon Master" },
{ id: "sv_kraventhehunter01", char: "크레이븐 더 헌터", suit: "모던", tier: "1", name: "세르게이 니콜라예비치 크라비노프", hei: "183cm", wei: "107kg", pot: "Potential", ability: "Agility, Weapon Master, Sinister Six" },
{ id: "sv_mystique01", char: "미스틱", suit: "모던", tier: "1", name: "레이븐 다크홈", hei: "178cm", wei: "54kg", pot: "Potential", ability: "Agility, Weapon Master" },
{ id: "sv_sin01", char: "신", suit: "올뉴, 올디퍼런트", tier: "1", name: "신시아 \"신\" 슈미트", hei: "165cm", wei: "51kg", pot: "Potential", ability: "Pure Evil, Weapon Master" },
{ id: "sv_viper01", char: "바이퍼", suit: "모던", tier: "1", name: "오펠리아 사르키샨", hei: "175cm", wei: "63kg", pot: "Potential", ability: "Poison, Pure Evil" },
{ id: "sv_vulture01", char: "벌쳐", suit: "클래식", tier: "1", name: "아드리안 툼즈", hei: "180cm", wei: "79kg", pot: "Potential", ability: "Agility, Fast Movement, Sinister Six" },
{ id: "sv_vulture01_S01", char: "벌쳐", suit: "영화 - 스파이더맨: 홈커밍", tier: "1", name: "아드리안 툼즈", hei: "180cm", wei: "79kg", pot: "Potential", ability: "Agility, Fast Movement, Sinister Six" },
{ id: "sv_yelenabelova01", char: "옐레나 벨로바", suit: "모던", tier: "1", name: "옐레나 벨로바", hei: "170cm", wei: "61kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "sv_yelenabelova01_S01", char: "옐레나 벨로바", suit: "영화 - 블랙 위도우", tier: "1", name: "옐레나 벨로바", hei: "170cm", wei: "61kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "sv_yelenabelova01_S02", char: "옐레나 벨로바", suit: "영화 - 블랙 위도우 (스노우 슈트)", tier: "1", name: "옐레나 벨로바", hei: "170cm", wei: "61kg", pot: "Potential", ability: "Agent, Agility" },
{ id: "sv_yondu01_S01", char: "욘두", suit: "올뉴, 올디퍼런트", tier: "1", name: "욘두 우돈타", hei: "188cm, 크레스트 포함 216cm", wei: "95kg", pot: "-", ability: "Command, Weapon Master" },
{ id: "sv_yondu01_S02", char: "욘두", suit: "영화 - 가디언즈 오브 갤럭시 Vol. 2", tier: "1", name: "욘두 우돈타", hei: "188cm, 크레스트 포함 216cm", wei: "95kg", pot: "-", ability: "Command, Weapon Master" },



// 블라스트 영웅
{ id: "hero_adamwarlock01", char: "센트리", suit: "모던", tier: "2", name: "아담 워록", hei: "188cm", wei: "110kg", pot: "-", ability: "Magic, Time Freezing Immunity" },

// 블라스트 악당
{ id: "sv_baronmordo01", char: "모르도 남작", suit: "클래식", tier: "1", name: "칼 아마데우스 모르도", hei: "183cm", wei: "113kg", pot: "-", ability: "Magic, Pure Evil" },
{ id: "sv_baronmordo01_S01", char: "모르도 남작", suit: "영화 - 닥터 스트레인지", tier: "1", name: "칼 아마데우스 모르도", hei: "183cm", wei: "113kg", pot: "-", ability: "Magic, Pure Evil" },


{ id: "hero_ancientone01", char: "Ancient One", suit: "모던", tier: "1", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMagic-" },
{ id: "hero_ancientone01_S01", char: "Ancient One", suit: "영화 - 닥터 스트레인지", tier: "1", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMagic-" },
{ id: "hero_angela01", char: "안젤라", suit: "모던", tier: "1", name: "", hei: "cm", wei: "kg", pot: "-", ability: "Weapon Master--" },
{ id: "hero_angela01_S01", char: "안젤라", suit: "시크릿 워즈: 1602 (위치 헌터 안젤라)", tier: "1", name: "", hei: "cm", wei: "kg", pot: "-", ability: "Weapon Master--" },
{ id: "hero_angela01_S02", char: "안젤라", suit: "올뉴, 올디퍼런트", tier: "1", name: "", hei: "cm", wei: "kg", pot: "-", ability: "Weapon Master--" },



{ id: "hero_betaraybill01", char: "Beta Ray Bill", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_bishop01", char: "Bishop", suit: "디스어셈블드", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy Projection--" },
{ id: "hero_blackbolt01", char: "Black Bolt", suit: "모던", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast Movement-" },
{ id: "hero_blackbolt01_S01", char: "Black Bolt", suit: "올뉴, 올디퍼런트", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast Movement-" },
{ id: "hero_blackbolt01_S02", char: "Black Bolt", suit: "인휴먼즈: 아틸란 라이징", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast Movement-" },
{ id: "hero_blackbolt01_S03", char: "Black Bolt", suit: "마블 엑스", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast Movement-" },



{ id: "hero_bluedragon01", char: "Blue Dragon", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_bluemarvel01", char: "Blue Marvel", suit: "얼티미츠", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Energy ProjectionLeadership-" },
{ id: "hero_cable01", char: "Cable", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipWeapon Master-" },
{ id: "hero_cable01_S01", char: "Cable", suit: "엑스포스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipWeapon Master-" },
{ id: "hero_cable01_S02", char: "Cable", suit: "케이블과 데드풀", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipWeapon Master-" },
{ id: "hero_cable01_S03", char: "Cable", suit: "섬머 데이즈", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipWeapon Master-" },

{ id: "hero_captainmarvel01", char: "Captain Marvel", suit: "모던", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast MovementLeadership" },
{ id: "hero_captainmarvel01_S01", char: "Captain Marvel", suit: "시크릿 워즈: 캡틴 마블과 캐럴 코어", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast MovementLeadership" },
{ id: "hero_captainmarvel01_S02", char: "Captain Marvel", suit: "미즈 마블", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast MovementLeadership" },
{ id: "hero_captainmarvel01_S03", char: "Captain Marvel", suit: "영화 - 캡틴 마블", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast MovementLeadership" },
{ id: "hero_captainmarvel01_S04", char: "Captain Marvel", suit: "영화 - 어벤져스: 엔드게임", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast MovementLeadership" },
{ id: "hero_clea01", char: "Clea", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Fast MovementMagic-" },

{ id: "hero_crystal01", char: "Crystal", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionCommand-" },
{ id: "hero_crystal01_S01", char: "Crystal", suit: "로얄 슈트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionCommand-" },
{ id: "hero_crystal01_S02", char: "Crystal", suit: "판타스틱 포", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Energy ProjectionCommandPotential" },
{ id: "hero_cyclops01", char: "Cyclops", suit: "클래식", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandEnergy Projection-" },
{ id: "hero_cyclops01_S01", char: "Cyclops", suit: "에이지 오브 아포칼립스", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandEnergy Projection-" },
{ id: "hero_cyclops01_S02", char: "Cyclops", suit: "마블 나우!", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandEnergy Projection-" },
{ id: "hero_cyclops01_S03", char: "Cyclops", suit: "피닉스 파이브", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandEnergy Projection피닉스 Force" },
{ id: "hero_daisyjohnson01", char: "Daisy Johnson", suit: "영화 - 에이전트 오브 쉴.드.", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "AgentMind Resist-" },
{ id: "hero_daisyjohnson01_S01", char: "Quake", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "AgentMind Resist-" },
{ id: "hero_daisyjohnson01_S02", char: "Daisy Johnson", suit: "영화 - 에이전트 오브 쉴.드. (퀘이크)", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "AgentMind Resist-" },


{ id: "hero_dazzler01", char: "Dazzler", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy Projection--" },

{ id: "hero_doctorstrange01", char: "Doctor Strange", suit: "올뉴, 올디퍼런트", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementMagic-" },
{ id: "hero_doctorstrange01_S01", char: "Doctor Strange", suit: "영화 - 닥터 스트레인지", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementMagic-" },
{ id: "hero_doctorstrange01_S02", char: "Doctor Strange", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementMagic-" },
{ id: "hero_doctorstrange01_S03", char: "Doctor Strange", suit: "Space 슈트", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementMagic-" },
{ id: "hero_doctorvoodoo01", char: "Doctor Voodoo", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Command--" },


{ id: "hero_emmafrost01", char: "Emma Frost", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Mind Resist--" },
{ id: "hero_emmafrost01_S01", char: "Emma Frost", suit: "마블 나우!", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Mind Resist--" },
{ id: "hero_emmafrost01_S02", char: "Emma Frost", suit: "피닉스 파이브", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "DurabilityMind Resist피닉스 Force" },

{ id: "hero_gambit01", char: "Gambit", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MindAgility-" },

{ id: "hero_ghostpanther01", char: "Ghost Panther", suit: "인피니피 워프", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Agility--" },
{ id: "hero_ghostrider01", char: "Ghost Rider", suit: "클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Leadership--" },
{ id: "hero_ghostrider01_S01", char: "Ghost Rider", suit: "70년대 클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Leadership--" },
{ id: "hero_ghostrider01_S02", char: "Ghost Rider", suit: "인휴먼즈: 아틸란 라이징", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Leadership--" },
{ id: "hero_ghostrider01_S03", char: "Ghost Rider", suit: "킹 오브 헬", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Leadership--" },

{ id: "hero_heimdall01", char: "Heimdall", suit: "영화 - 토르: 라그나로크", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Strong--" },

{ id: "hero_hellstorm01", char: "Hellstorm", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Magic--" },

{ id: "hero_humantorch01", char: "Human Torch", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementFlame-" },
{ id: "hero_humantorch01_S01", char: "Human Torch", suit: "퓨처 파운데이션", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementFlame-" },
{ id: "hero_hyperion01", char: "Hyperion", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Leadership--" },
{ id: "hero_hyperion01_S01", char: "Hyperion", suit: "클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Leadership--" },
{ id: "hero_iceman01", char: "Iceman", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "ChillCold Blooded-" },
{ id: "hero_iceman01_S01", char: "Iceman", suit: "엑스맨 블루", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "ChillCold Blooded-" },
{ id: "hero_inferno01", char: "Inferno", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Flame--" },
{ id: "hero_inferno01_S01", char: "Inferno", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Flame--" },
{ id: "hero_invisiblewoman01", char: "Invisible Woman", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy Projection--" },
{ id: "hero_invisiblewoman01_S01", char: "Invisible Woman", suit: "퓨처 파운데이션", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy Projection--" },

{ id: "hero_ironhammer01", char: "Iron Hammer", suit: "인피니피 워프", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "ShockMachine-" },
{ id: "hero_ironheart01", char: "Ironheart", suit: "마블 나우!", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "LeadershipMachine-" },
{ id: "hero_ironman01", char: "Iron Man", suit: "영화 - 어벤져스", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionMachine-" },
{ id: "hero_ironman01_S01", char: "Iron Man", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionMachine-" },
{ id: "hero_ironman01_S02", char: "Iron Man", suit: "시크릿 워즈: 2099", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionMachine-" },
{ id: "hero_ironman01_S03", char: "Iron Man", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionMachine-" },
{ id: "hero_ironman01_S04", char: "Iron Man", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionMachine-" },
{ id: "hero_ironman01_S05", char: "Iron Man", suit: "영화 - 어벤져스: 엔드게임", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionMachine-" },
{ id: "hero_ironman01_S06", char: "Iron Man", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionMachine-" },
{ id: "hero_ironman01_S07", char: "Iron Man", suit: "어벤져스 3099", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionMachine-" },
{ id: "hero_janefoster01", char: "Thor (Jane Foster)", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Fast MovementShock-" },
{ id: "hero_jeangrey01", char: "Jean Grey", suit: "피닉스", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "피닉스 ForceMindMind Resist" },
{ id: "hero_jeangrey01_S01", char: "Jean Grey", suit: "엑스맨 레드", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "피닉스 ForceMindMind Resist" },
{ id: "hero_jeangrey01_S02", char: "Jean Grey", suit: "마블 걸", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "피닉스 ForceMindMind Resist" },

{ id: "hero_jubilee01", char: "Jubilee", suit: "클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Energy ProjectionPotential-" },


{ id: "hero_kidomega01", char: "Kid Omega", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "피닉스 ForceEnergy Projection-" },


{ id: "hero_lincoln01", char: "Lincoln Campbell", suit: "영화 - 에이전트 오브 쉴.드.", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Shock--" },

{ id: "hero_magik01", char: "Magik", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MagicMind Resist-" },
{ id: "hero_magik01_S01", char: "Magik", suit: "피닉스 파이브", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MagicMind Resist피닉스 Force" },
{ id: "hero_mantis01", char: "Mantis", suit: "영화 - 가디언즈 오브 갤럭시 Vol. 2", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "HealingMind-" },
{ id: "hero_medusa01", char: "Medusa", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Command--" },
{ id: "hero_medusa01_S01", char: "Medusa", suit: "몬스터 언리쉬드! (MFF 배리언트)", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Command--" },
{ id: "hero_medusa01_S02", char: "Medusa", suit: "인휴먼즈 대 엑스맨", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Command--" },

{ id: "hero_moongirl01", char: "Moon Girl", suit: "마블 나우!", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Weapon Master--" },
{ id: "hero_moongirl01_S01", char: "Moon Girl", suit: "몬스터 언리쉬드!", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Weapon Master--" },

{ id: "hero_nadiapym01", char: "Wasp (Nadia Van Dyne)", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Fast Movement--" },

{ id: "hero_negasonic01", char: "Negasonic Teenage Warhead", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "AgilityFast MovementEnergy Projection" },

{ id: "hero_nicominoru01", char: "Sister Grimm", suit: "시크릿 워즈: 에이포스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Magic--" },
{ id: "hero_nicominoru01_S01", char: "Sister Grimm", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Magic--" },

{ id: "hero_nova01", char: "Nova (Sam Alexander)", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Fast Movement-" },
{ id: "hero_odin01", char: "Odin", suit: "모던", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionCommand-" },
{ id: "hero_odin01_S01", char: "Odin", suit: "All-Father", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionCommand-" },
{ id: "hero_philcoulson01", char: "Phil Coulson", suit: "영화 - 에이전트 오브 쉴.드.", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "ShieldAgentCommand" },
{ id: "hero_philcoulson01_S01", char: "Phil Coulson", suit: "영화 - 에이전트 오브 쉴.드. 시즌 3", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "ShieldAgentCommand" },
{ id: "hero_phylavell01", char: "Phyla-Vell", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipEnergy Projection-" },
{ id: "hero_professorx01", char: "Professor X", suit: "모던", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMindMind Resist" },
{ id: "hero_psylocke01", char: "Psylocke", suit: "엑스포스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MindAgility-" },
{ id: "hero_psylocke01_S01", char: "Psylocke", suit: "디스어셈블드", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MindAgility-" },

{ id: "hero_quasar01", char: "Quasar (Avril Kincaid)", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Heightened Senses--" },

{ id: "hero_rachelsummers01", char: "Rachel Summers", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast Movement--" },

{ id: "hero_rescue01", char: "Rescue", suit: "영화 - 어벤져스: 엔드게임", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "AvengersLeadershipMachine" },
{ id: "hero_richardrider01", char: "Nova (Richard Rider)", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast Movement-" },
{ id: "hero_robbiereyes01", char: "Ghost Rider (Robbie Reyes)", suit: "마블 나우!", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Fast Movement--" },
{ id: "hero_rocketraccoon01", char: "Rocket Raccoon", suit: "영화 - 가디언즈 오브 갤럭시", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Weapon Master--" },
{ id: "hero_rocketraccoon01_S01", char: "Rocket Raccoon", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Weapon Master--" },
{ id: "hero_rocketraccoon01_S02", char: "Rocket Raccoon", suit: "영화 - 가디언즈 오브 갤럭시 Vol. 2", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Weapon Master--" },
{ id: "hero_rocketraccoon01_S03", char: "Rocket Raccoon", suit: "영화 - 어벤져스: 인피니티 워", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Weapon Master--" },
{ id: "hero_rocketraccoon01_S04", char: "Rocket Raccoon", suit: "영화 - 어벤져스: 엔드게임", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Weapon Master--" },
{ id: "hero_rocketraccoon01_S05", char: "Rocket Raccoon", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Weapon Master--" },

{ id: "hero_satana01", char: "Satana", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Magic--" },
{ id: "hero_satana01_S01", char: "Satana", suit: "마블 레거시", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Magic--" },

{ id: "hero_scarletwitch01", char: "Scarlet Witch", suit: "클래식", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast Movement--" },
{ id: "hero_scarletwitch01_S01", char: "Scarlet Witch", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Chaos Magic--" },
{ id: "hero_scarletwitch01_S02", char: "Scarlet Witch", suit: "언캐니 어벤져스", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "AvengersFast MovementChaos Magic" },
{ id: "hero_scarletwitch01_S03", char: "Scarlet Witch", suit: "올뉴, 올디퍼런트", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementChaos Magic-" },
{ id: "hero_shadowshell01", char: "Shadow Shell", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementChaos Magic-" },

{ id: "hero_sharonrogers01", char: "Captain America (Sharon Rogers)", suit: "캡틴 아메리카 75주년 기념", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionAgent-" },
{ id: "hero_sharonrogers01_S01", char: "Captain America (Sharon Rogers)", suit: "스타라이트 아머", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionLeadership-" },
{ id: "hero_sharonrogers01_S02", char: "Captain America (Sharon Rogers)", suit: "다크 스타 아머", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionLeadership-" },
{ id: "hero_sharonrogers01_S03", char: "Captain America (Sharon Rogers)", suit: "스타 나이트 아머 ", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionLeadership-" },

{ id: "hero_silversurfer01", char: "Silver Surfer", suit: "모던", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Power Cosmic--" },
{ id: "hero_silversurfer01_S01", char: "Silver Surfer", suit: "블랙", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Power Cosmic--" },
{ id: "hero_singularity01", char: "Singularity", suit: "시크릿 워즈: 에이포스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Energy ProjectionFast Movement-" },
{ id: "hero_slapstick01", char: "Slapstick", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Agility--" },
{ id: "hero_songbird01", char: "Songbird", suit: "뉴 어벤져스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast Movement--" },

{ id: "hero_starlord01", char: "Star-Lord", suit: "영화 - 가디언즈 오브 갤럭시", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandWeapon Master-" },
{ id: "hero_starlord01_S01", char: "Star-Lord", suit: "스페이스 아머", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandWeapon Master-" },
{ id: "hero_starlord01_S02", char: "Star-Lord", suit: "영화 - 가디언즈 오브 갤럭시 Vol. 2", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandWeapon Master-" },
{ id: "hero_starlord01_S03", char: "Star-Lord", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandWeapon Master-" },
{ id: "hero_starlord01_S04", char: "Star-Lord", suit: "Grounded", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandWeapon Master-" },
{ id: "hero_storm01", char: "Storm", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandShock-" },
{ id: "hero_storm01_S01", char: "Storm", suit: "엑스맨 레드", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandShock-" },
{ id: "hero_storm01_S02", char: "Storm", suit: "인휴먼즈 대 엑스맨", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandShock-" },


{ id: "hero_thor01", char: "Thor", suit: "영화 - 어벤져스", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_thor01_S01", char: "Thor", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_thor01_S02", char: "Thor", suit: "Unworthy", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_thor01_S03", char: "Thor", suit: "영화 - 토르: 라그나로크", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_thor01_S04", char: "Thor", suit: "영화 - 어벤져스: 인피니티 워", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_thor01_S05", char: "Thor", suit: "영화 - 어벤져스: 엔드게임", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_thor01_S06", char: "Thor", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipShock-" },
{ id: "hero_valkyrie01", char: "발키리", suit: "영화 - 토르: 라그나로크", tier: "1", name: "브룬힐데", hei: "190cm", wei: "215kg", pot: "Potential", ability: "Strong" },
{ id: "hero_vision01", char: "Vision", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementMachine-" },
{ id: "hero_vision01_S01", char: "Vision", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "DurabilityFast MovementMachine" },
{ id: "hero_vision01_S02", char: "Vision", suit: "언캐니 어벤져스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "DurabilityFast MovementMachine" },

{ id: "hero_warmachine01", char: "War Machine", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMachine-" },
{ id: "hero_warmachine01_S01", char: "War Machine", suit: "아이언 패트리어트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMachine-" },
{ id: "hero_warmachine01_S02", char: "War Machine", suit: "어벤져스: 이니셔티브", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMachine-" },
{ id: "hero_warmachine01_S03", char: "War Machine", suit: "영화 - 캡틴 아메리카: 시빌 워", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMachine-" },
{ id: "hero_warmachine01_S04", char: "War Machine", suit: "영화 - 어벤져스: 인피니티 워", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMachine-" },
{ id: "hero_warmachine01_S05", char: "War Machine", suit: "영화 - 어벤져스: 엔드게임", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMachine-" },
{ id: "hero_warmachine01_S06", char: "War Machine", suit: "영화 - 어벤져스: 엔드게임 (팀 슈트)", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "LeadershipMachine-" },

{ id: "hero_wasp01", char: "Wasp", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast Movement--" },
{ id: "hero_wasp01_S01", char: "Wasp", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast Movement--" },
{ id: "hero_wasp01_S02", char: "Wasp", suit: "영화 - 앤트맨과 와스프", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast Movement--" },
{ id: "hero_weaponhex01", char: "Weapon Hex", suit: "인피니피 워프", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Chaos MagicHealingAgility" },

{ id: "hero_wiccan01", char: "Wiccan", suit: "뉴 어벤져스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast Movement-" },






{ id: "sv_antiman01", char: "Anti-Man", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Energy ProjectionFast Movement-" },


{ id: "sv_blackdwarf01", char: "Black Dwarf", suit: "인피니티", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "DurabilityStrong-" },
{ id: "sv_blackdwarf01_S01", char: "Cull Obsidian", suit: "영화 - 어벤져스: 인피니티 워", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Black OrderDurabilityStrong" },


{ id: "sv_corvusglaive01", char: "Corvus Glaive", suit: "인피니티", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementAgility-" },
{ id: "sv_corvusglaive01_S01", char: "Corvus Glaive", suit: "영화 - 어벤져스: 인피니티 워", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Black OrderFast MovementAgility" },

{ id: "sv_destroyer01", char: "Destroyer", suit: "클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Flame--" },
{ id: "sv_destroyer01_S01", char: "Destroyer", suit: "프로메티우스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Flame--" },
{ id: "sv_doctordoom01", char: "Doctor Doom", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MagicPure Evil-" },

{ id: "sv_dormmamu01", char: "Dormammu", suit: "클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Magic--" },
{ id: "sv_dormmamu01", char: "Dormammu", suit: "댐네이션", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Magic--" },
{ id: "sv_ebonymaw01", char: "Ebony Maw", suit: "인피니티", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementMind ResistPure Evil" },
{ id: "sv_ebonymaw01_S01", char: "Ebony Maw", suit: "영화 - 어벤져스: 인피니티 워", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast MovementMind ResistPure Evil" },

{ id: "sv_enchantress01", char: "Enchantress", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MindMagic-" },
{ id: "sv_enchantress01_S01", char: "Enchantress", suit: "섬머 데이즈", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MindMagic-" },

{ id: "sv_hela01", char: "Hela", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure EvilCommand-" },
{ id: "sv_hela01_S01", char: "Hela", suit: "영화 - 토르: 라그나로크", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "AsgardPure EvilCommand" },
{ id: "sv_hydroman01", char: "Hydro-Man", suit: "영화 - 스파이더맨: 파 프롬 홈", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure EvilPotential-" },

{ id: "sv_kaecilius01", char: "Kaecilius", suit: "영화 - 닥터 스트레인지", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "AgilityMagic-" },

{ id: "sv_lash01", char: "Lash", suit: "영화 - 에이전트 오브 쉴.드.", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "ShieldEnergy Projection-" },
{ id: "sv_lash01_S01", char: "Lash", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Energy Projection--" },

{ id: "sv_loki01", char: "Loki", suit: "영화 - 어벤져스", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "AsgardChillMind" },
{ id: "sv_loki01_S01", char: "Loki", suit: "레이디 로키", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "ChillMind-" },
{ id: "sv_loki01_S02", char: "Loki", suit: "영화 - 토르: 라그나로크", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "AsgardChillMind" },
{ id: "sv_loki01_S03", char: "Loki", suit: "클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "ChillMind-" },
{ id: "sv_magneto01", char: "Magneto", suit: "클래식", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Mind ResistEnergy Projection-" },
{ id: "sv_magneto01_S01", char: "Magneto", suit: "마블 나우!", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Mind ResistEnergy Projection-" },
{ id: "sv_magneto01_S02", char: "Magneto", suit: "하우스 오브 엑스", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Mind ResistEnergy Projection-" },
{ id: "sv_malekith01", char: "Malekith", suit: "영화 - 토르: 다크 월드", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure Evil--" },
{ id: "sv_malekith01_S01", char: "Malekith", suit: "올뉴, 올디퍼런트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure Evil--" },
{ id: "sv_maximus01", char: "Maximus", suit: "워 오브 킹즈", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Mind Resist--" },

{ id: "sv_modok01", char: "M.O.D.O.K.", suit: "클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "MachineMind-" },
{ id: "sv_modok01_S01", char: "M.O.D.O.K.", suit: "스파이독", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure EvilMachineMind" },
{ id: "sv_modok01_S02", char: "M.O.D.O.K.", suit: "캡톡", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "MachineMind-" },

{ id: "sv_morganlefay01", char: "Morgan Le Fay", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Magic--" },
{ id: "sv_mysterio01", char: "Mysterio", suit: "클래식", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Sinister Six--" },
{ id: "sv_mysterio01_S01", char: "Mysterio", suit: "영화 - 스파이더맨: 파 프롬 홈", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "MindSinister Six-" },


{ id: "sv_proximamidnight01", char: "Proxima Midnight", suit: "인피니티", tier: "1", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Fast Movement--" },
{ id: "sv_proximamidnight01_S01", char: "Proxima Midnight", suit: "영화 - 어벤져스: 인피니티 워", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Black OrderFast MovementAgility" },

{ id: "sv_redskull01", char: "Red Skull", suit: "캡틴 아메리카: 퍼스트 어벤져", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandPure Evil" },
{ id: "sv_redskull01_S01", char: "Red Skull", suit: "시크릿 워즈: 레드 스컬", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandPure Evil-" },
{ id: "sv_redskull01_S02", char: "Red Skull", suit: "하이드라 아머", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandPure EvilCosmic Cube" },
{ id: "sv_rhino01", char: "라이노", suit: "클래식", tier: "1", name: "알렉세이 미하일로비치 시체비치", hei: "195cm", wei: "322kg", pot: "Potential", ability: "Durability, Strong" },
{ id: "sv_ronan01", char: "Ronan", suit: "영화 - 가디언즈 오브 갤럭시", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "GuardiansCommandMind Resist" },
{ id: "sv_ronan01_S01", char: "Ronan", suit: "어나힐레이션", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "CommandMind Resist-" },
{ id: "sv_ronan01_S02", char: "Ronan", suit: "영화 - 캡틴 마블", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "GuardiansCommandMind Resist" },

{ id: "sv_sentinel01", char: "Sentinel", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Pure EvilMachine-" },
{ id: "sv_sentinel01_S01", char: "Sentinel", suit: "님로드 더 레서", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Pure EvilMachine-" },


{ id: "sv_stryfe01", char: "Stryfe", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionPure Evil-" },
{ id: "sv_supergiant01", char: "Supergiant", suit: "인피니티", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Mind ResistMind-" },

{ id: "sv_thane01", char: "Thane", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "StrongDurabilityPure Evil" },
{ id: "sv_thanos01", char: "Thanos", suit: "인피니티", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Pure EvilDurabilityPower Cosmic" },
{ id: "sv_thanos01_S01", char: "Thanos", suit: "시크릿 워즈: 인피니티", tier: "3", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Pure EvilDurabilityPower Cosmic" },
{ id: "sv_thanos01_S02", char: "Thanos", suit: "영화 - 어벤져스: 인피니티 워", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Pure EvilDurabilityPower Cosmic" },
{ id: "sv_thanos01_S03", char: "Thanos", suit: "영화 - 어벤져스: 엔드게임", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Pure EvilDurabilityPower Cosmic" },

{ id: "sv_ultron_boss01", char: "Ultron", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure EvilMachine-" },
{ id: "sv_ultron_boss01_S01", char: "Ultron Prime", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure EvilMachine-" },
{ id: "sv_ultron_boss01_S02", char: "Ultron Mark 1", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure EvilMachine-" },
{ id: "sv_ultron_boss01_S03", char: "Ultron Mark 3", suit: "영화 - 어벤져스: 에이지 오브 울트론", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Pure EvilMachine-" },
{ id: "sv_ulyssesklaue01", char: "Ulysses Klaue", suit: "영화 - 블랙 팬서", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Weapon Master--" },

{ id: "sv_victorious01", char: "Victorious", suit: "모던", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "Potential", ability: "Energy ProjectionFast Movement-" },

{ id: "sv_whiplash01", char: "Whiplash", suit: "영화 - 아이언맨 2", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "MachineShock-" },

{ id: "sv_yellowjacket01", char: "Yellowjacket", suit: "영화 - 앤트맨", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "MachinePure Evil-" },
{ id: "sv_yellowjacket01_S01", char: "Yellowjacket", suit: "마블 나우!", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "MachinePure Evil-" },
{ id: "sv_yondu01", char: "Yondu", suit: "영화 - 가디언즈 오브 갤럭시", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "Weapon MasterCommand-" },


// NPC
{ id: "boss_fenriswolf01", char: "Fenris Wolf", suit: "펜리르 울프", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_fenriswolf01_S01", char: "Fenris Wolf", suit: "펜리르 울프", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_frostbeast01", char: "Frost Beast", suit: "프로스트 비스트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_frostbeast01_S01", char: "Frost Beast", suit: "Burn", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_frostbeast01_S02", char: "Frost Beast", suit: "Paralize", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_frostbeast01_S03", char: "Frost Beast", suit: "Silence", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_mbaku01", char: "M'Baku", suit: "영화 - 블랙 팬서", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_mdigardserpent01", char: "Midgard Serpent", suit: "미드가르드 서펀트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_surtur01", char: "Surtur", suit: "수르트", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_talos01", char: "Talos", suit: "영화 - 캡틴 마블", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "boss_ymir01", char: "Ymir", suit: "이미르", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "GM_Jocasta01", char: "Jocasta", suit: "조캐스타", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "hero_melindamay01", char: "Melinda May", suit: "영화 - 에이전트 오브 쉴.드.", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "sv_devildinosaur01", char: "Devil Dinosaur", suit: "데빌 다이너소어", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },
{ id: "hero_io01", char: "Io", suit: "이오", tier: "<>", name: "", hei: "cm", wei: "kg", pot: "<>", ability: "---" },


   ];

  event.preventDefault();
})
