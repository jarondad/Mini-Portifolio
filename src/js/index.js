/*OBJETIVO: ao clicar em uma aba, mostrar o conteúdo da aba selecionada e ocultar o conteúdo da aba anterior.

Passo 1: Pegar os elementos que representam as abas no HTML;
Passo 2: Identificar o clique no elemento da aba;
Passo 3: Ao clicar, desmarcar a aba atualmente selecionada;
Passo 4: Marcar a aba clicada como selecionado;
Passo 5: Esconder o conteúdo anterior;
Passo 6: Mostar o conteúdo da aba selecionada.*/

//Passo 1: Pegar os elementos que representam as abas no HTML.
const abas = document.querySelectorAll(".aba");

//Passo 2: Identificar o clique no elemento da aba:
abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return
        }

        selecionarAba(aba);
        mostrarConteudoAba(aba);

    });
});

function selecionarAba(aba) {
    //Passo 3: Ao clicar, desmarcar a aba atualmente selecionada:
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //Passo 4: Marcar a aba clicada como selecionado:
    aba.classList.add("selecionado");
}

function mostrarConteudoAba(aba) {
    //Passo 5: Esconder o conteúdo anterior:
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //Passo 6: Mostar o conteúdo da aba selecionada:
    const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}