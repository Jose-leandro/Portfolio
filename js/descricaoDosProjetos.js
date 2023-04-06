
// alterar a visibilidade das opções disponíveis nos projetos quando ocorre a pseudo-classe hover
function visibilidadeOpcoesDosProjetos() {

    let projetoContenerEncriptador = document.querySelector(".projeto__contener__encriptador");
    projetoContenerEncriptador.style.display = "flex";

    let projetoContenerJogo = document.querySelector(".projeto__contener__jogo");
    projetoContenerJogo.style.display = "flex";

    let projetoContenerEcommerce = document.querySelector(".projeto__contener__ecommerce");
    projetoContenerEcommerce.style.display = "flex";
}


// alterar para visível o popup relacionado a descrição do projeto encriptador e ocultar os outros projeto
function visivelPopupDescricaoProjetoEncriptador() {

    let popupDescricaoEncriptador = document.querySelector(".projeto__contener__encriptador__descricao__popup__contener");
    popupDescricaoEncriptador.style.visibility = "visible";

    let projetoContenerJogo = document.querySelector(".projeto__contener__jogo");
    projetoContenerJogo.style.display = "none";

    let projetoContenerEcommerce = document.querySelector(".projeto__contener__ecommerce");
    projetoContenerEcommerce.style.display = "none";

    let projetoContener = document.querySelector(".projeto__contener");
    projetoContener.style.justifyContent = "start";
}


// ocultar o popup relacionado a descrição do projeto encriptador e altera para visível os outros projeto
function ocultarPopupDescricaoProjetoEncriptador() {

    let encriptadorDescricaoPopup = document.querySelector(".projeto__contener__encriptador__descricao__popup__contener");

    let encriptadorDescricaoPopupH1 = document.querySelector('.projeto__contener__encriptador__descricao__popup__contener__h1');
    encriptadorDescricaoPopupH1.addEventListener("click", function () {

        encriptadorDescricaoPopup.style.visibility = "hidden";

        let projetoContener = document.querySelector(".projeto__contener");
        projetoContener.style.justifyContent = "space-evenly";

        visibilidadeOpcoesDosProjetos();
    })
}
ocultarPopupDescricaoProjetoEncriptador();


// alterar para visível o popup relacionado a descrição do projeto jogo e ocultar os outros projeto
function visivelPopupDescricaoProjetoJogo() {

    let projetoContenerEncriptador = document.querySelector(".projeto__contener__encriptador");
    projetoContenerEncriptador.style.display = "none";

    let projetoContenerEcommerce = document.querySelector(".projeto__contener__ecommerce");
    projetoContenerEcommerce.style.display = "none";

    let projetoContener = document.querySelector(".projeto__contener");
    projetoContener.style.justifyContent = "flex-start";

    let popupDescricaoJogo = document.querySelector(".projeto__contener__jogo__descricao__popup__contener");
    popupDescricaoJogo.style.visibility = "visible";
}


// ocultar o popup relacionado a descrição do projeto jogo e altera para visível os outros projeto
function ocultarPopupDescricaoProjetoJogo() {

    let jogoDescricaoPopup = document.querySelector(".projeto__contener__jogo__descricao__popup__contener");

    let jogoDescricaoPopupH1 = document.querySelector('.projeto__contener__jogo__descricao__popup__contener__h1');
    jogoDescricaoPopupH1.addEventListener("click", function () {

        jogoDescricaoPopup.style.visibility = "hidden";

        let projetoContenerEncriptador = document.querySelector(".projeto__contener__encriptador");
        projetoContenerEncriptador.style.display = "block";

        let projetoContenerEcommerce = document.querySelector(".projeto__contener__ecommerce");
        projetoContenerEcommerce.style.display = "block";

        let projetoContener = document.querySelector(".projeto__contener");
        projetoContener.style.justifyContent = "space-evenly";

        visibilidadeOpcoesDosProjetos();
    })
}
ocultarPopupDescricaoProjetoJogo();

// alterar para visível o popup relacionado a descrição do projeto ecommerce e ocultar os outros projeto
function visivelPopupDescricaoProjetoEcommerce() {

    let projetoContenerEncriptador = document.querySelector(".projeto__contener__encriptador");
    projetoContenerEncriptador.style.display = "none";

    let projetoContenerJogo = document.querySelector(".projeto__contener__jogo");
    projetoContenerJogo.style.display = "none";

    let projetoContener = document.querySelector(".projeto__contener");
    projetoContener.style.justifyContent = "flex-start";

    let popupDescricaoEcommerce = document.querySelector(".projeto__contener__ecommerce__descricao__popup__contener");
    popupDescricaoEcommerce.style.visibility = "visible";
}


// ocultar o popup relacionado a descrição do projeto ecommerce e altera para visível os outros projeto
function ocultarPopupDescricaoProjetoEcommerce() {

    let ecommerceDescricaoPopup = document.querySelector(".projeto__contener__ecommerce__descricao__popup__contener");

    let ecommerceDescricaoPopupH1 = document.querySelector('.projeto__contener__ecommerce__descricao__popup__contener__h1');
    ecommerceDescricaoPopupH1.addEventListener("click", function () {

        ecommerceDescricaoPopup.style.visibility = "hidden";

        let projetoContenerEncriptador = document.querySelector(".projeto__contener__encriptador");
        projetoContenerEncriptador.style.display = "block";

        let projetoContenerJogo = document.querySelector(".projeto__contener__jogo");
        projetoContenerJogo.style.display = "block";

        let projetoContener = document.querySelector(".projeto__contener");
        projetoContener.style.justifyContent = "space-evenly";

        visibilidadeOpcoesDosProjetos();
    })
}
ocultarPopupDescricaoProjetoEcommerce();
