// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

// let port = 9000;
// const accessHistoryItems = {};
// app.post('/api', function(req, res) {
//     console.log('receiving data ...');
//     console.log('body is ',req.body);
//     accessHistoryItems[req.body.time] = req.body.content;
//     res.send(req.body);
// });

// app.get('/history/:id', (req, res)=>{
//   console.log(req.params.id);
//   res.send(accessHistoryItems[req.params.id])
// })
// app.get('/', (req, res)=>res.send("It's Running Hoo!"))
// // start the server
// app.listen(port);
// console.log('Server started! At http://localhost:' + port);

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");

//use express static folder
app.use(express.static("./public"));
// body-parser middleware use
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

// Database connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "something"
});


let databaseName = "test"; 

let createQuery = `CREATE DATABASE ${databaseName}`; 

// use the query to create a Database. 
db.query(createQuery, (err) => { 
    if(err) throw err; 
    console.log("Database Created Successfully !"); 
    let useQuery = `USE ${databaseName}`; 
    db.query(useQuery, (error) => { 
        if(error) throw error; 
        console.log(`Using Database ${databaseName}`); 
    }) 
}); 

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});
app.post("/post", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    console.log(req.file.filename);
    var imgsrc = `http://127.0.0.1:${PORT}/images/` + req.file.filename;
    var insertData = "INSERT INTO users_file(file_src) VALUES(?)";
    db.query(insertData, [imgsrc], (err, result) => {
      if (err) throw err;
      console.log("file uploaded");
    });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
