const express = require('express')
const apicache = require("apicache")
// const v1Router = require("./v1/routes")
// const v2Router = require("./v2/routes")
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger")

const app = express()
const PORT = process.env.PORT || 3000
const cache = apicache.middleware

// app.get('/',(req,res)=>{
//   res.send('<h1>Hola Wordl</h1>')
// })

// app.use("/api/v1", v1Router)
// app.use("/api/v2", v2Router)

app.use(express.json())
app.use(cache("2 minutes"))
app.use("/api/v1/workouts", v1WorkoutRouter)

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
  V1SwaggerDocs(app, PORT)
})