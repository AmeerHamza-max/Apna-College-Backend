//Path parameter

const express=require('express');
const app=express();
let port=8000;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);

})
app.get('/',(req,res)=>{
    res.send('hello i am root')
})

app.get('/:username/:id',(req,res)=>{
    let {username,id}=req.params;
    let htmlStr=`<h1>Welcome to the page of @${username}`;
    res.send(htmlStr);

    console.log(req.params);
})


//Query strings 

app.get('/search',(req,res)=>{
    let {q}=req.query;
    res.send(`These are the seaerch results for ${q}`);
    //https://localhost:80000/search?q='apple 


})

