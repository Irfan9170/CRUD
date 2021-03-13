const express= require('express');
const app= express();
const path=require('path')
const PORT=3000||process.env.PORT;


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

app.listen(PORT,()=>{
    console.log("Server Started");
})
