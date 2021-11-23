const express = require("express");
const cors = require("cors")
const hbs = require("hbs")
const path = require("path")



class Server{
    constructor(){

        this.app  = express();
        this.PORT = 8080;
        this.hbs = hbs


        this.middlewares()
        
        this.app.set("views", "./views");
        this.hbs.registerPartials(path.join(__dirname, "../", "/views/partials"), function (err) {});
        this.app.set('view engine', 'hbs');
        
        
        this.productosPath= "/api/productos"
        
        this.routes()

         this.app.get("/", (req,res)=>{
             res.render("formulario.hbs")
         })
    }

    middlewares(){

        this.app.use(express.json())

        this.app.use(express.static("public"))

        this.app.use(cors())

    }

    routes(){

        this.app.use(this.productosPath, require('../routes/productos'));
    
    }

    listen(){

        this.app.listen(this.PORT, ()=>{
            console.log(`servidor conectado en el puerto ${this.PORT}`)
        })
        
    }
}

module.exports = Server


