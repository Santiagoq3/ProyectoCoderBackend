const {Router, request, response} = require("express");

// const {contenedor} = require('../App')

const Contenedor = require("../models/Contenedor");
const path = "./db/productos.json"
const contenedor = new Contenedor(path, [] );

const router = Router();


router.get("/", async(req,res)=>{

    const productos = await contenedor.getAll()

    // res.status(200).json({
    //     msg: "ok get productos",
    //     productos
    // })
    
    res.render("Productos.pug", {
        productos: productos
    })
    
})

router.get("/:id", async(req,res)=>{


    let id = req.params.id
    id = Number(id)
    
   const productos = await contenedor.getById(id)

     if(productos.length === 0){
         return res.status(400).json({
             error: "no se encontro el producto"
         })
     }

    res.status(200).json({
        msg: "ok get productos por id",
        productos
    })
})

router.post("/", async(req = request,res)=>{

    let title = req.body.title
    let precio = req.body.precio
    let thumbnail = req.body.thumbnail

    console.log(title)

    const producto = {
        title,
        precio,
        thumbnail,
    }

    await contenedor.save(producto)


    res.status(200).json({
        msg: "Creado y guardado correctamente",
        
    })
    
})

router.put("/:id", async(req,res)=>{

    let id = req.params.id
    id = Number(id)

    const {...resto} = req.body
    
    await contenedor.actualizar(id,resto)


    res.status(200).json({
        msg: "actualizado correctamente",
       
    })
    
})

router.delete("/:id", async(req,res)=>{

    let id = req.params.id
    id = Number(id)

     await contenedor.deleteById(id)

    res.status(200).json({
        msg: " producto eliminado correctamente"
    })
    
})

module.exports = router