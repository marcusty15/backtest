const { request } = require("../DB/request");

module.exports.allvapes = async () => {
  const data = await request("SELECT * FROM vapes");

  return data;
};

module.exports.vapebyID = async (id) => {
  const data = await request(`SELECT * FROM vapes WHERE id = ${id}`);

  return data[0];
};

module.exports.createVape = async (nombre, publish_date, disponible) => {
  
  const data = await request(`
    INSERT INTO vapes(nombre, publish_date, disponible)
    VALUES('${nombre}', '${publish_date}', '${disponible}')`);

  return {
    id: data.insertId,
    nombre
  }
  
};

module.exports.updateVape = async (
  id,
  nombre,
  publish_date,
  disponible,
) => {
  const data = await request(`
    UPDATE vapes SET nombre = '${nombre}', publish_date = '${publish_date}', disponible = '${disponible}' WHERE id = ${id}`);
  return {
    update: data
  };
};

module.exports.deleteVape = async (id) => {
  const data = await request(`
       DELETE FROM vapes
       WHERE id=${id}
    `);

    if(data.lenght > 0){
      return data[0].nombre
    } else {
      return data
    }

};
