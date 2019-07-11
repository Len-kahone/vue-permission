const express=require("express")
const db=require("./dbHelper")

const app=express()
app.get("/getCate",(req,res)=>{
    db.getCate('SELECT *  FROM category',function(result){
        res.send(result)
    })
})


app.listen("8888",()=>{
    console.log("http://localhost:8888");
})



