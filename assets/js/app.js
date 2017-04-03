var selection = document.getElementById("promocion");
window.addEventListener ("load", function(){
  var cChile = document.getElementsByClassName("contenedorChile");
  var cLima = document.getElementsByClassName("contenedorLima");
  var cLima2 = document.getElementsByClassName("contenedorLima2");


  selection.onchange = function(){
    //chile
    if (selection.value == "promoChile") {
      show(cChile);
      none(cLima);
      none(cLima2);
      console.log(cChile[0]);
    }

    //lima
    if (selection.value == "promoLima") {
      show(cLima);
      none(cLima2);
      none(cChile);
      console.log(cLima[0]);
    }

    //lima2
    if (selection.value == "promoLima2") {
      show(cLima2);
      none(cLima);
      none(cChile);
      console.log(cChile[0]);
    }
  }
});

//funciones
function show(coders){
  for (var i = 0; i < coders.length; i++) {
    coders[i].style.display = "inline-block";
  }
}

function none(coders){
  for (var i = 0; i < coders.length; i++) {
    coders[i].style.display = "none";
  }
}
