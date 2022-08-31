
const {request} = require('./../DB/request');

module.exports.signupLector = async (user,password) =>{
    const data = await request(
        `INSERT INTO users(email,password, type)
        VALUE('${user}', '${password}', 'LECTOR')`
    )
        return{
            id: data.inserId,
            user
        }
}

module.exports.allusers = async () => {
    const data = await request("SELECT * FROM users");
  
    return data;
  };