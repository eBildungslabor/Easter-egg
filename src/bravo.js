(function(window){

  "use strict"

  // type 'katze' on your keyboard
  let key = [75,65,84,90,69]
  let ck = 0
  let max = key.length

  let bravo = function () {

    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '374px'
    img.style.height = '500px'
    img.style.transition = '1s all'
    img.style.position = 'fixed'
    img.style.left = '-374px'
    img.style.bottom = 'calc(-50% + 450px)'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    window.setTimeout(function(){
      img.style.left = 'calc(50% - 187px)'

      // $('body').css('background', 'salmon')

    },50)

    window.setTimeout(function(){
      img.style.left = 'calc(120% + 375px)'

      // $('body').css('background', 'transparent')

    }, 2300)
    window.setTimeout(function(){
      img.parentNode.removeChild(img)


    }, 4300)

  };

  let record = function(e) {

    if ( e.which === key[ck] ) {
      ck++
    } else {
      ck = 0
    }

    if ( ck >= max ) {
      bravo()
      ck = 0
    }

  };

  let init = function (data) {
    document.addEventListener('keyup', record)
  };

  let data = 'https://media.giphy.com/media/l0IygWpszunxnkMAo/giphy.gif'

  init(data)

})(window)
