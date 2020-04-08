;(() => {
  const SECOND = 1000
  const MINUTE = SECOND * 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24

  const setElementInnerText = (id, text) => {
    const element = document.getElementById(id)
    element.innerText = text
  }

  const countdown = () => {
    const now = new Date().getTime()
    const newYear = new Date(2021, 0, 1).getTime()
    const timeUntilNewYear = newYear - now

    setElementInnerText('days', Math.floor(timeUntilNewYear / DAY))
    setElementInnerText('hours', Math.floor((timeUntilNewYear % DAY) / HOUR))
    setElementInnerText(
      'minutes',
      Math.floor((timeUntilNewYear % HOUR) / MINUTE),
    )
    setElementInnerText(
      'seconds',
      Math.floor((timeUntilNewYear % MINUTE) / SECOND),
    )
  }

  const run = () => {
    countdown()
    setInterval(countdown, SECOND)
  }

  run()
})()
