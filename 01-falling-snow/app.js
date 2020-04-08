;(() => {
  const setup = () => {
    const canvas = document.getElementById('falling-snow')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    return {
      canvas,
      canvasContext: canvas.getContext('2d'),
      numberOfSnowBalls: 250,
    }
  }

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const createSnowBalls = (canvas, numberOfSnowBalls) => {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4),
        speedX: random(-5, 5),
        speedY: random(1, 3),
      }
    })
  }

  const drawSnowBall = (snowball, canvasContext) => {
    canvasContext.beginPath()
    canvasContext.arc(snowball.x, snowball.y, snowball.radius, 0, Math.PI * 2)
    canvasContext.fillStyle = `rgba(255, 255, 255, ${snowball.opacity})`
    canvasContext.fill()
  }

  const moveSnowBall = (snowBall, canvas) => {
    snowBall.x += snowBall.speedX
    snowBall.y += snowBall.speedY

    if (snowBall.x < 0) {
      snowBall.x = canvas.width
    } else if (snowBall.x > canvas.width) {
      snowBall.x = 0
    }

    if (snowBall.y > canvas.height) {
      snowBall.y = 0
    }
  }

  const run = () => {
    const { canvas, canvasContext, numberOfSnowBalls } = setup()
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls)

    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height)
      snowBalls.map((snowBall) => drawSnowBall(snowBall, canvasContext))
      snowBalls.map((snowBall) => moveSnowBall(snowBall, canvas))
    }, 50)
  }

  run()
})()
