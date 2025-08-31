//Create a basic route for instagram page
const insData=require('./data.json');
// Templating
// EJS(Embedded Javascript Templates)
// EJS is a simple templating language that lets you generate
// HTML markup with plain javascript.

const express=require('express');
const app=express();
const path=require('path');

//setting the view engine to ejs express require directly ejs
// view means we are considering view as our template
app.set('view engine','ejs');
//If we want to run the server outside of the folder we have to define this
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    //we are rendering the responses using ejs
    // in sending we can send array object boolean
    // but if we have to send file we use response.render
    //we are sending ejs file
    // res.send('this is home');
    //we are making view folder because express find the view
    // folder and render that files inside the view folder
    res.render('home');
})



////////InterPolation Syntax ///////////////////////////
// interpolation refers to embedding expressions into 
// marked up text.


////Passing data to EJS in backend

app.get('/rolldice',(req,res)=>{
     // generate dice number
     let diceVal=Math.floor(Math.random() * 6) + 1;
    res.render('rolldice', { diceVal }); // pass it to EJS
})

app.get('/ig/:username', (req, res) => {
    let {username}=req.params;
    const data=insData[username];
    if(data){
        res.render('instagram', {data});
    }
    else{
        res.render('error');
    }
    
});


const port=8080;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`); 
})