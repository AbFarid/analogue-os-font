const items = document.querySelectorAll('.display ul li:not(.disabled)')

const activate = item => {
  if (!('classList' in item)) item = item.target
  items.forEach(_item => _item.classList.remove('active'))
  item.classList.add('active')
}

const press = button => {
  
  const i = [...items].findIndex(item => item.classList.contains('active'))
  const [prev, next] = [items[i - 1], items[i + 1]]
  const { code } = button
  if (code == 'ArrowUp' && prev) {
    button.preventDefault()
    activate(prev)
  }
  if (code == 'ArrowDown' && next) {
    button.preventDefault()
    activate(next)
  }
}

items.forEach(item => item.addEventListener('mouseenter', activate))
items.forEach(item => item.addEventListener('click', activate))
window.addEventListener('keydown', press)