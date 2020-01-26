  
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5553


app.use(cors())
app.use(bodyParser.json())

const CUSTOMERS = require("./CUSTOMERS")
app.use("/CUSTOMERS", CUSTOMERS)

app.get('/',(req,res,next) => {
    res.send('This is Adventures Decanted Email Back-end Server Database')
})

app.listen(port ,  ()=> {
    console.log(`The wine is pretentious on PORT : ${port}`)
})
