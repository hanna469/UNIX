const heroBnr = document.querySelector('.hero_bnr'); //히어로배너슬라이드
const header = document.querySelector('header'); //헤더 스크롤
const gnb = document.querySelectorAll('#gnb >li'); //메인메뉴
const bestBnr = document.querySelector('.best_list'); //베스트탭슬라이드

const bestSwiper = new Swiper(bestBnr,{
    loop:true,
    slidesPerView:3,
})

for (let i=0; i<gnb.length; i++){//메인+서브메뉴
    const subMenu = gnb[i].querySelector('.gnb_2depth');
    if(subMenu){subMenu.style.display = 'none';
        gnb[i].addEventListener('mouseover',function(){
            subMenu.style.display = 'flex';
        });
        gnb[i].addEventListener('mouseout',function(){
            subMenu.style.display = 'none';
        });
    }
}

header.addEventListener('mouseover',function(){//헤더 마우스오버
    header.classList.add('on');
});
header.addEventListener('mouseout',function(){
    if(window.scrollY <= 5){header.classList.remove('on');}
});

window.addEventListener('scroll',function(){ //헤더 스크롤
    if (window.scrollY > 5) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
});

const heroSwiper = new Swiper(heroBnr,{ //히어로배너 슬라이드
    loop:true,
    autoplay:{delay:5000,},
    pagination: {
        el: '.hero_bnr .pg',
        type: 'progressbar',
    }
});