// Decleare Depenedecny
const randomQuote = require('./lib/RandomQuotes');
const RandomNumber = require('./lib/RandomNumber');

// App scafolding
const app = {};

// App config Declearetion
const config = {
    interval: 3000,
};

// Funciton declear
app.printRandomQuote = () => {
    const quotes = randomQuote.getAllQuote();
    const toalQuotes = quotes.length;
    const quoteNumber = RandomNumber.getRandomNumber(0, toalQuotes - 1);
    const theQuote = quotes[quoteNumber];
    console.log(theQuote);
};
setInterval(() => {
    app.printRandomQuote();
}, config.interval);
