const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.get('/test', (req, res) => {
    res.send("Live")
})
app.listen(port, () => {
    console.log("servver is running at port " + port)
})