const express=require('./.dist/node_modules/express');
const app=express();

app.use(express.static('./'))
app.get('/',(req,res)=>{
    //res.sendFile('./frontend/index.html');
    res.redirect('/frontend/frontend.html')
})
app.listen(3000,()=>{
    console.log('sever at 3000..')
})