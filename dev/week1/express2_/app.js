import express from 'express';
const app = express();

import { getRoot } from './controllers';//Import getRoot

app.get('/',getRoot)//getRoot as callback

const port = 3001;

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
})