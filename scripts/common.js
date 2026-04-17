const top_bnr_c = document.querySelector('.top_bnr .close'); //띠배너 닫기버튼
const topBnr = document.querySelector('.topbnr_txt'); //띠배너 텍스트 슬라이드
const gnb = document.querySelectorAll('nav .gnb > li'); //메인메뉴
const header = document.querySelector('header'); //헤더 스크롤
const fabTopBtn = document.querySelector('.fab_btn .top_btn'); //플로팅버튼-top
const mHeaderBg = document.querySelector('#m_header_bg'); // 모바일용 헤더 배경
const mNav = mHeaderBg.querySelector('#m_nav'); // 모바일용 헤더
const gnbUl = document.querySelector('nav .gnb'); 
const gnbClone = gnbUl.cloneNode(true); //gnbUl 복제
mNav.appendChild(gnbClone); //mNav 자식으로 gnbClone 삽입
const mNavOpen = document.querySelector('#user_menu .m_nav_open'); //모바일 메뉴 열기
const mNavClose = mHeaderBg.querySelector('.close');
const mGnb = mHeaderBg.querySelectorAll('.gnb li');
const mLnb = mHeaderBg.querySelectorAll('.gnb .gnb_2depth'); //모바일 메뉴 lnb
console.log(mLnb,mGnb);

for (let i of mLnb){i.style.transition = 'height 0.3s';};
for (let i of mGnb){
    i.addEventListener('click',function(e){
        const mSubMenu = i.querySelector('.gnb_2depth');
        if(!mSubMenu) return;
        if (window.innerWidth <= 819){
            if(mSubMenu.style.height == `${mSubMenu.scrollHeight}px`){
            mSubMenu.style.height = '0';
            } else {
                mLnbHide();
                //height:max-content 숫자로 수치화한 속성=> scrollHeight
                mSubMenu.style.height = `${mSubMenu.scrollHeight}px`;
            }
        }
    })
}
function mLnbHide(){
    for (let i of mLnb){i.style.height = '0';}
}

// mGnbOpen.forEach((i) => { //모바일lnb 열기
//     const mSubMenu = i.querySelector('.gnb_2depth');
//     const mLnb = i.querySelector('a');
//     mLnb.addEventListener('click',function(e){
//         if (window.innerWidth <= 819){ //이 해상도 아래일때만 작동
//             if(mSubMenu.style.display == 'none' || mSubMenu.style.display == ''){
//                 e.preventDefault();
//                 mLnbClose();
//                 mSubMenu.style.display = 'flex';
//             } else {
//                 e.preventDefault();
//                 mSubMenu.style.display = 'none';
//             }
//         }
//     })
// })


const topBnrSwiper = new Swiper(topBnr,{ //띠배너 슬라이드
    loop: true,
    slidesPerView: 1,
    breakpoints:{
        500:{
            slidesPerView:1.5,
        },
        800:{
            slidesPerView:2,
        },
        1000:{
            slidesPerView:2.5,
        },
        1240:{
            slidesPerView:3,
        },
    },
    autoplay:{delay:0,},
    speed:8000,
})

mNavOpen.addEventListener('click', function(e){ //모바일 메뉴 열기
    e.preventDefault();
    header.classList.add('on','open'); //마우스오버,스크롤 상황에서 스타일 유지하도록 모바일 클래스 추가
    mHeaderBg.style.height = 100+'vh';
})
mNavClose.addEventListener('click',function(e){ //모바일 메뉴 닫기
    e.preventDefault();
    mHeaderBg.style.height = 0;
    mLnbHide();
    header.classList.remove('open');
})

fabTopBtn.addEventListener('click',function(e){ //플로팅버튼-맨 위로 가기
    e.preventDefault();
    window.scrollTo({
        top:0, //상단 0으로 스크롤 올리기
        behavior: "smooth", //부드럽게 올리기
    });
});

top_bnr_c.addEventListener('click',function(e){ //띠배너 닫기
    e.preventDefault();
    top_bnr_c.parentNode.style.display = 'none';
})

for (let i=0; i<gnb.length; i++){//메인+서브메뉴 gnb.length => gnb의 갯수 / i가 gnb의 갯수보다 작으면 1씩 더해가며 반복
    const subMenu = gnb[i].querySelector('.gnb_2depth'); // 해당하는 인덱스 번호의 gnb 자식 중 2depth를 정의
    const gnbA = gnb[i].querySelector('a'); // 해당하는 ~ gnb 자식 중 a를 정의
    gnb[i].addEventListener('mouseover',function(){ // 해당하는 ~ gnb에 마우스오버 시,
        header.classList.add('open');
        if(gnbA) gnbA.classList.add('active'); // a에 클래스 주기
        if(subMenu) subMenu.style.display = 'flex'; //2depth 디스플레이 플렉스 전환 => 거짓일 경우 실행x 넘어감
    });
    gnb[i].addEventListener('mouseout',function(){
        header.classList.remove('open');
        if(gnbA) gnbA.classList.remove('active');
        if(subMenu) subMenu.style.display = 'none';
    });
}

header.addEventListener('mouseover',function(){//헤더 마우스오버
    header.classList.add('on');
});
header.addEventListener('mouseout',function(){
    if(window.scrollY > 5 || header.classList.contains('open')){
    } else {
        header.classList.remove('on');
    }
});

window.addEventListener('scroll',function(){ //헤더 스크롤
    if (window.scrollY > 5 || header.classList.contains('open')) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
});