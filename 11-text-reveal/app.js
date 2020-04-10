;(() => {
  const onScroll = () => {
    const sections = Array.from(document.querySelectorAll('.section'))

    sections.map((section) => {
      const image = section.querySelector('.image')
      const text = section.querySelector('.text')

      const revealPosition = image.offsetTop + image.offsetHeight / 10

      if (window.pageYOffset > revealPosition) {
        text.classList.add('reveal')
      }
    })
  }

  const run = () => {
    document.addEventListener('scroll', onScroll)
  }

  run()
})()
