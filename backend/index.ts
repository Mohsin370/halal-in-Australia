const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Welcome! to Halal food app')
})


//error handling
process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
});


app.listen(PORT, async() => {
    console.log("Server connected at port: ", PORT);

});