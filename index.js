const express= require('express');
const app= express();
const path=require('path')


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

friends = [
    {
        id:1,
        name:"Saif",
        Designation:"Developer"
    },
    {
        id:2,
        name:"Aditya",
        Designation:"Developer"
    }
   
]

app.get('/',(req,res)=>{
    res.render('friends.ejs',{friends});
})

app.get('/friends/add',(req,res)=>{
    res.render('add.ejs');
})

app.listen(3000,()=>{
    console.log("Server Started");
})
