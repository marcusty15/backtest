const {signinLector} = require('./../models/signin');

const {generateCookieDaysDurationInMs} = require('./../utils/time');

const {createToken} = require('./../utils/token');



module.exports.signinLectorController = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await signinLector(email,password)
        if(user.existUser){
            res.cookie('session', createToken(user),{
                maxAge: generateCookieDaysDurationInMs(3)}
            )
            return res.status(200).send(user)
        } else {
            return res.status(200).send(user)
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).send('se produjo un error al registrarse')
    }
}