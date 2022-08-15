const nextSlide = () => {
    const currentSlide = document.querySelector('.slide.current')
    currentSlide.classList.remove('current')
    if (currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.classList.add('current')
    } else {
        document.querySelector('.slide1').classList.add('current')
    }
}

const previousSlide = () => {
    const currentSlide = document.querySelector('.slide.current')
    currentSlide.classList.remove('current')
    if (currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.classList.add('current')
    } else {
        document.querySelector('.slide3').classList.add('current')
    }
}

document.getElementById('arrow-right').addEventListener('click', nextSlide)
document.getElementById('arrow-left').addEventListener('click', previousSlide)

// const auto = true
if (auto) {
    setInterval(nextSlide, 5000)
}

