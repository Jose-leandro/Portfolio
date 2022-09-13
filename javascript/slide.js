let quanto = 1;

document.getElementById("radio1").checked = true;
setInterval(function () {
    passarimagdojogo();
}, 5000);

function passarimagdojogo() {
    quanto++;
    if (quanto > 12) {
        quanto = 1;
    }

    document.getElementById("radio" + quanto).checked = true;
}

var souDevJunior = document.querySelector(".informacoes__dev");
animaction(souDevJunior);
function animaction(elemento) {
    var textoDaClassSouDevJunior = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoDaClassSouDevJunior.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 200 * i);
    });
}

setInterval(function () {
    animaction(souDevJunior);
}, 10000);


var redeSocialGithub = document.querySelector(".github__descricao");
animaction(redeSocialGithub);

function animaction(elemento) {
    var textoDaClassGithubDescricao = elemento.innerHTML.split("");

    elemento.innerHTML = "";
    textoDaClassGithubDescricao.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 200 * i);
    });
}

setInterval(function () {
    animaction(redeSocialGithub);
}, 10000);


var redeSocialLinkedin = document.querySelector(".linkedin__descricao");
animactioncomgit(redeSocialLinkedin);

function animactioncomgit(elemento) {
    var textoDaClassLinkedinDescricao = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoDaClassLinkedinDescricao.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 200 * i);
    });
}

setInterval(function () {
    animaction(redeSocialLinkedin);
}, 10000);

var foto = document.querySelector(".foto__autor");
function aumentarTamnhoDaFotoDePerfil() {
    setInterval(function () {
        foto.classList.add("foto__animacao");
    }, 8000);
    setInterval(function () {
        foto.classList.remove("foto__animacao");
        foto.style.transition = "1s";
    }, 12000);

} aumentarTamnhoDaFotoDePerfil();

setInterval(function () {
    aumentarTamnhoDaFotoDePerfil();
}, 15000);


var larguraDoDispositivo = window.screen.width;
console.log(larguraDoDispositivo);

var menu = document.querySelector(".menu__lista");


var iconeMenu = document.querySelector(".icone__menu");
iconeMenu.addEventListener("click", function () {

    var resultadoDaBuscar = menu.classList.toggle("menu__visible");

    if(larguraDoDispositivo >= 1025) {
        if (resultadoDaBuscar) {

            menu.classList.remove("menu__escondido");
            menu.classList.remove("menu__lista");
            menu.classList.add("menu__visivel");
    
    
        } else {
            menu.classList.remove("menu__visivel");
            menu.classList.remove("menu__lista");
            menu.classList.add("menu__escondido");
    
            setInterval(function () {
                esconderMenu();
            }, 6000);
        }
    }
    
        
    if(larguraDoDispositivo <= 1024) {
        if (resultadoDaBuscar) {

            menu.classList.remove("menu__escondido--width");
            menu.classList.remove("menu__lista");
            menu.classList.add("menu__visivel--width");
    
    
        } else {
            menu.classList.remove("menu__visivel--width");
            menu.classList.remove("menu__lista");
            menu.classList.add("menu__escondido--width");
    
            setInterval(function () {
                esconderMenuParaMobile();
            }, 6000);
        }
    }else {
        return 
    }
});

function esconderMenu() {
    menu.classList.remove("menu__escondido");
    menu.classList.add("esconder__menu");
}

function esconderMenuParaMobile() {
    menu.classList.remove("menu__escondido--width");
    menu.classList.remover("menu__visivel--width");
    menu.classList.add("esconder__menu");
}


