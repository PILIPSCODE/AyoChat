const backchat = document.querySelectorAll('.backchat')
const backchatprof = document.querySelector('.backchatprof')
const containerProfile = document.querySelector('.tot')

backchatprof.addEventListener("click",() => {
    nav.style.display = "block"
    roomlist.style.display = "block"
    get()
    konchat.style.display ="none"
    containerProfile.style.display = "none"
    navClose.style.display = "none"
    transisi.forEach((e) => {
        e.classList.toggle('transisi')
    })
})

backchat.forEach((e) => {
    e.addEventListener('click',() => {
        nav.style.display = "block"
        roomlist.style.display = "block"
        get()
        konchat.style.display ="none"
        containerProfile.style.display = "none"
    })
})
