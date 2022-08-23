const {allvapes, vapebyID, createVape, updateVape, deleteVape} = require('../models/users');

const allvapescontrollers = async (req, res) =>{
    try {
        const data = await allvapes()
        return res.send(data)
    } catch (error) {
        return res.send('error al obtener todos los vapes (allvapescontrolers)')
    }
}

const vapebyIDcontroller = async (req, res) => {
    const {id} = req.params
    try {
        const data = await vapebyID(id)
        return res.send(data)
    } catch (error) {
        return res.send('error al obtener un vape por id  (vapebyidcontroller)')
    }
}

const createVapeController = async (req, res) => {

    const {nombre, publish_date, disponible} = req.body
    try {
        const data = await createVape(nombre, publish_date, disponible)
        return res.send(data)
    } catch (error) {
        console.log(error)
        return res.send('error al crear un vape  (createCapeController)')
    }
}

const updateVapeController = async (req, res) => {
    const {id} = req.params
    const {nombre, publish_date, disponible} = req.body
    try {
        const data = await updateVape(id, nombre, publish_date, disponible)
        return res.send(data)
    } catch (error) {
        return res.send('error al actualizar un vape  (createCapeController)')
    }
}

const deleteVapeController = async (req, res) => {
    const {id} = req.params
    try {
        const data = await deleteVape(id)
        return res.send(data)
    } catch (error) {
        return res.send('error al actualizar un vape  (cdeleteVapeController)')
    }
}

const deleteAllVapeController = async (req, res) => {
    
    try {
        const data = await updateVape()
        return res.send(data)
    } catch (error) {
        return res.send('error al actualizar un vape  (deleteAllVapeController)')
    }-4461
}

module.exports = {
    allvapescontrollers,
    vapebyIDcontroller,
    createVapeController,
    updateVapeController,
    deleteAllVapeController,
    deleteVapeController

}