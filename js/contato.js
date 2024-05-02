'use strict'

/* Selecione os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Detectando quando o botão de buscar CEP é acionado */
botaoBuscar.addEventListener("click", function(event){
    /* Anular o comportamento da página. Sempre acontece ao trabalhar com <a> e <form>. */
    event.preventDefault();

    

    /* Verificando se o cep NÃO TEM 8 dígitos */
    if ( campoCep.value.length !== 8 ){
        mensagemStatus.textContent = "Digite o CEP válido";
        mensagemStatus.style.color = "purple"

        /* Pare completamente a execução */
        return;
    }

    /* Guardando o valor do cep digitado/informado */
    let cepInformado = campoCep.value;
    console.log(cepInformado);
});