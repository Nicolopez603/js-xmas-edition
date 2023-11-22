/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

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
        'Error: Este campo no detectó ningun caracter, ingrese una descripcion'
    )
}


probarValidarCiudad()
probarDescripcionRegalo()
