const heroBnr = document.querySelector('.hero_bnr'); //히어로배너슬라이드
const bestBnr = document.querySelector('.best_list'); //베스트탭슬라이드

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

const heroSwiper = new Swiper(heroBnr,{ //히어로배너 슬라이드
    loop:true,
    autoplay:{delay:5000,},
    pagination: {
        el: '.hero_bnr .pg',
        type: 'progressbar',
    }
});