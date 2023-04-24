const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/test', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body)
    res.json(req.body)
})
app.listen(port, () => {
    console.log("servver is running at port " + port)
})