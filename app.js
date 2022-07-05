const express = require('express');
let jsonData = require('./pokedex.json');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('<h1>Welcome to PokeFight!</h1>')
});


app.get('/pokemon', (req, res) => {
  res.send(jsonData)
});

app.get("/pokemon/:id", (req, res) => {
  res.send(jsonData.find(e => e.id == req.params.id))
});

/* (Optional) Create a GET route on /pokemon/:id/:info (<name>|<type>|<base>) 
which gives only one pokemon from the JSON thanks to its id and 
retrieve only one information (name or type or base) to send back to the client */

// app.get("/pokemon/:id/:base", (req, res) => {
//   res.send(jsonData.find(e => e.id == req.params.id.base))
// });


/* (Optional): Use the MVC pattern; your routes should be managed by a router; 
which in return triggers a controller that will access the correct Pokemon resources */


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});