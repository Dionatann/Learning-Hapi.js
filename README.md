Learning-Hapi.js
Este projeto é um exemplo simples de como construir uma landing page usando o Hapi.js como framework de backend, manipulando o DOM com Cheerio.js e estilizando a página com Tailwind CSS. A aplicação demonstra a criação de uma página simples com rotas, templates, e manipulação de objetos do DOM.

Tecnologias Usadas
Hapi.js: Um framework de servidor flexível e minimalista para Node.js.
Cheerio.js: Uma biblioteca rápida, flexível e leve para manipulação do DOM, inspirada no jQuery.
Tailwind CSS: Um framework CSS altamente customizável que utiliza classes utilitárias para estilização.
Estrutura de Diretórios
A organização do projeto segue uma estrutura simples e flexível:

bash
Copiar código
./my_project
  ├── routes/
  │   └── all_routes.js      # Arquivo contendo todas as rotas do projeto
  ├── views/
  │   └── all_views.html      # Templates HTML
  ├── server.js               # Servidor principal que inicializa o Hapi.js
  ├── package.json            # Configurações de dependências e scripts
  ├── package-lock.json       # Versões fixas das dependências
  └── .gitignore              # Arquivos e diretórios a serem ignorados pelo Git
Detalhes dos Arquivos
routes/all_routes.js: Define todas as rotas da aplicação. Cada rota aponta para um template HTML renderizado com dados dinâmicos, se necessário.

views/all_views.html: Arquivo onde estão os templates HTML para a renderização no cliente. Neste projeto, usamos o handlebars como motor de template.

server.js: O arquivo de entrada da aplicação, onde o servidor Hapi.js é configurado e inicializado, incluindo a definição das rotas e o registro de plugins, como a engine de visualização.

Pré-requisitos
Para executar este projeto, você precisará ter o Node.js e npm instalados em sua máquina.

Node.js (versão 14.x ou superior)
npm (geralmente já vem com o Node.js)
Instalação
Siga estas etapas para rodar o projeto localmente:

Clone o repositório para o seu ambiente local:

bash
Copiar código
git clone https://github.com/seu-usuario/Learning-Hapi.js.git
Navegue até o diretório do projeto:

bash
Copiar código
cd my_project
Instale as dependências necessárias:

bash
Copiar código
npm install
Executando o Servidor
Após a instalação, execute o servidor Hapi.js com o comando abaixo:

bash
Copiar código
node server.js
Agora o servidor estará rodando em http://localhost:3000.

Manipulação do DOM com Cheerio.js
Para manipular os elementos da página e fazer modificações dinâmicas no conteúdo do HTML, o Cheerio.js foi usado. Ele permite selecionar e modificar elementos HTML de forma rápida e eficiente.

Exemplo básico de manipulação de um título HTML em server.js:
