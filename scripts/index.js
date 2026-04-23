/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */

const heroBnr = document.querySelector('.hero_bnr'); //히어로배너슬라이드
const bestBnr = document.querySelector('.best_list'); //베스트탭슬라이드
const styleList = document.querySelector('.style_list'); //스타일탭슬라이드
const dislist = document.querySelector('.discover_list'); //디스커버탭슬라이드
const locMap = document.querySelector('.location .contents_right iframe'); //로케이션 지도
const locList = document.querySelectorAll('.location .map_list');
const locBtn = document.querySelectorAll('.show_loc'); //로케이션 위치버튼
const locMapList = 
    ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.641881763704!2d126.9664599764049!3d37.53993832565199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca213751c7947%3A0x5ae8e8f22f9a4681!2zKOyjvCnsnKDri4nsiqQg7ISc7Jq47KeA7KCQ!5e0!3m2!1sko!2skr!4v1775805707472!5m2!1sko!2skr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.427583140316!2d126.62179297640753!3d37.615628821310644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c7fd6ae3a2bf1%3A0xb7ddeca6b719367d!2z7Jyg64uJ7IqkIOq5gO2PrEFT7IS87YSw!5e0!3m2!1sko!2skr!4v1775805793824!5m2!1sko!2skr",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.460672843841!2d129.1082241763265!3d35.17006905788331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35689329b2724abf%3A0x89a6c8dad1788470!2z7Jyg64uJ7IqkIOu2gOyCsEFT7IS87YSw!5e0!3m2!1sko!2skr!4v1775805836329!5m2!1sko!2skr"
    ] //로케이션 지도 리스트

locBtn.forEach((i,num) => { //i,num 매개변수 생성. i=각각의 내용, num=해당하는 index 숫자
    i.addEventListener('click',function(){ //클릭 이벤트 활성화
        locBtn.forEach((el) => {
            console.log(el);
            el.classList.remove('active');}) //locBtn에 매개변수 el 생성, locBtn의 active 클래스를 모두 지움(el로 하나씩 다 잡아서 지움)
    i.classList.add('active'); // 클릭한 i(에 해당되는 실제 태그)에 클래스 붙임
    locMap.src=locMapList[num]; //지도의 src 속성에 num을 대입. num <= i의 index 순서를 대입하여 해당되는 주소만 가져오기
    })
})

const disSwiper = new Swiper(dislist,{ //디스커버 슬라이드
    loop:true,
    autoplay:{delay:3000,},
    speed:1000,
    pagination:{
        el: '.discover_list + .pg',
        type: 'progressbar',
    },
})

const styleSwiper = new Swiper(styleList,{ //스타일 슬라이드
    loop:true,
    slidesPerView:1.5,
    spaceBetween:40,
    autoplay:{delay:0,},
    speed:4000,
    breakpoints:{
        486: {
            slidesPerView:2.5,
        },
        1440: {
            slidesPerView:3,
        },
    }
})

const bestSwiper = new Swiper(bestBnr,{ //베스트 슬라이드
    loop:true,
    slidesPerView:1,
    breakpoints:{
        840: {slidesPerView:2,
            spaceBetween: 30,
        },
        1240: {
            slidesPerView:3,
            spaceBetween: 30,
        },
    },
    
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