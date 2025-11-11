const express = require('express')
const app = express()
const port = 4000

// const userRoutes = require('./routes/users')

// app.get('/', (req, res) => {
//     res.send('Hello World! I am a node app. My name is Ruhul')
// })

app.use(express.json());
app.use('/users', require('./routes/users'));
// app.all(/.*/, (req, res) => handle(req, res))
// app.use('/users', userRoutes)

app.use('/static', express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})