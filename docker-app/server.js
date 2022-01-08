import express from 'express'

const app = express()

const port = 5000;

app.get('/' , (req ,res )=>{
res.send("<h1>Docker Started </h1>")

})
app.get('/about' , (req ,res )=>{
res.send(process.env.API_KEY)

})
app.get('/api' , (req ,res )=>{
res.send("<h2>Api Page</h2>")

})


// listen 
app.listen(port, () =>{
    console.log(`server is running on ${port} based`);
})