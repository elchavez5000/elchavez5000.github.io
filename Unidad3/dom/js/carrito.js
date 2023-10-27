window.onload = () =>{
    var data=[
        {
            id:1, 
            name:"Playeras Boos",
            price:200.00,
            img:"boss.jpg",

        },
        {
            id:2, 
            name:"Playeras Toommy",
            price:200.00,
            img:"boos.jpg",

        },

        {
            id:3, 
            name:"Playeras Polo",
            price:200.00,
            img:"boss.jpg",

        },
        {
            id:4, 
            name:"Camisa Burrberry",
            price:200.00,
            img:"Camisa Burrberry.webp",

        },

        {
            id:2, 
            name:"Cmisa LV",
            price:200.00,
            img:"camisa LV.png",

        },
        
    ]
    var dataPedido = []
   

    var Lista = document.querySelector("#ListaProductos")
    var pedido = document.querySelector("#pedido")
    var todo ="";
    data.forEach( (item)=>{
        todo+=`<div class="product">
        <div class="img">
            <img src="./img/${item.img}" alt="">
        </div>
        <div class="data">
            <h2>${item.name}</h2>
            <h6 class="price">$${item.price}</h6>
            <button class="btnComprar" data-index="${item.id-1}">comprar</button>
        </div>
    </div>`

    } )

    Lista.innerHTML = todo
    var botones = document.querySelectorAll(".btnComprar")
    botones.forEach((btn)=>btn.addEventListener('click',(evt)=>{
        let i = evt.target.dataset.index
        dataPedido.push(data[1])
        printPedido()
    }))
    let printPedido =()=>{
        todo =""
        let total=0
        dataPedido.forEach( (item)=>{
            todo+=`<div class="product">
            <div class="img">
                <img src="./img/${item.img}" alt="">
            </div>
            <div class="data">
                <h2>${item.name}</h2>
                <h6 class="price">$${item.price}</h6>
                <button class="btnComprar" data-index="${item.id-1}">comprar</button>
            </div>
        </div>`
        total+=item.price
    
        } )
        pedido.innerHTML = todo 
        document.querySelector("#total").innerHTML="Total: $"+total.toFixed(2)
    
    }

       
    
    
}//llave on load 
