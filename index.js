const express=require('./.dist/node_modules/express');
const app=express();

app.use(express.static('./'))
app.get('/',(req,res)=>{
    res.sendFile('index');
})
app.listen(3000,()=>{
    console.log('sever at 3000..')
})