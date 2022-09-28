let usuario1 = 'nadiaprado2000@hotmail.com'

let contraseña1 = '1234'

let usuario2 = 'luisperez@hotmail.com'

let contraseña2 = '5678'

let usuario3 = 'ana15@hotmail.com'

let contraseña3 = '910'

let correoInput = document.getElementById('exampleInputEmail1')

let contrasenaInput = document.getElementById('exampleInputPassword1')

let button = document.querySelector('button')


const enviarInfo = function(event){
    event.preventDefault()
    if (usuario1 === correoInput.value && contraseña1 === contrasenaInput.value || usuario2 === correoInput.value && contraseña2 === contrasenaInput.value || usuario3 === correoInput.value && contraseña3s === contrasenaInput.value ){
        console.log('Listo!, los datos son correctos y enviamos los datos al servidor',
            {
            correoCorrecto: correoInput.value, 
            contrasenaCorrecta:contrasenaInput.value
            }
        )
        
        button.disabled = true
        button.removeEventListener('click', enviarInfo)
        alert("Los datos son correctos")
        
    }else{
        console.log('Los datos son incorrectos')
        alert("Intentelo de nuevo!, los datos no son correctos")
    }
    
}

button.addEventListener('click',enviarInfo);




