const app = require('express')();
const PORT = 8080;

const quotes = require("./db.json");
var index = 0;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`) 
)



app.get('/quotes', (req, res) =>  {

    // var index = Math.floor(Math.random() * (200 - 0) + 0);
    // console.log(index);

    res.status(200).send({
        quotes: quotes[index]
    })
    console.log(index);
    index = index +1;

})


