window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  console.log(audio)
  if (!audio) return //stop the function from running all together
  audio.play()
})
