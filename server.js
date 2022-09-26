const express=require('express');
const app=express();
const port=4000 || process.env.PORT

const middleware1=(req,res,next)=>{
    console.log('i work for all the routes');
    next();
}

const middleware2=(req,res,next)=>{
    console.log('i work for certain routes only')
    next();
}

app.use(middleware1)

app.get('/',middleware2,(req,res)=>{
   res.send('both middleware1(local middleware) and global middleware is applied here')
   res.end();
})
app.get('/page2',middleware2,(req,res)=>{
    res.send(' both middleware1(local middleware) and global middleware is applied here')
    res.end();
})
app.get('/page3',(req,res)=>{
    res.send('Only global middleware will be applied here.')
   res.end();
})
app.get('/page4',(req,res)=>{
    res.send('Only global middleware will be applied here.')
   res.end();
})
app.get('/page5',(req,res)=>{
    res.send('Only global middleware will be applied here.')
   res.end();
})
app.listen(port,()=>{
    console.log(`server is started at port ${port}`)
})