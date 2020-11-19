
const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/products');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
    sequelize.authenticate();
    console.log('Successfully connected to the database');
} catch (error) {
    console.log('Unable to connect to the database:', error);
}

app.get('/products', (request, response) => {
    sequelize.query("SELECT * FROM table_products", { type: QueryTypes.SELECT })
        .then(res => {
            console.log(res)
            response.json({ res })
        })
        .catch(error => {
            console.log(error)
        })
})

app.listen(3000);

// app.get('/', (req, res) => res.sendFile(path.resolve('./kmestore/public/kmeindex.html')));