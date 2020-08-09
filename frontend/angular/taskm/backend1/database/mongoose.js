const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://ashish221306:ashishmongo@cluster0-zfcr6.mongodb.net/shop_db?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useFindAndModify:false
}).then(()=>{
    console.log('database connected')
}).catch((error)=>{
    console.log(error)
})

module.exports=mongoose