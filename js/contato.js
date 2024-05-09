'use strict'

/* Selecione os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const campoTelefone = formulario.querySelector("#telefone");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Seleção dos campos e a ativação das máscaras */
$(campoCep).mask("00000-000");              //01234-567
$(campoTelefone).mask("(00) 00000-0000");   // (11) 2135-0300

 
/* Detectando quando o botão de buscar CEP é acionado */
botaoBuscar.addEventListener("click", async function(event){
    /* Anular o comportamento da página. Sempre acontece ao trabalhar com <a> e <form>. */
    event.preventDefault();

    

    /* Verificando se o cep NÃO TEM 9 dígitos */
    if ( campoCep.value.length !== 9 ){
        mensagemStatus.textContent = "Digite o CEP válido";
        mensagemStatus.style.color = "purple"

        /* Pare completamente a execução */
        return;
    }

    /* Guardando o valor do cep digitado/informado */
    let cepInformado = campoCep.value;
    
    /* AJAX - Asyncronus JavaScript And XML
    (JavaScript assíncrono e XML) 
    Técnica de comunicação (transmissão, recebimento) de dados que permite o processamento em conjunto com APIs (ou Web Services)
    */

    // Etapa 1: preparar a URL da API com o CEP informado
    let url = `https://viacep.com.br/ws/${cepInformado}/json/`;

    // Etapa 2: acessar a API (com a URL) e guardar o retorno dela
    const resposta = await fetch(url); 

    // Etapa 3: extrair os dados da resposta da API em formato JSON
    const dados = await resposta.json();

    // Etapa 4: lidar com os dados (em caso de erro e de sucesso)
    if("erro" in dados){
        mensagemStatus.textContent = "CEP inexistente!";
        mensagemStatus.style.color = "red";
    } else {
        mensagemStatus.textContent = "CEP encontrado!";
        mensagemStatus.style.color = "blue";
        
        /* Selecionando os elementos que estão escondidos */
        const camposRestantes = formulario.querySelectorAll('.campos-restantes');

        /* Removendo a class usando um loop*/
        for(const campo of camposRestantes){
            campo.classList.remove("campos-restantes");
        }

        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;

    }
    
});

