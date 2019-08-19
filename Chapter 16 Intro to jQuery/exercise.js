$("div").css("background", "purple");

$("div.highlight").css("width", "200px");

$("#third").css("border", "2px solid orange");

// faster
$("div:first-of-type").css("color", "pink");
// slower
$("div:first").css("color", "pink");