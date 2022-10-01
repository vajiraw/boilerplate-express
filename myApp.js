let express = require('express');
let app = express();
require('dotenv').config()

const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

//app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));


// challenge 7
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip} `);  
  next();
})

console.log("Hello World")

app.get('/',(req, res) =>{
  res.sendFile(__dirname + "/views/index.html");
  });

app.get('/json',(req,res)=>{  
  let message = "Hello json";
  if(process.env.MESSAGE_STYLE==='uppercase'){    
    message = message.toUpperCase();
    console.log(message);
  }
  res.json({"message": message} );
})


app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});

// echo word back to client fcc 
app.get('/:word/echo',(req,res)=>{
  let {word} = req.params;
  console.log(word);
  res.json({"echo" : word})
});

//Get Query Parameter Input from the Client
app.get('/name',(req,res)=>{
  const first = req.query.first;
  const last  = req.query.last;
  console.log(first,last)
  res.json({
    name: `${first} ${last}`
  });
})


  




































 module.exports = app;
