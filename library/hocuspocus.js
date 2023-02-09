var front = document.querySelector(".face-front");
var back = document.querySelector(".face-back");
var flip = document.querySelector(".book-content");
var one = document.querySelectorAll(".book")
var portada = document.querySelectorAll("#portada")

var contZindex = 2;
var customZindex = 1;

for(var x = 0; x < one.length; x++){
    one[x].style.zIndex = customZindex;
    customZindex--;

    one[x].addEventListener("click", function(e){
        var tgt = e.target;
        var oneThis = this;
        oneThis.style.zIndex = contZindex;
        contZindex++;
        if(tgt.getAttribute("class") == "face-front"){
            oneThis.style.zIndex = contZindex;
            contZindex += 20;
            setTimeout(function(){
                oneThis.style.transform = "rotateY(-180deg)";
            }, 500);
        }
        if(tgt.getAttribute("class") == "face-back"){
            oneThis.style.zIndex = contZindex;
            contZindex += 20;
            setTimeout(function(){
                oneThis.style.transform = "rotateY(0deg)";
            }, 500);
        }
        if(((tgt.getAttribute("id") == "portada")||(tgt.getAttribute("id") == "portada-back"))&&(flip.classList.contains("trnsf") == false)){
            flip.classList.remove("trnsf-reset");
            flip.classList.add("trnsf");
        }
        if((tgt.getAttribute("id") == "FP")&&(flip.classList.contains("trnsf") == true)){
            flip.classList.remove("trnsf");
            flip.classList.add("trnsf-reset");
        }
    })
}