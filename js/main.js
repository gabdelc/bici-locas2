function mensajeNombre()
{
    var menNombre= document.getElementById("name");
    var spanNombre=document.createElement("span");
    spanNombre.innerHTML="No es un nombre válido";
    menNombre.parentNode.appendChild(spanNombre);
}

function mensajeApellido()
{
    var menApellido= document.getElementById("lastname");
    var spanApellido = document.createElement("span");
    spanApellido.innerHTML= "No es un apellido válido";
    menApellido.parentNode.appendChild(spanApellido);
}

function mensajeMayuscula()
{
   var spanMayuscula = document.createElement("span");
    spanMayuscula.innerHTML= "Primera letra en mayúscula.";
    menApellido.parentNode.appendChild(spanMayuscula);
}

function mensajeEmail()
{
    var menMail=document.getElementById("input-email");
    var spanEmail = document.createElement("span");
    spanEmail.innerHTML= "No es un correo válido";
    menMail.parentNode.appendChild(spanEmail);
}

function mensajeContraseña()
{
    var menContraseña = document.getElementById("input-password");
    var spanContraseña = document.createElement("span");
    spanContraseña.innerHTML = "No es una contraseña válida.";
    menContraseña.parentNode.appendChild(spanContraseña);
}

function mensajeBici()
{
    var menBici=document.getElementsByClassName("form-control")[4];
    var spanBici = document.createElement("span");
    spanBici.innerHTML= "Escoge una de la lista.";
    menBici.parentNode.appendChild(spanBici);
}



function validateForm() {
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var contraseña = document.getElementById("input-password").value;
//var lista =document.getElementById("bici").selectedIndex;
   
     
    if(nombre===""||apellido===""|| email===""|| contraseña==="")
    {
        alert("Todos los campos son obligatorios.");
        return false; 
    }
    
    else if (!(/^[a-zA-Z\s]*$/).test(nombre)){
        mensajeNombre();
    }else{
        console.log("ddddfd");
    }
    
    if(!(/^[a-zA-Z\s]*$/).test(apellido)){
        mensajeApellido();
    }else{
        return false;
        evt.preventDefault();
    }

    if (!/\w+@\w+\.+[a-z]/.test(email)) {
        mensajeEmail();
    }else{
        return false;
        evt.preventDefault();
    }
    
    if( contraseña.length < 6 || contraseña === "password"|| contraseña==="123456"|| contraseña==="098754"){
        mensajeContraseña();
    }else{
        return false;
        evt.preventDefault();
    }
   
    if( lista == null || lista == 0 ) {
       mensajeBici();
    }else{
        return false;
        evt.preventDefault();
    }
    
    if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()|| apellido.charAt(0) != apellido.charAt(0).toUpperCase())
    {
        mensajeMayuscula();   
    }else{
        return false;
        evt.preventDefault();
    }
    
  
  
}