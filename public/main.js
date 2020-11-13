

// user is able to click on letter keyboard button to play a sound

let dataAttributeValue = [];
let audioDataAttributeValue;
let audioFile;


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


      // Assign data-key values of the audio elements and assign that value to a global variable
      // audioDataAttributeValue = audioDataKeyValue

      // Assign audio element to global variable to be used in keyPressed()
      // audioFile = audioDataAttributeValue



  // If the data-key value of a letter elements is equal to the data-key value of the audio elements, play that specific audio file

//   if (event.keyCode == audioDataAttributeValue) {
//     console.log('play the audio file')
//     audioFile.play()
//   } else {
//     console.log('no audio file to play')
//   }
}

let allKeys = document.querySelectorAll('.key')
console.log(allKeys)


// currentKey.addEventListener('click', keyPressed)

let audioDataKeys = document.querySelectorAll('audio[data-key]')
console.log(audioDataKeys)


// allKeys.forEach (
//   function (keyInAllKeys) {
//
//       console.log(keyInAllKeys)
//
//     var dataKeyValue = keyInAllKeys.getAttribute('data-key')
//
//     dataAttributeValue = dataKeyValue
//   }
// )


// audioDataKeys.forEach (
//   function (audio) {
//     console.log(audio)
//
//     // Retrive the data-key values from the audio elements and assign to variable
//     let audioDataKeyValue = audio.getAttribute('data-key')
//
//     console.log(audioDataKeyValue)
//
//     // Assign data-key values of the audio elements and assign that value to a global variable
//     audioDataAttributeValue = audioDataKeyValue
//
//     // Assign audio element to global variable to be used in keyPressed()
//     audioFile = audioDataAttributeValue
//   }
// )

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
