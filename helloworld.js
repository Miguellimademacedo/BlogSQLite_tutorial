const express = require("express");

const PORT = 2000; //Porta TCP do servidor HTTP da aplicação

const app = express();

/* Método express.get necessita de dois parâmetros 
 Na ARROW FUNCTION, o primeiro são os dados do servidor (REQUISITION - 'req')
 o segundo, são os dados que serão enviados ao cliente (RESULT - 'rest') */

app.get(`/`, (req, res) => {
  res.send("Vc está na página Sobre!");
});

// app.listen() deve ser o último comando da aplicação (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
