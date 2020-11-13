

// user is able to click on letter keyboard button to play a sound

let dataAttributeValue;
let audioDataAttributeValue;
let audioFile;

function keyPressed(event) {
  // console.log('testing')
  console.log(event)
  console.log(dataAttributeValue)
  console.log(audioDataAttributeValue)
  console.log(audioFile)

  // If the data-key value of a letter elements is equal to the data-key value of the audio elements, play that specific audio file

  if (dataAttributeValue = audioDataAttributeValue) {
    console.log('play the audio file')
    audioFile.play()
  } else (
    console.log('no audio file to play')
  )
}

let allKeys = document.querySelectorAll('.key')
console.log(allKeys)

// currentKey.addEventListener('click', keyPressed)

let audioDataKeys = document.querySelectorAll('audio[data-key]')
console.log(audioDataKeys)

allKeys.forEach (
  function (keyInAllKeys) {

    document.addEventListener('keydown', keyPressed)

      console.log(keyInAllKeys)

    var dataKeyValue = keyInAllKeys.getAttribute('data-key')

    dataAttributeValue = dataKeyValue
  }
)

audioDataKeys.forEach (
  function (audio) {
    console.log(audio)

    var audioDataKeyValue = audio.getAttribute('data-key')

    audioDataAttributeValue = audioDataKeyValue
    audioFile = audio
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
