;(() => {
  function printName(nationality, city) {
    console.log(this)
    console.log(
      `My name is ${this.name}, I'm ${nationality} and am living in ${city}`,
    )
  }

  const printNameWithBind = (nationality, city) => {
    console.log(this)
    console.log(
      `My name is ${this.name}, I'm ${nationality} and am living in ${city}`,
    )
  }

  function Person(name, nationality, city) {
    this.name = name
    this.nationality = nationality
    this.city = city

    printName(this.nationality, this.city)

    printNameWithBind(this.nationality, this.city)

    printName.call(this, this.nationality, this.city)

    printName.apply(this, [this.nationality, this.city])

    const printJohn = printName.bind(this)
    printJohn('Thai', 'Bangkok')
  }

  new Person('John', 'Thai', 'Bangkok')
})()
