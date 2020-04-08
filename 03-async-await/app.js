;(() => {
  // Helper
  const asyncWithCallback = (text, timeout, callback) => {
    setTimeout(() => {
      console.log(text)

      if (callback) {
        callback()
      }
    }, timeout)
  }

  const asyncWithPromise = (text, timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === 'B') return reject('B got rejected.')

        console.log(text)
        resolve()
      }, timeout)
    })
  }

  // 1.Callback
  asyncWithCallback('A', 2000, () => {
    asyncWithCallback('B', 1000, () => {
      asyncWithCallback('C', 500, () => {})
    })
  })

  // 2.Promise
  asyncWithPromise('A', 2000)
    .then(() => asyncWithPromise('B', 1000))
    .then(() => asyncWithPromise('C', 500))
    .catch((error) => console.error(error))

  // 3.Async/Await
  const run = async () => {
    try {
      await asyncWithPromise('A', 2000)
      await asyncWithPromise('B', 1000)
      await asyncWithPromise('C', 500)
    } catch (error) {
      console.error(error)
    }
  }
  run()
})()
