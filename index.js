import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL= "https://icanhazdadjoke.com/slack";

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs",{content:"Click the above button for DadJokes☝️"})
});

app.get("/jokes-gen", async(req, res) => {

    try{
        const result = await axios.get(API_URL);
        res.render("index.ejs", { content: result.data.attachments[0].text});
    }catch(error){
        console.error(result.error);
    }
   
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});