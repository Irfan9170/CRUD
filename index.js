const express= require('express');
const app= express();
const path=require('path')
const PORT=3000||process.env.PORT;

const bodyParser=require('body-parser')
const methodOverride=require('method-override')
// const { v4: uuid } = require('uuid');

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({extended:true}));

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
    res.send("CRUD Without Database")
})

app.get('/friends',(req,res)=>{
    res.render('friends',{friends});
})
app.get('/friends/add',(req,res)=>{
    res.render('add.ejs')
})
app.post('/friends',(req,res)=>{
    const {id,name,Designation}=req.body;
    
    friends.push({id,name,Designation});
    console.log(friends);
    res.redirect('/friends');
})


app.get('/friends/:id',(req,res)=>{
    const id=req.params.id;
    const friendsInfo=friends.find(f=>f.id==id);
    res.render('info.ejs',{friendsInfo})

})

app.get('/friends/:id/edit',(req,res)=>{
    const id=req.params.id;
    const friendsInfo=friends.find(f=>f.id==id);
    res.render('edit.ejs',{friendsInfo});

})

app.patch('/friends/:id',(req,res)=>{
    
    const {id}=req.params;
    
    const editFriend=req.body;
    // console.log("hi1")
    let friendsInfo=friends.find(f=>f.id==id);
    // console.log("hi2")
    friendsInfo.id=editFriend.id;
    friendsInfo.name=editFriend.name;
    friendsInfo.Designation=editFriend.Designation;
    res.redirect('/friends');

})

app.delete('/friends/:id',(req,res)=>{
    const {id}=req.params;
    friends=friends.filter(i=>i.id!=id);
    res.redirect('/friends')
})

app.listen(PORT,()=>{
    console.log("Server Started");
})
