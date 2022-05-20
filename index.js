const express = require('express')

// app
const app = express()
const port = process.env.PORT || 5000

// route
app.get('/', (req, res) => {
  res.send('all ok ')
})

// server running

app.listen(port, () => {
  console.log(`doctors server running on http://localhost:${port}`)
})
