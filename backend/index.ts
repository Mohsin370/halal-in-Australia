import express from 'express';
require ("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.NODE_ENV)


app.get('/', (req, res) => {
    res.send("Welcome to Halal food app!")
});


app.get('*', (req, res) => {
    res.send("Sorry! This url is not available")
})


//error handling
process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
});


app.listen(PORT, async() => {
    console.log("Server connected at port: ", PORT);

});