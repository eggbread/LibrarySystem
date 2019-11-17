const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});
const bodyparser = require("body-parser")
// app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/signin",(req,res)=>{
    console.log(req.body)
    // console.log(req.body.userId,req.body.userPw)
    res.send(req.body.userId)
})
app.get("/list", (req, res) => {
  console.log(req.query);
  const data = [
    {
      title: "Introduce of DataBase",
      author: "Gyeongmin",
      company: "CNU",
      ISBN: "978-89-5653-008-6.",
      use:false
    },
    {
      title: "Introduce of Web",
      author: "Gyeongmin",
      company: "CNU",
      ISBN: "978-89-5653-008-6.",
      use:true
    }
  ];
  res.send(data);
});

app.listen(4000, function() {
  console.log("listen on 4000");
});
