const express=require('express')
var app=express()

port=process.argv[2]

app.get('/',(req,res)=>{
  res.send('passed')
})

app.listen(parseInt(port),()=>console.log('listening on '+port))
