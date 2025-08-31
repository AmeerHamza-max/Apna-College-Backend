const express=require('express');
const app=express();
const PORT=8000;

//below these two lines we use for post request that the data we got is in readable form 
app.use(express.urlencoded({extended:true}));//It would not be able to read the json data
app.use(express.json());//It will parse the json data also

app.get('/register',(req,res)=>{
    let {user,password}=req.query;
    res.send(`Standard get response,Welcome ${user}`);

});
app.post('/register',(req,res)=>{
    let {user,password}=req.body;
    console.log(`Standard post request, Welcome ${user}`)
    res.send(`Standard post request,Welcome ${user}`);
})

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
})