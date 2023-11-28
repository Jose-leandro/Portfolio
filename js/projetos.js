function visivelDescricao(descricao, container) {
    document.querySelector(".projetos__container").style.flexDirection = "column";
    document.querySelector(".projetos__container").style.justifyContent = "center";

    document.querySelector("." + descricao).style.display = "inline-block";
    document.querySelector("." + descricao).style.left = "40%";

    document.querySelector("." + container).style.flexDirection = "row";
    document.querySelector("." + container).style.width = "88%";

    ["container__encriptador", "container__jogo", "container__listar", "container__ecommerce", "container__upload-ai", "container__calculadora-oes"].forEach((elemento) => {
        if (elemento !== container) {
            document.querySelector("." + elemento).style.display = "none";
        }
    });
}

function visivelCalculadoraOesDescricao() {
    visivelDescricao("calculadora-oes__descricao", "container__calculadora-oes");
}

function visivelEncriptadorDescricao() {
    visivelDescricao("encriptador__descricao", "container__encriptador");
}

function visivelJogoDescricao() {
    visivelDescricao("jogo__descricao", "container__jogo");
}

function visivelEcommerceDescricao() {
    visivelDescricao("ecommerce__descricao", "container__ecommerce");
}

function visivelListarDescricao() {
    visivelDescricao("listar__descricao", "container__listar");
}

function visivelUploadAiDescricao() {
    visivelDescricao("upload-ai__descricao", "container__upload-ai");
}


function remocaoEstilosElementos() {
    let containesButtons = ["container__button-calculadora-oes", "container__button-upload-ai", "container__button-listar", "container__button-encriptador", "container__button-jogo", "container__button-ecommecer"];
    let elementosAdicaoEstilos = [
        "projeto", "projetos__container", "encriptador__descricao", "ecommerce__descricao", "jogo__descricao", "upload-ai__descricao", "calculadora-oes__descricao", "listar__descricao",
        "container__encriptador", "container__jogo", "container__ecommerce", "container__upload-ai", "container__calculadora-oes", "container__listar"
    ];

    containesButtons.forEach((elemento) => {
        let descricaoButton = document.querySelector("." + elemento);
        if (descricaoButton) {
            descricaoButton.addEventListener("click", () => {
                console.log("Fui clicado")
                for (var i = 0; i < elementosAdicaoEstilos.length; i++) {
                    document.querySelector('.' + elementosAdicaoEstilos[i]).removeAttribute('style');
                }
            });
        }
    });
}
remocaoEstilosElementos();

// function autoHeightSecaoProjetos(descricao, adicional) {
//         let projeto = document.querySelector(".projeto");
//         let descricaoElemento = document.querySelector("." + descricao);
//         let altura = descricaoElemento.offsetHeight;
//         console.log(altura)
//         console.log(projeto.style.height = altura + adicional + "px");
// }

// function autoHeightSecaoProjetosCalculadoraOes() {
//     autoHeightSecaoProjetos("calculadora-oes__descricao", 450);
// }

// function autoHeightSecaoProjetosEncriptador() {
//     autoHeightSecaoProjetos("encriptador__descricao", 320);
// }

// function autoHeightSecaoProjetosJogo() {
//     autoHeightSecaoProjetos("jogo__descricao", 430);
// }

// function autoHeightSecaoProjetosEcommerce() {
//     autoHeightSecaoProjetos("ecommerce__descricao", 450);
// }

// function autoHeightSecaoProjetosUploadAi() {
//     autoHeightSecaoProjetos("upload-ai__descricao", 420);
// }

// function autoHeightSecaoProjetosListar() {
//     autoHeightSecaoProjetos("listar__descricao", 420);
// }


// function posicionamentoProjetoContainer() {
//     var largura = window.innerWidth;

//     var elementosClass = [".projetos__container", ".calculadora-oes__descricao", ".encriptador__descricao", ".jogo__descricao", ".ecommerce__descricao", ".upload-ai__descricao", ".listar__descricao"];
//     var larguraLimite = largura < 1200 ? 1200 : largura;

//     elementosClass.forEach(function (elemento) {
//         var projetoContainerEDescricoes = document.querySelector(elemento);

//         projetoContainerEDescricoes.removeAttribute('style');

//         if (elemento !== ".projetos__container") {
//             projetoContainerEDescricoes.style.display = "inline-block";

//             if (elemento.includes("__descricao")) {
//                 var altura = elemento == ".calculadora-oes__descricao" ? 520 : 400;
//                 // autoHeightSecaoProjetos(elemento.replace(".", ""), altura);

//             }

//             if (largura > larguraLimite && elemento == ".calculadora-oes__descricao") {
//                 document.querySelector(".calculadora-oes__descricao").style.left = "11%";
//             }
//         }

//         if (largura > larguraLimite && elemento == ".projetos__container") {
//             document.querySelector(".projetos__container").style.flexDirection = "row";
//             document.querySelector(".projetos__container").style.justifyContent = "start";
//         }
//     });
// }
