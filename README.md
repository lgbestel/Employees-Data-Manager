
# Boas vindas ao repositório do Teste Mão na Massa!

**Overview**
- Projeto realizado com Docker, Node, mySQL, Typescript, Express;
- RESTful API;
- Metodologia em camadas (model, service, controller e rotas);
- POO;


**Como rodar o projeto em sua máquina:**
 - Clone o repositório;
 - Na raiz, rode em seu terminal o comando 'docker-compose up -d';
 - Abra um terminal anexado ao container Node recém criado;
 - Rode o comando 'npm install' (para instalar as dependencias);
 - Rode o comando 'npm run create:db' (para criar e popular o banco de dados);
 - Rode o comando 'npm run dev' (para executar o server);


**Requisitos:**


**3.1 – Inserir todos os funcionários, na mesma ordem e informações da tabela acima.**
- Serão inseridos ao rodar o comando 'npm run create:db', durante a iniciação do projeto;

**3.2 – Remover o funcionário “João” da lista.**
- No seu REST client, acesse a rota `http://localhost:3098/:id`;
- Substitua o ':id' pelo id do funcionáio em questão '2' e envie uma requsição DELETE; 

**3.3 – Imprimir todos os funcionários com todas suas informações, sendo que:**
• informação de data deve ser exibido no formato dd/mm/aaaa;
• informação de valor numérico deve ser exibida no formatado com separador de milhar como ponto e decimal como vírgula.
- Acesse a rota `http://localhost:3098/employees`, método GET;

**3.4 – Os funcionários receberam 10% de aumento de salário, atualizar a lista de funcionários com novo valor.**
- Acesse a rota `http://localhost:3098/employees/payraise/:raiseIndex`, método PUT;
- Substitua o ':raiseIndex' pelo percentual de aumento (0.1 neste exemplo), método PUT;

**3.5 – Agrupar os funcionários por função em um MAP, sendo a chave a “função” e o valor a “lista de funcionários”.**
- Acesse a rota `http://localhost:3098/employees/groupbyrole`, método GET;

**3.6 – Imprimir os funcionários, agrupados por função.**
- Acesse a rota `http://localhost:3098/employees/groupbyrole`, método GET;

**3.8 – Imprimir os funcionários que fazem aniversário no mês 10 e 12.**
- Acesse a rota `http://localhost:3098/employees/birthmonth`;
- Envie um body no formato abaixo:
{
  "month1": _numero entre 1 e 12_,
  "month2": _opcional numero entre 1 e 12_
}

**3.9 – Imprimir o funcionário com a maior idade, exibir os atributos: nome e idade.**
- Acesse a rota `http://localhost:3098/employees/eldest`, método GET;

**3.10 – Imprimir a lista de funcionários por ordem alfabética.**
- Acesse a rota `http://localhost:3098/employees/sorted`, método GET;

**3.11 – Imprimir o total dos salários dos funcionários.**
- Acesse a rota `http://localhost:3098/employees/payroll`, método GET;

**3.12 – Imprimir quantos salários mínimos ganha cada funcionário, considerando que o salário mínimo é R$1212.00.**
- Acesse a rota `http://localhost:3098/employees/wages`, método GET;
- É possível passar um novo valor de salario mínimo, caso deseje. Envie um body no formato:
{ "minimumWage": _numero_}

**Adicionais**

  Para criar um novo funcionário na database:
 - Acesse a rota `http://localhost:3098/employees`, método POST;
 - Enviar um body no formato abaixo:
 {
  "nome": _string_,
  "dataNascimento": _D-M-AAAA_,
  "salario": _numero_,
  "funcaoId": _numero_
 }

 Para procurar um funcionário pelo nome (ou parte dele):
 - Acesse a rota `http://localhost:3098/employees`, método GET;
 - Passe a string a ser buscada via query `name` (exemplo: `http://localhost:3098/employees?name=He`)

 **Implementações em andamento**
 - Cobertura de testes utilizando mocha, chai e sinon;
 - Desenvolver as camadas e o CRUD para a tabela `roles`;
