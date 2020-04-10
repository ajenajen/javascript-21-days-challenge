;(() => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const createDucks = () => {
    return [...Array(5)].map(() => {
      return {
        x: random(0, window.innerWidth),
        y: window.innerHeight,
        speedX: random(-50, 50),
        speedY: random(10, 30),
      }
    })
  }

  const getDuckBackgroundImage = (duck, duckElement) => {
    const direction = duck.speedX > 0 ? 'right' : 'left'
    return duckElement.style.backgroundImage.indexOf('1') !== -1
      ? `url('./${direction}-2.png')`
      : `url('./${direction}-1.png')`
  }

  const setupDuckElement = (duck) => {
    const duckElement = document.createElement('div')
    duckElement.className = 'duck'
    duckElement.style.left = `${duck.x}px`
    duckElement.style.top = `${duck.y}px`
    duckElement.style.backgroundImage = `url('./left-1.png')`
    document.body.appendChild(duckElement)

    return { duck, duckElement }
  }

  const moveDuck = (duck, duckElement) => {
    const { left, top } = duckElement.getBoundingClientRect()
    duck.x = left + duck.speedX
    duck.y = top - duck.speedY

    duckElement.style.left = `${duck.x}px`
    duckElement.style.top = `${duck.y}px`
    duckElement.style.backgroundImage = getDuckBackgroundImage(
      duck,
      duckElement,
    )

    const isOutOfBoundX = duck.x < 0 || duck.x > window.innerWidth
    const isOutOfBoundY = duck.y < 0 || duck.y > window.innerHeight

    if (isOutOfBoundX) {
      duck.speedX *= -1
    }

    if (isOutOfBoundY) {
      duck.speedY *= -1
    }
  }

  const shootDuck = (event) => {
    event.target.style.transition = `top 2s`
    event.target.style.top = `${window.innerHeight}px`
    clearInterval(event.target.interval)
    setTimeout(() => {
      document.body.removeChild(event.target)
      const numberOfDucks = document.querySelectorAll('.duck').length

      if (numberOfDucks === 0) {
        const winningElement = document.querySelector('.winning')
        winningElement.style.opacity = 1
      }
    }, 2000)
  }

  const run = () => {
    const ducks = createDucks()
    const duckElements = ducks.map(setupDuckElement)
    duckElements.map(({ duck, duckElement }) => {
      duckElement.interval = setInterval(() => moveDuck(duck, duckElement), 150)
      duckElement.addEventListener('click', shootDuck)
    })
  }

  run()
})()
