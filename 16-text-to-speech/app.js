;(() => {
  const message = new SpeechSynthesisUtterance()

  const onClick = (event) => {
    message.text = event.target.getAttribute('alt')
    speechSynthesis.speak(message)
  }

  const onVoiceChanged = () => {
    const voices = speechSynthesis.getVoices()
    const thVoice = voices.find((voice) => voice.lang === 'th-TH')
    message.voice = thVoice
  }

  const run = () => {
    speechSynthesis.addEventListener('voiceschanged', onVoiceChanged)

    const images = Array.from(document.querySelectorAll('img'))
    images.map((image) => {
      image.addEventListener('click', onClick)
    })
  }

  run()
})()
