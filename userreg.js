const fs=require('fs');
const express=require('express');
const app=express();
app.use(express.json());

const users=[
    {
        id:1,
        name:"charan",
        designation:"developer"
    },
    {
        id:2,
        name:"karthik",
        designation:"developer"
    }
];
app.get('/',(req,res) => {
    res.send(users);
    const a=fs.writeFileSync('readme.json',users,(err) =>{
        if(err){
        console.log(err);
        }
        else
        {
            console.log(a);
        }
    });
});
app.post('/users',(req,res) => {
 const user={
     id:req.body.id,
     name:req.body.name,
     designation:req.body.designation
 }
 users.push(user);
 res.send(user);
});
app.put('/users/:id',(req,res) =>{
const i=users.find(c =>c.id === parseInt(req.params.id))
if(i){
    i.name=req.body.name
}
else{
    throw err;
}
res.send(i);
});
app.delete('/users/:id',(req,res) =>{
    const j=users.find(c=>c.id===parseInt(req.params.id))
    if(j){
    let m=users.indexOf(j)
    users.splice(m,1);
    res.send(j);
    }
    else throw error;
})
app.listen(2023);
console.log(" listening on port localhost:2023");