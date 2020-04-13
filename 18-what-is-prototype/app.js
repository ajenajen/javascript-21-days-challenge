;(() => {
  const sayHi = () => {
    console.log(`Hello world.`)
  }

  String.prototype.sayHi = sayHi

  const name = 'John'
  name.sayHi()

  console.log(name.__proto__)
})()
