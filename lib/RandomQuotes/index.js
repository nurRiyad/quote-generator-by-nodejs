// Decleare dependency
const fs = require('fs');

// App scafolding
const app = {};

// Decleare Function
app.getAllQuote = () => {
    const getQuote = fs.readFileSync(`${__dirname}/Quote.txt`, 'utf8');
    const quoteArray = getQuote.split('\n');
    return quoteArray;
};

module.exports = app;
