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


# CSS

É uma linguagem de estilo, isso quer dizer que ela tem as seguintes responsabilidades:

-  Visual

- `inherit` - (Propriedade do CSS que herda do pai os estilos do mesmo, geralmente na tag <a> onde é utilizado pois geralmente a propriedade <link> qdo é cor utiliza o padrão do navegador, daí herdando vem a cor do pai)

- `float` - Novo contexto e nunca esconde o conteúdo e o width/height são definidos pelo conteúdo

- `overflow` - Recalcula o contexto. Quando usamos dentro do pai dois filhos com float o pai some pois o float cria um novo contexto, mas o pai não sabe disso e acaba sumindo, para ajustar isso usamos `overflow` que recalcula para o pai e mostra o mesmo.

- `margin` - Espaçamento do elemento em relação a outros elementos. (Respiro externo)

- `padding` - Espaçamento dentro do próprio elemento. (Respiro interno)
