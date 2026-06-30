var corpoOP = document.querySelector('div.menuOP');
var BarraPesquisa = document.querySelector('input.pesquisa');
var trespontos = document.querySelector('img.lines');
var corpo = document.querySelector('div.corpo');
var BarraMenu = document.createElement('div');
//variavel solta
var ident;
var check = true
//comando de interaco
BarraPesquisa.addEventListener("keydown", pesquisar);
trespontos.addEventListener('click', abrirMenu);
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
    'A <b>função</b> na programação é um bloco de código criado para executar uma tarefa específica.<br>Ela ajuda a organizar o programa, evitando a repetição de código e facilitando a manutenção.<br>Além disso, funções tornam o código mais claro, reutilizável e eficiente.',
    'Os <b>loops</b> são estruturas de repetição que executam um bloco de código várias vezes.<br>Eles permitem automatizar tarefas repetitivas até que uma condição seja atendida.<br>Isso torna os programas mais eficientes e reduz a necessidade de escrever código repetido.',

    'Os <b>arrays</b> são estruturas de dados que armazenam vários valores em uma única variável.<br>Eles permitem organizar e acessar os elementos por meio de um índice.<br>Isso facilita o gerenciamento e a manipulação de grandes conjuntos de dados.',

    'O <b>switch</b> é uma estrutura de decisão usada para executar diferentes blocos de código conforme o valor de uma variável.<br>Ele compara esse valor com vários casos possíveis e executa o correspondente.<br>Isso torna o código mais organizado e legível quando há muitas opções de escolha.',

    'As <b>operações</b> na programação são usadas para realizar cálculos, comparações e manipular valores.<br>Elas podem ser aritméticas, lógicas, relacionais ou de atribuição, dependendo da finalidade.<br>Essas operações são essenciais para o funcionamento e a tomada de decisões em um programa.<br>'
]
var exemplo = [
  "function <span class='function'>saudacao</span>(<span class='variable'>nome</span>) {<br><span class='keyword'>return</span> <span class='string'>`Olá, ${nome}! Seja bem-vindo(a).`</span>;<br>}<br><br>console.log(<span class='function'>saudacao</span>(<span class='string'>'Maria'</span>));",

  "<span class='keyword'>for</span> (let <span class='variable'>i</span> = <span class='number'>1</span>; <span class='variable'>i</span> <= <span class='number'>5</span>; <span class='variable'>i</span>++) {<br>console.log(<span class='variable'>i</span>);<br>}<br><br><span class='keyword'>while</span> (<span class='variable'>i</span> <= <span class='number'>5</span>) {<br>console.log(<span class='variable'>i</span>);<br><span class='variable'>i</span>++;<br>}<br><br><span class='keyword'>do</span> {<br>console.log(<span class='variable'>i</span>);<br><span class='variable'>i</span>++;<br>} <span class='keyword'>while</span> (<span class='variable'>i</span> <= <span class='number'>5</span>);<br><br><span class='comment'>Resultado: 1, 2, 3, 4, 5</span>",

  "let <span class='variable'>frutas</span> = [<span class='string'>'maçã'</span>, <span class='string'>'banana'</span>, <span class='string'>'laranja'</span>, <span class='string'>'uva'</span>];<br><br>console.log(<span class='variable'>frutas</span>);<br>console.log(<span class='variable'>frutas</span>[<span class='number'>0</span>]);<br>console.log(<span class='variable'>frutas</span>[<span class='number'>2</span>]);",

  "let <span class='variable'>dia</span> = <span class='number'>3</span>;<br><br><span class='keyword'>switch</span> (<span class='variable'>dia</span>) {<br><span class='keyword'>case</span> <span class='number'>1</span>:<br>console.log(<span class='string'>'Domingo'</span>);<br><span class='keyword'>break</span>;<br><span class='keyword'>case</span> <span class='number'>2</span>:<br>console.log(<span class='string'>'Segunda-feira'</span>);<br><span class='keyword'>break</span>;<br><span class='keyword'>case</span> <span class='number'>3</span>:<br>console.log(<span class='string'>'Terça-feira'</span>);<br><span class='keyword'>break</span>;<br><span class='keyword'>default</span>:<br>console.log(<span class='string'>'Dia inválido'</span>);<br>}",

  "let <span class='variable'>a</span> = <span class='number'>10</span>;<br>let <span class='variable'>b</span> = <span class='number'>5</span>;<br><br>console.log(<span class='variable'>a</span> <span class='operator'>+</span> <span class='variable'>b</span>); <span class='comment'>// soma</span><br>console.log(<span class='variable'>a</span> <span class='operator'>-</span> <span class='variable'>b</span>); <span class='comment'>// subtração</span><br>console.log(<span class='variable'>a</span> <span class='operator'>*</span> <span class='variable'>b</span>); <span class='comment'>// multiplicação</span><br>console.log(<span class='variable'>a</span> <span class='operator'>/</span> <span class='variable'>b</span>); <span class='comment'>// divisão</span><br>console.log(<span class='variable'>a</span> <span class='operator'>%</span> <span class='variable'>b</span>); <span class='comment'>// resto</span>"
];
function init() {
    var textoTituloBarra = document.createElement('h1');
    var quebralinha = document.createElement('hr');
    var textoext = document.createElement("p");
    var textoico = document.createElement("p");
    var ancora = document.createElement('a');
    var ico = document.createElement('img')

    ico.src="../midia/youtube.png"
    textoTituloBarra.className = 'titulo'
    ico.className = 'ico'
    BarraMenu.className = 'menu';
    textoext.style.fontSize = '150%';
    ancora.href = 'https://www.youtube.com/@QuenolRoupas';
    ancora.target = '_blank';
    ancora.rel="noopener noreferrer";
    textoico.appendChild(ico);
    textoico.innerHTML += 'Quenol roupas';
    ancora.appendChild(textoico);
    textoTituloBarra.innerText = 'Lar do progamador';
    var ico = document.createElement('img');

    ico.src = '../midia/back.png'
    ico.className = 'voltar'
    ico.addEventListener('click', abrirMenu)
    BarraMenu.appendChild(ico)
    BarraMenu.appendChild(textoTituloBarra);

    
    BarraMenu.appendChild(quebralinha);
    textoext.appendChild(ancora);
    BarraMenu.appendChild(textoext);

    var textoext = document.createElement("p");
    var ancora = document.createElement('a');
    var ico = document.createElement('img');
    var textoico = document.createElement("p");

    ico.src = '../midia/github.png'
    ico.className = 'ico'
    textoext.style.fontSize = '150%';
    ancora.href = 'https://github.com/luiz883la';
    ancora.target = '_blank';
    ancora.rel="noopener noreferrer";
    textoico.appendChild(ico)
    textoico.innerHTML += 'Luiz Otavio';
    ancora.appendChild(textoico)
    textoext.appendChild(ancora)
    BarraMenu.appendChild(textoext)

    for (var c = 0;c < titulo.length ;c++) {
        let opcao = document.createElement('div');
        let textotitulo = document.createElement("p");
        let textocomando = document.createElement("p");
        let textodica = document.createElement("p");
        let acessaropcao = document.createElement('img')

        textotitulo.innerText = titulo[c];
        textocomando.innerText = comando[c];
        textodica.innerText = 'Clique aqui para acessar!';

        textotitulo.className = 'tituloOP';
        textocomando.className = 'comando';
        textodica.className = 'dica';
        opcao.className = 'opt';
        acessaropcao.className = 'acessar';
        
        opcao.style.gap = "20px";
        opcao.id = `${c}`;
        opcao.addEventListener('click', () => entrar(opcao.id));
        acessaropcao.src = '../midia/acessar.png';
        opcao.appendChild(textotitulo);
        opcao.appendChild(textodica);
        opcao.appendChild(acessaropcao)
        corpoOP.appendChild(opcao);
    }
    
}
function entrar(x){
        ident = x;
        localStorage.clear()
        localStorage.setItem('titulo', titulo[ident]);
        localStorage.setItem('comando', comando[ident]);
        localStorage.setItem('explicacao', explicacao[ident]);
        localStorage.setItem('exemplo', exemplo[ident]);
        window.location.href = '../menu_item/pag_suporte.html';
}
function pesquisar(event){
    if (event.key == 'Enter'){
        if(titulo.indexOf(BarraPesquisa.value) !== -1){
            entrar(titulo.indexOf(BarraPesquisa.value))
        }else{
            alert("Funçao nao encontrada")
            BarraPesquisa.value = ''
        }
    }
    if(BarraPesquisa.value.length == 2){
        let texto = BarraPesquisa.value;
        BarraPesquisa.value = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }
    
}
function abrirMenu(){
    if(check){
        corpo.appendChild(BarraMenu)
        check = false
    }
    else{corpo.removeChild(BarraMenu)
        check = true
    }
}
init();
