const top_bnr_c = document.querySelector('.top_bnr .close'); //띠배너 닫기버튼
const gnb = document.querySelectorAll('nav .gnb > li'); //메인메뉴
const header = document.querySelector('header'); //헤더 스크롤
const fabTopBtn = document.querySelector('.fab_btn .top_btn'); //플로팅버튼-top
const mHeaderBg = document.querySelector('#m_header_bg'); // 모바일용 헤더 배경
const mNav = mHeaderBg.querySelector('#m_nav'); // 모바일용 헤더
const gnbUl = document.querySelector('nav .gnb'); 
const gnbClone = gnbUl.cloneNode(true); //gnbUl 복제
const mNavOpen = document.querySelector('#user_menu .m_nav_open'); //모바일 메뉴 열기
const mNavClose = mHeaderBg.querySelector('.close');

mNavOpen.addEventListener('click', function(){
    header.classList.add('on');
    mHeaderBg.style.display = 'block';
})
mNavClose.addEventListener('click',function(){
    mHeaderBg.style.display = 'none';
})

mNav.appendChild(gnbClone); //mNav 자식으로 gnbClone 삽입

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
        if(gnbA) gnbA.classList.add('active'); // a에 클래스 주기
        if(subMenu) subMenu.style.display = 'flex'; //2depth 디스플레이 플렉스 전환 => 거짓일 경우 실행x 넘어감
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