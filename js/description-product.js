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
  // if ($heart.classList.contains('-active')){
  //   $heart.classList.remove('-active');
  // } else {
  //   $heart.classList.add('-active');
  // }

  // Testa se a class existe ou não e inverte a resposta
  $heart.classList.toggle("-active");
}
