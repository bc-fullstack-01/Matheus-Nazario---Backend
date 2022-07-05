const express = require('express')
const app = express()

app.use('/', express.static(__dirname + "/static"))

app.listen(4000, () => {
    console.log('server going up on http://localhost:4000')
});