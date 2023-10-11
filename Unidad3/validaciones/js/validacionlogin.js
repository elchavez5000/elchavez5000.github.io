window.onload=()=>{
    var btn = document.getElementById("btnLogin")
    var txtE = document.getElementById('txtEmail')
    var txtP = document.querySelector ("#txtPassword");
    var divA = document.querySelector('#alert');
    var divAS= document.querySelector("#alertSuccess")

    btn.addEventListener('click', (evt)=>{
       
       
        btn.addEventListener('click', (evt))
         evt.preventDefault()
        if(txtE.value == "" || txtP.value==""){

            divA.innerHTML = 'ERROR <br> <small>FAVOR DR LENAR LOS CAMPOS</small>' 
            divA.style.display = "block"
        }else{
            if(txtP.value.length <5){
                divA.innerHTML = 'ERROR <br> <small>el password debe ser mayor d 5 letras]>' 
                divA.style.display = "block"


            }else{
                divAS.style.display = 'block'
            }

        }
    })
    txtE.addEventListener('focus',(evt)=>{
        divA.style.display = 'none'
    })
    txtE.addEventListener('focus',(evt)=>{
        divA.style.display = 'none'
    })
    txtE.addEventListener('focus',(evt)=>{
        divAS.style.display = 'none'
    })
    txtE.addEventListener('focus',(evt)=>{
        divAS.style.display = 'none'
    })
    
}