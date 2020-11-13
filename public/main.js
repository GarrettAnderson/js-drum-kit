

// user is able to click on letter keyboard button to play a sound


function keyPressed(event) {
  console.log('testing')
  console.log(event)


}

let allKeys = document.querySelectorAll('.key')
console.log(allKeys)
// currentKey.addEventListener('click', keyPressed)

let dataKey = document.querySelectorAll('audio')

allKeys.forEach(
  function (keyInAllKeys) {
    document.addEventListener('keydown', keyPressed)
    console.log(keyInAllKeys)

  }
)































// ============================
// ============================


// function playSound(event) {
//   const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
//   const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
//   console.log(audio)
//   if (!audio) return //stop the function from running all together
//   audio.currentTime = 0 // rewind to start
//   audio.play()
//   console.log(key)
//   key.classList.add('playing')
// }
// function removeTransition(event) {
//   console.log(event)
//   if (event.propertyName !== 'transform') return // skip it if it's not a transform
//   console.log(this)
//   this.classList.remove('playing')
// }
//
// const keys = document.querySelectorAll('.key')
// keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
// console.log(keys)
// window.addEventListener('keydown', playSound)
