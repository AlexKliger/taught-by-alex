function toggleHeader() {
    document.body.classList.contains('header-hidden')
    ?
    document.body.classList.remove('header-hidden')
    :
    document.body.classList.add('header-hidden')
}

function matchMediaQuery(query) {
    mediaQuery.match
    ?
    document.body.classList.remove('header-hidden')
    :
    document.body.classList.add('header-hidden')
}

const header = document.querySelector('header')
const toggleButton = document.querySelector('.header-toggle')
const opaqueOverlay = document.querySelector('.opaque-overlay')
const mediaQuery = window.matchMedia('(max-width: 1600px')
// Add header-hidden class to header at run time if media query matches.
matchMediaQuery(mediaQuery)
// Attach listener for state changes.
mediaQuery.addEventListener('change', matchMediaQuery)
// Attach listener for toggle button.
toggleButton.addEventListener('click', toggleHeader)
// Attach listener to opaque overlay so that anywhere toggles the header.
opaqueOverlay.addEventListener('click', toggleHeader)
// Attach listener so that clicking anywhere on header toggles the header.
header.addEventListener('click', toggleHeader)
