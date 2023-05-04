const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const chefs = require("./data/chefData.json")

app.use(cors())

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})