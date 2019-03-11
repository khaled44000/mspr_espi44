const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/page.html'))
app.get('/multi', (req, res) => res.sendFile(__dirname + '/page-multi.html'))

app.listen(PORT, () => console.log(`MSPR DEV app listening on port ${PORT}!`))
