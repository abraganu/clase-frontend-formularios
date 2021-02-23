const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')

inputName.addEventListener('blur', function (event) {
    console.log(inputName.validity)
    if (inputName.validity.valueMissing) {
        console.log('el campo es requerido')
    }

    if (inputName.validity.tooShort) {
        console.log('el minimo de caracteres es 2')
    }
})

inputEmail.addEventListener('blur', function () {
    console.log('soy un blur en email')
})
