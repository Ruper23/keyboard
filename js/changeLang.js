
import keycapsArr from "./keyData/keyData.js"


export const changeLang = lang => {
   const keyCap = document.querySelectorAll('.keycap p')
   keyCap.forEach(el => el.remove())
   const line1 = document.querySelector('.line-1')
   const line2 = document.querySelector('.line-2')
   const line3 = document.querySelector('.line-3')
   const line4 = document.querySelector('.line-4')
   const line5 = document.querySelector('.line-5')
   for (let i = 0; i < line1.children.length; i++) {
      const paragraph = document.createElement('p')
      paragraph.textContent = keycapsArr[0][i].key[`${lang}`]
      line1.children[i].append(paragraph)
   }
   for (let i = 0; i < line2.children.length; i++) {
      const paragraph = document.createElement('p')
      paragraph.textContent = keycapsArr[1][i].key[`${lang}`]
      line2.children[i].append(paragraph)
   }
   for (let i = 0; i < line3.children.length; i++) {
      const paragraph = document.createElement('p')
      paragraph.textContent = keycapsArr[2][i].key[`${lang}`]
      line3.children[i].append(paragraph)
   }
   for (let i = 0; i < line4.children.length; i++) {
      const paragraph = document.createElement('p')
      paragraph.textContent = keycapsArr[3][i].key[`${lang}`]
      line4.children[i].append(paragraph)
   }
   for (let i = 0; i < line5.children.length; i++) {
      const paragraph = document.createElement('p')
      paragraph.textContent = keycapsArr[4][i].key[`${lang}`]
      line5.children[i].append(paragraph)
   }
}