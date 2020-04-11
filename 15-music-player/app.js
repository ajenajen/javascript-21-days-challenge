;(() => {
  const audio = document.querySelector('audio')
  const playButton = document.querySelector('.play')
  const startTime = document.querySelector('.start-time')
  const endTime = document.querySelector('.end-time')
  const progressBar = document.querySelector('.progress-bar')

  const onClick = () => {
    if (audio.paused) {
      audio.play()
      playButton.className = 'pause'
    } else {
      audio.pause()
      playButton.className = 'play'
    }
  }

  const getDuration = (time) => {
    const minute = Math.floor(time / 60)
    const second = Math.floor(time % 60)
      .toString()
      .padStart(2, '0')

    return `${minute}:${second}`
  }

  const onTimeUpdate = () => {
    startTime.innerText = getDuration(audio.currentTime)
    progressBar.value = audio.currentTime
  }

  const onLoadedData = () => {
    endTime.innerText = getDuration(audio.duration)
    progressBar.max = audio.duration
  }

  const onInput = () => {
    audio.currentTime = progressBar.value
  }

  const onEnded = () => {
    playButton.className = 'play'
    audio.currentTime = 0
  }

  const run = () => {
    playButton.addEventListener('click', onClick)

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('loadeddata', onLoadedData)
    audio.addEventListener('ended', onEnded)

    progressBar.addEventListener('input', onInput)
  }

  run()
})()
