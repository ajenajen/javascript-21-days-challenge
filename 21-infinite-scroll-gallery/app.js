;(() => {
  const KEY = ''
  let page = 1

  const showLoader = () => {
    const loader = document.querySelector('.loader')
    loader.classList.add('visible')
  }

  const hideLoader = () => {
    const loader = document.querySelector('.loader')
    loader.classList.remove('visible')
  }

  const displayImages = async () => {
    try {
      showLoader()
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=${KEY}&page=${page}`,
      )
      const images = await response.json()

      const gallery = document.querySelector('.gallery')

      images.map((image) => {
        const img = document.createElement('img')
        img.src = image.urls.small
        gallery.appendChild(img)
      })
      hideLoader()
      page++
    } catch (error) {
      hideLoader()
      console.error(error)
    }
  }

  const onScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight > scrollHeight - 10) {
      displayImages()
    }
  }

  const run = () => {
    displayImages()
    document.addEventListener('scroll', onScroll)
  }

  run()
})()
