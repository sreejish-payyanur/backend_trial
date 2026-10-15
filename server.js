import express from 'express'
import cors from 'cors'

const app=express()
const port=6070

app.use(express.json())
app.use(cors())

const users=[]
app.post('/',(req,res)=> {
    let savedata=req.body
    users.push(savedata)
    res.json({"msg":"uploaded"})
})
app.get('/',(req,res)=>{
    res.json(users)
})
app.listen(port,()=> console.log(`http://localhost:${port}`))