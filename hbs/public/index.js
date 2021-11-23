const btnPOST = document.querySelector(".btnPOST")

const form = document.querySelector(".formProducto")

btnPOST.addEventListener("click", function(e){

    e.preventDefault()

    const url = "http://localhost:8080/api/productos/";

    let data = new FormData(form)
    let title=data.get('title');
    let precio=data.get('precio');
    let thumbnail=data.get('thumbnail')
    let sendObject={
        title,
        precio,
        thumbnail
    }
    fetch(url,{
        method: "POST",
        body: JSON.stringify(sendObject),
        headers:{
            "content-type": "application/json"
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})