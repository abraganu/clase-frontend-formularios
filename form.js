const inputName = document.getElementById('name')
const inputEmail = document.querySelector('#email')

inputName.addEventListener('blur', function (event) {
    if (inputName.validity.valid) {
        inputName.classList.replace('is-invalid', 'is-valid')
    }

    if (inputName.validity.valueMissing) {
        // ejecucion de funcion
        addErrorMessage('El campo es requerido', inputName)
    }

    if (inputName.validity.tooShort) {
        addErrorMessage('El minimo de caracteres es 2', inputName)
    }
})

inputEmail.addEventListener('blur', function () {
    const isInvalidClassInTheElement = inputEmail.classList.replace('is-invalid', 'is-valid')
    if (inputEmail.validity.valid)  {
        if (isInvalidClassInTheElement) {
            inputEmail.classList.replace('is-invalid', 'is-valid')
        } else {
            inputEmail.classList.add('is-valid')
        }
    }

    if (inputEmail.validity.valueMissing) {
        addErrorMessage('El campo es requerido', inputEmail)
    }

    if (inputEmail.validity.typeMismatch) {
        addErrorMessage('El formato de email no es correcto', inputEmail)
    }
})

// declaracion de funcion
// parametro: errorMessage
// inputName.parentNode.removeChild()
// inputName.sib
function addErrorMessage(errorMessage, element) {
    element.classList.add('is-invalid')
    if (element.nextElementSibling) {
        // remueve el div del error
        element.parentNode.removeChild(element.nextSibling)
    }

    element.insertAdjacentHTML(
        'afterend',
        `<div class="invalid-feedback">${errorMessage}</div>`
    )
}
