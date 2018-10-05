document.addEventListener('DOMContentLoaded', function() {
  let options = document.querySelectorAll('.option')
  options.forEach(function (option) {
    option.addEventListener('click', function() {

      removeClass('.option', 'active')
      option.classList.add('active')

      let time = option.dataset.time
      let element = document.querySelector('.time')
      element.classList.remove('day')
      element.classList.remove('night')
      element.classList.remove('dusk')
      element.classList.remove('sunset')
      element.classList.add(time)
    })
  })
})

function addClass(selector, className) {
  let selectors = document.querySelectorAll(selector)
  selectors.forEach(function (selector) {
    selector.classList.add(className)
  })
}

function removeClass(selector, className) {
  let selectors = document.querySelectorAll(selector)
  selectors.forEach(function (selector) {
    selector.classList.remove(className)
  })
}
//
// DOMTokenList.prototype.add = function(classes) {
//   var array = classes.split(' ');
//   for (var i = 0, length = array.length; i < length; i++) {
//     this.add(array[i]);
//   }
// }
