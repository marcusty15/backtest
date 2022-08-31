const signinLector = require('./../models/signin');

module.exports.signinLectorController = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await signinLector(email,password)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error)
        return res.status(500).send('se produjo un error al registrarse')
    }
}