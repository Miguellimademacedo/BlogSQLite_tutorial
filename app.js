const express = require("express"); // importa lib do Express
const sqlite3 = require("sqlite3"); // importa lib do sqlite3

const PORT = 2000; //Porta TCP do servidor HTTP da aplicação

const app = express(); //Instância para o uso do Express

const db = new sqlite3.Database("user.db"); // Instância para o uso do Sqlite3 e usa o arquivo 'user.db'
db.serialize(() => {
  // Este método permite enviar comandos SQL em modo 'sequencial'
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT )"
  );
});

// Cria conexão com o banco de dados

const index =
  "<a href='/sobre'> Sobre </a><a href='/info'>Info </a><a href='/home'> Home </a><a href='/cadastro'> Cadastro </a><a href='/login'> Login </a>";
const sobre = 'Vc está na página "Sobre"<br><a href="/">Voltar</a>';
const info = 'Vc está na página "Info"<br><a href="/">Voltar</a>';
const home = 'Vc está na página "Home"<br><a href="/">Voltar</a>';
const login = 'Vc está na página "Login"<br><a href="/">Voltar</a>';
const cadastro = 'Vc está na página "Cadastro"<br><a href="/">Voltar</a>';

/* Método express.get necessita de dois parâmetros 
 Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
 o segundo, são os dados que serão enviados ao cliente (RESULT - 'rest') */

app.get("/", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:2000/
  res.send(index);
});

app.get("/sobre", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:2000/sobre
  res.send(sobre);
});

app.get("/info", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:2000/info
  res.send(info);
});

app.get("/home", (req, res) => {
  //Rota raiz do meu servidor, acesse o browser com o enedereço http://localhost:2000/home
  res.send(home);
});

app.get("/login", (req, res) => {
  //Rota raiz do meu servidor, acesse o browser com o enedereço http://localhost:2000/login
  res.send(login);
});

app.get("/cadastro", (req, res) => {
  //Rota raiz do meu servidor, acesse o browser com o enedereço http://localhost:2000/cadastro
  res.send(cadastro);
});

// app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
