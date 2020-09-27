/* eslint-disable no-undef */
/* global require */
/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());





app.get('/status', (req, res) => {

    res.send({
        message: 'Hello World!',
    })
   
});

app.listen(process.env.port || 8081);


/* eslint-enable no-unused-vars */
