const buttonOpen = document.querySelector('.btn.open'),
    buttonClose = document.querySelector('.btn.close'),
    modal = document.querySelector('.container');

buttonOpen.addEventListener('click', () => {
    modal.classList.add('show')
})

buttonClose.addEventListener('click', () => {
    modal.classList.remove('show')
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show')
    }
    else {
        return false
    }
})  