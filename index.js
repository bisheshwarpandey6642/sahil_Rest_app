const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const mongoose = require("mongoose")
const jade = require("jade")
const postController = require("./router/router")
const app = express()
const port = 3000;





//routes/api implementation
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(cors())
app.use(bodyParser.json());
app.use('/main', postController);

app.get('/', function (req, res) {
    res.render('index',
    { title : 'tom' }
    )
  })

// mongo connection
mongoose.connect("mongodb://localhost:27017/sahil").then(() => {
    console.log("mongodb is connected")
})


//server listening
app.listen(port, () => {
    console.log("server is up and running")
})


