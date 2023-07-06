// O propósito desta é cria a animação com o menu
let larguraDoDispositivo = window.screen.width;
console.log(larguraDoDispositivo);

let menu = document.querySelector(".menu__lista");

let iconeMenu = document.querySelector(".icone__menu");
iconeMenu.addEventListener("click", function () {

    let resultadoDaBuscar = menu.classList.toggle("menu__visible");

    if (larguraDoDispositivo >= 1025) {
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

    if (larguraDoDispositivo <= 1024) {
        if (resultadoDaBuscar) {

            menu.classList.remove("menu__lista");
            menu.classList.remove("menu__escondido--width");
            menu.classList.add("menu__visivel--width");


        } else {
            menu.classList.remove("menu__lista");
            menu.classList.remove("menu__visivel--width");
            menu.classList.add("menu__escondido--width");

            setInterval(function () {
                esconderMenuParaMobile();
            }, 6000);
        }
    }
});


// sobre essa ela praticamente esconde ou sejá aplica uma visibilidade 0 para o menu
function esconderMenu() {
    menu.classList.remove("menu__escondido");
    menu.classList.add("esconder__menu");
}


// mesma função da esconderMenu mas neste caso para telas sensiíeis ao toque
function esconderMenuParaMobile() {
    menu.classList.remove("menu__escondido--width");
    menu.style.visibility = "hidden";
    menu.classList.add("esconder__menu");
}
     

