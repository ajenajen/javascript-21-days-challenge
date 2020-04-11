;(() => {
  // 1. NaN
  if (NaN === NaN) {
    console.log('Not work') // Use "Number.isNaN(NaN)" instead.
  }

  // 2. Type coercion
  console.log(1 - '1') // 0
  console.log(1 + '1') // '11'

  // 3. Interpreter & Compiler
  const getPerson = () => {
    return
    {
      name: john
    }
  }
  console.log(getPerson()) // undefined, move "parentheses" to same line with "return"

  // 4. Object Type
  if (typeof null === 'object') {
    console.log("It's true")
  }
})()
