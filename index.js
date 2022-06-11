// Dependency Declaration
const randomQuote = require('./lib/RandomQuotes');
const RandomNumber = require('./lib/RandomNumber');

// Scaffolding App
const app = {};

// Scaffolding App
const config = {
    interval: 3000,
};

// Funciton Declare
app.printRandomQuote = () => {
    const quotes = randomQuote.getAllQuote();
    const toalQuotes = quotes.length;
    const quoteNumber = RandomNumber.getRandomNumber(0, toalQuotes - 1);
    const theQuote = quotes[quoteNumber];
    console.log(theQuote);
};

// Run printRandomQuote function in 3s interval
setInterval(() => {
    app.printRandomQuote();
}, config.interval);
