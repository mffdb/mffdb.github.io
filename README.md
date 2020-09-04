# mff
# character 277
# uniform 268
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://code.jquery.com/mobile/jquery.mobile-latest.min.js"></script>

<style>

[class^=info-] {
 border: 1px solid #000;
 float: left;
 position: absolute;
}

.info-image {
 border: 1px solid #000;
 left: 0px;
}
.info-text {
 border: 1px solid #000;

 right: 0px;
}

.type, .species, .genter, .side, .ability, .allies, .utilities {
 width: 400px;
 height: 40px;
 border: 1px solid #000;
}

.portrait {
 width: 256px;
 height: 256px;
 border: 1px solid #f00;
}

.character {
 width: 256px;
 height: 40px;
 border: 1px solid #0f0;
}

.uniform {
 width: 256px;
 height: 40px;
 border: 1px solid #00f;
}

.infobox {
 display: inline-block;
 width: 100%;
 height: 340px;
 border: 1px solid #000;
  position: relative;
}
.rollbox {
 display: inline-block;
 width: auto;
 height: auto;
 
}

[class^=roll-] {
 border: 1px solid rgba(255, 255, 255, 1);
 float: left;
 width: 150px;
 height: 100px;
 background-size: cover;

}

[class~=Combat]:hover {
 border: 1px solid #F00;
}

[class~=Speed]:hover {
 border: 1px solid #0F0;
}

[class~=Blast]:hover {
 border: 1px solid #00F;
}

[class~=Universal]:hover {
 border: 1px solid #F0F;
}

div.roll-Cinque, .roll-Forest, .roll-Lights, .roll-Mountains {
  background-image: url("img_5terre.jpg");  
}

</style>
</head>
<body>
<div class="main">

<div class="infobox">

<div class="info-image">

<div class="portrait"></div>
<div class="character"></div>
<div class="uniform"></div>
</div>
<div class="info-text">

<div class="type"></div>
<div class="species"></div>
<div class="genter"></div>
<div class="side"></div>
<div class="ability"></div>
<div class="allies"></div>
<div class="utilities"></div>
</div>

</div>

<div class="rollbox">
  <div class="roll-Cinque Combat"></div>
  <div class="roll-Forest Combat" ></div>
  <div class="roll-Lights Speed"></div>
  <div class="roll-Mountains Speed"></div>
  <div class="roll-Cinque Blast"></div>
  <div class="roll-Forest Blast"></div>
  <div class="roll-Lights Universal"></div>
  <div class="roll-Mountains Universal"></div>
</div>
</div>
</div>
</body>
</html>
