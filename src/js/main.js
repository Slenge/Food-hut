document.addEventListener('DOMContentLoaded', function () {
    new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 5000,
        refresh: true,
    })

    new ChiefSlider('.slider_2', {
        loop: true,
        autoplay: true,
        interval: 5000,
        refresh: true,
    })

    const menuOpenButton = document.querySelector('.menu__open')
    menuOpenButton.addEventListener('click', () => {
        const menuNavElement = document.querySelector('.menu__nav')
        menuNavElement.classList.toggle('show-menu')
    })
})

// ПОШЁЛ НАХУЙ JQUERY ЕБУЧИЙ
// $(function () {
//     $('.menu__open').click(function () {
//         $('.menu__nav').toggleClass('show-menu')
//     })
// });
