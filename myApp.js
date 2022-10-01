let express = require('express');
let app = express();
require('dotenv').config()

//app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));





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


  




































 module.exports = app;
