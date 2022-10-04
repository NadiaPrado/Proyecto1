let usuario1 = 'Nadia'

let contraseña1 = '1234'

let usuario2 = 'Luis'

let contraseña2 = '5678'

let usuario3 = 'Ana'

let contraseña3 = '910'


function login(){
    let usuarioInput, contraseñaInput;
    usuarioInput = document.getElementById("usuario").value;
    contraseñaInput = document.getElementById("contrasena").value;

    if(usuario1 == usuarioInput && contraseña1 == contraseñaInput || usuario2==usuarioInput && contraseña2==contraseñaInput || usuario3 == usuarioInput && contraseña3 == contraseñaInput){
        console.log(`los datos son correctos ${usuarioInput}`)
        Swal.fire({
            text: `Los datos son correctos, Bienvenido(a): ${usuarioInput}`,
            timer: 2000,
            icon: 'success'
            })
            setTimeout(function(){location.href = 'galeria.html';},1000*3)();
    }else{
        Swal.fire({
            text: `Intentelo de nuevo!, los datos no son correctos`,
            timer: 2000,
            icon: 'error'
            })
    }

}




