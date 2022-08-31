const { signupLector, allusers} = require('./../models/signup');



module.exports.signupLectorController = async (req, res) => {
    
    const {email, password} = req.body
try {
    const user = await signupLector(email,password)
    return res.status(200).send(user)
} catch (error) {
    return res.status(500).send('se produjo un error al registrarse')
}

}

module.exports.allusercontrollers = async (req, res) =>{
    try {
        const data = await allusers()
        return res.send(data)
    } catch (error) {
        console.log(error)
        return res.send('error al obtener todos los usuarios (alluser)')
    }
}