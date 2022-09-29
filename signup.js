function login(){
    let usuario, contraseña;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contrasena").value;

    if(usuario == "Nadia" && contraseña=="12usuario" || usuario=="Brenda" && contraseña=="B30" || usuario == "Joel" && contraseña == "abcde"){
        console.log('los datos son correctos')
        console.log('los datos son correctos')
        alert("Los datos son correctos")
        window.location="galeria.html";

    }else{
        alert("Intentelo de nuevo!, los datos no son correctos")
    }

}