function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
  console.log(audio)
  if (!audio) return //stop the function from running all together
  audio.currentTime = 0 // rewind to start
  audio.play()
  console.log(key)
  key.classList.add('playing')
}
function removeTransition(event) {
  console.log(event)
  if (event.propertyName !== 'transform') return // skip it if it's not a transform
  console.log(this)
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
console.log(keys)
window.addEventListener('keydown', playSound)
