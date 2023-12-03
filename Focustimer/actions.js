import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
 
   timer.countdown()
   sounds.buttonPressAudio.play()
}
export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running');
    console.log('reset application');
    
}

export function toggleMusic(){
   console.log('music')
   state.isMute = document.documentElement.classList.toggle('MusicOn')
   if(state.isMute){
    sounds.bgAudio.play()
    return
   } else{
    sounds.bgAudio.pause()
   }
   
  
}
