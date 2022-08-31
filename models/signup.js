
const {request} = require('./../DB/request');
const {hashPassword} = require('./../utils/password');

module.exports.signupLector = async (user,password) =>{
    const hashedPassword = hashPassword(password)
    const data = await request(
        `INSERT INTO users(email,password, type)
        VALUE('${user}', '${hashedPassword}', 'LECTOR')`
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