const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "35.192.60.146",
    user: "root",
    password: "djemals",
    port:"3306",
    database:"termProject"
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

app.get("/checkmembernum",(req,res)=>{
  console.log(req.body)
  var sql = "select * from MemberNumList;";
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

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
  data = 
    {
      MemberNum : 125,
      Id: req.body.userId,
      Pw: req.body.userPw,
      Name: req.body.userName,
      Email: req.body.userEmail,
      Phone: req.body.userPhone,
      Position: req.body.userJob,
      isAdminister: "0",
      borrowCount:0
  }
  
  var sql = "insert into Members values(\""
  +data.Id + "\",\""
  +data.Pw + "\",\""
  +data.Name+ "\",\""
  +data.Email+ "\",\""
  +data.Phone+ "\",\""
  +data.Position+ "\",\""
  +data.isAdminister + "\",\""
  +data.MemberNum + "\",\""
  +data.borrowCount+"\");";
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
  var sql2 = "update MemberNumList set MemberNum=MemberNum+1;"

  connection.query(sql2,function(err,result){
    if(err) throw err;
    res.send(result);
  })
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


app.post("/updateclient",(req,res)=>{
  data = 
    {
      MemberNum : 145,
      Id: "test",
      Pw: "1234",
      Name: "GinSeongOne",
      Email: "bnm961126@gmail.com",
      Phone: "01052166056",
      Position: 1,
      isAdminister: "2",
      borrowCount:0
    }

  var sql = "update Members set Id = \""
  +data.Id + "\",Pw =\""
  +data.Pw + "\",Name =\""
  +data.Name+ "\",Email =\""
  +data.Email+ "\",Phone =\""
  +data.Phone+ "\",Position =\""
  +data.Position+ "\",isAdminister =\""
  +data.isAdminister+ "\",borrowCount =\""
  +data.borrowCount+"\" where MemberNum="+data.MemberNum+";";
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

app.post("/insertbook",(req,res)=>{
  data = 
    { 
      BookNum : 12,
      ISBN : "a", 
      Title : "a",
      Author : "a",
      publisher : "a",
      Borrowable : "a"
    }
  var sql = "insert into Book values(\""
  +data.ISBN + "\",\""
  +data.Title+ "\",\""
  +data.Author+ "\",\""
  +data.publisher+ "\",\""
  +data.Borrowable + "\",\""
  +data.BookNum+"\");";

  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

app.post("/updatebook",(req,res)=>{
  data = 
    { 
      BookNum : 12,
      ISBN : "a", 
      Title : "a",
      Author : "a",
      publisher : "a",
      Borrowable : "a"
    }
  var sql = "update Book set ISBN =\""
  +data.ISBN + "\",Title=\""
  +data.Title+ "\",Author=\""
  +data.Author+ "\",publisher=\""
  +data.publisher+ "\",Borrowable=\""
  +data.Borrowable+"\" where BookNum= "+data.BookNum+"";

  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

app.post("/updateclientinfo",(req,res)=>{
  console.log(req.body)
  var sql = "desc";
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
  res.sendStatus(200)
})

app.post("/dropclientinfo",(req,res)=>{
  data = {
    MemberNum : 12345
  }
  var sql = "DELETE FROM Members WHERE MemberNum = '"+data.MemberNum+"'"
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})
app.post("/dropbookinfo",(req,res)=>{
data = {
  BookNum : 12
}
  var sql = "DELETE FROM Book WHERE BookNum = "+data.BookNum+""
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

app.post("/reservationbook",(req,res)=>{
  data = {
    BookNum : 12,
    MemberNum : 12345
  }
    var sql = "insert into Reservationstatus values(1,"+data.BookNum+","+data.MemberNum+");"
    connection.query(sql,function(err,result){
      if(err) throw err;
      res.send(result);
    })
  })

  app.post("/cancelreservationbook",(req,res)=>{
    data = {
      BookNum : 12,
      MemberNum : 12345
    }
      var sql = "delete from Reservationstatus where MemberNum="+data.MemberNum+" and BookNum="+data.BookNum+";"
      connection.query(sql,function(err,result){
        if(err) throw err;
        res.send(result);
      })
    })

app.get("/findreservationbook",(req,res)=>{
      data = {
        MemberNum : 12345
      }
      var sql = "select * from Reservationstatus where MemberNum="+data.MemberNum+";"
      connection.query(sql,function(err,result){
        if(err) throw err;
        res.send(result);
      })
})


//특정 책에 몇명있는지 검색
app.get("/reservationcount",(req,res)=>{
  data = {
    BookNum : 12
  }
  var sql = "select count(*) from Reservationstatus where BookNum="+data.BookNum+";"
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})


app.get("/findborrowbook",(req,res)=>{
  data = {
    MemberNum : 12345
  }
  var sql = "select * from BorrowedBook where MemberNum="+data.MemberNum+";"
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

//도서대출쿼리
app.post("/borrowbook",(req,res)=>{
  data = {
    MemberNum : 12345,
    BorrowDate : "2019-12-16",
    DueDate : "2019-12-23", 
    BookNum : 12,
    BorrowedNum : 1,
    returnRequest : 0 
  }
  var sql = "insert into Borrowedbook values("+data.MemberNum+",\""+data.BorrowDate+"\",\""+data.DueDate+"\","+data.BookNum+","+data.BorrowedNum+","+data.returnRequest+");"
  connection.query(sql,function(err,result){
    if(err) throw err;
  })
  var sql2 = "update Book set borrowable=0 where bookNum="+data.BookNum+";"
  connection.query(sql2,function(err,result){
    if(err) throw err;
  })
  var sql3 = "update members set borrowCount=borrowCount+1 where MemberNum="+data.MemberNum+";"
  connection.query(sql3,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

//대출가능날짜 검색
app.get("/finddate",(req,res)=>{
  data = {
    BookNum : 12
  }
  var sql = "select duedate from borrwoedbook where BookNum="+data.BookNum+";"
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

//회원의 대출 내역 관리
app.get("/manageclient",(req,res)=>{
  var sql = "select * from Members order by borrowCount desc limit 10;"
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

// 반납 요청 및 승인
app.post("/approvebook",(req,res)=>{
  data = {
    MemberNum : 12345,
    BookNum : 12
  }
  var sql = "update borrowedbook set returnRequest=1 where MemberNum="+data.MemberNum+" and BookNum="+data.BookNum+";"
  connection.query(sql,function(err,result){
    if(err) throw err;
  })
  var sql2 = "delete from borrowedbook where MemberNum="+data.MemberNum+" and BookNum="+data.BookNum+";"
  connection.query(sql2,function(err,result){
    if(err) throw err;
  })
  var sql3 = "update book set Borrowable=1 where BookNum="+data.BookNum+";"
  connection.query(sql3,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

//도서검색ISBN
app.get("/findbookisbn",(req,res)=>{
  data={
    ISBN : "a"
  }
  var sql = "SELECT * FROM book WHERE ISBN='"+data.ISBN+"'";
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})

//도서검색NAME
app.get("/findbookname",(req,res)=>{
  data={
    input : "a"
  }
  var sql = "SELECT * FROM book WHERE Title like '%"+data.input+"%'";
  connection.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  })
})



app.listen(4000, function() {
  console.log("listen on 4000");
});
