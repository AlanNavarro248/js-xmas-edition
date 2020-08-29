
function validarNombre(nombre){
    
    if(nombre.length === 0){
        return "Este campo debe tener al menos un caracter."
    }
    
    if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres."
    }

    if(!/^[a-z]+$/i.test(nombre)){
        return "El campo nombre solo acepta letras"
    }

    return "";
}

function validarCiudad(ciudad){

    if(ciudad.length === 0){
        return "El campo ciudad no puede estar vacio."
    }

    return "";
}

function validarComportamiento(comportamiento){

    if(comportamiento === ""){
        return "No hay ningun comportamiento seleccionado"
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo){

    if(descripcionRegalo.length === 0){
        return "El campo descripcion regalo no puede estar vacio."
    }

    if(descripcionRegalo.length >= 100){
        return "El campo descripcion regalo solo puede tener menos de 100 caracteres."
    }

    if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return "El campo descripcion solo puede tener letras y numeros."
    }

    return "";
}


function validarFormulario(){
    const $formulario = document.querySelector("#carta-a-santa");

    const nombre = $formulario.nombre.value;
    const ciudad = $formulario.ciudad.value;
    const descripcionRegalo = $formulario["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad  = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo
    };

    console.log(manejarErrores(errores));

    const noHayErrores = manejarErrores(errores) === 0;

    if(noHayErrores){
        const $exito = document.querySelector("#exito");
        $exito.className = "";
        $formulario.className = "oculto";

        setTimeout(function(){ 
            window.location.href = "wishlist.html"
         }, 5000);

     }

  event.preventDefault();

}

function manejarErrores(errores){
 
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            $formulario[key].className = "error";
            cantidadErrores++

            const contenedorError = document.createElement("li");
            contenedorError.innerText = error;
            $errores.appendChild(contenedorError);

        }else{
            $formulario[key].className = "";
        }

    });
  
    return cantidadErrores;

}

const $formulario = document.querySelector("#carta-a-santa");
$formulario.onsubmit = validarFormulario;



// ver Uncaught TypeError: Cannot set property 'onsubmit' of null
//    at main.js:119 al ir a la wishlist
//  
//  corregir el acumulador de errores
//
// agregar pruebas y validadores a la clase 6