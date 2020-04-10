;(() => {
  let draggingTask

  function onDragStart() {
    draggingTask = this
  }

  function onDrop() {
    this.append(draggingTask)
    draggingTask = null
  }

  const onDragOver = (event) => {
    event.preventDefault()
  }

  const onDragEnter = (event) => {
    event.preventDefault()
  }

  const run = () => {
    const tasks = Array.from(document.querySelectorAll('.task'))
    const dropZones = Array.from(document.querySelectorAll('.drop-zone'))

    tasks.map((task) => {
      task.addEventListener('dragstart', onDragStart)
    })

    dropZones.map((dropZone) => {
      dropZone.addEventListener('drop', onDrop)
      dropZone.addEventListener('dragover', onDragOver)
      dropZone.addEventListener('dragenter', onDragEnter)
    })
  }
  run()
})()
