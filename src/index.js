const express = require ("express")
const routes = require('./routes')
const app = express()
//const handlebars = require ('express-handlebars')

require('./database')

app.use(express.json())
app.use(routes)

app.listen(3030)
