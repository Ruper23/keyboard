
export const laptopEmulator = () => {
   document.querySelector('img').addEventListener('click', () => {
      flipp.classList.add('active')
      document.querySelector('.display').classList.add('active')

   })
   document.querySelector('.power-btn').addEventListener('click', () => {
      document.querySelector('.power-btn').classList.toggle('active')
      document.querySelector('.textarea').classList.toggle('active')
      document.querySelector('.reloding').classList.add('active')
      setTimeout(() => {
         document.querySelector('.reloding').classList.remove('active')
      }, 2100)
      for (var i = 0; i < keyCapBtn.length; i++) {
         keyCapBtn[i].classList.toggle('on')
      }
      if (document.querySelector('.power-btn').classList.contains('active') !== true) {
         setTimeout(() => {
            flipp.classList.remove('active')
            document.querySelector('.display').classList.remove('active')
         }, 2500)
      }

      /*	document.querySelectorAll('.keycap').forEach(elem => {
            elem.classList.add('active')
         })*/
   })
}
