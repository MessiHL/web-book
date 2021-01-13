'use strict'

const body = document.body
const menu = document.querySelectorAll('.menu__item')
const menuBorder = document.querySelector('.menu__border')
let active
function offsetMenuBorder (box, menuBorder) {
  const left = Math.floor(box.left - menuBorder.closest('menu').offsetLeft - (menuBorder.offsetWidth - box.width) / 2) + 'px'
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`
}
function clickItem () {
  active = document.querySelector('button.active')

  if (active) {
    active.classList.remove('active')
  }

  this.classList.add('active')
  const box = this.getBoundingClientRect()

  active = this
  body.style.backgroundColor = active.style.getPropertyValue('--bgColorBody')

  offsetMenuBorder(box, menuBorder)
}

menu.forEach(item => {
  item.addEventListener('click', clickItem)
})
