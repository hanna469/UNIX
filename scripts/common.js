const top_bnr_c = document.querySelector('.top_bnr .close'); //띠배너 닫기버튼
const gnb = document.querySelectorAll('#gnb >li'); //메인메뉴
const header = document.querySelector('header'); //헤더 스크롤

top_bnr_c.addEventListener('click',function(){ //띠배너 닫기
    top_bnr_c.parentNode.style.display = 'none';
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