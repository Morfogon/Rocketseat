import express, { response } from "express"

const app = express();

app.get("/test", (request, response)=>{
    return response.send("Olá User");
})

app.post("/test-post",(req, res)=>{
    return res.send("Olá Usuario de Post")
})

app.listen(3000,()=> console.log("Server is Running"));