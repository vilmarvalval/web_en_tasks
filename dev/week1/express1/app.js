const express = require('express');
const app = express();
const port = 3001;

//Root endpoint callback
const handleRootRequest = (req, res) => {
    res.send('Hello World!');
};

//Server listening callback
const handleServerListening = () => {
    console.log(`Example app listening on port ${port}`);
};

//register routes with callback
app.get('/', handleRootRequest);
//Start server
app.listen(port, handleServerListening);