## UI Easy Test

Repositório com uma configuração inicial e um pequeno exemplo para demonstrar a utilização de StoryShoots e o Enzyme a partir de uma aplicação criada com `create-react-app`. O que foi utilizado:

* [Storybook](https://storybook.js.org/)
* [StoryShoots](https://storybook.js.org/testing/structural-testing/)
* Storybook [specs addon](https://github.com/mthuret/storybook-addon-specifications)
* [Jest](https://github.com/facebook/jest)
* [Enzyme](https://github.com/airbnb/enzyme)
* [Create React App](https://github.com/facebook/create-react-app)

### Testes

* Testes com Enzyme: Testes destinados para observar o comportamento dos componentes a partir de algum evento externo. Foi criado dois testes para testar a interação de cliques em um botão
* Teste com StoryShoots: Testes destinados para que seja possível identificar alterações visuais de uma maneira fácil. Testes com alteraçõa de estilo e algum texto do botão.

### O que pode ser melhorado

* A estrutura das pastas deve ser melhorada para que seja possível criar mais testes separados por tipo.
* Escrever mais componentes para testes com maior interação.
* Realizar testes mais robustos.