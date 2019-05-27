
const express=require('express');
const app=express();


app.get('/',(req,res)=>{
  var msgObject={
    from:"Titus Moyo",
    senderId:"gyftyghuji87678iuygtfxdftgh",
    text:"Dude are you gonna participate in the Call for Code 2019",
    time:"2 hours ago",
  }
  res.send(msgObject);
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log("Im running now Brian Zhou");
  console.log("PORT",PORT);
});
