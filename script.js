// Experience tabs
const tabs = document.querySelectorAll('.experience-tabs li')
const contents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all
    tabs.forEach(t => t.classList.remove('active'))
    contents.forEach(c => c.classList.remove('active'))

    // Add active to selected
    tab.classList.add('active')
    const panel = document.getElementById(tab.dataset.tab)
    if (panel) panel.classList.add('active')
  })
})


// Typing animation width fix (prevents "portfolio" being cut)
function setTypingWidth () {
  const typingEl = document.querySelector('.typing')
  if (!typingEl) return

  // Reset width to measure full text
  typingEl.style.width = 'auto'
  const fullWidth = typingEl.scrollWidth

  typingEl.style.setProperty('--typing-width', fullWidth + 'px')


  typingEl.style.width = '0px'
  typingEl.style.animation = 'none'

  void typingEl.offsetWidth
  typingEl.style.animation = ''
}

window.addEventListener('load', setTypingWidth)
window.addEventListener('resize', setTypingWidth)
