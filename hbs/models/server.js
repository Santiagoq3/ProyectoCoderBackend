const express = require("express");
const cors = require("cors")
const {engine} = require("express-handlebars")
// const path = require("path")



class Server{
    constructor(){

        this.app  = express();
        this.PORT = 8080;


        this.middlewares()
        
        this.app.engine('handlebars',engine({
            defaultLayout: false,
            layoutsDir: "views/layouts",
            partialsDir: "views/partials"
        }))
        this.app.set('views','./views/layouts')
        this.app.set('view engine','handlebars')
        
        
        this.productosPath= "/api/productos"
        
        this.routes()

         this.app.get("/", (req,res)=>{
             res.render("Formulario.handlebars")
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


