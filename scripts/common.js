const heroBnr = document.querySelector('.hero_bnr'); //히어로배너슬라이드
const header = document.querySelector('header'); //헤더 스크롤
const gnb = document.querySelectorAll('#gnb >li'); //메인메뉴
const bestBnr = document.querySelector('.best_list'); //베스트탭슬라이드
const top_bnr_c = document.querySelector('.top_bnr .close'); //띠배너 닫기버튼

top_bnr_c.addEventListener('click',function(){ //띠배너 닫기
    top_bnr_c.parentNode.style.display = 'none';
})

const bestSwiper = new Swiper(bestBnr,{ //베스트 슬라이드
    loop:true,
    slidesPerView:3,
    spaceBetween: 84,
    autoplay:{delay:3000,},
    navigation:{
        nextEl:'.best_list ~ .next',
        prevEl:'.best_list ~ .prev',
    },
    pagination:{
        el: '.best_list ~ .best_pg',
        type: 'fraction',
        renderFraction:function(current, total){
            let customPg = `<span class=${current}></span>`
            return customPg;
        },
        formatFractionCurrent: function(number){ //현재페이지에 0붙이는 법
            return number < 10 ? '0'+number : number; //number(현재페이지)가 10보다 작으면 0을 붙이고, 아니면(:) 그냥 내보내기
        }
    }
})

for (let i=0; i<gnb.length; i++){//메인+서브메뉴
    const subMenu = gnb[i].querySelector('.gnb_2depth');
    const gnbA = gnb[i].querySelector('a');
    gnb[i].addEventListener('mouseover',function(){
        if(gnbA) gnbA.classList.add('active');
        if(subMenu) subMenu.style.display = 'flex';
    });
    gnb[i].addEventListener('mouseout',function(){
        if(gnbA) gnbA.classList.remove('active');
        if(subMenu) subMenu.style.display = 'none';
    });
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