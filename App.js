const Contenedor = require("./models/Contenedor");
const Server = require("./models/server");


const server = new Server;



const path = "./db/productos.json"

const contenedor = new Contenedor(path, [] );

server.listen()


module.exports = {
    contenedor
}