function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío'
    )

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
        ) === 'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    )

    console.assert(validarNombre('Nicolas') === ''),
        'Validar nombre falló con un valor valido'
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Error: Este campo detectó que no se seleccionó ninguna ciudad, ingrese la ciudad'
    )

    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacio'
    ),
        'Error: Validar ciudad no mostró un error cuando la ciudad es vacia'
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') ===
            'Debe ingresar la descripcion del regalo',
        'Error: Este campo no detectó ningun caracter, por favor, ingrese una descripcion'
    )

    console.assert(
        validarDescripcionRegalo(
            'akmdkamskdmaksdmkamsdkamsdkamskdamksdmaksdmadksdasdasdasd'
        ) === 'Debe ingresar menos caracteres en la descripcion del regalo',
        'Error: Se detectó mas de 100 caracteres'
    )

    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'La funcion validar descripcion regalo no funciono con una descripcion correcta'
    )
}

probarValidarCiudad()
probarValidarDescripcionRegalo()
probarValidarNombre()   
