let pg = document.querySelectorAll("input"); //pega todos os inputs
let currentPage = 1;

for(x = 0; x < pg.length; x++){ //add eventlistener
    pg[x].addEventListener("input", turnPage);
}
function input(value){
    for (x = 0; x < pg.length; x++){
        switch(value){
            case "set":
                pg[x].setAttribute("disabled", true);
                break;
            case "remove":
                pg[x].removeAttribute("disabled");
        }
    }
}
function newPage(spot, place){
    let newPag = document.createElement("div");
    let livro = document.getElementById("book");
    livro.insertBefore(newPag, livro.children[spot])
    newPag.setAttribute("class", "page");
    newPag.innerHTML = `<div class="face-front"><label for="check-page${place}" class="next"><i class="fas fa-chevron-right"></i></label></div><div class="face-back"><label for="check-page${place}" class="prev"><i class="fas fa-chevron-left"></i></label></div>`
    if(spot == 3) {newPag.setAttribute("id", "page3");}
    return newPag;
}
function turnPage(e) {
    input("set");
    switch (e.target.id) {
        case "check-page2":
            if ((e.target.checked) && (currentPage != 9)) {
                currentPage++;
                let newPag = newPage(1, 2);
                let delPage = document.getElementById("book").children[3];
                newPag.children[0].style.backgroundImage = `url("./img/p${currentPage + 1}-a.png")`
                newPag.children[1].style.backgroundImage = `url("./img/p${currentPage + 1}-b.png")`
                let newLabel = document.getElementById("book").children[2].querySelectorAll("label");
            setTimeout(function () {
              document.getElementById("book").removeChild(delPage);
            for(x = 0; x < newLabel.length; x++){
                        newLabel[x].setAttribute("for", "check-page1")
                    }
                    document.getElementById("book").children[2].setAttribute("id", "page1");
                    document.getElementById("check-page2").checked = false;
                    newPag.setAttribute("id", "page2");
                }, 750);
            }
            break;
        case "check-page1":
            if ((!e.target.checked) && (currentPage != 1)) {
                currentPage--;
                let newPag = newPage(3, 1)
                let delPage = document.getElementById("book").children[1];
                newPag.children[0].style.backgroundImage = `url("./img/p${currentPage}-a.png")`
                newPag.children[1].style.backgroundImage = `url("./img/p${currentPage}-b.png")`
                let newLabel = document.getElementById("book").children[2].querySelectorAll("label");
                for(x = 0; x < newLabel.length; x++){
                    newLabel[x].setAttribute("for", "check-page2")
                }
                setTimeout(function () {
                    document.getElementById("book").removeChild(delPage);
                    document.getElementById("book").children[1].setAttribute("id", "page2");
                    document.getElementById("check-page1").checked = true;
                    newPag.setAttribute("id", "page1");
                }, 750);
            }
            break;
    }
    setTimeout(function () {
        input("remove")
    }, 1300);
}
/*

let html = `<div class="face-front">
<label for="check-page1" class="next"><i class="fas fa-chevron-right"></i></label>
</div>
<div class="face-back">
<label for="check-page1" class="prev"><i class="fas fa-chevron-left"></i></label>
</div>`
function pageLoad(wutpage, howmuch) {
    document.getElementById(`page${wutpage}`).children[0].style.backgroundImage = `url("./img/p${currentPage + howmuch}-a.png")`
    document.getElementById(`page${wutpage}`).children[1].style.backgroundImage = `url("./img/p${currentPage + howmuch}-b.png")`
}
pageLoad(1, 0);
pageLoad(2, 1);*/