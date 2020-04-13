;(() => {
  const speechRecognitionAPI =
    window.speechRecognition || window.webkitSpeechRecognition
  const speechRecognition = new speechRecognitionAPI()
  const recordButton = document.querySelector('.control')

  const onClick = () => {
    const isPause = recordButton.classList.contains('record')

    if (isPause) {
      speechRecognition.start()
      recordButton.classList.remove('record')
      recordButton.classList.add('pause')
    } else {
      speechRecognition.stop()
      recordButton.classList.remove('pause')
      recordButton.classList.add('record')
    }
  }

  const onResult = (event) => {
    const { transcript } = event.results[0][0]
    const text = document.querySelector('.text')

    text.innerText += transcript
  }

  const onEnd = () => {
    const isRecord = recordButton.classList.contains('pause')

    if (isRecord) {
      speechRecognition.start()
    }
  }

  const run = () => {
    speechRecognition.lang = 'th-TH'

    speechRecognition.addEventListener('result', onResult)
    speechRecognition.addEventListener('end', onEnd)
    recordButton.addEventListener('click', onClick)
  }

  run()
})()
