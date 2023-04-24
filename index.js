const express = require('express')
const app = express()
const port = process.env.PORT || 3000
    // app.use(cors({
    //     origin: '*'
    // }));
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body)
    console.log(email+password)
  res.send(email + "  " + password)
})
app.listen(port, () => {
    console.log("servver is running at port " + port)
})
