// Scaffolding App
const app = {};

// Declare Random Function
app.getRandomNumber = (minimum, maximum) => {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = app;
