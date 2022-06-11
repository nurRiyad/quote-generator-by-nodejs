// Dependency Declaration
const fs = require('fs');

// Scaffolding App
const app = {};

// Declare Function
app.getAllQuote = () => {
    const getQuote = fs.readFileSync(`${__dirname}/Quote.txt`, 'utf8');
    const quoteArray = getQuote.split('\n');
    return quoteArray;
};

module.exports = app;
