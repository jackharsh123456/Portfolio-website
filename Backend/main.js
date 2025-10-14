import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hey this this is my backend working properly')
})

app.post('/message', (req, res) => {
  console.log('req.form')
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
