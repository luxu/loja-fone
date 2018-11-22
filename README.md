# HTML5

É uma lingugagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântico (tags);
- Estrutura;


* `<h1>` - heading 1 - 6
Usamos ele quando queremos definir títulos

- `a` - Link (a - anchor)
Usamos ela para definir a navegação do usuário. Se você tem um texto que você quer que o usuário clique e ele vá para outro lugar você pode usar essa tag junto com o atributo `href`. Exemplo de um `a` que o usuário é direcionado para o site da collabcode.training:
```
<a href="http://collabcode.training">collabcode.training</a>
```

- `nav` - (Navegação)
Defina dentro dela quais serão opções navegáveis do site, a título de organização pois não impacta no resultado final:

```
<nav><a href=#>Arquivo</a></nav>
```

- `title` - (Título das abas do navegador)
Para ficar mais fácil de identificar qual o conteúdo de certas páginas coloca-se dentro da tag `title` um nome que represente o conteúdo

```
<title>Página de Login | site do Luxu</title>
```
