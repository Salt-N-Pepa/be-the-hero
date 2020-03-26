const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * Tipos de parâmetros: 
 * 
 * Query: Parâmetros nomeados enciados na rota após "?" (filtros paginação)
 * Route: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */


app.listen(3333);