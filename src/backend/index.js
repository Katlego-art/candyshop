import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/home",(req,res)=>{
    res.render("index");
});







app.listen(port,()=>{
    console.log(`The app is running on port ${port}.`);
})