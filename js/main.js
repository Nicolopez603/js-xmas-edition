const $form = document.querySelector('#carta-a-santa')
const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
const descripcionRegalo = $form['descripcion-regalo'].value

const numeroMinimoCaracteres = 0

function validarNombre(nombre) {
    const numeroMaximoCaracteres = 50

    if (nombre.length === numeroMinimoCaracteres) {
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (nombre.length >= numeroMaximoCaracteres) {
        return 'Este campo debe tener menos de 50 caracteres'
    }

    return ''
}

function validarCiudad(ciudad) {
    if (ciudad.lenght === 0) {
        return 'El campo ciudad no puede estar vacio'
    }
    return ''
}

function validarDescripcionRegalo(descripcionRegalo) {
    const numeroMaximoCaracteres = 100
    if (descripcionRegalo.lenght === numeroMinimoCaracteres) {
        return 'Debe ingresar la descripcion del regalo'
    }

    if (descripcionRegalo.lenght === numeroMaximoCaracteres) {
        return 'La descripcion es muy larga, restalé caracteres'
    }

    return ''
}
