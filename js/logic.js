import createDom from "./keyboardDOM.js"
import keycapsArr from "./keyData/keyData.js"
import { changeLang } from "./changeLang.js"
const langs = ['en', 'ru']
let lang = langs[0]


/* LocalStorage */
function setLocalStorage() {
   localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
   if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
   }
}
window.addEventListener('load', getLocalStorage);

/* keyboard Logic */
const logic = () => {
   createDom(lang)

   const board = document.querySelector('.keyboard')
   const textAreaInput = document.querySelector('textarea')

   /* Laptop animation  */
   const flipp = document.querySelector('.display-flipp')
   const keyCapBtn = document.querySelectorAll('.keycap')

   document.querySelector('img').addEventListener('click', () => {
      flipp.classList.add('active')
      document.querySelector('.display').classList.add('active')
   })
   document.querySelector('.power-btn').addEventListener('click', () => {
      document.querySelector('.power-btn').classList.toggle('active')
      document.querySelector('.textarea').classList.toggle('active')
      document.querySelector('.reloading').classList.add('active')
      let delLastChar = textAreaInput.value.substring(0, textAreaInput.value.length - textAreaInput.value.length)
      textAreaInput.textContent = delLastChar
      setTimeout(() => {

         document.querySelector('.reloading').classList.remove('active')
      }, 2100)
      for (let i = 0; i < keyCapBtn.length; i++) {
         keyCapBtn[i].classList.toggle('powered')
      }
      if (document.querySelector('.power-btn').classList.contains('active') !== true) {
         setTimeout(() => {
            flipp.classList.remove('active')
            document.querySelector('.display').classList.remove('active')
         }, 2500)
      }
   })

   /* Mouse events */
   board.addEventListener('mousedown', e => {
      textAreaInput.focus()
      e.preventDefault()
      e.stopPropagation()
      e.target.classList.add('active')
      let char = e.target.dataset.key
      let currKey = keycapsArr.flatMap((array) => array).find((item) => item.keyCode == char)
      e.target.addEventListener('mouseup', () => {
         e.target.classList.remove('active')
      })
      e.target.addEventListener('mouseleave', () => {
         e.target.classList.remove('active')
      })
      if (char == 16 || char == 17 || char == 18 || char == 91 || char == 8) {
         return
      }
      if (char == 13) {
         textAreaInput.textContent += '\n'
         return
      }
      if (char == 9) {
         textAreaInput.textContent += '   '
         return
      }
      if (char == 46) {
         let delLastChar = textAreaInput.value.substring(0, textAreaInput.value.length - textAreaInput.value.length)
         textAreaInput.textContent = delLastChar
         textAreaInput.selectionStart = textAreaInput.selectionEnd = textAreaInput.value.length;
         return
      }
      if (char == 20) {
         document.querySelector('.capslock').classList.toggle('on')
         return
      }
      if (document.querySelector('.capslock').classList.contains('on')) {
         textAreaInput.textContent += currKey.key[`${lang}`].toUpperCase()
      }
      else {
         textAreaInput.textContent += currKey.key[`${lang}`].toLowerCase()
      }
      textAreaInput.selectionStart = textAreaInput.selectionEnd = textAreaInput.value.length;
   })

   /* Keyboard Events */
   document.addEventListener('keydown', e => {
      let arrayItem = keycapsArr.flatMap((array) => array).find((item) => item.keyCode == e.keyCode)
      e.preventDefault()
      e.stopPropagation()
      let btnPressed = document.querySelector(`[data-key="${e.keyCode}"]`)
      btnPressed.classList.add('active')
      textAreaInput.focus()
      /* Lang switch */
      if (e.shiftKey == true && e.altKey == true) {
         let index = langs.indexOf(lang)
         index++
         lang = langs[index % langs.length]
         changeLang(lang)
         // document.querySelector('.lang').value = lang
      }
      /*backspace func */
      if (e.keyCode == 8) {
         let delLastChar = textAreaInput.value.substring(0, textAreaInput.value.length - 1)
         textAreaInput.textContent = delLastChar
         textAreaInput.selectionStart = textAreaInput.selectionEnd = textAreaInput.value.length;
      }
      if (e.keyCode == 20) {
         document.querySelector('.capslock').classList.toggle('on')
         return
      }
      if (e.keyCode == 13) {
         textAreaInput.textContent += '\n'
      }
      if (e.keyCode == 9) {
         textAreaInput.textContent += String.fromCharCode(e.keyCode)
      }
      /* Delete func */
      if (e.keyCode == 46) {
         let delLastChar = textAreaInput.value.substring(0, textAreaInput.value.length - textAreaInput.value.length)
         textAreaInput.textContent = delLastChar
         return
      }
      if (e.key.length > 1) {
         return
      }
      /* Caps and shift func */
      if (document.querySelector('.capslock').classList.contains('on') || document.querySelector('.lshift').classList.contains('active')) {
         textAreaInput.textContent += arrayItem.key[`${lang}`].toUpperCase()
      }

      if (document.querySelector('.capslock').classList.contains('on') !== true && document.querySelector('.lshift').classList.contains('active') !== true) {
         textAreaInput.textContent += arrayItem.key[`${lang}`].toLowerCase()
      }
      textAreaInput.selectionStart = textAreaInput.selectionEnd = textAreaInput.value.length;
   })

   document.addEventListener('keyup', e => {
      let btnPressed = document.querySelector(`[data-key="${e.keyCode}"]`)
      btnPressed.classList.remove('active')
      textAreaInput.focus()
      textAreaInput.selectionStart = textAreaInput.selectionEnd = textAreaInput.value.length;
   })

   document.querySelector('.backspace').addEventListener('click', () => {
      let delLastChar = textAreaInput.value.substring(0, textAreaInput.value.length - 1)
      textAreaInput.textContent = delLastChar
      textAreaInput.selectionStart = textAreaInput.selectionEnd = textAreaInput.value.length;
   })



}

export default logic