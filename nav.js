const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.nav-bar')

toggle.addEventListener('click', () =>{
    toggle.classList.toggle('open')
    navigation.classList.toggle('open')
})

// $('.toggle').on('click', function (event) {
//     $('.nav-bar').slideToggle('200');
//     $('.toggle-open').toggleClass('open');
//     $('.toggle-close').toggleClass('close');
// })