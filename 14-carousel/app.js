;(() => {
  let currentIndex = 0

  const displayImage = (images, newIndex) => {
    const lastIndex = images.length - 1

    if (newIndex < 0) {
      newIndex = lastIndex
    } else if (newIndex > lastIndex) {
      newIndex = 0
    }

    images[newIndex].scrollIntoView({ behavior: 'smooth' })

    currentIndex = newIndex
  }

  const run = () => {
    const images = document.querySelectorAll('img')
    const previousButton = document.querySelector('.previous')
    const nextButton = document.querySelector('.next')

    previousButton.addEventListener('click', () =>
      displayImage(images, currentIndex - 1),
    )
    nextButton.addEventListener('click', () =>
      displayImage(images, currentIndex + 1),
    )
  }

  run()
})()
