const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "35.192.60.146",
    user: "root",
    password: "djemals",
    port:"3306",
    database:"test"
});
connection.connect()
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
    const userId = req.body.userId
    const userPw = req.body.userPw
    //Sql
    if(userId==='a'&&userPw==='a'){
      res.send(userId)
    }else{
      res.send(false)
    }
})

app.post('/signup',(req,res)=>{
  const userId = req.body.userId
  const userPw = req.body.userPw
  const userName = req.body.userName
  const userEmail = req.body.userEmail
  const userPhone = req.body.userPhone
  const userJob = req.body.userJob
  console.log(req.body)
})

app.post('/mypage',(req,res)=>{
  const data = [
    {
      title: "Introduce of DataBase",
      author: "Gyeongmin",
      company: "CNU",
      ISBN: "978-89-5653-008-6.",
      startDate: "2019-12-16",
      endDate:"2019-12-23"
    },
    {
      title: "Introduce of Web",
      author: "Gyeongmin",
      company: "CNU",
      ISBN: "978-89-5653-008-6.",
      startDate: "2019-12-17",
      endDate:"2019-12-24"
    }
  ];
  res.send({userName:"Hi",listData:data})
})

app.post('/admin',(req,res)=>{
})
app.post('/mypage/fix',(req,res)=>{
  console.log(req.body)
})

app.get("/list", (req, res) => {
  var cnt=0
  connection.query("select * from tb1",(err,rows)=>{
    if(!err){
      console.log(rows)
    }
  })
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
