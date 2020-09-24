const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser')
const app = express();
const port = 3000;
var events = require('./routes/events.js');

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/Kulture', events);


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
// exports.app = functions.https.onRequest(app);