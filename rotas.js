const express = require("express");

const PORT = 2000; //Porta TCP do servidor HTTP da aplicação

const app = express();

const index = "<a href='/sobre'> Sobre </a><a href='/info'>Info </a>";
const sobre = 'Vc está na página "Sobre"<br><a href=*/">Voltar</a>';
const info = 'Vc está na página "Info"<br><a href=*/">Voltar</a>';

/* Método express.get necessita de dois parâmetros 
 Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
 o segundo, são os dados que serão enviados ao cliente (RESULT - 'rest') */

app.get("/", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:2000/
  res.send(index);
});

app.get(`/sobre`, (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:2000/sobre
  res.send(sobre);
});

app.get("/info", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:2000/info
  res.send(info);
});

// app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
