const express = require('express');
const v1Router = require("./v1/routes")
const v2Router = require("./v2/routes")


const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", v1Router)
app.use("/api/v2", v2Router)

// app.get('/',(req,res)=>{
//   res.send('<h1>Hola Wordl</h1>')
// })

app.listen(PORT, ()=>{console.log(`🚀 Server listening on port ${PORT}`)})