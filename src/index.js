const express =  require("express");

const app = express();

const PORT =  process.env.PORT || 3000;


app.get("/",(req,res)=>{
    return res.end("hello world");
});

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`)
})