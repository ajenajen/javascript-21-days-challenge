;(() => {
  const resetElement = (element) => {
    const error = element.parentElement.querySelector('small')
    error.innerText = ''
    error.classList.remove('invalid')
    form.classList.remove('invalid')
  }

  const displaySuccess = () => {
    document.body.innerHTML = ''

    const p = document.createElement('p')
    p.innerText = 'You have been logged in.'
    p.classList.add('success')
    document.body.appendChild(p)
  }

  const displayError = (element, message) => {
    const error = element.parentElement.querySelector('small')
    error.innerText = message
    error.classList.add('invalid')
    form.classList.add('invalid')
  }

  const validateLength = (element, min, max) => {
    const elementLength = element.value.length

    if (elementLength < min || elementLength > max) {
      const elementName = element.getAttribute('name')
      displayError(
        element,
        `${elementName} length must be between ${min} and ${max}.`,
      )
    }
  }

  const validateEmail = (element) => {
    const regex = /\S+@\S+\.\S+/

    if (!regex.test(element.value)) {
      displayError(element, `Email is invalid.`)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    resetElement(email)
    resetElement(password)

    validateLength(email, 10, 20)
    validateLength(password, 8, 20)

    validateEmail(email)

    const isValidForm = !form.classList.contains('invalid')
    if (isValidForm) {
      displaySuccess()
    }
  }
  const run = () => {
    const form = document.querySelector('#form')
    form.addEventListener('submit', onSubmit)
  }

  run()
})()
