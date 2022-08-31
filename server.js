
const express = require('express')
const signupRoutes = require('./routes/signupRoutes');
const signinRoutes = require('./routes/signinRoutes');

const router = require('./routes/vapesRoutes')

const app = express()

const port = process.env.PORT || 8000;

app.use(express.json())

app.use('/vapes', router)
app.use('/signup', router)
app.use('/signin', router)

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`)
})