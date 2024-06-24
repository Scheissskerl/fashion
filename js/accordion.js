document.querySelectorAll('.cards-right__accordion').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll('.cards-right__categories--drop-down-list').forEach((el) => el.style.maxHeight = null)

    } else {
      document.querySelectorAll('.cards-right__categories--drop-down-list').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})
