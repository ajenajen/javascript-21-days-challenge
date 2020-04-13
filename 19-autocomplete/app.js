;(() => {
  const carBrands = [
    'BMW',
    'Maserati',
    'Mercedes Benz',
    'Ferrari',
    'Toyota',
    'Honda',
    'Hyundai',
  ]
  const searchBox = document.querySelector('.search')

  const closeAutocomplete = () => {
    const ul = document.querySelector('.results')

    if (ul) {
      document.body.removeChild(ul)
    }
  }

  const onSelected = (event) => {
    searchBox.value = event.target.innerText
    closeAutocomplete()
  }

  const onInput = (event) => {
    closeAutocomplete()
    const inputText = event.target.value.toLowerCase()
    const filteredCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().startsWith(inputText),
    )

    if (filteredCarBrands.length > 0) {
      const ul = document.createElement('ul')
      ul.className = 'results'

      filteredCarBrands.map((carBrand) => {
        const li = document.createElement('li')
        li.innerText = carBrand
        li.addEventListener('click', onSelected)
        ul.appendChild(li)
      })
      document.body.appendChild(ul)
    }
  }

  const run = () => {
    searchBox.addEventListener('input', onInput)
    document.body.addEventListener('click', closeAutocomplete)
  }

  run()
})()
