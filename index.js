import express from "express";
import dotenv from 'dotenv';
import router from './app/router.js';
import fruits from "./app/fruits.js";
import countries from "./app/countries.js";
dotenv.config();

const port= process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));
app.use((req,res,next)=>{
    res.locals.fruits= fruits;
    res.locals.countries=countries;
    next();
});

app.set('view engine', 'ejs');
app.set('views', './app/views/');


app.use(router);
app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port,()=>{console.log(`Listening on <http://localhost>:${port}/`);});
