const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('../webpack.config.js');
const models = require('./models');

const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const MONGO_URI = 'mongodb+srv://bianca:v90pMNqJhOVBTx5U@cloud-one-mobi-kpmey.mongodb.net/test?retryWrites=true&w=majority';
if (!MONGO_URI) {
    throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
