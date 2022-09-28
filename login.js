let correoCorrecto = 'nadiaprado2000@hotmail.com'

let contrasenaCorrecta = '1234'

let correoInput = document.getElementById('exampleInputEmail1')

let contrasenaInput = document.getElementById('exampleInputPassword1')

let button = document.querySelector('button')


const enviarInfo = function(event){
    event.preventDefault()
    if (correoCorrecto === correoInput.value && contrasenaCorrecta === contrasenaInput.value){
        console.log('Listo!, los datos son correctos y enviamos los datos al servidor',
            {
            correoCorrecto: correoInput.value, 
            contrasenaCorrecta:contrasenaInput.value
            }
        )
        // window.location = "galeria.html";
        button.disabled = true
        button.removeEventListener('click', enviarInfo)
        
    }else{
        console.log('Los datos son incorrectos')
    }
}

button.addEventListener('click',enviarInfo)


