
const express = require('express')

const router = require('./routes/vapesRoutes')

const app = express()

const port = process.env.PORT || 8000;

app.use(express.json())

app.use('/vapes', router)

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`)
})