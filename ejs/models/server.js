const express = require("express");
const cors = require("cors")

class Server{
    constructor(){

        this.app  = express();
        this.PORT = 8080;


        this.middlewares()
        
       
        this.app.set('views','./views')
        this.app.set('view engine','ejs')
        
        
        this.productosPath= "/api/productos"
        
        this.routes()

         this.app.get("/", (req,res)=>{
             res.render("formulario.ejs")
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


