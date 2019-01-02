const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

let database = [
    {
        title: 'Pan Tadeusz',
        price: 28.6,
        author: 'Adam Mickiewicz'
    },
    {
        title: 'Potop',
        price: 22.6,
        author: 'Henryk Sienkiewicz'
    }
]

app.get('/books', (req, res) => {
    res.send(database)
})

app.get('/books/:title', (req, res) => {
    database.forEach((value) => {
        if (value.title == req.params.title) {
            return res.send(value)
        }
    })
})

app.listen(3000, () => {
    console.log('Book service is working')
})