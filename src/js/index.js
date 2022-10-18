/*OBJETIVO: ao clicar em uma aba, mostrar o conteúdo da aba selecionada e ocultar o conteúdo da aba anterior.

Passo 1: Pegar os elementos que representam as abas no HTML;
Passo 2: Identificar o clique no elemento da aba;
Passo 3: Ao clicar, desmarcar a aba atualmente selecionada;
Passo 4: Marcar a aba clicada como selecionado;
Passo 5: Esconder o conteúdo anterior;
Passo 6: Mostar o conteúdo da aba selecionada.*/

//Passo 1: Pegar os elementos que representam as abas no HTML.
const abas = document.querySelectorAll(".aba");
// O comando [const] determina que a respectiva variável não poderá ter seu valor alterado, permanecendo constante e igual ao que recebeu inicialmente.
// O método [.querySelectorAll()] da classe [document] encontra e retorna todas as tags do arquivo HTML que possuem, neste caso, a classe informada. Portanto, a variável [abas] é do tipo lista.

//Passo 2: Identificar o clique no elemento da aba:
abas.forEach(aba => {
// O método [.forEach()] da classe [list] executa uma determinada ação para cada elemento da lista. Nesse caso, uma [arrow function] foi determinada para ser executada com cada um dos elementos.
    aba.addEventListener("click", function () {
    // O método [.addEventListener()] adiciona uma ação a ser executada sempre que um determinado evendo - neste caso, [click] - for executado. A ação determinada, neste caso, foi uma função.

        if (aba.classList.contains("selecionado")) {
            return
        }

        selecionarAba(aba);
        mostrarConteudoAba(aba);

    });
});

function selecionarAba(aba) {
// O comando [function] serve para designar a criação de uma função, nomeada ou não
    //Passo 3: Ao clicar, desmarcar a aba atualmente selecionada:
    const abaSelecionada = document.querySelector(".aba.selecionado");
    // O método [.querySelector()] da classe [document] encontra e retorna uma tag do arquivo HTML com a(s) classe(s) selecionada(s)
    abaSelecionada.classList.remove("selecionado");
    // O método [.remove()], da subclasse [.classList], remove um elemento de classe de uma tag no arquivo HTML em execução

    //Passo 4: Marcar a aba clicada como selecionado:
    aba.classList.add("selecionado");
    // O método [.add()], dasubclasse [.classList], adiciona um elemento de classe uma tag no arquivo HTML em execução
}

function mostrarConteudoAba(aba) {
    //Passo 5: Esconder o conteúdo anterior:
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //Passo 6: Mostar o conteúdo da aba selecionada:
    const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`
    // Aqui temos um método de concatenação interessante, utilizando a seguinte notação: `[string]${[elemento]}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDaAba);
    // O método [.getElementById()], da classe [document], retorna uma tag que tenha o Id informado
    informacaoASerMostrada.classList.add("selecionado");
}
