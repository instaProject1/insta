const express = require('express')
const db = require('./database/index')
const instaroutes = require("./routes/instaRoutes")
const http=require('http')
const PORT = 3000
const app = express()
const cors=require('cors')
//Don't forget to add Middlewares for parsing incoming requests
//with JSON and urlencoded payloads depending on your http client 
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'))
 app.use('/users',instaroutes)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})