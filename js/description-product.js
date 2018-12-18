/*
1 - Ter a janela (browser) na mão
2 - Ter O HTML na mão
3 - Pegar o coração
4 - Pegar clique no coração
5 - No momento que o usuário clicar, nós queremos mostrar um texto AE
*/

const $heart = window.document.querySelector(".-heart");
$heart.addEventListener("click", handleClick);
function handleClick() {
  console.log('ae');
}

// Primeiro Desafio
const $carrinho = window.document.querySelector(".-second");
console.log($carrinho);

// Segundo Desafio
$carrinho.addEventListener("click", handleClick);
function handleClick() {
  console.log('carrinho');
}

// Terceiro Desafio
