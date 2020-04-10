;(() => {
  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ]
  let index = 0

  const onKeyDown = (event) => {
    event.key === konamiCode[index] ? index++ : (index = 0)

    if (konamiCode.length === index) {
      startSnowfall()
    }
  }

  const run = () => {
    document.body.addEventListener('keydown', onKeyDown)
  }

  run()
})()
