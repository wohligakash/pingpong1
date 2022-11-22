const bodyParser = require('body-parser');
// const { response } = require('express');
// const { response } = require('express');
const express = require('express');
const app = express();
// app.use(bodyParser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req,res) => {
    res.send("Hello ArgoCD!!!")
})

app.get('/ping', (req,res) => {
    res.json({ Response: "Pong" })
})

app.listen(8070,() => {
    console.log("Logs changed successfully!!!")
})