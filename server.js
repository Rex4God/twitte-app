const express = require('express')
const app = express()
const morgan = require('morgan')
require('./db/connect')
require('dotenv').config()
const index = require('./routes/index')
const user = require('./routes/user')
const twitRoute = require('./routes/twit')
const comment = require('./routes/comment')

// Middleware declarations
app.use(express.static('./public'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))

//route middleware declarations
app.use('/index', index)
app.use('/api/v1/user', user)
app.use('/api/v1/twits',twitRoute)
 app.use('/comment',comment)


//SERVER DETAILS
const port = process.env.PORT || 5000

app.listen(port, console.log(`Server is listening at ${port}`))
