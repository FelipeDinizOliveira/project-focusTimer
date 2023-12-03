let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode')
const mode = darkMode ? 'light' : 'dark'

buttonToggle.addEventListener('click', (event) =>{
document.documentElement.classList.toggle('light')
event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

darkMode = !darkMode
})