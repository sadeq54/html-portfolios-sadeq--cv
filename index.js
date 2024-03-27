import { render } from "ejs";
import express from "express";

import bodyParser from "body-parser";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req,res)=>{
  res.render("index.ejs")

});

app.get("/about", (req,res)=>{
  res.render("about.ejs")
});

app.get("/contact", (req,res)=>{
  res.render("contact.ejs")
});

app.get("/secret", (req,res)=>{
  const d = new Date();
  const year = d.getFullYear();
  
  res.render("secret.ejs", { year})
});
app.post("/check", (req,res)=>{
 
 const password=  req.body.password;

 if (password === "CR7")
 {
  
  res.redirect("https://en.wikipedia.org/wiki/Cristiano_Ronaldo");
 } 
 else{
    
     res.render("secret.ejs",{message : "Please try again ",
        year :  new Date().getFullYear()
    } );   
 }
});


app.get("/achievements", (req,res)=>{
  res.render("achievements.ejs")
});
app.get("/portfolio", (req,res)=>{
  res.render("portfolio.ejs")
});
app.get("/services", (req,res)=>{
  res.render("sevices.ejs")
});

app.listen(port,()=>{
   console.log(`lestining in port : ${port}`)
});
