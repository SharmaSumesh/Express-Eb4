// const express = require("express");
// const app = express();
// // app.get(route,callback)
// get:- used to read and get the data 
// post:- if you want to create the data 
// put:- if you want you update the data 
// delete:- if you want to delete the data
// app.get("/",(req,res)=>{
//     res.send("Home Page")
// })
// app.listen(4000,()=>{
//     console.log("App is started");
// })
// const express = require("express");
// const app = express();
// app.get("/",(req,res)=>{
//     res.send("Home Page")
// })

// app.listen(4000,()=>{
//     console.log("done");
// })
// Routing Part
// const express = require("express");
// const app = express();
// app.get("/",(req,res)=>{
//     res.send("Home Page")
// })
// app.get("/About",(req,res)=>{
//     res.send("About Page");
// })
// app.get("/info",(req,res)=>{
//     res.send("information Pages")
// })

// app.listen(4000,()=>{
//     console.log("done");
// })
// create a server using express run at 9000 port 
// and create routing 
// /home:- home page 
// /contact:- contact page 
// /signin:- signin  pages 
const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname);
const staticpath = path.join(__dirname,"./public");
app.use(express.static(staticpath));
app.get("/",(req,res)=>{
    res.send("Home Pages")
})
app.listen(3000,()=>{
    console.log("done");
})
