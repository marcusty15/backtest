const validate = (req, res, next) => {
    const {id} = req.params
    const numericId = parseInt(id)

    if(isNaN(numericId) || numericId < 1){
        return res.send('El id es incorrecto')
    } else {
        next()
    }
}

module.exports = {
    validate
}