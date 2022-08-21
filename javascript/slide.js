let quanto = 1;

document.getElementById("radio5").checked = true;
setInterval(function () {
    passarimagdojogo();
}, 5000);

function passarimagdojogo() {
    quanto++;
    if (quanto > 10) {
        quanto = 1;
    }

    document.getElementById("radio" + quanto).checked = true;
}

var soudev = document.querySelector(".dev");
animaction(soudev);
function animaction(elemento) {
    var textodoh = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textodoh.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 200 * i);
    });
}


setInterval(function () {
    animaction(soudev);
}, 10000);


var redesocial = document.querySelector(".redesociagit");
animactioncomgit(redesocial);
function animactioncomgit(elemento) {
    var textodogit = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textodogit.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 200 * i);
    });
}

setInterval(function () {
    animaction(redesocial);
}, 10000);


var redesocial = document.querySelector(".redesocial-linkedin");
animactioncomgit(redesocial);
function animactioncomgit(elemento) {
    var textodogit = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textodogit.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 200 * i);
    });
}

setInterval(function () {
    animaction(redesocial);
}, 10000);



var foto = document.querySelector(".foto");
function bordar() {
    setInterval(function () {
        foto.classList.add("animacaocomfoto");
    }, 5000);
    setInterval(function () {
        foto.classList.remove("animacaocomfoto");
        foto.style.transition = "2s";
    }, 10000);

} bordar();

setInterval(function () {
    bordar();
}, 15000);

var ul = document.querySelector("ul");
var iconeMenu = document.querySelector(".icone-menu");
iconeMenu.addEventListener("click", function() {

    var menus = ul.classList;
    var resultado = menus.toggle("menu");

    if(resultado) {
        alert("certo")
        menu();    
    setInterval(function () {
        escondermenu();
    }, 14000);

    }else {
        alert("erro")
        var menu = document.querySelector(".menu");
        menu.classList.remove("menus-esconde");
    }

});

function menu() {
    var menu = document.querySelector(".menu");
   
       menu.classList.add("animation-menu");

}

function escondermenu() {
    var menu = document.querySelector(".menu");
    menu.classList.add("menus-esconde");
}

