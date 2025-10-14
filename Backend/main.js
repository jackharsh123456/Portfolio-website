import express from "express"
const app = express()
const port = 3000
import cors from "cors"
import bodyParser from "body-parser"

app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('hey this this is my backend working properly')
})

app.post('/message', (req, res) => {
  console.log(req.body)
  res.send('Your message is received we will reply you soon')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
