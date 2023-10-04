
## Resumo do projeto

Projeto de API REST para prática de JavaScript e testes unitários.
Livraria com sistema de cadastro e manejo de livros, autores, editoras e usuários.


#### Para saber mais: Testes de Caixa Branca vs Caixa Preta

Os testes de caixa branca, também conhecidos como testes estruturais, de código 
ou unitários, são uma abordagem de teste de software em que o testador tem conhecimento 
total da estrutura interna, lógica e implementação do código-fonte que está sendo testado. 
Eles são realizados com base na análise do código fonte.

Já os testes de caixa preta, também conhecidos como testes de integração e retorno, possuem 
uma abordagem de teste de software em que os testadores examinam o comportamento externo de 
um sistema sem ter conhecimento sobre sua estrutura interna ou código-fonte (não possui acesso 
ao código da aplicação). 


Tipos de Testes de Caixa Branca

Teste de Cobertura de Código (Code Coverage): Mede o percentual de código-fonte que está sendo 
coberto por testes. Exemplo: Identificar partes do código não testadas em um script que gera relatórios.

Teste de Caminho: Analisa todas as possíveis sequências de caminhos no código, garantindo que todos os 
fluxos lógicos tenham sido testados. Exemplo: Testar diferentes caminhos de uma função que calcula o preço 
total de uma compra com desconto.

Teste de Fluxo de Controle: Garante que todas as declarações e decisões lógicas do código tenham sido executadas. 
Exemplo: Verificar se todas as ramificações de um código de verificação de autenticação são testadas.

Teste de Unidade: Testa componentes individuais (funções, métodos, classes) do código para garantir que eles funcionem 
corretamente. Exemplo: Verificar se um método de validação de CPF está funcionando corretamente.


Tipos de Testes de Caixa Preta

Teste Funcional: Verifica se o sistema funciona de acordo com as especificações e requisitos. 
Exemplo: Verificar se ao “Autenticar” em uma api de login está sendo retornado o accessToken.

Teste de Usabilidade: Avalia a facilidade de uso e a experiência do usuário do sistema. 
Exemplo: Avaliar se um aplicativo bancário possui uma interface intuitiva e fácil de usar para os clientes.

Teste de Integração: Testa a interação entre componentes do sistema para garantir que trabalhem bem juntos. 
Exemplo: Testar se um aplicativo de redes sociais integra adequadamente recursos como publicar um novo post, 
adicionar comentários e curtir postagens.

Teste de Aceitação: Garante que o sistema atende aos critérios de aceitação definidos pelo cliente. 
Exemplo: Confirmar se um aplicativo de delivery atende às expectativas do cliente, como entregar os itens corretos 
dentro do prazo.