;(() => {
  const canvas = document.getElementById('painting')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const canvasContext = canvas.getContext('2d')

  let previousPoint = { x: 0, y: 0 }

  const getDistance = (previousPoint, currentPoint) => {
    return Math.sqrt(
      Math.pow(previousPoint.x - currentPoint.x, 2) +
        Math.pow(previousPoint.y - currentPoint.y, 2),
    )
  }

  const onMouseMove = ({ pageX, pageY }) => {
    const currentPoint = { x: pageX, y: pageY }

    canvasContext.beginPath()
    canvasContext.lineCap = 'round'
    canvasContext.lineJoin = 'round'

    const distance = getDistance(previousPoint, currentPoint)
    canvasContext.lineWidth = (Math.random() / distance) * 40

    const opacity = Math.min(0.5, 1 / distance)
    canvasContext.strokeStyle = `rgba(222, 10, 109, ${opacity})`

    canvasContext.moveTo(previousPoint.x, previousPoint.y)
    canvasContext.lineTo(currentPoint.x, currentPoint.y)
    canvasContext.stroke()

    canvasContext.closePath()
    previousPoint = currentPoint
  }

  const onMouseEnter = ({ pageX, pageY }) => {
    previousPoint.x = pageX
    previousPoint.y = pageY
  }

  const run = () => {
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseenter', onMouseEnter)
  }

  run()
})()
