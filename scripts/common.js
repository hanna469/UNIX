const heroBnr = document.querySelector('.hero_bnr');
const header = document.querySelector('header');

console.log(heroBnr);

window.addEventListener('scroll',function(){
    if (window.scrollY > 5) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
});

const heroSwiper = new Swiper(heroBnr,{
    loop:true,
    autoplay:{delay:5000,},
    pagination: {
        el: '.hero_bnr .pg',
        type: 'progressbar',
    }
});