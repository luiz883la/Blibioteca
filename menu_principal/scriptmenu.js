var corpo = document.querySelector('div.menuOP');
var BarraPesquisa = document.querySelector('input.pesquisa');
var valorpesquisa = String(BarraPesquisa.value);
var ident;
BarraPesquisa.addEventListener("keydown", pesquisar);
var titulo = [
    "Funçoes",
    "Loops",
    "Array",
    "Switch",
    "Operaçoes"
]
var comando = [
    "function Name(param) {...}",
    "while(condiçao) {...}\ndo {...} while (condicao)\nfor(inicializacao; condicao; incremento) {...}",
    "var/let/const Name = [Name:'...']",
    "swtch (condicao) {case 1{} case 2{}}",
    "+      -   X   ÷"
]
var explicacao = [
    'As funções existem na programação para organizar e reutilizar blocos de código que executam tarefas específicas. Elas permitem dividir um programa em partes menores e mais fáceis de compreender, evitando a repetição de código e tornando o desenvolvimento mais eficiente. Além disso, as funções facilitam a manutenção, os testes e a atualização do sistema, pois qualquer alteração pode ser realizada em um único local, refletindo automaticamente em todas as partes do programa que utilizam aquela função.'
    ,
    'Os loops existem na programação para automatizar a repetição de tarefas, evitando a necessidade de escrever o mesmo código várias vezes. Eles permitem executar um conjunto de instruções repetidamente enquanto uma condição for verdadeira ou por um número determinado de vezes, tornando os programas mais organizados, eficientes e fáceis de manter. Além de reduzir a quantidade de código, os loops são essenciais para processar listas, percorrer coleções de dados, realizar cálculos repetitivos e desenvolver algoritmos que exigem execução contínua de determinadas ações.',

    'Os arrays existem na programação para armazenar e organizar múltiplos valores em uma única estrutura de dados. Em vez de criar uma variável para cada informação, um array permite agrupar elementos do mesmo tipo, facilitando o acesso, a manipulação e o processamento dos dados por meio de índices. Essa estrutura torna o código mais organizado, reduz a repetição de variáveis e é amplamente utilizada em algoritmos, sistemas e aplicações que precisam trabalhar com conjuntos de informações de forma eficiente.',

    'O **switch** existe na programação para facilitar a tomada de decisões quando uma variável ou expressão pode assumir diferentes valores. Em vez de utilizar várias estruturas `if` e `else if`, o `switch` organiza as possibilidades de forma mais clara e eficiente, executando o bloco de código correspondente ao caso que foi atendido. Essa estrutura melhora a legibilidade do código, torna a manutenção mais simples e é especialmente útil quando há diversas opções de execução baseadas em um mesmo valor.',

    'As operações existem na programação porque são responsáveis por realizar as ações fundamentais que tornam um sistema funcional. Elas permitem manipular dados, executar cálculos, comparar valores, tomar decisões e controlar o fluxo de execução de um programa. Sem as operações, um software seria incapaz de processar informações ou responder às ações do usuário. Em outras palavras, elas são a base da lógica de programação, possibilitando que algoritmos transformem dados de entrada em resultados úteis e automatizem tarefas de forma eficiente.'
]
var exemplo = [
  "function <span class='function'>saudacao</span>(<span class='variable'>nome</span>) {<br><span class='keyword'>return</span> <span class='string'>`Olá, ${nome}! Seja bem-vindo(a).`</span>;<br>}<br><br>console.log(<span class='function'>saudacao</span>(<span class='string'>'Maria'</span>));",

  "<span class='keyword'>for</span> (let <span class='variable'>i</span> = <span class='number'>1</span>; <span class='variable'>i</span> <= <span class='number'>5</span>; <span class='variable'>i</span>++) {<br>console.log(<span class='variable'>i</span>);<br>}<br><br><span class='keyword'>while</span> (<span class='variable'>i</span> <= <span class='number'>5</span>) {<br>console.log(<span class='variable'>i</span>);<br><span class='variable'>i</span>++;<br>}<br><br><span class='keyword'>do</span> {<br>console.log(<span class='variable'>i</span>);<br><span class='variable'>i</span>++;<br>} <span class='keyword'>while</span> (<span class='variable'>i</span> <= <span class='number'>5</span>);<br><br><span class='comment'>Resultado: 1, 2, 3, 4, 5</span>",

  "let <span class='variable'>frutas</span> = [<span class='string'>'maçã'</span>, <span class='string'>'banana'</span>, <span class='string'>'laranja'</span>, <span class='string'>'uva'</span>];<br><br>console.log(<span class='variable'>frutas</span>);<br>console.log(<span class='variable'>frutas</span>[<span class='number'>0</span>]);<br>console.log(<span class='variable'>frutas</span>[<span class='number'>2</span>]);",

  "let <span class='variable'>dia</span> = <span class='number'>3</span>;<br><br><span class='keyword'>switch</span> (<span class='variable'>dia</span>) {<br><span class='keyword'>case</span> <span class='number'>1</span>:<br>console.log(<span class='string'>'Domingo'</span>);<br><span class='keyword'>break</span>;<br><span class='keyword'>case</span> <span class='number'>2</span>:<br>console.log(<span class='string'>'Segunda-feira'</span>);<br><span class='keyword'>break</span>;<br><span class='keyword'>case</span> <span class='number'>3</span>:<br>console.log(<span class='string'>'Terça-feira'</span>);<br><span class='keyword'>break</span>;<br><span class='keyword'>default</span>:<br>console.log(<span class='string'>'Dia inválido'</span>);<br>}",

  "let <span class='variable'>a</span> = <span class='number'>10</span>;<br>let <span class='variable'>b</span> = <span class='number'>5</span>;<br><br>console.log(<span class='variable'>a</span> <span class='operator'>+</span> <span class='variable'>b</span>); <span class='comment'>// soma</span><br>console.log(<span class='variable'>a</span> <span class='operator'>-</span> <span class='variable'>b</span>); <span class='comment'>// subtração</span><br>console.log(<span class='variable'>a</span> <span class='operator'>*</span> <span class='variable'>b</span>); <span class='comment'>// multiplicação</span><br>console.log(<span class='variable'>a</span> <span class='operator'>/</span> <span class='variable'>b</span>); <span class='comment'>// divisão</span><br>console.log(<span class='variable'>a</span> <span class='operator'>%</span> <span class='variable'>b</span>); <span class='comment'>// resto</span>"
];
function init() {
    for (var c = 0;c < titulo.length ;c++) {
        let opcao = document.createElement('div');
        let textotitulo = document.createElement("p");
        let textocomando = document.createElement("p");
        let textodica = document.createElement("p");

        textotitulo.innerText = titulo[c];
        textotitulo.className = 'titulo';
        textocomando.innerText = comando[c];
        textocomando.className = 'comando';
        textodica.innerText = 'Clique aqui para acessar!';
        textodica.className = 'dica';
        opcao.className = 'opt';
        opcao.style.gap = "20px"
        opcao.id = `${c}`;
        opcao.addEventListener('click', () => entrar(opcao.id));
        opcao.appendChild(textotitulo);
        opcao.appendChild(textocomando);
        opcao.appendChild(textodica);
        corpo.appendChild(opcao);
    }

    //acessar menu de opcoes
}
function entrar(x){
    if (x){
        ident = x;
        localStorage.clear()
        localStorage.setItem('titulo', titulo[ident]);
        localStorage.setItem('comando', comando[ident]);
        localStorage.setItem('explicacao', explicacao[ident]);
        localStorage.setItem('exemplo', exemplo[ident])
        window.location.href = '../menu_item/pag_suporte.html';
    }
    

}
function pesquisar(event){
    if (event.key == 'Enter'){
        if(titulo.indexOf(BarraPesquisa.value) !== -1){
            entrar(titulo.indexOf(BarraPesquisa.value))
        }else{
            alert("Funçao nao encontrada")
            BarraPesquisa.value = ''
            return
        }
    }
    let texto = BarraPesquisa.value;
    BarraPesquisa.value = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}
init();
