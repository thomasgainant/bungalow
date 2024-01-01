import express from 'express';
import cors from 'cors';

import { crawler } from './crawler'

import { Request } from './Request';

console.log("Launching crawler...");
var crawlerInstance = crawler();
console.log("...done.");

console.log("Launching Requests pool...");
var request:Request[] = [];
var requestsRoutine = setInterval(async () => {
    if(request.length > 0){
        await request[0].perform();
    }
}, 1000);
console.log("...done.");

const app = express();
app.use(cors());

const port = 1234;

app.get('/state', (req:any, res:any) => {
    let result = {
        subs: []
    };
    res.json(result);
})

app.listen(port, () => {
  console.log(`Crawler app listening on port ${port}`)
})