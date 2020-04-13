import express = require('express');

const app: express.Application = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello Enrique');
});


app.listen(port, function () {
    console.log(`App is running at port ${port}`)
})