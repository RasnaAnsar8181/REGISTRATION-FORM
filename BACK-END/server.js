const express = require('express')
const cors = require('cors')
const cl = require('cli-color')
const mongoose = require('mongoose')
const user_route = require('./routes/userroutes')


const URL = 'mongodb://localhost:27017'
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(`${URL}/Accounts`)
.then(()=>{
    console.log(cl.white.bgMagenta("==============================="))
    console.log(cl.white.bgMagenta('Database Successfully connected'))
    console.log(cl.white.bgMagenta("==============================="))
})
.catch((error)=>console.log(error))

app.use('/user',user_route)

app.listen(PORT,()=>{
    console.log('')
    console.log(cl.white.bgMagenta("==================================="))
    console.log(cl.white.bgMagenta("Server is running in the port ",PORT))
    console.log(cl.white.bgMagenta("==================================="))
    console.log('')
})    