import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) =>{
  res.render("index.ejs");
});
app.get("/play", (req, res) =>{
  res.render("indexGame.ejs");
});
app.get("/rules", (req, res) =>{
  res.render("rules.ejs");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
