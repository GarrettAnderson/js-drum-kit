

// user is able to click on letter keyboard button to play a sound

let dataAttributeValue = [];
let audioDataAttributeValue;
let audioFile;

let allKeys = document.querySelectorAll('.key')
console.log(allKeys)

let audioDataKeys = document.querySelectorAll('audio[data-key]')
console.log(audioDataKeys)


function keyPressed(event) {
  // console.log('testing')
  console.log(event)
  console.log(event.keyCode)
  // console.log(dataAttributeValue)
  // console.log(audioDataAttributeValue)
  // console.log(audioFile)

  for (var i = 0; i < audioDataKeys.length; i++) {

      console.log(audioDataKeys[i])
      let audio = audioDataKeys[i]

      //     console.log(audio)
      // Retrive the data-key values from the audio elements and assign to variable
      let audioDataKeyValue = parseInt(audio.getAttribute('data-key'))
      //
      console.log(audioDataKeyValue, event.keyCode)

      if (audioDataKeyValue == event.keyCode) {
        console.log('special key pressed')
        audio.play()
      } else {
        console.log('non special key')
      }
    }
  }

document.addEventListener('keydown', keyPressed, true)






























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
