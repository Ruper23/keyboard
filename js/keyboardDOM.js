import keycapsArr from './keyData/keyData.js'


const createDom = lang => {

   const body = document.querySelector('body')
   const wrap = document.createElement('div')
   const textArea = document.createElement('textarea')
   const keyBoardWrap = document.createElement('div')
   const keyBoard = document.createElement('div')
   const logoLine = document.createElement('div')
   const logo = document.createElement('div')
   const displayFlipp = document.createElement('div')
   const back = document.createElement('div')
   const display = document.createElement('div')
   const reloading = document.createElement('div')
   const powerBtn = document.createElement('div')
   const img = document.createElement('img')


   wrap.className = 'wrap'
   body.prepend(wrap)
   textArea.className = 'textarea'
   displayFlipp.className = 'display-flipp'
   back.className = 'back'
   display.className = 'display'
   display.classList.add('off')
   reloading.className = 'reloading'
   powerBtn.className = 'power-btn'
   keyBoardWrap.className = 'keyboard-wrap'
   keyBoard.className = 'keyboard'
   img.src = 'img/logo.png'
   back.append(img)
   display.append(reloading, textArea)
   displayFlipp.append(back, display)
   keyBoardWrap.append(powerBtn, keyBoard)
   wrap.append(displayFlipp, keyBoardWrap)


   for (let i = 0; i < keycapsArr.length; i++) {
      let line = document.createElement('div')
      line.className = `line-${i + 1}`
      keyBoard.appendChild(line)

      keycapsArr[i].map(elem => {
         let keyCap = document.createElement('div')
         const paragraph = document.createElement('p')
         keyCap.className = 'keycap'
         keyCap.classList.add(elem.code)
         paragraph.textContent = elem.key[`${lang}`]
         keyCap.setAttribute('data-key', elem.keyCode)
         keyCap.append(paragraph)
         line.append(keyCap)
      })

   }

   logoLine.className = 'logo-line'
   logo.className = 'logo'
   logoLine.appendChild(logo)
   keyBoard.appendChild(logoLine)


}
export default createDom
