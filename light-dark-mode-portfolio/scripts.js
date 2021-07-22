const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})