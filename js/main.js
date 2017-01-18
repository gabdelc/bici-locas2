var spanNombre = document.createElement("span");
var spanApellido = document.createElement("span");
var spanEmail = document.createElement("span");
var spanContraseña = document.createElement("span");
var spanBici = document.createElement("span");
var spanMayuscula = document.createElement("span");

function mensajeNombre()
{
    var menNombre= document.getElementById("name");
    spanNombre.innerHTML="No es un nombre válido";
    menNombre.parentNode.appendChild(spanNombre);
}

function mensajeApellido()
{
    var menApellido= document.getElementById("lastname");
    spanApellido.innerHTML= "No es un apellido válido";
    menApellido.parentNode.appendChild(spanApellido);
}

function mensajeMayuscula()
{
    spanMayuscula.innerHTML= "Primera letra en mayúscula.";
    menApellido.parentNode.appendChild(spanMayuscula);
}

function mensajeEmail()
{
    var menMail=document.getElementById("input-email");
    spanEmail.innerHTML= "No es un correo válido";
    menMail.parentNode.appendChild(spanEmail);
}

function mensajeContraseña()
{
    var menContraseña = document.getElementById("input-password");
    spanContraseña.innerHTML = "No es una contraseña válida.";
    menContraseña.parentNode.appendChild(spanContraseña);
}

function mensajeBici()
{
    var menBici=document.getElementsByClassName("form-control")[4];
    spanBici.innerHTML= "Escoge una de la lista.";
    menBici.parentNode.appendChild(spanBici);
}



function validateForm(evt) {
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var contraseña = document.getElementById("input-password").value;
var lista = document.getElementById("bici").selectedIndex;
   
     
    if(nombre===""||apellido===""|| email===""|| contraseña==="") {
        alert("Todos los campos son obligatorios.");
        return false; 
            }
    
    else if !(/^[a-zA-Z\s]*$/).test(nombre)){
        mensajeNombre();
        }else{
        return false;
        evt.preventDefault();
        
    }
    
    else if (!/^[a-zA-Z\s]*$/.test(apellido)){
        mensajeApellido();
        }else{
        return false;
        evt.preventDefault();
        }

     else if (!/\w+@\w+\.+[a-z]/.test(email)) {
        mensajeEmail();
        }else{
        return false;
        evt.preventDefault();
        }
    
    else if( contraseña.length < 6 || contraseña === "password"|| contraseña==="123456"|| contraseña==="098754"){
        mensajeContraseña();
        }else{
        return false;
        evt.preventDefault();
        }
   
    else if( lista == null || lista == 0 ) {
       mensajeBici();
        }else{
        return false;
        evt.preventDefault();
        }
    
    else if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()|| apellido.charAt(0) != apellido.charAt(0).toUpperCase())
    {
        mensajeMayuscula();   
        }else{
        return false;
        evt.preventDefault();
      }
    
  
}