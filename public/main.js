window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
  console.log(audio)
  if (!audio) return //stop the function from running all together
  audio.currentTime = 0 // rewind to start
  audio.play()
  console.log(key)
  key.classList.add('playing')
})
