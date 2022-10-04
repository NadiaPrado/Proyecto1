let usuarioInput = document.getElementById('usuario')

let contraseña = document.getElementById('contrasena')

let correoInput = document.getElementById('correo')

let confirmarcontrasenaInput = document.getElementById('confirmarcontrasena')


function login(){

    if(usuarioInput.value != "" && contraseña.value !="" && correoInput.value !="" && confirmarcontrasenaInput.value!=""){
        console.log(`los datos del usuario ${usuario} han sido guardados`)
        // alert(`Los datos son correctos, Bienvenido(a): ${usuario}`)
        Swal.fire({
            text: `Los datos han sido guardados correctamente, Bienvenido(a): ${usuarioInput.value}`,
            timer: 2000,
            icon: 'success'
            })
            setTimeout(function(){location.href = 'galeria.html';},1000*3)();
    }else{
        Swal.fire({
            text: `Todos los datos deben de estar completados`,
            timer: 2000,
            icon: 'warning'
            })
    }

}