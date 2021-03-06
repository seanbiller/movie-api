const express = require('express')
const models = require('./models')
const Op = require('sequelize').Op


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port}`))

app.get('/movies', (request, response) => {
    models.Movies.findAll().then((movies) => {
        response.send(movies)
    })
})

app.get('/movies/:placeholder', (request, response) => {
    models.Movies.findAll().then((movies) => {

    response.send(match)
})


app.all('*', (request, response) => {
    response.sendStatus(404)
})
