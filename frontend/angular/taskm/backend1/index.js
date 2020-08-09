const express=require('express');
const app=express();
const mongoose=require('./database/mongoose');
const List=require('./database/models/list');
const Task=require('./database/models/task');
app.use(express.json());
const port=process.env.PORT || 3000;
const cors=require('cors');
app.use(cors());
/*
CORS -cross origin request sequrity
localhost:3000 backend
localhost:4200 frontend

app.use((req,res,next)=>{
    res.header('Access-Controll-Allow-Origin','*');
    res.header('Access-Controll-Allow-Methods','GET,POST,PUT,DELETE,PATCH,HEAD,OPTIONS');
    res.header('Access-Controll-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
})
*/

app.get('/',(req,res)=>{
    res.send('working');
})

/*task url...................................................*/

app.get('/lists',(req,res)=>{
    List.find({}).then((lists)=>{
        res.send(lists);
        console.log(lists)
    }).catch((error)=>{
        console.log(error);
    })
})

app.post('/lists',(req,res)=>{
    (new List({'title':req.body.title}))
    .save()
    .then((list)=>res.send(list))
    .catch((error)=>console.log(error))
})

app.get('/lists/:listId',(req,res)=>{
    List.find({_id:req.params.listId})
    .then((list)=>res.send(list))
    .catch((error)=>console.log(error))
    
})

app.patch('/lists/:listId',(req,res)=>{
    List.findOneAndUpdate({_id:req.params.listId},{$set:req.body})
    .then((list)=>res.send(list))
    .catch((error)=>console.log(error))
})

app.delete('/lists/:listId',(req,res)=>{
    const deleteTasks=(list)=>{
        Task.deleteMany({_listId:list._id})
        .then(()=>list)
        .catch((error)=>console.log(error))
    }
    const list=List.findByIdAndDelete(req.params.listId)
    .then((list)=>res.send(deleteTasks(list)))
    .catch((error)=>console.log(error));
      res.status(200).send(list);
})
/*task url*/
/*https://locahost/3000/lists/:listId/tasks/:taskId.....................*/

app.get('/lists/:listId/tasks',(req,res)=>{
    Task.find({_listId:req.params.listId})
    .then((tasks)=>res.send(tasks))
    .catch((error)=>console.log(error))
})

app.post('/lists/:listId/tasks',(req,res)=>{
  (new Task({'title':req.body.title,'_listId':req.params.listId}))
  .save()
  .then((task)=>res.send(task))
  .catch((error)=>console.log(error))
})

app.get('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findOne({_listId:req.params.listId,_id:req.params.taskId})
    .then((task)=>res.send(task))
    .catch((error)=>console.log(error))
    
})

app.patch('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findOneAndUpdate({_listId:req.params.listId,_id:req.params.taskId},{$set:req.body})
    .then((task)=>res.send(task))
    .catch((error)=>console.log(error))
    
})

app.delete('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findOneAndDelete({_listId:req.params.listId,_id:req.params.taskId})
    .then((task)=>res.send(task))
    .catch((error)=>console.log(error))
    
})

app.listen(port,()=>{
    console.log('server is listening on port '+port+'.......')
})