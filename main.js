if (window.innerWidth < 768){
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
});
}

const btn = document.querySelector('.btn-more')
const btnText = btn.querySelector('.btn-text')
const section = document.querySelector('.section__content')
const rotateIcon = btn.querySelector('.btn-icon')
btn.addEventListener('click', function () {
    if (btnText.textContent === 'Показать все'){
        btnText.textContent = 'Скрыть'
        section.classList.add('section__content--all')
        rotateIcon.classList.add('btn-icon--rotate')
    } else {
        btnText.textContent = 'Показать все'
        section.classList.remove('section__content--all')
        rotateIcon.classList.remove('btn-icon--rotate-top')
        rotateIcon.classList.remove('btn-icon--rotate')
    }
    
})