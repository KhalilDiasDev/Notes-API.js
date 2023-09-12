# Notes-API.js
Programa desenvolvido na linguagem JavaScript e Node que consiste no desenvolvimento de uma API capaz de criar, listar, atualizar e apagar as notas em uma banco de dados.
Descrição

Esta é uma API desenvolvida para a aplicação de Notas, onde contem métodos
como GET, PUT, POST e DEL. Todas as notas criadas contem: Título, 
nota(conteúdo), data de crianção e data de atualização.

Como Configurar e Instalar

  Primeiramente , é nescessário ter uma estrutura de banco de dados funcional em 
sua máquina(Ex:MongoDB,MySQL,sql Lite etc.).Na API, o banco de dados usado foi o 
MySQL,no sistema operacional Windows 1o executado pelo XAMPP Control Painel. 
  A API também foi desenvolvida em Node.Js na linguagem JavaScript, então é necessário fazer a 
instalação do node que pode ser feito pelo próprio site e o Insominia para realizar os teste 
dos métodos implementados.

Instalação de Alguns Frameworks
  Antes de executar a API é necessário fazer a instalação pelo terminal das seguintes ferramentas:

    Express: 
    yarn add express

    Sequelize cli
    yarn add sequelize-cli -D 

    Sequelize
    yarn add sequelize

    Nodemon
    yarn add nodemon

    MySQL 2 
    yarn add mysql2

Modo de Usar
  Para inicializar a API basta executar o comando "yarn dev" em seu terminal.Para realizar os 
  testes, basta colocar a ULR: Http://localhost:3030 (o método desejado). Segue as rotas usadas:

    POST : (ULR)/note-create (Criar um nota)
    PUT : (ULR)/note-update/:id (Atualizar uma Nota por seu id)
    GET : (ULR)/note-list (resgatar Todas as notas criadas)
    GET : (ULR)/note-getid/:id (para resgatar uma nota específica)
    DEL : (ULR)/note-delete/:id


  É comum que durante o desenvolvivento ocorra erros na sintaxe do programa,como estamos na 
  primeira versão pedidos paciencia e ajuda de quem estiver disposto a colaborar.
    Espero ter ajudado!

    
