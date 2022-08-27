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

var menu = document.querySelector(".menu");
var ul = document.querySelector("ul");
var iconeMenu = document.querySelector(".icone-menu");
iconeMenu.addEventListener("click", function () {

    var menus = ul.classList.toggle("menu-visible");

    console.log(menus)

    if (menus) {
        alert("menu esta")
        ul.classList.remove("esconder-menu");
        ul.classList.remove("menu");
        ul.classList.add("menu-visible");


    } else {
        alert("menu nao esta")
        ul.classList.remove("mostar-visible");
        ul.classList.remove("menu");
        ul.classList.add("animation-menu");

        setInterval(function () {
            escondermenu();
        }, 6000);
    }
});

function escondermenu() {
    ul.classList.add("esconder-menu");
}
