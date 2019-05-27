
const express=require('express');
const app=express();


app.get('/',(req,res)=>{
  res.send({hi:'there..l love you all'});
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log("Im running now Brian Zhou");
  console.log("PORT",PORT);
});
