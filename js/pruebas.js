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
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad',
        'Error: Este campo detectó que no se seleccionó ninguna ciudad, ingrese la ciudad'
    )
}

function probarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') ===
            'Debe ingresar la descripcion del regalo',
        'Error: Este campo no detectó ningun caracter, por favor, ingrese una descripcion'
    )
}

probarValidarCiudad()
probarDescripcionRegalo()
probarValidarNombre()
