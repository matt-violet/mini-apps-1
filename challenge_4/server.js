// Build your Express app inside server.js

const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'))
app.use('/', express.static('client'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))