const clickDarkMode = document.getElementById('btnDarkMode')
const menuDarkMode = document.querySelector('.menuDarkMode')







clickDarkMode.addEventListener('click', function () {
    if (menuDarkMode.style.display === 'none') {
        menuDarkMode.style.display = 'flex'
    } else {
        menuDarkMode.style.display = 'none'

    }
})

function darkModeSelect() {
    const activeDarkMode = document.getElementById('darkModeSelect').checked
    const body = document.querySelector('body')

    if (activeDarkMode === false) {
        body.style.backgroundColor = '#35393d'

    } else (
        body.style.backgroundColor = 'white'
    )
}




