const express = require('express')
const models = require('./models')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on ${port}`))

app.get('/movies', async (request, response) => {
    const teams = await models.Teams.findAll()

    response.send(teams)
})


app.all('*', (request, response) => {
    response.sendStatus(404)
})
