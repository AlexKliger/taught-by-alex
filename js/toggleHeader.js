function toggleHeader() {
    header.classList.contains('is-hidden')
    ?
    header.classList.remove('is-hidden')
    :
    header.classList.add('is-hidden')
}

function matchMediaQuery(query) {
    mediaQuery.match
    ?
    header.classList.remove('is-hidden')
    :
    header.classList.add('is-hidden')
}

const toggle = document.querySelector('.header-toggle')
const header = document.querySelector('header')
const mediaQuery = window.matchMedia('(max-width: 1600px')
// Add is-hidden class to header at run time if media query matches.
matchMediaQuery(mediaQuery)
// Attach listener for state changes.
mediaQuery.addEventListener("change", matchMediaQuery)
// Attach listener for toggle button.
toggle.addEventListener('click', toggleHeader)
