'use strict'

const botaoMenu = document.querySelector("nav h2 a");
const listaDeLinks = document.querySelector(".links-menu");

/* monitorando o evento de click/toque no botaoMenu */
botaoMenu.addEventListener("click", function(event){
    /* Previnir/anular o evento padrão do link de redirecionalmento da página */
    event.preventDefault();

    listaDeLinks.classList.toggle("aberto");

    if (listaDeLinks.classList.contains("aberto")) {
        //innerhtml permite que o js add elementos em html
        botaoMenu.innerHTML = "Fechar &times;";
    } else {
        // se repete...
        botaoMenu.innerHTML = "Menu &equiv;";
    }
});
