const express=require('express');
const app=express();

let port=8000;

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
    
})

// app.use((req,res)=>{
//     // console.log(req);
//     console.log('Request Recieved');
//     // res.send('this is a basic response')
//     // res.send({
//     //     name:'Apple',
//     //     color:'red',
//     // })
//     let code='<h1>Fruits</h1><ul><li>Apple</li><li>Apple</li></ul>';
//     res.send(code);
// })

//http request are text based and when it is sending it
// convert into object


////Routes /////////////////////

// It is process of selecting a path for traffic in a network
// or between or across multiple networks.

app.get('/',(req,res)=>{
    res.send('You contacted root path');
})
app.get('/apple',(req,res)=>{
    res.send('You apple  path');
})
app.get('/orange',(req,res)=>{
    res.send('You orange  path');
})

app.post('/',(req,res)=>{
    res.send('You send a post request to root');
})

// 404 handler (catch-all)
app.use((req,res)=>{
    res.status(404).send('This path does not exist');
});
