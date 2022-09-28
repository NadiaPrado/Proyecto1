function login(){
    let usuario, contraseña;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contrasena").value;

    if(usuario == "Nadia" && contraseña=="1234"){
        window.location="galeria.html";
    }

}