
function probarValidarNombre(){

    console.assert(
        validarNombre("") === "Este campo debe tener al menos un caracter.",
        "Validar nombre no valido que el nombre no sea vacio.",

    );

    console.assert(
        validarNombre("11111111111111111111111111111111111111111111111111111111111111111") === "Este campo debe tener menos de 50 caracteres.",
        "Validar nombre no valido que el nombre tenga menos de 50 caracteres",
    );

    console.assert(
        validarNombre("12345") === "El campo nombre solo acepta letras",
        "Validar nombre no valido que el campo nombre solo tenga letras"
    );

    return "";

}

function probarValidarCiudad(){

    console.assert(
        validarCiudad("") === "El campo ciudad no puede estar vacio.",
        "Validar ciudad no valido que el campo ciudad no sea vacio.",
    );

    console.assert(
        validarCiudad("Buenos Aires") === "",
        "Validar ciudad no funciono con un caracter valido.",
    );

}

function probarDescripcionRegalo(){

    console.assert(
        validarDescripcionRegalo("") === "El campo descripcion regalo no puede estar vacio.",
        "La funcion validarDescripcionRegalo no valido que la descripcion no este vacia",
    );

    console.assert(
        validarDescripcionRegalo("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === "El campo descripcion regalo solo puede tener menos de 100 caracteres.",
        "La funcion validarDescripcionRegalo no valido que la descripcion tenga menos de 100 caracteres"
    );

    console.assert(
        validarDescripcionRegalo("Qqwerty") === "",
        "La funcion validarDescripcionRegalo no valido una entrada valida"
    );

    console.assert(
        validarDescripcionRegalo(".,.,.,") === "El campo descripcion solo puede tener letras y numeros.",
        "La funcion validarDescripcionRegalo no valido que la descripcion solo sea letras y numeros"
    );

}

probarValidarCiudad();
probarValidarNombre();
probarDescripcionRegalo();